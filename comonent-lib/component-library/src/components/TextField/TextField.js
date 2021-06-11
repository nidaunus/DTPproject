import React from 'react';
import { TextField as DTPTextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const TextField = ({ label, variant, id, required, defaultValue, ...props }) => {
   return (
      <div>
         <DTPTextField
            id={id}
            label={label}
            variant={variant}
            required={required}
            defaultValue={defaultValue}
            {...props} />
      </div>
   )
};

TextField.propTypes = {

   label: PropTypes.string,
   id: PropTypes.string,
   variant: PropTypes.string,
   required: PropTypes.bool,
   defaultValue: PropTypes.string
};

TextField.defaultProps = {
   label: 'primary',
   id: 'DTPTextField',
   variant: 'outlined',
   required: false,
   defaultValue: ''
};
export default TextField;

