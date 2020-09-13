import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import fetch from 'unfetch'
import ProductCard from '../ProductCard'

const Home = () => {
  const [metaData, setMetadata] = useState(null)
  const [products, setProducts] = useState([])
  const [sortedBy, setSortedBy] = useState('asc')
  
  useEffect(() => {
    fetch('http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json')
    .then( res => res.json() )
    .then( data => {
      setMetadata(data.metadata)
      setProducts(data.results)
    } )
  }, [])

  const sortByHighestPrice = () => {
    const ascendingPrice = products.sort((a: any, b: any) => {
      setSortedBy('asc')
      return (b.retailPrice) - (a.retailPrice)
    })
    return setProducts(() => [...ascendingPrice])
  }
  const sortByLowestPrice = () => {
    const descendingPrice = products.sort((a: any, b: any) => {
      setSortedBy('desc')
      return (a.retailPrice) - (b.retailPrice)
    })
    return setProducts(() => [...descendingPrice])
  }
  const handleSortingPrice = (e) => {
    if (e.target.value === 'asc') {
      return sortByHighestPrice()
    } else {
      return sortByLowestPrice()
    }
  }

  if (!metaData || products.length < 1) return null
  return (
    <div className="container">
      <Header
        handleSortingPrice={handleSortingPrice}
        sortedBy={sortedBy}
      />
      <main className="main">
        <div className="product">
          {products.map((item: any) => {
            return (
              <ProductCard
                quantityAvailable={item.quantityAvailable}
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                salePrice={item.salePrice}
                retailPrice={item.retailPrice}
                id={item.id}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Home