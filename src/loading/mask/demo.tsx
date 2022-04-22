import React, {useEffect, useState} from 'react';
import {MaskLoading} from '@rtwc/cmp';

const index: React.FC = () => {
  const [process, setProcess] = useState<number>(1);

  useEffect(() => {
    const b = setInterval(() => {
      setProcess(process + 1);
    }, 100);
    return () => {
      clearInterval(b);
    };
  }, [process]);

  return (
    <div className={'m-2'}>
      <div className={"relative h-24"}>
        <MaskLoading visible msg={'内容'} percent={process}/>
      </div>

      <div>
        可相对 可浮动
      </div>




    </div>
  );
};

export default index;
