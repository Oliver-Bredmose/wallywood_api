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
        <p>Pinterest</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </section>
    </footer>
  )
}