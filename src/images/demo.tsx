import React from 'react';
import { Lmg, PreviewImgView, fastImgPreviewOpen } from '@rtwc/cmp';
import { fastImgsPreviewOpen } from './previews/open';

const index: React.FC = () => {
  const img =
    'https://static.rycsg.com/cat_tr/t2915193789/2021-12-02/2565116b5d2d80366935d95c51690261_t.jpg';
  const origin =
    'https://static.rycsg.com/cat_tr/t2915193789/2021-12-02/2565116b5d2d80366935d95c51690261.jpg';

  const onPreviewCLick = (src: string) => {
    fastImgPreviewOpen(src);
  };

  const onManyPreviewClick = () => {
    const imgList = [img, origin];
    const nowIndex = 1;
    fastImgsPreviewOpen(imgList, imgList[nowIndex]);
  };

  return (
    <div className={'m-2'}>
      <div>普通图片加载</div>

      <Lmg src={img} alt={'图片'} />

      <div className={'my-2'}>背景图片模式</div>

      <div className={'h-24'}>
        <Lmg src={img} useBk />
      </div>

      <div className={'my-2'}>背景图片设置size为contain</div>

      <div className={'h-24'}>
        <Lmg src={img} useBk bgSize={'contain'} />
      </div>

      <div className={'my-2'}>点击可放大预览</div>

      <div>
        <PreviewImgView src={img} origin={origin} />
      </div>

      <div className={'my-2'}>
        代码层调用放大预览
        <div>
          <button onClick={() => onPreviewCLick(img)}>点我预览图片</button>
        </div>
        <div>
          <button onClick={onManyPreviewClick}>点我预览多张图</button>
        </div>
      </div>
    </div>
  );
};

export default index;
