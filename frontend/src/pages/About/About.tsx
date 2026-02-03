import style from './about.module.scss';
import stjerne from '../../Assets/Images/stjerne.png';


export function About() {
  return (
    <div className={style.AboutContainer}>
      <div className={style.AboutContent}>
        
        <div className={style.TextSection}>
          <h1 className={style.AboutHero}>Om os</h1>

          <p className={style.AboutText}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis sint in architecto, quaerat, aspernatur voluptates accusamus accusantium quam doloremque necessitatibus rerum? Deserunt optio adipisci neque error odio similique alias explicabo.
            Tempore delectus labore modi fugiat voluptatem sint eligendi iste voluptatum, quos dolores ipsam ad placeat mollitia possimus. <br /> Rem sit dicta ducimus assumenda illum dolores sapiente vel illo animi? Commodi, modi?
            Hic corporis magni adipisci atque amet, repudiandae expedita vel odit perspiciatis, tenetur quia aspernatur aut dolor fuga incidunt deleniti commodi voluptas illo reiciendis nisi, animi ea architecto nam impedit. Amet?
            Distinctio quibusdam aspernatur iste facilis ipsam atque libero ut dicta. Debitis eum, reiciendis sed praesentium ipsum quidem minus amet eligendi cum blanditiis ipsam deserunt ex dolorum molestias perspiciatis, aspernatur expedita.
          </p>

          <p className={style.AboutText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum voluptatibus in qui perspiciatis ullam provident labore nemo officia atque nam vero modi, tempore obcaecati consequuntur odio itaque velit deserunt!
          </p>
        </div>

        <div className={style.ImageSection}>
          <img src={stjerne} alt="Wallywood star" />
        </div>

      </div>
    </div>
  );
}