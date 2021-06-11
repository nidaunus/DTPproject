import AppBar from './AppBar';
import React from 'react'
import { withKnobs, object, text, } from '@storybook/addon-knobs';

export default {
  title: 'AppBar',
  decorators: [withKnobs]
}

export const PrimaryAppBar = () => {
  const logout = () => {

  }
  const menuClick = () => { }

  return (
    <AppBar information={text('information', 'VODAFONE TÜRKİYE')} logout={object('logout', logout)} menuClick={object('menuClick', menuClick)} />
  )
}


