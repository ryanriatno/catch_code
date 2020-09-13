import React, { useState, useEffect } from 'react'
import './styles.scss'

interface Props {
  imageUrl: string
  salePrice: number
  retailPrice: number
  id: string|number
  quantityAvailable: number
  name: string
}
const ProductCard: React.FC<Props> = (props) => {
  const [onSales, setOnSales] = useState(false)
  const convertCurrency = (value) => {
    let price = value / 100
    return price.toLocaleString('en-US', { style:'currency', currency:'USD' })
  }

  useEffect(() => {
    if (props.retailPrice > 0) {
      setOnSales(true)
    }else{
      setOnSales(false)
    }
  }, [props.retailPrice])

  return (
    <div className="product__lists" key={props.id}>
      <div className="product__lists-cover">
        <img src={props.imageUrl} alt="" />
        {(props.quantityAvailable < 1) ? <span data-testid="soldout" className="product__lists-sold-out">SOLD OUT</span> : null}
      </div>
      <div className="product__lists-detail">
        <h4 className="product__lists-name">{props.name}</h4>
        {
          (onSales) ?
            <span data-testid="retail-price" className="product__sale-price">{convertCurrency(props.retailPrice)}</span>
            : null
        }
        {
          (onSales) ?
          <span data-testid="price" className="product__price">{convertCurrency(props.salePrice)}</span>
          :
          <span data-testid="price" className="product__price">{convertCurrency(props.retailPrice)}</span>
        }
      </div>
    </div>
  )
}

export default ProductCard