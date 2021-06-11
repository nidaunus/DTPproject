import React from 'react';
import {
  Paper, Table as DTPTable, TableBody, TableCell, TableRow, TableHead,
  TableContainer, IconButton, Collapse, Box, TablePagination, Button 
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { withStyles } from '@material-ui/core/styles';

class Table extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.state = {
      page: 0,
      rowsPerPage: 10,
    }
  }
  handleChangePage(event, newPage) {
    this.setState = {
      page: newPage
    }
  };

  handleChangeRowsPerPage(event) {
    this.setState = {
      page: 0,
      rowsPerPage: event.target.value,
      open: false
    }
  };
  render() {
    const { data, classes, button } = this.props;
    console.log(data)
    return (
      <Paper className={classes.table}>
        <TableContainer>
          <DTPTable stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                {data.columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.rows.map((row) => (
                <ChildTable key={data.rows.name} row={row} classes={classes} columns={data.childColoumns}
                  childRows={data.childRows} button={button} />
              ))}
            </TableBody>
          </DTPTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.rows.length}
          rowsPerPage={this.state.rowsPerPage}
          page={this.state.page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    )
  }
}
export default Table;

function ChildTable(props) {

  const { row, classes, columns, childRows, button } = props
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row"> {row.name}</TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {button ?
                <Button variant='contained'> {button} </Button>
                :
                <DTPTable size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {childRows.map((childRow) => (
                      <TableRow key={childRow.date}>
                        <TableCell component="th" scope="row">
                          {childRow.date}
                        </TableCell>
                        <TableCell>{childRow.customerId}</TableCell>
                        <TableCell >{childRow.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </DTPTable>
              }

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}