# 更新日志

### 1.3.0

`2020-05-28`

**Bug Fixes**

- mode: 修复动态切换 mode 属性出现的问题。

**Features**

- toolbar: 新增 preview 工具栏用来开启和关闭预览。
- image-upload: 新增拖放图片上传。
- props: 新增 placeholder autofocus 属性。
- event: 新增 fullscreen-change 事件。
- hotkey: 新增 save 快捷键 CTRL + S。

### 1.2.13

`2020-05-11`

**Features**

- props: mode 属性新增 `edit` 可选值。
- preview: 新增图片预览功能。

**Improvement**

- highlight code: 移除未引用对应代码块语言包时的报错日志。

### 1.2.12

`2020-05-06`

**Bug Fixes**

- xss: 修复 svg 相关标签的属性被过滤的问题。

**Features**

- props: 新增 include-level 属性用来配置生成目录导航时所要包含的标题等级。

:::warning 注意
扩展主题的 api 有细微调整，有使用到的请注意。[查看详情](/vue-markdown-editor/theme/github)
:::

### 1.2.11

`2020-05-01`

**Improvement**

- license: 新增 MIT 开源协议
- types：新增 d.ts 文件

### 1.2.10

`2020-04-27`

**Bug Fixes**

- anchor：修复标题为中文时锚点失效的问题。

**Improvement**

- anchor：优化锚点生成规则，保证在标题内容相同时锚点的唯一性。

### 1.2.9

`2020-04-27`

**Improvement**

- editor：ul、ol 列表换行时自动插入前缀。

### 1.2.8

`2020-04-25`

**Features**

- hotkeys：新增部分常用功能快捷键。

### 1.2.7

`2020-04-24`

**Features**

- plugin：新增 [代码行号](/vue-markdown-editor/plugins/line-number) 插件。

### 1.2.6

`2020-04-23`

**Improvement**

- 内部代码优化。

### 1.2.5

`2020-04-22`

**Features**

- toc：支持 [\[toc]] 插入目录。
- toolbar：新增[目录导航](/vue-markdown-editor/senior/toc)功能。

**Improvement**

- tooltip：增加显示隐藏过渡效果。

### 1.2.4

`2020-04-21`

**Features**

- props：新增 mode 属性。可选值为 `editable`（编辑模式）、`preview`（预览模式）

**Improvement**

- 同步滚动：同步滚动添加平滑效果，增强用户体验

### 1.2.3

`2020-04-20`

**Bug Fixes**

- markdown-line-number-plugin：解决 markdown-it 插件渲染的问题

### 1.2.2

`2020-04-20`

**Features**

- sync-scroll：新增同步滚动

### 1.2.1

`2020-04-19`

**Improvement**

- textarea：undo redo 优化

### 1.2.0

`2020-04-18`

**Bug Fixes**

- insertText: 修复 document.execCommand('insertText') 在 Firefox 上不兼容的问题。

**Features**

- image: 新增 image 可自定义图片大小
- plugin：新增 [katex](/vue-markdown-editor/plugins/katex) 插件
- plugin：新增 [todo-list](/vue-markdown-editor/plugins/todo-list) 插件

### 1.1.0

`2020-04-18`

**Features**

- plugin: 新增 [emoji](/vue-markdown-editor/plugins/emoji) 插件
- props：新增 disabled-menus 属性
- toolbar：新增 [menus](/vue-markdown-editor/senior/toolbar) 属性

**Improvement**

- tooltip：新增 tooltip 优化交互体验

### 1.0.13

`2020-04-15`

**Bug Fixes**

- theme: 解决使用 cdn 引入时主题失效的问题

**Improvement**

- xss：过滤规则优化
