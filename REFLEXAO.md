# Reflexão — Portfólio Pessoal em React

## Escolha da abordagem

Optei pelo Vite porque já tinha ouvido falar que era mais rápido que o Create React App e queria testar isso na prática. A diferença no tempo de inicialização do servidor de desenvolvimento foi perceptível desde o primeiro `npm run dev`, o que me convenceu de que foi a escolha certa. O CRA sempre me pareceu um pouco pesado para projetos menores como esse.

## Principais dificuldades

A parte que mais me travou foi configurar o React Router corretamente. No começo as rotas não estavam funcionando como eu esperava e demorei um tempo para entender que precisava envolver a aplicação inteira com o `BrowserRouter` no `main.jsx` e não dentro do `App.jsx`. Outro ponto foi o CSS, que parecia simples mas exigiu bastante ajuste de espaçamento e alinhamento para chegar no visual que eu queria.

## Principais aprendizados

Entendi na prática como funciona o fluxo de uma aplicação React com múltiplas páginas. Antes eu sabia que o React Router existia mas nunca tinha configurado do zero. Também aprendi bastante sobre organização de projeto, separar componentes, páginas e estilos em pastas distintas fez uma diferença enorme na hora de mexer em algo específico sem perder o fio.

Outro aprendizado foi o processo de build. Entender que o `npm run build` gera uma pasta `dist` com arquivos estáticos prontos para hospedar foi algo que ficou claro de verdade só quando fui publicar o site.

## Uso de IA

Usei IA em alguns momentos do projeto. Tenho o hábito de trabalhar bastante pelo terminal e às vezes me esqueço de algum comando específico ou não sei qual é o comando certo pra uma situação nova. Nesses casos pedi ajuda pra lembrar a sintaxe ou entender o que um comando faz antes de rodar.

Também usei pra discutir algumas decisões de estrutura do projeto, tipo como organizar as pastas e onde colocar cada coisa. Mas o código em si, a lógica das páginas e as escolhas de design foram todas feitas por mim. A IA funcionou mais como um apoio pontual do que como protagonista do processo.