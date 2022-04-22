import React from 'react';
import { StatusResult } from '@rtwc/cmp';

const index: React.FC = () => {
  return (
    <div className={'m-2'}>
      <StatusResult
        uri={'https://static.rycsg.com/lottie/cat_smile.json'}
        title={'内容跑起来'}
      />
    </div>
  );
};

export default index;
