import React, { ReactNode, useMemo } from 'react';

export interface HeaderAttr {
  title: string;
  onBack?: (e: React.MouseEvent) => void;
  onTitle?: (e: React.MouseEvent) => void;
  onShare?: () => void;
  truncate?: boolean;
  children?: ReactNode;
  showShare?: boolean;
  fixed?: boolean;
}

const Header: React.FC<HeaderAttr> = ({
  children,
  showShare = true,
  truncate = false,
  ...props
}) => {
  const backFunc = (e: React.MouseEvent) => {
    if (props?.onBack) {
      props.onBack(e);
    }
  };

  const shareFunc = () => {
    console.log('点击了分享');
    if (props?.onShare) {
      props.onShare();
    }
  };

  const contentRender = useMemo(() => {
    return (
      <React.Fragment>
        <div
          className="w-12 flex-shrink-0 text-center text-xs text-blue-400 btn_scale flex items-center cursor-pointer"
          onClick={(e) => backFunc(e)}
        >
          <img
            src="data:image/svg+xml;base64,77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiI+DQogIDxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik0zMC45IDQzTDM0IDM5LjkgMTguMSAyNCAzNCA4LjEgMzAuOSA1IDEyIDI0eiIgLz4NCjwvc3ZnPg=="
            alt="back"
            style={{ width: 20, height: 20 }}
          />
          <p>返回</p>
        </div>
        <div
          className={`text-center text-lg ${truncate ? 'truncate' : ''} flex-grow`}
          onClick={(e) => props?.onTitle && props.onTitle(e)}
        >
          {props.title}
        </div>
        <div className="flex items-center z-10 flex-shrink-0">
          {children ||
            (showShare ? (
              <div
                className={'btn_scale w-10 text-base text-center text-blue-400 '}
                onClick={shareFunc}
              >
                分享
              </div>
            ) : (
              <div className={'w-10'} />
            ))}
        </div>
      </React.Fragment>
    );
  }, [props]);

  return (
    <React.Fragment>
      <div
        className={`items-center header-warp-height ${
          props?.fixed ? 'fixed top-0 left-0 w-full z-normal bg-transparent' : 'relative'
        }`}
      >
        <React.Fragment>
          {props?.fixed ? (
            <div className={'flex justify-center items-center p-2 shadow-md relative bg-white'}>
              {contentRender}
            </div>
          ) : (
            <div className="flex justify-center items-center p-2 ">{contentRender}</div>
          )}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
};
export default Header;
