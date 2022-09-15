import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifFinder2App = () => {

  const [categories, setCategories] = useState(['Better Call Saul']);

  const onAddCategory = ( newCategory) => {

    if (categories.includes(newCategory)) {
      return;
    }
    setCategories([newCategory, ...categories]);
  }
  return (
    <>
      <h1>GifFinder2App</h1>
      <AddCategory
        onNewCategory = { (value) => onAddCategory(value) }
      />
      {
        categories.map( category => {
          return <GifGrid
            key={ category }
            category={ category }
          />
        })
      }
    </>
  )
}
