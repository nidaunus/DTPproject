import React, { Suspense } from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
const Table = React.lazy(() => import('./Table'))

export default {
  title: 'Table',
  decorators: [withKnobs]
}

const useStyles = {
  table: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  tableChild: {
    '& > *': {
      borderBottom: 'unset'
    },
  },
};

const data = {
  columns: [
    {
      id: 1,
      label: 'Dessert (100g serving)',
      minWidth: 170,
    },
    {
      id: 2,
      label: 'calories',
      minWidth: 100,
      align: 'right',
    },
    {
      id: 3,
      label: 'fat',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 4,
      label: 'carbs',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 5,
      label: 'protein',
      minWidth: 170,
      align: 'right',
    }
  ],
  rows: [
    {
      name: 'Frozen yoghurt',
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4,
      price: 3
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4,
      price: 4,
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16,
      carbs: 24,
      protein: 6,
      price: 3,
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3,
      carbs: 67,
      protein: 4,
      price: 2,
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16,
      carbs: 49,
      protein: 3,
      price: 2,
    },
  ],
  childRows: [
    {
      date: '2020-01-05',
      customerId: '11091700',
      amount: 3
    },
    {
      date: '2020-01-02',
      customerId: 'Anonymous',
      amount: 1
    },
  ],
  childColoumns: [
    {
      id: 1,
      label: 'Date',
    },
    {
      id: 2,
      label: 'Customer',
    },
    {
      id: 3,
      label: 'Amount',
    },
  ],
}

export const PrimaryTable = () =>
  <Suspense fallback='Yükleniyor'>
    <Table data={object('data', data)}
      classes={object('style', useStyles)} />
  </Suspense>

export const ButtonTable = () =>
  <Suspense fallback='Yükleniyor'>
    <Table data={object('data', data)} button={text('button', 'childButton')}
      classes={object('style', useStyles)} />
  </Suspense>