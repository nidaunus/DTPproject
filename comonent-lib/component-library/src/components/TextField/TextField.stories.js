
import React, { Suspense } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
const TextField = React.lazy(() => import('./TextField'));

export default {
    title: 'TextField',
    component: TextField,
    decorators: [withKnobs],
}

export const TextBox = () =>
    <Suspense fallback='yükleniyor'>
        <TextField
            label={text('label', 'Outlined')}
            variant={text('variant', 'outlined')}
            id={text('id', 'DTPTextField')}
            required={boolean('required', false)}
            defaultValue={text('defaultValue', '')}
        />
    </Suspense>

export const Required = () =>
    <Suspense fallback='yükleniyor'>
        <TextField
            required={boolean('required', true)}
            id={text('id', 'outlined-required')}
            label={text('label', 'Required')}
            defaultValue={text('defaultValue', 'Hello World')}
            variant={text('variant', 'outlined')}
        />
    </Suspense>




