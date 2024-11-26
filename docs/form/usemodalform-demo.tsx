import { Button } from 'antd';
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
                fieldType: 'input',
              },
            ],
            onCancel: () => {
              console.log('onCancel');
            },
            onOk: (e, ctx) => {
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
