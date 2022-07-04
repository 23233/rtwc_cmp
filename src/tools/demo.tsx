import React from 'react';
import { downloadFile } from '@rtwc/cmp';

export default () => {
  const testDownload = () => {
    let b = new Blob(['Hello, world!'], { type: 'text/plain;charset=utf-8' });
    downloadFile(b, 'hello world.txt');
  };

  return (
    <div>
      <button onClick={testDownload}>测试文件下载</button>
    </div>
  );
};
