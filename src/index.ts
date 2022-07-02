// import "./base.css"

export { sendClipboard, downloadFile } from './tools/file';

export type { CropImgAttr } from './images/crop/crop';
export { default as DropRoundImg } from './images/crop/crop';

export type { StatusCmpParams } from './animation/lottie/statusResult';
export { default as StatusResult } from './animation/lottie/statusResult';

// 距离相关
export { getDistanceOfMetre, getDistance, parseToKm } from './tools/distance';

export { default as Cwal } from './swal/cwal';
export { default as Toast } from './swal/toast';
