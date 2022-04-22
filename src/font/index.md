---
title: 简单标题
group:
  path: /font
  title: 文字
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />

## 参数
```ts
interface SimpleTitleAttr {
  text: string | React.ReactNode;
  desc?: string;
  descOnClick?: () => void;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}
```
