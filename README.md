# react-ui-tabview

> A tabview component for react, based on the superflows design language

[![NPM](https://img.shields.io/npm/v/react-ui-tabview.svg)](https://www.npmjs.com/package/react-ui-tabview) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img src="https://user-images.githubusercontent.com/108924653/180928627-9c43b8b3-17f4-4de1-bdbe-94e18a709948.png" width="300">

## Demo

[![Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-kgnbua?file=App.tsx)

## Note

This package is under active development. Expect frequent updates.

## Install

```bash
npm install --save react-ui-tabview
```
Install the dependencies

## Dependencies

```bash
npm install --save bootstrap
npm install --save react-bootstrap
npm install --save react-bootstrap-icons
```

## Usage

```jsx

import React from 'react'

import { TabView } from 'react-ui-tabview'
import 'bootstrap/dist/css/bootstrap.min.css';
import Themes from 'react-ui-themes-superflows';

const App = () => {

  const tabsData = [
    {
      caption: 'My Opd',
      icon: "BagPlus",
      component: <div>Hello 1</div>
    },
    {
      caption: 'Connect',
      icon: "ArrowUpRightCircle",
      component: <div>Hello 2</div>
    },
    {
      caption: 'Profile',
      icon: "Person",
      component: <div>Hello 3</div>
    },
  ];

  const navigationData = {
    menuIcon: "List",
    title: "Mission Spine"
  };

  return (
    <TabView 
      tabsData={tabsData} 
      navigationData={navigationData}
      theme={Themes.getTheme("Default")}
      setSelectedTab={0}
      />
  )
}

export default App

```

## License

MIT © [superflows-dev](https://github.com/superflows-dev)
