import style from './Footer.module.scss'
import pinterest from '../../assets/svg/Pinterest.svg'
import instagram from '../../assets/svg/Instagram.svg'
import facebook from '../../assets/svg/Facebook.svg'
import twitter from '../../assets/svg/Twitter.svg'

export function Footer() {
  return (
    <footer className={style.footerStyle}>
      <section>
        <div>
          <h3>WALLYWOOD</h3>
          <p>Øster Uttrupvej 1</p>
          <p>9000 Aalborg</p>
        </div>
        <div>
          <p>CVR: 123512512</p>
          <p>Mail: info@plakatshoppen.dk</p>
          <p>MOBIL: +45 1232 2323</p>
        </div>
      </section>
      <section className={style.img}>
        <img src={pinterest} alt="Pinterest logo" />
        <img src={instagram} alt="Instagram logo" />
        <img src={facebook} alt="Facebook logo" />
        <img src={twitter} alt="Twitter logo" />
      </section>
    </footer>
  )
}