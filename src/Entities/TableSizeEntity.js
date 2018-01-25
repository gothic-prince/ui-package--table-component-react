import TableSizeEntityInterface from './TableSizeEntityInterface'
export default class TableSizeEntity extends TableSizeEntityInterface {
  constructor (size, className) {
    super()
    this._size = (size)
    this._className = (className)
  }
  getSize () {
    return this._size
  }
  getClassName () {
    return this._className
  }
}
