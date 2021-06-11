import React, { Suspense } from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
const ToolTip = React.lazy(() => import('./ToolTip'))
import { Delete, SaveAlt, CloudDownload, List } from '@material-ui/icons'

export default {
    title: 'Tooltip',
    decorators: [withKnobs]
}

export const DeleteToolTip = () =>
    <Suspense fallback='yükleniyor'>
        <ToolTip icon={<Delete />} title={text('title', 'Delete')} />
    </Suspense>

export const SaveToolTip = () =>
    <Suspense fallback='yükleniyor'>
        <ToolTip icon={<SaveAlt />} title={text('title', 'Save')} />
    </Suspense>

export const DownloadToolTip = () =>
    <Suspense fallback='yükleniyor'>
        <ToolTip icon={<CloudDownload />} title={text('title', 'Download')} />
    </Suspense>

export const ListToolTip = () =>
    <Suspense fallback='yükleniyor'>
        <ToolTip icon={<List />} title={text('title', 'List')} />
    </Suspense>
