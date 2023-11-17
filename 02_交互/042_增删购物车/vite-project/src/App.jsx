import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useImmer } from 'use-immer';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];


export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          // 创建变更的新对象
          ...product,
          count: product.count + 1
        };
      } else {
        // 没有变更
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId) {
    let newProducts = products.map(product => {
      if (product.id === productId) {
        return {
          // 创建变更的新对象
          ...product,
          count: product.count - 1
        };
      } else {
        // 没有变更
        return product;
      }
    })

    newProducts = newProducts.filter(p => p.count > 0)
    setProducts(newProducts);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            -
          </button>
        </li>
      ))}
    </ul>
  )
}