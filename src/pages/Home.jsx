import './Home.css'

function Home() {
  return (
    <main className="home">
      <div className="home-conteudo">
        <h1 className="home-nome">Bernardo Belfort</h1>
        <p className="home-descricao">
          Estudante de Sistemas de Informação no CIn-UFPE e membro da SEAL, Liga Acadêmica de Engenharia de Software da UFPE. Tenho 19 anos, sou de Recife e estou no começo de uma trajetória que mistura curiosidade, tecnologia e vontade de construir coisas que fazem diferença.
        </p>
        <div className="home-contato">
          <a href="mailto:bbl2@cin.ufpe.br">bbl2@cin.ufpe.br</a>
          <a href="https://github.com/bernardobelfort" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/bernardo-belfort-4b5205307/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </main>
  )
}

export default Home