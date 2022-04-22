import React, { CSSProperties, useMemo, useRef } from 'react';
import { Spin } from '@rtwc/cmp';
import { useRipple } from '@rtwc/comm';

export interface BtnAttr {
  scheme?: 'filled' | 'border' | 'flat' | 'gradient' | 'relief' | 'round';
  size?: 'large' | 'small' | 'default' | 'less';
  icon?: React.ReactNode;
  iconCls?: string;
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
  size = 'default',
  htmlType = 'button',
  icon,
  iconCls,
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
    let cls = '';
    let sizeCls;
    const blockCls = block ? 'w-full' : '';
    switch (size) {
      case 'large':
        sizeCls = 'py-4 px-5 text-base';
        break;
      case 'small':
        sizeCls = 'py-2 px-3 text-sm';
        break;
      case 'less':
        sizeCls = 'py-1 px-2 text-sm';
        break;
      default:
        sizeCls = 'py-3 px-4 text-sm';
        break;
    }
    // eslint-disable-next-line default-case
    switch (scheme) {
      case 'filled':
        cls = 'focus:outline-none text-white rounded-md hover:shadow-lg ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'bg-blue-500 hover:bg-blue-600 ';
            break;
          case 'secondary':
            cls += 'bg-gray-500 hover:bg-gray-600 ';
            break;
          case 'success':
            cls += 'bg-green-500 hover:bg-green-600 ';
            break;
          case 'danger':
            cls += 'bg-red-500 hover:bg-red-600 ';
            break;
          case 'warning':
            cls += 'bg-yellow-500 hover:bg-yellow-600 ';
            break;
          case 'white':
            cls =
              'focus:outline-none text-black rounded-md hover:shadow-lg bg-white hover:bg-blue-400';
            break;
          case 'info':
            cls += 'bg-purple-500 hover:bg-purple-600 ';
            break;
          case 'dark':
            cls += 'bg-gray-700 hover:bg-gray-900 ';
            break;
        }
        break;
      case 'border':
        cls = 'focus:outline-none  rounded-md border ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'text-blue-600 border-blue-600 hover:bg-blue-50 ';
            break;
          case 'secondary':
            cls += 'text-gray-600 border-gray-600 hover:bg-gray-50 ';
            break;
          case 'success':
            cls += 'text-green-600 border-green-600 hover:bg-green-50 ';
            break;
          case 'danger':
            cls += 'text-red-600 border-red-600 hover:bg-red-50 ';
            break;
          case 'warning':
            cls += 'text-yellow-600 border-yellow-600 hover:bg-yellow-50 ';
            break;
          case 'white':
            cls += 'text-black border-white hover:bg-blue-400';
            break;
          case 'info':
            cls += 'text-purple-600 border-purple-600 hover:bg-purple-50 ';
            break;
          case 'dark':
            cls += 'text-gray-800 border-gray-800 hover:bg-gray-200';
            break;
        }

        break;
      case 'flat':
        cls = 'focus:outline-none  rounded-md ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'text-blue-600 hover:bg-blue-100';
            break;
          case 'secondary':
            cls += 'text-gray-600 hover:bg-gray-100';
            break;
          case 'success':
            cls += 'text-green-600 hover:bg-green-100';
            break;
          case 'danger':
            cls += 'text-red-600 hover:bg-red-100';
            break;
          case 'warning':
            cls += 'text-yellow-600 hover:bg-yellow-50 ';
            break;
          case 'info':
            cls += 'text-purple-600 hover:bg-purple-100 ';
            break;
          case 'dark':
            cls += 'text-gray-900 hover:bg-gray-200';
            break;
        }
        break;
      case 'gradient':
        cls =
          'focus:outline-none text-white rounded-md transform bg-gradient-to-r hover:scale-110 ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'from-blue-400 to-blue-600 ';
            break;
          case 'secondary':
            cls += 'from-gray-400 to-gray-600';
            break;
          case 'success':
            cls += 'from-green-400 to-green-600';
            break;
          case 'danger':
            cls += 'from-red-400 to-red-600';
            break;
          case 'warning':
            cls += 'from-yellow-400 to-yellow-600';
            break;
          case 'info':
            cls += 'from-purple-400 to-purple-600';
            break;
          case 'white':
            cls = cls.replaceAll('text-white', 'text-black');
            break;
          case 'dark':
            cls += 'from-gray-600 to-gray-900';
            break;
        }

        break;
      case 'relief':
        cls = 'focus:outline-none text-white  border-b-4 rounded-md ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'border-blue-600 bg-blue-500 hover:bg-blue-400';
            break;
          case 'secondary':
            cls += 'border-gray-600 bg-gray-500 hover:bg-gray-400';
            break;
          case 'success':
            cls += 'border-green-600 bg-green-500 hover:bg-green-400';
            break;
          case 'danger':
            cls += 'border-red-600 bg-red-500 hover:bg-red-400';
            break;
          case 'warning':
            cls += 'border-yellow-600 bg-yellow-500 hover:bg-yellow-400';
            break;
          case 'info':
            cls += 'border-purple-600 bg-purple-500 hover:bg-purple-400';
            break;
          case 'white':
            cls = cls.replaceAll('text-white', 'text-black');
            break;
          case 'dark':
            cls += 'border-gray-800 bg-gray-700 hover:bg-gray-600';
            break;
        }
        break;
      case 'round':
        cls = 'focus:outline-none  rounded-full border ';
        // eslint-disable-next-line default-case
        switch (type) {
          case 'primary':
            cls += 'text-blue-600 border-blue-600 hover:bg-blue-50 ';
            break;
          case 'secondary':
            cls += 'text-gray-600 border-gray-600 hover:bg-gray-50 ';
            break;
          case 'success':
            cls += 'text-green-600 border-green-600 hover:bg-green-50 ';
            break;
          case 'danger':
            cls += 'text-red-600 border-red-600 hover:bg-red-50 ';
            break;
          case 'warning':
            cls += 'text-yellow-600 border-yellow-600 hover:bg-yellow-50 ';
            break;
          case 'info':
            cls += 'text-gray-400 border-gray-400 hover:bg-gray-100 ';
            break;
          case 'dark':
            cls += 'text-gray-800 border-gray-800 hover:bg-gray-200';
            break;
        }
        break;
    }

    const BtnView = (
      <button
        type={htmlType}
        aria-label={info}
        className={`transition-all ${cls} ${sizeCls} ${blockCls} ${
          icon ? 'flex items-center' : ''
        } ${className || ''}`}
        disabled={disable}
        style={props.style}
        onClick={clickEvent}
        ref={btnRef}
        title={info}
      >
        {icon}
        {info}
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
