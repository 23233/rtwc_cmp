---
title: 模型弹出加载层
group:
  path: /loading
  title: 加载状态
nav:
  title: 组件库
  path: /cmp
---

### 遮罩的进度条

## Demo

<code src="./demo.tsx" />


### 参数

```ts
export interface ProgressProps {
  id?: string;
  strokeWidth?: number;
  trailWidth?: number;
  className?: string;
  percent?: number | number[];
  strokeColor?: StrokeColorType;
  trailColor?: string;
  strokeLinecap?: StrokeLinecapType;
  prefixCls?: string;
  style?: React.CSSProperties;
  gapDegree?: number;
  gapPosition?: GapPositionType;
  transition?: string;
  onClick?: React.MouseEventHandler;
}
interface MaskLoadingAttr extends ProgressProps {
  msg: string;
  visible: boolean;
  fixed?: boolean;
  bgCls?: string;
  textCls?: string;
  zIndex?: number
}
```
