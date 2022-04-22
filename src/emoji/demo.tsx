import React, { useState } from 'react';
import { EmojiView, EmojiItem } from '@rtwc/cmp';

const index: React.FC = () => {
  const [select, setSelect] = useState<EmojiItem>();

  const onSelect = (d: EmojiItem) => {
    setSelect(d);
  };

  return (
    <div className={'m-2'}>
      <EmojiView onSelect={onSelect} />

      <div>当前选择:{select?.code}</div>
    </div>
  );
};

export default index;
