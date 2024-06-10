import React from "react";
import jesus from '../../assets/img/jesus.png';
import cristian from '../../assets/img/cristian.jpg';
import "./contact.scss";

const Contact = () => {
   return (
      <div className="contact-container container-fluid">
         <div className="contact-content">
            <h1 className="contact-content__title">THE CREW</h1>
            <div className="content__info">
               <h2 className="content__info__title">Who we are?</h2>
               <p className="content__info__paragraph">
                  We are a team of talents from Colombian's coast at the service of programming and
                  web development. Working from all over the world.
               </p>
            </div>
         </div>
         <section className="container-images">
            <div className="container-images__img">
               <img className="container-images__pictures"src={cristian}/>
               <h3 className="container-images__profession">FULLSTACK DEVELOPER</h3>
               <div className="information">
                  <h3 className="container-images__name">Cristian Jimenez</h3>
                  <h3 className="container-images__email">cristian.jimenezsa@hotmail.com</h3>
                  <h3 className="container-images__github">
                     Github: &nbsp;
                     <a
                        href="https://github.com/Cristianjs93"
                        target="_blank"
                        className="container-images__github"
                     >
                        Cristianjs93
                     </a>
                  </h3>
               </div>
            </div>
            <div className="container-images__img">
               <img className="container-images__pictures" src={jesus}/>
               <h3 className="container-images__profession">FULLSTACK DEVELOPER</h3>
               <div className="information">
                  <h3 className="container-images__name">Jesús Bravo</h3>
                  <h3 className="container-images__email">jd_bravo24@hotmail.com</h3>
                  <h3 className="container-images__github">
                     Github: &nbsp;
                     <a
                        href="https://github.com/jesusdavid24"
                        target="_blank"
                        className="container-images__github"
                     >
                        jesusdavid24
                     </a>
                  </h3>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Contact;
