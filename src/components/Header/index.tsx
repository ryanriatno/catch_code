import React from 'react'
import './styles.scss'

interface Props {
  handleSortingPrice: (e) => void
}
const Header: React.FC<Props> = (props) => {
  return (
    <header className="site-header">
      <div className="site-header__logo" />
      <select className="site-header__sort" name="sort" id="sort" onChange={(e) => props.handleSortingPrice(e)}>
        <option value="asc">Highest Price</option>
        <option value="desc">Lowest Price</option>
      </select>
    </header>
  )
}

export default Header