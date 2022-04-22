import React, { useState } from 'react';
import { Btn } from '@rtwc/cmp';

const index = (): any => {
  const [loading, setLoading] = useState<boolean>(true);
  const typeList = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'white',
    'dark',
  ];
  const schemeList = [
    'filled',
    'border',
    'flat',
    'gradient',
    'relief',
    'round',
  ];

  return (
    <div>
      <div className={'mx-1'}>
        <Btn info={'默认按钮'} />
        {schemeList.map((b) => (
          <div key={b}>
            <p className={'text-xl mb-1'}>类型:{b}</p>
            <div>
              {typeList.map((t) => (
                <Btn
                  key={`${b}${t}`}
                  // @ts-ignore
                  type={t}
                  // @ts-ignore
                  scheme={b}
                  info={t}
                  className={'mr-1 mb-1'}
                />
              ))}
            </div>
          </div>
        ))}

        <div className={'mt-2'}>
          <Btn info={'点击特效'} ripple />

          <Btn info={'块级按钮'} block className={'mt-2'} />
          <Btn info={'禁用模式'} disable className={'mt-2'} />
          <div className={'flex'}>
            <Btn info={'加载中'} loading={loading} className={'mt-2'} />
            <Btn
              info={'切换加载状态'}
              className={'mt-2'}
              onClick={() => setLoading(!loading)}
            />
          </div>
        </div>

        <div className={'mt-2'}>
          <Btn info={'最小尺寸的按钮'} size={'less'} />

          <Btn info={'第二小尺寸'} className={'mt-2'} size={'small'} />

          <Btn info={'正常尺寸'} className={'mt-2'} size={'default'} />

          <Btn info={'大尺寸'} className={'mt-2'} size={'large'} />
        </div>
      </div>
    </div>
  );
};

export default index;
