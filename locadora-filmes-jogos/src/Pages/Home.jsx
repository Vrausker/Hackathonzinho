import Login from "../Components/Login";
import "../Styles/Home.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: 4,
      loop: true,
      spaceBetween: 0,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      },
    });
  });

  return (
    <div>
      <section className="headerGrid">
        <div className="wrapper">
          <h1>
            FICAR PRESO EM ASSINATURAS? <br />
            NUNCA MAIS!
          </h1>
          <h2>
            Locação descomplicada de games e filmes para você usufruir como e
            onde quiser.
          </h2>
          <Login />
        </div>
        <div className="wrapper">
          <img src="src\assets\filme_01.png" />
          <img src="src\assets\filme_02.png" />
          <img src="src\assets\filme_03.png" />
          <img src="src\assets\filme_04.png" />
        </div>
      </section>
      <section>
        <div className="titleFilmes">
          <h1> FILMES EM ALTA! </h1>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="src\assets\Filme_Alta_01.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Filme_Alta_02.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Filme_Alta_03.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Filme_Alta_04.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Filme_Alta_05.png" />
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
      <section>
        <div className="titleFilmes">
          <h1> GAMES EM ALTA! </h1>
        </div>
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="src\assets\Game_Alta_01.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Game_Alta_02.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Game_Alta_03.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Game_Alta_04.png" />
            </div>
            <div className="swiper-slide">
              <img src="src\assets\Game_Alta_05.png" />
            </div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </section>
      <section>
        <div className="titleBeneficios">
          <h1> POR QUE LOCAR? </h1>
        </div>
        <div className="beneficios">
          <div className="beneficiosList">
            <h2> NÃO PRECISA DE ASSINATURA </h2>
            <div className="rectangle"></div>
            <p>
              Assinar virou coisa do passado, agora você tem a oportunidade
              locar somente quando você quiser consumir o produto
            </p>
          </div>
          <div className="beneficiosList">
            <h2> PREÇOS ACESSÍVEIS </h2>
            <div className="rectangle"></div>
            <p>
              Valores que valem a pena para o seu bolso e sem taxa de adesão,
              você só paga pelo que aluga.
            </p>
          </div>
          <div className="beneficiosList">
            <h2> ENTREGA RÁPIDA </h2>
            <div className="rectangle"></div>
            <p>
              Ao realizar o pagamento, você já consegue o acesso imediato ao
              filme ou game que alugou.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="footer">
        <img src="src\assets\marca.png"/>
          <p> Filmes </p>
          <p> Games </p>
          <p> Política de Privacidade </p>
          <p> Termos de uso </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
