import React from 'react';
import { Cwal, Toast } from '@rtwc/cmp';

const index: React.FC = () => {
  return (
    <div className={'m-2'}>
      <div>
        <button onClick={() => Cwal.fire({ title: '弹窗测试' })}>弹出弹窗</button>
      </div>
      <button onClick={() => Toast.fire({ title: 'toast测试' })}>弹出toast</button>
    </div>
  );
};

export default index;
