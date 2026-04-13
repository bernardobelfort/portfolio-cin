import './Sobre.css'

function Sobre() {
  return (
    <main className="sobre">
      <div className="sobre-conteudo">
        <h2 className="sobre-titulo">Sobre mim</h2>

        <div className="sobre-secao">
          <h3>Trajetória</h3>
          <p>
            Sou estudante de Sistemas de Informação no CIn-UFPE e estou no começo de tudo isso. Ainda estou descobrindo o que a área tem a oferecer, mas já sei que o que mais me interessa é construir coisas que as pessoas realmente usam, não só código que funciona no papel.
          </p>
        </div>

        <div className="sobre-secao">
          <h3>Interesses</h3>
          <p>
            Tenho me envolvido com projetos que misturam tecnologia e impacto real, pensando bastante em como sistemas podem ser mais simples e acessíveis para todo tipo de pessoa. Isso aparece nos projetos que desenvolvo e na forma como penso sobre produto.
          </p>
        </div>

        <div className="sobre-secao">
          <h3>Habilidades</h3>
          <p>
            No dia a dia tenho trabalhado bastante com React, JavaScript e Git, mas tenho uma queda por C++ também, tem algo no baixo nível que é difícil de explicar mas que prende a atenção de um jeito diferente.
          </p>
        </div>

        <div className="sobre-secao">
          <h3>Objetivos</h3>
          <p>
            Fora da faculdade, sou curioso por natureza. Gosto de entender como as coisas funcionam, seja um sistema, uma cidade ou uma ideia. Em termos de tecnologia, me importa mais entender o problema do que sair logo codando.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Sobre