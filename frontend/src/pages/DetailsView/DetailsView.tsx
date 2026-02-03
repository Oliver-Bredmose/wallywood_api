import { useParams } from 'react-router'
import { useFetch } from '../../Hooks/useFetch'
import type { MovieData } from '../../../Types/movieType'
import style from './DetailsView.module.scss'
import parse from 'html-react-parser'
import { useState } from 'react'

export function DetailsView() {
  const { slug } = useParams<{ slug: string }>()
  const [quantity, setQuantity] = useState(1)
  
  const { data, isLoading, error } = useFetch<MovieData>(
    `http://localhost:3000/posters/${slug}`
  )

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  if (!data) {
    return <h1>Ingen data fundet</h1>
  }

  const handleAddToCart = () => {
    console.log('Tilføj til kurv:', quantity)
    // Her kan du tilføje logic til at lægge i kurv
  }

  return (
    <div className={style.DetailsContainer}>
      <h1 className={style.PageTitle}>Plakater</h1>
      
      <div className={style.DetailsContent}>
        
        <aside className={style.Sidebar}>
          <h2>Genre</h2>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Dokumentar</li>
            <li>Drama</li>
            <li>Gyser</li>
            <li>Karatefilm</li>
            <li className={style.active}>Komedie</li>
            <li>Krigsfilm</li>
            <li>Krimi - Thriller</li>
          </ul>
        </aside>

        <div className={style.MainContent}>
          <div className={style.PosterSection}>
            <img src={data.image} alt={data.name} />
          </div>

          <div className={style.InfoSection}>
            <h1>{data.name}</h1>
            
            {data.description && (
              <div className={style.Description}>
                {parse(data.description)}
              </div>
            )}

            <p className={style.Size}>Størrelse: 62 x 85 cm</p>
            <p className={style.SKU}>Varenummer (SKU): {data.id}</p>
            <p className={style.Price}>Kr. {data.price},00</p>

            <div className={style.Actions}>
              <input 
                type="number" 
                min="1" 
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className={style.QuantityInput}
              />
              <button onClick={handleAddToCart} className={style.AddToCartButton}>
                Læg i kurv
              </button>
            </div>

            <div className={style.Stock}>
              <span className={style.InStock}>✓</span> 1 på lager
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}