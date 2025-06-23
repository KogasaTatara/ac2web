import React from "react";

const projetos = [
  {
    titulo: "FutureMakers",
    descricao: "Trabalho da Futurefest do 2º Ano.",
    link: "https://github.com/EduardoCastroAssadCyrus/FutureMakers"
  },
  {
    titulo: "Ac2 do 2º Tri",
    descricao: "Uma Ac do Alex com umas gracinhas.",
    link: "https://github.com/KogasaTatara/Ac2Tri2"
  },
  {
    titulo: "Ac1 de Games",
    descricao: "Ac de Games onde tinhamos que fazer um level custom",
    link: "https://github.com/KogasaTatara/Aula-Unity---2D-Game-Kit"
  }
];

function Repertorio() {
  return (
    <section className="projetos-grid">
      {projetos.map((projeto, idx) => (
        <a className="card-projeto" href={projeto.link} key={idx}>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
        </a>
      ))}
    </section>
  );
}

export default Repertorio;