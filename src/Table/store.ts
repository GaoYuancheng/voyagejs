import type { TableProps as ATableProps, TablePaginationConfig } from 'antd';
import type { TableRowSelection } from 'antd/lib/table/interface';
import { computed, makeObservable, observable, runInAction, toJS } from 'mobx';
import { clone, isObject } from 'radash';
import type { SorterParams, TableProps } from './interface';

const INITIAL_FILTERS = {} as const;

export enum TableSearchStatus {
  /** 查询 */
  SEARCH = 'search',
  /** 重置 */
  RESET = 'reset',
}

export class TableStore<RecordType extends object = any> implements TableProps<RecordType> {
  loading = false;

  rowKey = 'id';

  dataSource: RecordType[] = [];

  pagination: ATableProps<RecordType>['pagination'];

  initialPagination: ATableProps<RecordType>['pagination'];

  rowSelection?: TableProps<RecordType>['rowSelection'];

  selectedRows: RecordType[] = [];

  sorter?: SorterParams<RecordType>;

  initialFilters: TableProps<RecordType>['initialFilters'] = INITIAL_FILTERS;

  filter = {} as any;

  /** antd的filter中，setSelectedKeys使用是React.Keys[]格式的值，数组转回期望的值类型 */
  filterConvert: Record<string, (val?: any) => any> = {};

  params = {};

  initialParams?: TableProps<RecordType>['initialParams'];

  onChange?: TableProps<RecordType>['onChange'];

  remoteDataSource?: TableProps<RecordType>['remoteDataSource'];

  searchStatus?: TableSearchStatus = TableSearchStatus.SEARCH;

  forceUpdate: () => void;

  constructor(props: TableProps<RecordType>, forceUpdate: () => void) {
    this.updateProps(props);

    this.forceUpdate = forceUpdate;
    this.makeObservable();
    this.setInitialPagination(props);
  }

  updateProps(props: TableProps<RecordType>) {
    Object.keys(props).forEach((key) => {
      // @ts-ignore
      this[key] = props[key];

      if (key === 'initialParams') {
        this.params = props[key];
      }

      if (key === 'initialFilters') {
        this.filter = props[key] || {};
        this.initialFilters = clone(props[key]);
      }
    });
  }

  makeObservable() {
    makeObservable(this, {
      loading: observable.ref,
      dataSource: observable.deep,
      pagination: observable,
      sorter: observable,
      filter: observable,
      selectedRows: observable,
      selectedRowKeys: computed,
      rowSelection: observable,
      noPagination: computed,
      params: observable,
      tableProps: computed,
    });
  }

  get noPagination() {
    return this.pagination === false;
  }

  private setInitialPagination(props: TableProps<RecordType>) {
    const { pagination = {} } = props;
    if (pagination === false) return;
    const { defaultCurrent, defaultPageSize } = pagination as TablePaginationConfig;
    this.pagination = this.initialPagination = {
      current: defaultCurrent ?? 1,
      pageSize: defaultPageSize ?? 10,
      showQuickJumper: true,
      showSizeChanger: true,
      showTotal(total) {
        return `共 ${total} 条`;
      },
    };
  }

  refresh(params?: any): Promise<void> | undefined {
    if (!this.remoteDataSource) return;

    const requestParams = { ...toJS(this.filter), sorter: toJS(this.sorter), ...this.params, ...params };

    this.loading = true;

    const { current, pageSize } = this.pagination as TablePaginationConfig;

    return this.remoteDataSource(this.noPagination ? requestParams : { current, pageSize, ...requestParams })
      .then((res) => {
        runInAction(() => {
          this.dataSource = res.data;
          if (!this.noPagination) {
            this.pagination = { ...this.pagination, total: res.total };
          }
          this.loading = false;
        });
      })
      .catch(() => {
        this.loading = false;
      })
      .finally(() => {
        this.searchStatus = TableSearchStatus.SEARCH;
      });
  }

  reset(params?: any) {
    this.searchStatus = TableSearchStatus.RESET;
    if (!this.noPagination) {
      this.setInitialPagination({ pagination: this.initialPagination });
    }
    this.filter = this.initialFilters || {};
    this.sorter = undefined;
    this.params = params || this.initialParams;
    this.selectedRows = [];
    this.refresh();
  }

  onTableChange: TableProps<RecordType>['onChange'] = (pagination, filters, sorter, ...args) => {
    this.pagination = { ...this.initialPagination, ...pagination };

    this.filter = Object.keys(filters).reduce((memo, cur) => {
      if (this.filterConvert[cur]) {
        memo[cur] = this.filterConvert[cur](filters[cur]);
      } else {
        memo[cur] = filters[cur];
      }
      return memo;
    }, {} as any);

    this.sorter = sorter;
    this.onChange?.(pagination, filters, sorter, ...args);
    this.refresh();
  };

  onRowSelectionChange: TableRowSelection<RecordType>['onChange'] = (
    currentSelectedRowKeys,
    currentSelectedRows,
    info,
  ) => {
    this.selectedRows = currentSelectedRows;
    if (!isObject(this.rowSelection)) return;
    const { onChange } = this.rowSelection as TableRowSelection<RecordType>;
    onChange?.(currentSelectedRowKeys, currentSelectedRows, info);
  };

  set selectedRowKeys(keys) {
    this.selectedRows = keys.map((key) => ({ [this.rowKey]: key } as unknown as RecordType));
  }

  get selectedRowKeys() {
    return this.selectedRows.map((rowData) => rowData[this.rowKey as keyof RecordType]);
  }

  get tableProps(): ATableProps<RecordType> {
    return {
      dataSource: toJS(this.dataSource),
      pagination: toJS(this.pagination),
      loading: this.loading,
      rowSelection: this.rowSelection
        ? ({
            ...(this.rowSelection === true ? {} : this.rowSelection),
            selectedRowKeys: this.selectedRowKeys,
            onChange: this.onRowSelectionChange,
          } as TableRowSelection<RecordType>)
        : undefined,
    };
  }
}
