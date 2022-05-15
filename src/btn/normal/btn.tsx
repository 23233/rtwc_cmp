import React, { CSSProperties, useMemo, useRef } from 'react';
import { Spin } from '@rtwc/cmp';
import { useRipple } from '@rtwc/comm';
import cs from 'classnames';
import './btn.less';

export interface BtnAttr {
  scheme?: 'filled' | 'border' | 'flat' | 'gradient' | 'relief' | 'round';
  size?: 'large' | 'big' | 'small' | 'little' | 'less'; // 从大向小
  icon?: React.ReactNode;
  onlyIcon?: boolean;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'white' | 'dark';
  disable?: boolean;
  block?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  info: string;
  className?: string;
  style?: CSSProperties;
  htmlType?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  ripple?: boolean;
}

const Btn: React.FC<BtnAttr> = ({
  scheme = 'filled',
  size = 'small',
  htmlType = 'button',
  icon,
  onlyIcon = false,
  type = 'info',
  className,
  block = false,
  ripple = false,
  info,
  disable,
  loading = false,
  onClick,
  ...props
}) => {
  const btnRef = useRef<any>();
  useRipple(ripple ? btnRef : undefined);
  const clickEvent = (e: any) => {
    onClick && onClick(e);
  };

  const renders = useMemo(() => {
    const BtnView = (
      <button
        type={htmlType}
        aria-label={info}
        className={cs(
          {
            cmp_btn: true,
            icon: !!icon,
            block: !!block,
            [size]: true,
            [scheme]: true,
            [type]: true,
            disable: !!disable,
          },
          className,
        )}
        disabled={disable}
        style={props.style}
        onClick={clickEvent}
        ref={btnRef}
        title={info}
      >
        {icon}
        {!onlyIcon && info}
      </button>
    );

    if (loading) {
      return (
        <Spin loading={loading} minHeight={20}>
          {BtnView}
        </Spin>
      );
    }

    return BtnView;
  }, [props]);

  return <React.Fragment>{renders}</React.Fragment>;
};
export default Btn;
