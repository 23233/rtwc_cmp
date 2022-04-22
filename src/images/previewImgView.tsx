import React from 'react';
import { Lmg, fastImgPreviewOpen, LmgProps } from '@rtwc/cmp';

interface p extends LmgProps {}

// 可点击预览的img
const PreviewImgView: React.FC<p> = ({ ...props }) => {
  const imgClick = (e: any) => {
    fastImgPreviewOpen(props?.origin || props?.src);
    props.onClick && props.onClick(e);
  };

  return (
    <React.Fragment>
      <Lmg {...props} onClick={imgClick} />
    </React.Fragment>
  );
};
export default PreviewImgView;
