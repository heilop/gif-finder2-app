import PropTypes from 'prop-types';
import { GridItem } from "./GridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      {
        isLoading && (<h2>Is loading...</h2>)
      }
      <div  className="card-grid" >
        {
          images.map((image) => (
            <GridItem
              key = { image.id }
              { ...image }
            />)
          )
        }
      </div>
    </>
  )
}

GifGrid.propType = {
  category: PropTypes.string.isRequired
}

