import jesus from '../../assets/img/jesus.png'
import "./index.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__container__description">
          <h1>Jesus Bravo Vergara</h1>
          <div className="contact__container__description__info">
            <h4>Full Stack Developer</h4>
            <p>
            Full Stack Web Developer with two years of experience in the following technologies: 
            JavaScript, ES6, React.js, Redux, Vue.js, Node.js, Express.js, TypeScript, MongoDB, 
            Prisma ORM, HTML5, CSS3, Sass, and Bootstrap. I have strong teamwork skills to achieve 
            objectives and organizational growth. I am a natural leader, capable of assuming 
            leadership naturally as it is a quality of my personality. I also have the ability to 
            learn on the go and quickly, as I can grasp ideas easily.I hold a degree in Information
            Systems Analysis and Design and I am a fourth-semester Software Engineering student with general knowledge in computing. Additionally, I am an eighth-semester Systems Engineering student.
            </p>
          </div>
        </div>
        <div className="contact__container__body">
          <div className="contact__container__body__img">
            <img className="contact__container__body__img__picture" src={jesus} />
            <h3 className="contact__container__body__img__subtitle">FULLSTACK DEVELOPER</h3>
            <div className="contact__container__body__img__info">
              <h3 className="contact__container__body__img__info__name">Jesús Bravo</h3>
              <h3 className="contact__container__body__img__info__email">jdbv2524@gmail.com</h3>
              <h3 className="contact__container__body__img__info__github">
                Github: &nbsp;
                <a href="https://github.com/jesusdavid24" target="_blank" rel="noreferrer">
                  jesusdavid24
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
