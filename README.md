# @sakit-sa/react-master-detail

> Simple, easy master-detail for React

[![NPM](https://img.shields.io/npm/v/@sakit-sa/react-master-detail.svg)](https://www.npmjs.com/package/@sakit-sa/react-master-detail) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Live Playground
For examples of the react-master-detail in action, go to https://abdilar.github.io/react-master-detail.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:6006/

## Getting Started
### Install

```sh
npm install @sakit-sa/react-master-detail
```

### Usage
```jsx
import React from 'react';

import MasterDetail from '@sakit-sa/react-master-detail';
import '@sakit-sa/react-master-detail/dist/index.css';

const App = () => (
  <MasterDetail>
    <div>
      <div>Master header</div>
      <div>Master body</div>
    </div>
    <div>
      <div>Detail header</div>
      <div>Detail body</div>
    </div>
  </MasterDetail>
);
```

### Props
Name | Type | Default | Description
-----|------|-------|-----
**adjustable**|`boolean`|`true`|Boolean value to control whether can adjust the master and the detail sections.
**canClose**|`boolean`|`true`|Boolean value to control whether can close detail section.
**centerAlign**|`boolean`|`true`|Boolean value to control whether can aligns master section in the center.
**className**|`object`|`{}`|Apply a className to the control
**defaultMasterWidth**|`number`|`600px`|Set initial width of master section.
**detailMinWidth**|`string` `number` `object`|`550px`|Set minimum width of detail section.
**direction**|`string`|`ltr`|Is the master-detail direction (right-to-left or left-to-right)
**id**|`string`|`react-master-detail-[randomNumber]`|The unique identifier for the component.
**masterMinWidth**|`string` `number` `object`|`400px`|Set minimum width of master section.
**masterWidth**|`string` `number` `object`|`600px`|Set width of master section.
**noDetail**|`boolean`|`false`|Boolean value to control whether to show details section (Affects showDetail property).
**renderAdjustIcon**|`element`|`<i className="icon-align" />`|Custom adjust icon
**renderCloseIcon**|`element`|`<i className="icon-close" />`|Custom close icon
**showDetail**|`boolean`|`true`|Boolean value to control whether show detail section.
**onClose**|`function`|`-`|Trigger when detail section closed.

### className Token
`align` `alignIcon` `detail` `detailBody` `detailHeader` `detailWrapper` `masterBody` `masterHeader` `masterWrapper` `wrapper`

See examples for more information (go to https://abdilar.github.io/react-master-detail/?path=/story/theme--class-name)

### masterWidth Token
Type | Description | example
-----|-------------|--------
number | Based on px | `masterWidth={500}`
string | Either based on percentage or based on pixel | `masterWidth="30%"` `masterWidth="500px"`
object | For responsive mode | `masterWidth = { xxdt: "40%", xdt: "400px", dt: 300, mdt: 200 };`

### masterMinWidth Token
Type | Description | example
-----|-------------|--------
number | Based on px | `masterMinWidth={500}`
string | Either based on percentage or based on pixel | `masterMinWidth="30%"` `masterWidth="500px"`
object | For responsive mode | `masterMinWidth = { xxdt: "40%", xdt: "400px", dt: 300, mdt: 200 };`

### detailMinWidth Token
Type | Description | example
-----|-------------|--------
number | Based on px | `detailMinWidth={500}`
string | Either based on percentage or based on pixel | `detailMinWidth="30%"` `masterWidth="500px"`
object | For responsive mode | `detailMinWidth = { xxdt: "40%", xdt: "400px", dt: 300, mdt: 200 };`

#### Responsive Mode Tips
```aidl
xxdt: Affects device widths of 1920px and larger.
xdt: Affects device widths of 1600px and larger.
dt: Affects device widths of 1200px and larger.
mdt: Affects device widths of 960px and larger.
```
### License

MIT Licensed. © Copyright [Saeed Abdilar](https://github.com/Abdilar)
