---
title: 图片加载
group:
  path: /img
  title: 图片
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

```ts
interface LoadingImg {
  src: string;
  origin?: string; // 原图
  alt?: string;
  className?: string;
  style?: CSSProperties;
  useBk?: boolean; // 使用背景模式
  bgSize?:string
  bgPosition?: string; // 背景定位
  loadingMinSize?: number;
  loadingClassName?: string;
  onClick?: (e: React.MouseEvent) => void;
}
```
