import React, { useState } from 'react';
import { fastImgsPreviewOpen, fastImgPreviewOpen } from '@rtwc/cmp';
// 切记一定要加样式
import 'viewerjs/dist/viewer.min.css';

const index: React.FC = () => {
  const imgHref =
    'https://static.rycsg.com/cat_tr/t2915193789/2021-12-02/2565116b5d2d80366935d95c51690261_t.jpg';

  const imgList = Array(10).fill(imgHref);

  return (
    <div className={'m-2'}>
      <h2>单张加载</h2>
      <img src={imgHref} alt={'单张'} onClick={() => fastImgPreviewOpen(imgHref)} width={100} />

      <h2>多张加载</h2>
      <div className={'flex flex-wrap gap-2'}>
        {imgList.map((d, i) => {
          return (
            <img
              key={i}
              src={d}
              alt={'多张' + i}
              onClick={() => fastImgsPreviewOpen(imgList, d)}
              width={100}
            />
          );
        })}
      </div>
    </div>
  );
};

export default index;
