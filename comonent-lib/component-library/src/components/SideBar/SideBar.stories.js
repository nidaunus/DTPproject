import React, { Suspense } from 'react';
import { SideBarData } from './SideBarData';
import { withKnobs, object, text, } from '@storybook/addon-knobs';
import { BrowserRouter as Router } from 'react-router-dom';
const SideBar = React.lazy(() => import('./SideBar'))

export default {
  title: 'SideBar',
  decorators: [withKnobs]
}

export const SideBarPrimary = () => {
  return (
    <Router>
      <Suspense fallback='Yükleniyor'>
        <SideBar data={SideBarData} />
      </Suspense>
    </Router>
  )
}