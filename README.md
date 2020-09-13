# catch_code
## Tech Stack
This project are using `React` and `Parcel` as a bundler and using jest + react testing library.
* [Reactjs](https://reactjs.org/)
* [Parcel](https://parceljs.org/)
* [Testing Library](https://testing-library.com/)
We don't need to use create react app as this is just a simple project and we don't need webpack for this.
## Project Structure
```▸ __mocks__/
▾ interfaces/
    index.d.ts
    react.d.ts
▾ public/
    index.html
    test.txt
▾ src/
  ▸ assets/
  ▸ components/
    index.tsx
  jest.config.js
  jest.setup.js
  package.json
  README.md
  tsconfig.json
  tsconfig.test.json
  yarn.lock
```

## How this is works
First, we fetch the data for product lists from http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json and then it stored in react local state.
```
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
```
Once the data is ready, we render it using separate component
```
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
```
We also have feature to sort the product by the price. To achieve this, we just need to update the `products` state by looping to whole products and sorted it by price value.
```
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
```
## How to Run
* Clone the repo
* Invoke `yarn`
* Run `yarn start` to start
* Run `yarn test` to start unit tests

## How to Build
* Run `yarn build` and the output would be on `dist` folder. You can use simple http server like `serve` or `python SimpleHTTPServer`.
