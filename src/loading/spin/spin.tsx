import React from 'react';
import './spin.scss';

export interface SpinAttr {
  loading?: boolean;
  size?: 'large' | "normal" | 'small' | 'less'
  customSize?: number
  zIndex?: number

  [key: string]: any;
}

const Spin: React.FC<SpinAttr> = ({loading, size = 'normal', zIndex = 50, customSize, ...props}) => (
  <React.Fragment>
    <div
      className={loading ? `spinWarp ${size}` : 'inline-block'}

    >
      {props.children}
      {loading ? (
        <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center" style={{zIndex: zIndex}}>
          <div className={'spinContent'}/>
        </div>
      ) : null}
    </div>
  </React.Fragment>
);
export default Spin;
