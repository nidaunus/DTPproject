import React from 'react'
import Button from './Button';
import { withKnobs, text, color} from '@storybook/addon-knobs';
import DeleteIcon from '@material-ui/icons/Delete'


export default {
  title: 'Button',
 /*  component: Button, */
  decorators: [withKnobs]
}

/* const Template = (args) => <Button {...args} />;

export const Delete = Template.bind({});
Delete.args = {
  color: color('color', 'secondary'),
  text: text('text', 'Delete'),
  variant: text('variant', 'contained'),
  startIcon: text('startIcon', <DeleteIcon />),
}; */
export const Primary = () => <Button text={text('text', 'Primary')} color={color('color', 'primary')}
  startIcon='' variant={text('variant', 'contained')} />
export const Secondary = () => <Button text={text('text', 'seondary')} color={color('color', '')}
  startIcon='' variant={text('variant', 'outlined')}></Button>

