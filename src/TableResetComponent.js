import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'
class TableResetComponent extends React.Component {
  render(){
    const {
      onReset = () => {},
      loaded = true
    } = this.props
    return (
      <span className='table-reset-component'>
        <button className={
            getClassNames([
              'table-reset-component__button',
              (loaded === false ? 'table-reset-component_loading' : null)
            ])
          }
          onClick={() => onReset()} />
      </span>
    )
  }
}
TableResetComponent.propTypes = {
  onReset: PropTypes.func,
  loaded: PropTypes.bool
}
export default TableResetComponent
