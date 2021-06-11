import React from 'react'
import { Tooltip as DTPTooltip, IconButton } from '@material-ui/core'
const Delete = React.lazy(() => import('@material-ui/icons/Delete'))
import PropTypes from 'prop-types';

const ToolTip = ({ icon, title }) => {

  return (
    <div>
      <DTPTooltip title={title}>
        <IconButton aria-label={title}>
          {icon}
        </IconButton>
      </DTPTooltip>
    </div>
  )
}

ToolTip.propTypes = {

  icon: PropTypes.symbol,
  title: PropTypes.string,
};

ToolTip.defaultProps = {
  icon: <Delete />,
  title: 'Delete',
};

export default ToolTip;