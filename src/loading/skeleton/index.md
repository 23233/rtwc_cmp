---
title: 骨架加载
group:
  path: /loading
  title: 加载状态
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

```ts
interface SkeletonAttr {
  loading?: boolean;
  type?: 'page' | 'avatar' | 'article';
  line?: number;
  showPd?: boolean;
  className?: string;
  [key: string]: any;
}
```
