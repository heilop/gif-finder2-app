import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifFinder2App = () => {

  const [categories, setCategories] = useState(['Better Call Saul', 'Breaking bad']);

  const onAddCategory = () => {
    setCategories(['Mr Robot', ...categories]);
  }
  return (
    <>
      <h1>GifFinder2App</h1>
      <AddCategory setCategories = { setCategories } />
      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>;
          })
        }
      </ol>
    </>
  )
}
