import React, { CSSProperties, useRef } from 'react';
import classnames from 'classnames';
import { useRipple } from '@rtwc/comm';
import './index.less';

export interface IconAttr {
  type: string;
  title?: string;
  prefix?: string;
  style?: CSSProperties;
  size?: number;
  className?: string;
  ripple?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const loadIconUrl = (url: string): void => {
  const script = document.getElementById('icon-load') as HTMLScriptElement;
  if (script) {
    script.src = url;
    return;
  }
  load(url, 'icon-load');
};

const load = (url: string, id: string): void => {
  const scriptElem = document.createElement('script');
  scriptElem.id = id;
  scriptElem.src = url;
  document.body.appendChild(scriptElem);
};

loadIconUrl('https://at.alicdn.com/t/font_2506983_bxxb13sody8.js');

export const ChangeIconUrl = (newUrl: string): void => {
  loadIconUrl(newUrl);
};

export const AddIconUrl = (newUrl: string): void => {
  load(newUrl, 'icon-add-' + new Date().getTime().toString());
};

const Icon: React.FC<IconAttr> = ({
  type,
  title,
  prefix = 'icon',
  style,
  size = 14,
  className,
  onClick,
  ripple = false,
}) => {
  const refs = useRef<any>();
  useRipple(ripple ? refs : undefined);

  return (
    <span style={{ fontSize: size }} ref={refs} onClick={onClick} title={title}>
      <svg className={classnames('custom-icon', className)} aria-hidden="true" style={style}>
        <use xlinkHref={`#${prefix}-${type}`} />
      </svg>
    </span>
  );
};
export default Icon;
