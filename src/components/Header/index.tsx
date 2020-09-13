import React from 'react'
import './styles.scss'

interface Props {
  handleSortingPrice: (e) => void
  sortedBy?: string
}
const Header: React.FC<Props> = (props) => {
  console.log(props.sortedBy, 'aa')
  return (
    <header className="site-header">
      <div data-testid="header" className="site-header__logo" />
      <select
        data-testid="sorting-trigger"
        className="site-header__sort"
        name="sort"
        id="sort"
        onChange={(e) => props.handleSortingPrice(e)}
        value={props.sortedBy}
      >
        <option data-testid="sortbyprice" value="asc">Highest Price</option>
        <option data-testid="sortbyprice"  value="desc">Lowest Price</option>
      </select>
    </header>
  )
}

export default Header