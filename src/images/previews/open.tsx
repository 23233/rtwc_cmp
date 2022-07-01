import React from 'react';
import Viewer from 'viewerjs';
import 'viewerjs/src/css/viewer.css';

// 通过dom打开
export function fastImgPreviewOpen(src: string): any {
  const img = document.createElement('img');
  img.src = src;
  const viewer = new Viewer(img, {
    zIndex: 9999,
    hide(event: CustomEvent) {
      img.remove();
    },
  });
  viewer.show();
}

export function fastImgsPreviewOpen(imgs: Array<string>, now?: string) {
  const nowIndex = now ? imgs.findIndex((b) => b === now) || 0 : 0;
  const warp = document.createElement('ul');
  imgs.map((d) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = d;
    li.appendChild(img);
    warp.appendChild(li);
  });

  const viewer = new Viewer(warp, {
    zIndex: 9999,
    initialViewIndex: nowIndex,
    hide(event: CustomEvent) {
      warp.remove();
    },
  });
  viewer.show();
}
