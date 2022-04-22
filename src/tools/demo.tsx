import React from 'react';
import {downloadFile, sendClipboard} from "@rtwc/cmp"

export default () => {

  const testDownload = () => {
    let b = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    downloadFile(b, "hello world.txt")
  }

  return (
    <div>
      <button onClick={() => sendClipboard("赵日天")}>方法调用写入剪切板</button>

      <button onClick={testDownload}>测试文件下载</button>

    </div>
  );
};
