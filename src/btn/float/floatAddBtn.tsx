import React, { useRef } from 'react';
import { RippleView } from '@rtwc/comm';
import PlusSvg from './plus_math.svg';

export interface FabBtnAttr {
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  title?: string;
  className?: string;
}

// 浮动按钮 用于新增
const FloatBtn: React.FC<FabBtnAttr> = ({
  onClick,
  className = 'bg-red-600 text-white',
  icon,
  title = '新增',
}) => {
  return (
    <React.Fragment>
      <div className="fixed z-100 right-2 bottom-10">
        <RippleView>
          <button
            className={`w-12 h-12 rounded-full shadow  ${className || ''}`}
            onClick={(e) => onClick && onClick(e)}
            title={title}
          >
            {icon ? (
              icon
            ) : (
              <img
                src={PlusSvg}
                alt="add"
                style={{ width: 24, height: 24 }}
                className={'mx-auto'}
              />
            )}
          </button>
        </RippleView>
      </div>
    </React.Fragment>
  );
};
export default FloatBtn;
