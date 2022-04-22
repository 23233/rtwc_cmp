---
title: h5版header头
group:
  path: /header
  title: header
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

```ts
interface HeaderAttr {
  title: string;
  onBack?: (e: React.MouseEvent) => void;
  onTitle?: (e: React.MouseEvent) => void;
  onShare?: () => void;
  truncate?: boolean;
  children?: ReactNode;
  showShare?: boolean;
  fixed?: boolean;
}
```
