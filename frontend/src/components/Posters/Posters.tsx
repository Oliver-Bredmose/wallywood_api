import type { Genre } from '../../../Types/movieType'
import style from './Posters.module.scss'
import parse from 'html-react-parser'
import { Button } from '../Button/Button'


interface PosterProps {
  id: number
  imageUrl: string
  title: string
  description?: string
  genres: Array<Genre>
  price?: number
}

export function Poster({ id, imageUrl, title, description, genres, price }: PosterProps) {
  return (
    <div key={id} className={style.posterStyle}>
      <img src={imageUrl}></img>
      <div>
        <h4>{title}</h4>
        {description && <div>{parse(description)}</div>}
        <p>Genre:</p>
        {genres &&
          genres.map((genre: Genre) => {
            return <span>{genre.title}</span>
          })}
        {price && <p>Price: {price}</p>}
        <Button></Button>
      </div>
    </div>
  )
}