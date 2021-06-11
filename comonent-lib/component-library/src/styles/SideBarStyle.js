import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from '@material-ui/core/styles'

export const SidebarLink = styled(Link)({
  display: 'flex',
  color: '#fff',
  background:'#212529',
  justifyContent: 'spaceBetween',
  alignItems: 'center',
  padding: 10,
  listStyle: 'none',
  height: '30px',
  textDecoration: 'none',
  fontSize: '14px',
  lineHeight: '3.2em',
  fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

  '&:hover': {
    textDecoration: 'underline',
    borderLeft: 'double #edeff3',
  }

});

export const DropdownLink = styled(Link)({
  background: '#2f353a',
  height: '50px',
  paddingLeft: '2rem',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#f5f5f5',
  fontSize: '14px',
  fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',

  ' &:hover': {
    textDecoration: 'underline',
  }
});
