/**
 * title: 弹框表单
 * description: 1.使用 `useModalForm` 创建弹框表单，将表单代码以事件方式处理；<br> 2.`onOk`返回`Promise`，按钮自动loading
 */
import { Button } from 'antd';
import { sleep } from 'radash';
import React from 'react';
import { DefaultPluginsType, useModalForm } from 'voyagejs';

const ModalForm = () => {
  const [modalForm, { open, close }] = useModalForm<any, DefaultPluginsType>();

  return (
    <div>
      {modalForm}

      <Button
        onClick={() =>
          open({
            title: '弹框表单',
            width: 700,
            formProps: { labelCol: { span: 4 } },
            modalProps: { destroyOnClose: true },
            items: [
              {
                name: 'name',
                label: '姓名',
                rules: [{ required: true, message: '请输入姓名' }],
                fieldType: 'input',
              },
            ],
            onCancel: () => {
              console.log('onCancel');
            },
            onOk: async (e, ctx) => {
              await sleep(2000);
              console.log('onOk', e, ctx);
              close();
            },
          })
        }
      >
        打开弹框表单
      </Button>
    </div>
  );
};

export default ModalForm;
