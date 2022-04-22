---
title: 滑块
group:
  path: /data
  title: 输入类
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

```ts
interface ToggleItem {
  name: string;
  [key: string]: any;
}

interface ToggleAttr {
  items: Array<ToggleItem>;
  onChange?: (params: ToggleItem) => void;
  size?: 'normal' | 'big' | 'small';
  defaultSelect?: ToggleItem;
}
```
