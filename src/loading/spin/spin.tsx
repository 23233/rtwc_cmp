import React, { useMemo } from 'react';
import './spin.scss';
import classNames from 'classnames';

export interface SpinAttr {
  loading?: boolean;
  size?: 'large' | 'normal' | 'small' | 'less';
  customSize?: number;
  customColor?: string;
  customBgColor?: string;
  zIndex?: number;
  className?: string;
  block?: boolean;
  children?: React.ReactNode;

  [key: string]: any;
}

const Spin: React.FC<SpinAttr> = ({
  loading,
  size = 'normal',
  zIndex = 50,
  customSize,
  customColor,
  customBgColor,
  block = false,
  children,
  className = '',
}) => {
  const customStyle = useMemo(() => {
    let s = {} as any;
    if (customSize) {
      s['--spin-size'] = customSize + 'px';
    }
    if (customColor) {
      s['--spin-color'] = customColor;
    }
    if (customBgColor) {
      s['--spin-bg-color'] = customBgColor;
    }
    return s;
  }, [customSize, customColor, customBgColor]);

  const renderSpin = useMemo(() => {
    if (loading) {
      return (
        <div
          className="absolute left-0 top-0 h-full w-full flex justify-center items-center"
          style={{ zIndex: zIndex }}
        >
          <div className={'spinContent'} />
        </div>
      );
    }
  }, [loading]);

  return (
    <React.Fragment>
      <div
        className={classNames(
          loading ? `spinWarp ${size}` : '',
          block ? 'block' : 'inline-block',
          className,
        )}
        style={customStyle}
      >
        {children}
        {renderSpin}
      </div>
    </React.Fragment>
  );
};
export default Spin;
