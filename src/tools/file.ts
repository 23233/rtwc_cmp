import {saveAs} from 'file-saver';
// 文件下载
export const downloadFile = (url: string | Blob, filename: string): void => {
  saveAs(url, filename);
};

// 写入剪切板
export const sendClipboard = (text: string, cb?: () => void): void => {
  if (!text) return;
  const textField = document.createElement('textarea');
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand('copy');
  textField.remove();
  cb && cb();
};
