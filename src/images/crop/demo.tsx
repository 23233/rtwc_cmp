import React, { useState } from 'react';
import { DropRoundImg } from '@rtwc/cmp';

const index: React.FC = () => {
  const [cropFile, setCropFile] = useState<File>();

  const cropSuccess = (f: File) => {
    console.log('裁剪成功', f);
    setCropFile(f);
  };

  return (
    <div className={'m-2'}>
      {cropFile ? (
        <img src={window.URL.createObjectURL(cropFile)} className={'rounded-full'} alt={'测试'} />
      ) : (
        <DropRoundImg
          src={
            'https://static.rycsg.com/cat_tr/t2915193789/2021-12-02/2565116b5d2d80366935d95c51690261_t.jpg'
          }
          onSuccess={cropSuccess}
        />
      )}
    </div>
  );
};

export default index;
