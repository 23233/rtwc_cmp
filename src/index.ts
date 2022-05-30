import './base.less';

export { sendClipboard, downloadFile } from './tools/file';

export type { LmgProps } from './images/loadingImg';
export { default as Lmg } from './images/loadingImg';

export { default as PreviewImgView } from './images/previewImgView';
export { fastImgPreviewOpen, fastImgsPreviewOpen } from './images/previews/open';

export type { CropImgAttr } from './images/crop/crop';
export { default as DropRoundImg } from './images/crop/crop';

export type { MaskLoadingAttr } from './loading/mask/fullMaskLoading';
export { default as MaskLoading } from './loading/mask/fullMaskLoading';

export type { SkeletonAttr } from './loading/skeleton/skeleton';
export { default as Skeleton } from './loading/skeleton/skeleton';

export type { SpinAttr } from './loading/spin/spin';
export { default as Spin } from './loading/spin/spin';

export type { HorizontalTabAttr, TabItem } from './tabs/horizontally';
export { default as HorizontallyTabs } from './tabs/horizontally';

export type { HeaderAttr } from './header/index';
export { default as Header } from './header/index';

export type { SimpleTitleAttr } from './font/title';
export { default as SimpleTitle } from './font/title';

export type { EmojiAttr } from './emoji/emoji';
export type { EmojiItem } from './emoji/emojiList';
export { default as EmojiView } from './emoji/emoji';

export type { ToggleAttr, ToggleItem } from './data/toggle/index';
export { default as Toggle, defaultToggleItems } from './data/toggle/index';

export type { BtnAttr } from './btn/normal/btn';
export { default as Btn } from './btn/normal/btn';

export type { FabBtnAttr } from './btn/float/floatAddBtn';
export { default as FloatBtn } from './btn/float/floatAddBtn';

export type { StatusCmpParams } from './animation/lottie/statusResult';
export { default as StatusResult } from './animation/lottie/statusResult';

export type { IconAttr } from './icon/index';
export { default as Icons, ChangeIconUrl, AddIconUrl } from './icon/index';

// 距离相关
export { getDistanceOfMetre, getDistance, parseToKm } from './tools/distance';

export { default as Cwal } from './swal/cwal';
export { default as Toast } from './swal/toast';
