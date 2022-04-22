---
title: 横向滚动
group:
  path: /tabs
  title: 标签页
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

```ts
interface HorizontalTabAttr {
  current?: tabItem;
  defaultCurrent?: tabItem;
  items: Array<tabItem>;
  extra?: React.ReactNode;
  onReplaceClick?: (item: tabItem) => void; // 当前选中点击
  onChange?: (item: tabItem) => void;
}
```
