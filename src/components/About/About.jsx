import "./About.css";
import profile from "../../assets/images/profile.png";

export default function About() {
  return (
    <section className="about" id="about">
      <img className="about__image" src={profile} alt="Foto do artista" />
      <div className="about__content">
        <h2 className="about__title">SOBRE MIM</h2>
        <p className="about__subtitle">
          Tatuador há 6 anos. Nascido e criado no interior de São Paulo,
          atualmente atendendo na Capital. Tento trazer um pouco da minha visão
          de mundo através das artes que tatuo. A minha busca é deixar uma
          mensagem por detrás das linhas. Algo que te faça refletir. Por mais
          minímo que seja. Nem tudo que marco na pele é pra ser entendido.
          Algumas verdades só fazem sentido quando doem, ou quando viram arte.
        </p>
      </div>
    </section>
  );
}
