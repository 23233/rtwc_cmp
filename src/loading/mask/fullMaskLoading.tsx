import React from 'react';

import {Line, ProgressProps} from 'rc-progress';

export interface MaskLoadingAttr extends ProgressProps {
  msg: string;
  visible: boolean;
  fixed?: boolean;
  bgCls?: string;
  textCls?: string;
  zIndex?: number
}

const MaskLoading: React.FC<MaskLoadingAttr> = ({
                                                  msg,
                                                  visible,
                                                  fixed,
                                                  bgCls = 'bg-white bg-opacity-70',
                                                  textCls = 'font-bold text-gray-900',
                                                  zIndex = 50,
                                                  ...props
                                                }) => {
  if (visible) {
    return (
      <div
        className={`transition-all left-0 top-0 h-full w-full bg-mask bg-mask-small flex justify-center items-center ${
          fixed ? 'fixed' : 'absolute'
        }`}
        style={{zIndex: zIndex}}
      >
        <div className={`px-4 pr-6 flex-grow pb-16 relative ${bgCls}`}>
          <h5 className={`text-xl mb-2 text-center ${textCls}`}>{msg}</h5>
          <Line strokeColor={props?.strokeColor || "#87d068"} percent={props?.percent}
                trailColor={props?.trailColor || "#108ee9"}/>
        </div>
      </div>
    );
  }
  return null;
};
export default MaskLoading;
