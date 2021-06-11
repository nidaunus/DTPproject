import Table from './Table';
import React from 'react';
import { withKnobs, array, object } from '@storybook/addon-knobs';
import { makeStyles } from '@material-ui/core/styles';

export default {
  title: 'Table',
  decorators: [withKnobs]
}

const useStyles = makeStyles({
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
});

const columns = [
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
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 4,
    label: 'carbs',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 5,
    label: 'protein',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
];

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
export const PrimaryTable = () => <Table rows={rows} columns={columns} style={useStyles} />
