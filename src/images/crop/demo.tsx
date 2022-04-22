import React, { useState } from 'react';
import { DropRoundImg, Lmg } from '@rtwc/cmp';

const index: React.FC = () => {
  const [cropFile, setCropFile] = useState<File>();

  const cropSuccess = (f: File) => {
    console.log('裁剪成功', f);
    setCropFile(f);
  };

  return (
    <div className={'m-2'}>
      {cropFile ? (
        <Lmg
          src={window.URL.createObjectURL(cropFile)}
          className={'rounded-full'}
        />
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
