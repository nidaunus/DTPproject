
import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextField from './TextField';

export default {
    title: 'TextField',
    component: TextField,
    decorators: [withKnobs],
}

export const TextBox = () =>
    <TextField
        label={text('label', 'Outlined')}
        variant={text('variant', 'outlined')}
        id={text('id', 'DTPTextField')}
        required={boolean('required', false)} 
        defaultValue={text('defaultValue','')}/>

export const Required = () =>
    <TextField
        required={boolean('required', true)}
        id={text('id', 'outlined-required')}
        label={text('label', 'Required')}
        defaultValue={text('defaultValue','Hello World')}
        variant={text('variant', 'outlined')}
    />




