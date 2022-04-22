---
title: 正常按钮
group:
  path: /btn
  title: 按钮
nav:
  title: 组件库
  path: /cmp
---

## Demo

<code src="./demo.tsx" />


### 参数

| 参数名       | 类型         | 默认        | 备注                                                                              |
| ----------- |------------| ----------- |---------------------------------------------------------------------------------|
| scheme      | string?    | filled       | filled , border , flat, gradient , relief , round                               |
| size      | string?    | default       | 'large' , 'small' , 'default' , 'less'                                          |
| icon      | ReactNode? |        | icon node                                                                       |
| iconCls      | string?    |        | icon类名                                                                          |
| type      | string?    | info       | 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'white', 'dark' |
| disable      | boolean?   |   false     | 是否禁用                                                                            |
| block      | boolean?   |   false     | 块级                                                                              |
| info      | string     |        | 按钮信息                                                                            |
| className      | string?    |        | 按钮类                                                                             |
| style      | string?    |        | 按钮样式                                                                            |
| htmlType      | string?    |        | 'submit' , 'reset' , 'button'                                                   |
| loading      | boolean?   |   false     | 是否加载中                                                                           |
| ripple      | boolean?   |   false     | 点击涟漪特效                                                                          |


### 事件
| 事件名      | 描述 |
| ----------- | ----------- |
| onClick      | e: React.MouseEvent       |
