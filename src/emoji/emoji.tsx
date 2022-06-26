import React, { useMemo } from 'react';
import { EmojiItem } from '@rtwc/cmp';
import emojiList from './emojiList';

export interface EmojiAttr {
  onSelect: (params: EmojiItem) => void;
  showBorder?: boolean;
}

const EmojiView: React.FC<EmojiAttr> = ({ showBorder = true, ...props }) => {
  const select = (e: any, d: EmojiItem) => {
    // 阻止冒泡
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    // 发起事件
    props.onSelect(d);
  };

  const renders = useMemo(() => {
    return (
      <React.Fragment>
        {emojiList.map((d, i) => (
          <div
            key={`${d.code}${i}`}
            aria-label={d.label}
            title={d.label}
            className="select-none transition-all hover:scale-125 active:scale-125 cursor-pointer text-center"
            onClick={(e) => select(e, d)}
          >
            {d.show}
          </div>
        ))}
      </React.Fragment>
    );
  }, []);

  return (
    <React.Fragment>
      <div className={`grid grid-cols-8 gap-2 p-2 text-2xl ${showBorder ? 'border-t' : ''}`}>
        {renders}
      </div>
    </React.Fragment>
  );
};
export default EmojiView;
