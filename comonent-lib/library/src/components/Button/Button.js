
import React from 'react';
import { Button as DTPButton } from '@material-ui/core';
import PropTypes from 'prop-types';

const Button = ({ text, color, startIcon, variant, ...props }) => {
   return (
      <DTPButton
         variant={variant}
         color={color}
         startIcon={startIcon}
         {...props}
      >
         {text}
      </DTPButton>
   )
};

Button.propTypes = {

   text: PropTypes.string,
   color: PropTypes.string,
   onClick: PropTypes.func,
   variant: PropTypes.string
};

Button.defaultProps = {
   color: 'primary',
   text: 'DTPButton',
   onClick: undefined,
   variant:'contained'
};

export default Button;