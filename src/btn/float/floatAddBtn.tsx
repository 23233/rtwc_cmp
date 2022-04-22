import React, {useRef} from 'react';
import {RippleView} from '@rtwc/comm';
import {ReactComponent as PlusAddSvg} from './plus_math.svg';
import Icon from '@ant-design/icons';

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
            className={`w-12 h-12  rounded-full shadow  ${className || ''}`}
            onClick={(e) => onClick && onClick(e)}
            title={title}
          >
            {
              icon ? icon : <Icon component={PlusAddSvg} style={{fontSize: 28}}/>
            }
          </button>
        </RippleView>


      </div>
    </React.Fragment>
  );
};
export default FloatBtn;
