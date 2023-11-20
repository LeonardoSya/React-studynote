import { useState, useEffect } from 'react'
import { foods, filterItems } from './data'
import './App.css'

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([])


  // function debounce(fn, dur) {
  //   dur = dur || 100;
  //   var timer;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn.apply(this, arguments);
  //     }, dur);
  //   }
  // }

  // const debouncedSetResults = debounce((value) => {
  //   setResults(filterItems(foods, value));
  // }, 300);

  const delay = 300;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setResults(filterItems(foods, query));
    }, delay);

    // 在下一次effect运行前取消前一个effect
    return () => clearTimeout(timeoutId);
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }


  return (
    <>
      <SearchBar
        onChange={handleChange}
        query={query}
      />
      <hr />
      <List items={results} />
    </>
  )
}

function SearchBar({ query, onChange }) {
  return (
    <label>
      搜索: {' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  )
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
