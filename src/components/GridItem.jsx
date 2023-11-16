import { PropTypes } from 'prop-types'

export const GridItem = ({title, url, id}) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

// set props types
GridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
