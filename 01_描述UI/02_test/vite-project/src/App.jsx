// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import { recipes } from './data';

export default function RecipeList() {
  return (
    <div>
      <h1>菜谱</h1>
      {recipes.map(recipe =>
        <Recept {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

function Recept({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}