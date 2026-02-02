import style from './Footer.module.scss'

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
      <section>
        <p><img src="frontend/src/assets/svg/Pinterest.svg" alt="Pinterest logo" /></p>
        <p><img src="frontend/src/assets/svg/Instagram.svg" alt="Instagram logo" /></p>
        <p><img src="frontend/src/assets/svg/Facebook.svg" alt="Facebook logo" /></p>
        <p><img src="frontend/src/assets/svg/Twitter.svg" alt="Twitter logo" /></p>
      </section>
    </footer>
  )
}