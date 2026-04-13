import './Portfolio.css'

const projetos = [
  {
    nome: 'Stayfe',
    disciplina: 'Concepção de Artefatos Digitais',
    descricao: 'Stayfe is an urban awareness platform that turns real-time data into smarter everyday decisions. It works like a collective radar for the city, combining official data with real-time reports from people on the ground so you can clearly see what is happening around you. Not just about safety, it is about context.',
    link: 'https://stayfe.online',
    repo: null,
  },
  {
    nome: 'Cadus',
    disciplina: 'Desenvolvimento de Software',
    descricao: 'Cadus is a digital self-registration platform designed for patients of UFPE\'s teaching clinics. Built around simplicity and accessibility, it transforms what is usually a frustrating paper-based process into a smooth, guided, and human experience. Designed with every kind of user in mind, no confusion, no barriers.',
    link: 'https://cadus-facil-login.lovable.app',
    repo: 'https://github.com/bernardobelfort/cadus-facil-login',
  },
]

function Portfolio() {
  return (
    <main className="portfolio">
      <div className="portfolio-conteudo">
        <h2 className="portfolio-titulo">Portfólio</h2>
        <div className="portfolio-lista">
          {projetos.map((projeto) => (
            <div key={projeto.nome} className="projeto-card">
              <div className="projeto-header">
                <h3 className="projeto-nome">{projeto.nome}</h3>
                <span className="projeto-disciplina">{projeto.disciplina}</span>
              </div>
              <p className="projeto-descricao">{projeto.descricao}</p>
              <div className="projeto-links">
                {projeto.link && (
                  <a href={projeto.link} target="_blank">Ver projeto</a>
                )}
                {projeto.repo && (
                  <a href={projeto.repo} target="_blank">Repositório</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Portfolio