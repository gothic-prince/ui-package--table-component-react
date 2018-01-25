import PropTypes from 'prop-types';
import React from 'react'
import TableSizeEntity from './Entities/TableSizeEntity'
import classnames from 'classnames'

class TableSizeComponent extends React.Component {
  /**
   *
   * @return {TableSizeEntityInterface[]}
   */
  getSizes(){
    return [
      new TableSizeEntity(3, 'table-size-component__switcher_biggest'),
      new TableSizeEntity(2, 'table-size-component__switcher_middle'),
      new TableSizeEntity(1, 'table-size-component__switcher_littlest')
    ]
  }
  getActiveClass(neededSize){
    const {size = 3} = this.props
    return (neededSize === size ? 'table-size-component__switcher_active' : '')
  }
  onChange(size) {
    const {
      onChange = (value) => {}
    } = this.props
    onChange(size)
  }
  render(){
    return (
      <span className='table-size-component'>
        {
          this.getSizes().map((tableSize, index) => {
            const size = tableSize.getSize()
            return (
              <button
                key={index}
                onClick={() => this.onChange(size)}
                className={
                  classnames([
                    'table-size-component__switcher',
                    tableSize.getClassName(),
                    this.getActiveClass(size)
                  ])
                } />
            )
          })
        }
      </span>
    )
  }
}
TableSizeComponent.propTypes = {
  onChange: PropTypes.func,
  size: PropTypes.number
}
export default TableSizeComponent
