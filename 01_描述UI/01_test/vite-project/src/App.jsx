import React from 'react';
import './App.css'
import { getImageUrl } from './utils';
import { people } from './data';


export default function List() {
  const chemists = people.filter(person => person.profession === '化学家')
  const everyoneElse = people.filter(person => person.profession !== '化学家')

  return (
    <article>
      <h1>科学家</h1>
      <ListSection
        title="化学家"
        people={chemists}
      />
      <ListSection
        title="其余科学家"
        people={everyoneElse}
      />
    </article>
  );
}

function ListSection({ title, people }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}</b>
              {' ' + person.profession + ' '}
              因{person.accomplishment}闻名
            </p>
          </li>
        )}
      </ul>
    </>
  )
}