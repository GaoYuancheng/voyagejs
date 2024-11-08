import React from 'react';
import { Button } from 'antd';
import { sleep } from 'radash';
import { ModalConfirm } from 'voyagejs';

export const ModalConfirmDemo = () => {
  return (
    <ModalConfirm
      content="确定吗"
      onOk={async () => {
        await sleep(1000);
        console.log('ok');
      }}
    >
      <Button>弹框确认</Button>
    </ModalConfirm>
  );
};
