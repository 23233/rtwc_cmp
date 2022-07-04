import { saveAs } from 'file-saver';
// 文件下载
export const downloadFile = (url: string | Blob, filename: string): void => {
  saveAs(url, filename);
};
