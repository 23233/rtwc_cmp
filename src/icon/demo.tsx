import React from 'react';
import { Icons, Btn, ChangeIconUrl, AddIconUrl } from '@rtwc/cmp';

const index: React.FC = () => (
  <div className={'m-2'}>
    <div>
      <Icons type={'plus'} title={'默认plus'} />
    </div>

    <div className={'my-2'}>
      <Btn
        info={'变更地址'}
        size={'less'}
        onClick={() => ChangeIconUrl('//at.alicdn.com/t/font_2334280_umb57juchz.js')}
      />
    </div>

    <div className={'my-2'}>
      <Btn
        info={'新增地址'}
        size={'less'}
        onClick={() => AddIconUrl('//at.alicdn.com/t/font_2334280_umb57juchz.js')}
      />
    </div>

    <div>
      新增后会出现新的图标
      <div>
        <Icons type={'moreandroid'} title={'新增的新图标'} />
      </div>
    </div>
  </div>
);

export default index;