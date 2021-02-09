import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};

export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
      species: "Human",
      origin: "Earth (C-137)",
      status: "Alive",
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      name: "Morty Smith",
      species: "Human",
      origin: "Earth (C-137)",
      status: "Alive",
    },

    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
      name: "Armothy",
      status: "Dead",
      species: "unknown",
      origin: { name: "Post-Apocalyptic Earth" },
    },
  ];
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};
