import React from 'react';
import {
  Paper, Table as DTPTable , TableBody, TableCell, TableRow, TableHead,
  TableContainer, IconButton, Collapse, Box, Typography, TablePagination
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


class Table extends React.Component{

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

  handleChangeRowsPerPage(event){
    this.setState = {
      page: 0,
      rowsPerPage: event.target.value,
      open: false
    }
  };
  render() {
    const columns = this.props.columns;
    const rows = this.props.rows;
    const classes = this.props.style;
    return (
      <Paper >
        <TableContainer>
          <DTPTable stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                {this.props.columns.map((column) => (
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
              {rows.map((row) => (
                <ChildTable key={rows.name} row={row} classes={classes} />
              ))}
            </TableBody>
          </DTPTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
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

  const { row, classes } = props
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
              <Typography variant="h6" gutterBottom component="div">
                History
            </Typography>
              <DTPTable size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell >Amount</TableCell>
                    <TableCell >Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell >{historyRow.amount}</TableCell>
                      <TableCell >
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </DTPTable>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}