import React from 'react';
import { Line, ProgressProps } from 'rc-progress';
import classNames from 'classnames';

export interface MaskLoadingAttr extends ProgressProps {
  msg: string;
  visible: boolean;
  fixed?: boolean;
  bgCls?: string;
  textCls?: string;
  bgColor?: string;
  warpCls?: string;
  zIndex?: number;
}

const MaskLoading: React.FC<MaskLoadingAttr> = ({
  msg,
  visible,
  fixed,
  bgCls = 'bg-black bg-opacity-70',
  textCls = 'font-bold text-white',
  zIndex = 50,
  warpCls = '',
  ...props
}) => {
  if (visible) {
    return (
      <div
        className={`transition-all left-0 top-0 h-full w-full overflow-hidden flex justify-center items-center ${classNames(
          fixed ? 'fixed' : 'absolute',
          warpCls,
        )}`}
        style={{ zIndex: zIndex } as any}
      >
        <div
          className={classNames(
            'absolute left-0 top-0 z-0 w-full h-full pointer-events-none',
            bgCls,
          )}
        />
        <div className={classNames('relative w-full px-2 mb-4')}>
          <h5 className={classNames('text-xl mb-1 text-center truncate', textCls)}>{msg}</h5>
          <Line
            strokeColor={props?.strokeColor || '#87d068'}
            percent={props?.percent}
            trailColor={props?.trailColor || '#108ee9'}
            strokeWidth={props?.strokeWidth || 2}
            trailWidth={props?.trailWidth || 2}
          />
        </div>
      </div>
    );
  }
  return null;
};
export default MaskLoading;
