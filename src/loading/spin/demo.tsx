import React from 'react';
import {Spin} from '@rtwc/cmp';

const index: React.FC = () => {

  return (
    <div className={'m-2'}>
      <h3 className={'mb-2'}>可以设置size</h3>

      <div>
        <Spin loading size={"large"}>
          <h3>large尺寸</h3>
        </Spin>
        <Spin loading size={"normal"}>
          <h3>默认尺寸</h3>
        </Spin>
        <Spin loading size={"small"}>
          <h3>小尺寸</h3>
        </Spin>
        <Spin loading size={"less"}>
          <h3>最小尺寸</h3>
        </Spin>
      </div>


      <div className={'my-2'}>自定义高度 建议最小高度为30</div>
      <Spin loading minHeight={30}>
        <h3 className={'mb-0'}>这是高度的内容</h3>
      </Spin>
    </div>
  );
};

export default index;
