import { catalogData } from "../../data/catalogData";
import { useState } from "react";
import "./Catalog.css";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState(
    "mini-realismo",
    "neo-tribal"
  );

  const filtered = catalogData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section class="catalog" id="catalog">
      <div class="filter__buttons">
        <button
          class="filter__button"
          onClick={() => setSelectedCategory("mini-realismo")}
        >
          Mini Realismo
        </button>
        <button
          class="filter__button"
          onClick={() => setSelectedCategory("neo-tribal")}
        >
          Neo Tribal
        </button>
      </div>
      <p class="catalog__subtitle">
        Todos os designs estão abertos a qualquer interpretação de quem os vê.
        Quero que alcance todos os pontos de vista.
      </p>
      <p class="catalog__subtitle">? QUAL O SEU PONTO DE VISTA ?</p>
      <div className="gallery">
        {filtered.map((item) => (
          <div key={item.id} className={`gallery__item ${item.category}`}>
            <div class="image-container">
              <img class="item__image" src={item.image} alt={item.title} />
            </div>
            <div class="overlay">
              <h3 class="overlay__title">{item.title}</h3>
              <p class="overlay__subtitle">{item.size}</p>
              <p class="overlay__subtitle">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
