import React from 'react'
import Button from './Button';
import { withKnobs, text, color} from '@storybook/addon-knobs';
import DeleteIcon from '@material-ui/icons/Delete'


export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const Delete = ()=> <Button text={text('text', 'Delete')} color={color('color', 'secondary')} 
variant={text('variant', 'contained')} startIcon ={<DeleteIcon />}/>

export const Primary = () => <Button text={text('text', 'Primary')} color={color('color', 'primary')}
  startIcon='' variant={text('variant', 'contained')} />

export const Secondary = () => <Button text={text('text', 'seondary')} color={color('color', '')}
  startIcon='' variant={text('variant', 'outlined')}></Button>

