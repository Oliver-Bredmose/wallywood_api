import { NavLink } from 'react-router'
import type { Genre } from '../../../Types/movieType'
import style from './Posters.module.scss'
import parse from 'html-react-parser'

interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  genres: Array<Genre>
  price?: number
  slug?: string
}

export function Poster({ id, imageUrl, title, description, genres, price, slug }: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <img src={imageUrl}></img>
      <div>
        <h4>{title}</h4>
        <div className={style.textContent}>
          {description && <div>{parse(description)}</div>}
        </div>
        
        <div className={style.infoRow}>
          <div>
            <p>Genre:</p>
            {genres &&
              genres.map((genre: Genre) => {
                return <span key={genre.id}>{genre.title}</span>
              })}
          </div>
          {price && <p>Price: {price}</p>}
        </div>

        {slug && (
          <NavLink to={`/details/${slug}`} className={style.ReadMoreButton}>
            Læs mere
          </NavLink>
        )}
      </div>
    </div>
  )
}