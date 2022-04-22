import React, { useCallback, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import {Area} from "react-easy-crop/types";

export interface CropImgAttr {
  src: string;
  onSuccess?: (file: File) => void;
}

function dataURLtoFile(data: string, filename: string): File {
  // 获取到base64编码
  const arr = data.split(',');
  // 将base64编码转为字符串
  const base64Str = window.atob(arr[1]);
  let n = base64Str.length;
  const u8arr = new Uint8Array(n); // 创建初始化为0的，包含length个元素的无符号整型数组
  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = base64Str.charCodeAt(n);
  }
  return new File([u8arr], filename, {
    type: 'image/jpeg',
  });
}

const DropRoundImg: React.FC<CropImgAttr> = ({ src, ...props }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>();
  const [croppedImage, setCroppedImage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const onCropComplete = useCallback((croppedArea:Area, cropPixel:Area) => {
    setCroppedAreaPixels(cropPixel);
  }, []);

  const showCroppedImage = async (): Promise<void> => {
    setLoading(true);
    try {
      const ci = await getCroppedImg(src, croppedAreaPixels!, rotation);
      setCroppedImage(ci);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (croppedImage) {
      const file = dataURLtoFile(
        croppedImage,
        `crop_cat_logo_${dayjs().format('YYYY_MM_DD_hh_mm_ss')}.jpg`,
      );
      console.log('头像裁剪file', file);
      if (props?.onSuccess) {
        props.onSuccess(file);
      }
    }
  }, [croppedImage]);

  return (
    <div className="fixed left-0 top-0 w-full h-full z-max bg-white">
      <Cropper
        image={src}
        crop={crop}
        zoom={zoom}
        aspect={1}
        classes={{ containerClassName: 'z-100' }}
        // cropSize={{ width: 128, height: 128 }}
        cropShape="round"
        showGrid={false}
        onCropChange={setCrop}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <div className={'absolute left-0 top-6 w-full z-max text-center'}>
        <h4 className="text-2xl text-white">裁剪头像</h4>
        <p className="text-base text-gray-200">拖动背景图选择头像部分</p>
      </div>

      <div className={'absolute left-0 bottom-4 w-full z-max text-center '}>
        <button
          className="bg-green-400 text-white text-lg px-16 rounded py-2 btn_scale"
          onClick={showCroppedImage}
          disabled={loading}
        >
          确定
        </button>
      </div>
    </div>
  );
};
export default DropRoundImg;
