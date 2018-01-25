import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames'

class TablePagination extends React.Component {
  getOptionsByDefault () {
    return this.props.arrayLimitRows || [10, 25, 50, 100]
  }
  render() {
    const {
      onPrev = () => {},
      onNext = () => {},
      onFirst = () => {},
      onLast = () => {},
      onChangeMaxItems = () => {},
      onChangeCurrentPage = () => {},
      page = 1,
      limitRows = null,
      hasPrev = true,
      hasNext = true
    } = this.props
    return (
      <div className='table-pagination'>
        <div className='table-pagination__switchPage'>
          <select
            className="table-pagination__select_limit_rows"
            value={limitRows}
            onChange={(e) => onChangeMaxItems(Number(e.target.value))}>
            {this.getOptionsByDefault().map((value, key) => <option key={key}>{value}</option>)}
          </select>
        </div>
        <div className='table-pagination__nav'>
          <button
            disabled={!hasPrev}
            className='table-pagination__button table-pagination__first'
            onClick={(e) => onFirst(e)} />
          <button
            disabled={!hasPrev}
            className='table-pagination__button table-pagination__prev'
            onClick={(e) => onPrev(e)} />
          <input
            onChange={(e) => onChangeCurrentPage(Number(e.target.value))}
            children={page}
            className={classnames([
              'table-pagination__button',
              'table-pagination__set-page',
              'inline-block'
            ])}
          />
          <button
            disabled={!hasNext}
            className='table-pagination__button table-pagination__next'
            onClick={(e) => onNext(e)} />
          <button
            disabled={!hasNext}
            className='table-pagination__button table-pagination__last'
            onClick={(e) => onLast(e)} />
        </div>
      </div>
    )
  }
}
TablePagination.propTypes = {
  hasPrev: PropTypes.bool,
  hasNext: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onFirst: PropTypes.func,
  onLast: PropTypes.func,
  onChangeMaxItems: PropTypes.func,
  onChangeCurrentPage: PropTypes.func,
  page: PropTypes.number,
  limitRows: PropTypes.number,
  arrayLimitRows: PropTypes.array,
}
export default TablePagination
