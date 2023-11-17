// // import { useState } from 'react'
// import { useImmer } from 'use-immer';
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// export default function Form() {
//   const [person, updatePerson] = useImmer({
//     name: 'Niki de Saint Phalle',
//     artwork: {
//       title: 'Blue Nana',
//       city: 'Hamburg',
//       image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//     }
//   });

//   function handleNameChange(e) {
//     updatePerson(draft => {
//       draft.name = e.target.value;
//     })
//   }

//   function handleTitleChange(e) {
//     updatePerson(draft => {
//       draft.artwork.title = e.target.value;
//     })
//   }

//   function handleCityChange(e) {
//     updatePerson(draft => {
//       draft.artwork.city = e.target.value;
//     });
//   }

//   function handleImageChange(e) {
//     updatePerson(draft => {
//       draft.artwork.image = e.target.value;
//     });
//   }


//   return (
//     <>
//       <label>
//         Name:
//         <input value={person.name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Title:
//         <input value={person.artwork.title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         City:
//         <input value={person.artwork.city} onChange={handleCityChange} />
//       </label>
//       <label>
//         Image:
//         <input value={person.artwork.image} onChange={handleImageChange} />
//       </label>

//       <p>
//         <i>{person.artwork.title}</i>{' by '}{person.name}<br />(located in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </>
//   )

// }

import { useState } from 'react'
import { useImmer } from 'use-immer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];


export default function BucketList() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a => a.id === id)
      artwork.seen = nextSeen;
    })
  }
  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      )
      artwork.seen = nextSeen
    })
  }

  return (
    <>
      <h1>Art List</h1>
      <h2>My List</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your List</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input type='checkbox' checked={artworks.seen} onChange={e => { onToggle(artwork.id, e.target.checked); }} />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}