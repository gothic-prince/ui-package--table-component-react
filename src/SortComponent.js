import PropTypes from 'prop-types';
import React from 'react'
import classnames from 'classnames'
class SortComponent extends React.Component {
  render() {
    const {
      reversed = false,
      active = false,
    } = this.props
    return (
      <span className='sort-component'>
        <span
          className={
            classnames([
              'sort-component__angle',
              reversed ? 'sort-component_reversed' : 'sort-component_no-reversed',
              active ? 'sort-component_active' : 'sort-component_no-active'
            ])
          } />
      </span>
    )
  }
}
SortComponent.propTypes = {
  reversed: PropTypes.bool,
  active: PropTypes.bool
}
export default SortComponent
