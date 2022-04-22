import React from 'react';
import Viewer from "viewerjs";
import 'viewerjs/src/css/viewer.scss';


// 通过dom打开
export function fastImgPreviewOpen(src: string): any {

  const img = document.createElement('img');
  img.src = src;
  const viewer = new Viewer(img, {
    zIndex: 9999,
    hide(event: CustomEvent) {
      img.remove();
    }
  });
  viewer.show();

}
