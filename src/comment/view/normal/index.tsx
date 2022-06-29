import React, { useMemo } from 'react';
import { fileUploadResp, ImgListAutoRender, inputLinkParams } from '@rtwc/cmp';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { Btn, Lmg, Spin } from '@rtwc/cmp';

export interface commentUserParams {
  /** 用户头像 */
  avatar: string;
  /** 用户昵称 */
  nickName: string;
  /** 用户主页跳转地址 */
  href?: string;
}

export interface commentViewBaseParams {
  /** 文字内容 与图片内容必传其一 */
  value?: string;
  /** 图片列表 与文字内容必传其一*/
  imgs?: fileUploadResp[];
  /** 外部跳转链接*/
  links?: inputLinkParams[];
  /** 喜欢数量 */
  like?: number;
  /** 更新时间 */
  update_time?: string;
  /** 内容额外node */
  contentExtra?: React.ReactNode;
  showDelete?: boolean;
  /** 当点击删除时 */
  onDelete?: () => void;
  /** 当存在时才会显示举报 */
  onReport?: () => void;
  /** 回复按钮点击事件 存在则会显示回复按钮 */
  onReply?: () => void;
  /** like点击事件 */
  onLike?: () => void;
  loading?: boolean;
}

export interface commentViewParams extends commentViewBaseParams {
  /** 用户基本信息 */
  user: commentUserParams;
  /** 用户头像类名 */
  userLogoCls?: string;
  /** 用户头像额外node */
  userLogoSlot?: React.ReactNode;
  /** 当用户头像或用户昵称被点击 */
  onUserClick?: (from: 'avatar' | 'name') => void;
  /** 用户描述下方额外node */
  userDescExtra?: React.ReactNode;
  /** 用户右侧额外node */
  userRightExtra?: React.ReactNode;

  /** 下级元素可以重复自己 */
  children?: React.ReactNode;
}

const CommentView: React.FC<commentViewParams> = ({
  value,
  imgs = [],
  links = [],
  like = 0,
  update_time,
  user = {},
  userLogoCls = 'w-10 h-10',
  showDelete = false,
  loading = false,
  onDelete,
  onReport,
  onUserClick,
  onLike,
  onReply,
  userDescExtra,
  userRightExtra,
  userLogoSlot,
  contentExtra,
  children,
}) => {
  const userNickNameRender = useMemo(() => {
    const infoRender = (
      <p
        onClick={() => onUserClick && onUserClick('name')}
        className={'text-sm text-black text-opacity-80 cursor-pointer truncate'}
        title={user?.nickName}
      >
        {user?.nickName}
      </p>
    );

    if (user?.href) {
      return (
        <a href={user?.href} title={user?.nickName}>
          {infoRender}
        </a>
      );
    }
    return infoRender;
  }, [user]);

  const onUserLogoClick = () => {
    if (user?.href) {
      window.location.href = user?.href;
      return;
    }
    onUserClick && onUserClick('avatar');
  };

  const likeMsg = useMemo(() => {
    if (like > 999) {
      return '999+';
    }
    return like;
  }, [like]);

  return (
    <div>
      <div className={''}>
        {/*渲染用户相关*/}
        <div className={'flex items-center gap-1'}>
          <div className={'flex-shrink-0 relative'}>
            <div
              className={`cursor-pointer overflow-hidden rounded-full ${classNames(userLogoCls)}`}
              title={user?.nickName}
              onClick={onUserLogoClick}
            >
              <Lmg src={user?.avatar || ''} useBk />
            </div>
            {userLogoSlot}
          </div>

          <div className={'flex-grow'}>
            {userNickNameRender}
            {userDescExtra}
          </div>
          <div className={'flex-shrink-0 flex items-center gap-1'}>
            <div
              className={'flex items-center cursor-pointer select-none'}
              title={'喜欢'}
              onClick={() => onLike && onLike()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 48 48">
                <path
                  fill="#FF3D00"
                  d="M32.635 8A10.37 10.37 0 0 0 24 12.597 10.37 10.37 0 0 0 15.365 8C9.641 8 5 12.598 5 18.269 5 28.487 21.15 33.411 24 40c2.85-6.589 19-11.428 19-21.731C43 12.598 38.359 8 32.635 8"
                />
              </svg>
              {like > 0 && <div className={'text-xs text-black text-opacity-80'}>{likeMsg}</div>}
            </div>

            {userRightExtra}
          </div>
        </div>

        {/*内容渲染*/}
        <Spin block loading={loading}>
          <div className={'flex gap-1'}>
            <div className={classNames('flex-shrink-0 ', userLogoCls)} style={{ height: 'auto' }}>
              <div className={'h-1'} />
              {showDelete && (
                <div
                  className={
                    'text-black transition-all text-opacity-30 hover:text-opacity-80 cursor-pointer select-none text-xs lg:text-sm text-center '
                  }
                  onClick={() => onDelete && onDelete()}
                >
                  删除
                </div>
              )}

              {!!onReport && (
                <div
                  className={
                    'text-black transition-all text-opacity-30 hover:text-opacity-80 cursor-pointer select-none text-xs lg:text-sm text-center '
                  }
                  onClick={() => onReport()}
                >
                  举报
                </div>
              )}
            </div>
            <div className={'flex-grow'}>
              {!!value && <p className={'text-black text-opacity-95 text-base'}>{value}</p>}
              {!!imgs?.length && (
                <div className={'mt-1'}>
                  <ImgListAutoRender imgs={imgs} />
                </div>
              )}
              {!!links?.length && (
                <div className={'mt-1 flex flex-wrap gap-1'}>
                  {links.map((d, i) => {
                    return (
                      <a
                        key={`link_${i}`}
                        href={d?.href}
                        title={d?.title}
                        className={
                          'block text-sm bg-gray-100 py-1 px-2 rounded text-black text-opacity-60 hover:text-opacity-80'
                        }
                      >
                        {d?.title}
                      </a>
                    );
                  })}
                </div>
              )}
              {/*操作栏*/}
              <div className={'flex justify-between items-center'}>
                {!!update_time && (
                  <p className={'text-sm text-black text-opacity-60'}>
                    {dayjs(update_time).format('YYYY-MM-DD HH:mm:ss')}
                  </p>
                )}
                {!!onReply && <Btn info={'回复'} size={'less'} scheme={'flat'} onClick={onReply} />}
              </div>
              {contentExtra}
            </div>
          </div>
        </Spin>
      </div>
      {!!children && (
        <div className={'flex gap-1 mt-2'}>
          <div className={classNames(userLogoCls, 'flex-shrink-0')} />
          <div className={'flex-grow'}>{children}</div>
        </div>
      )}
    </div>
  );
};
export default CommentView;
