<h1>Oque é um CRUD? Operações essenciais de gestão de dados!</h1>

<strong>SPA:</strong><p>Uma aplicação SPA<strong>(Single-Page-Aplication)</strong> é um tipo de aplicação WEB que carrega uma única página, ou um único elemento HTML, ou melhor dizendo, um único componente e, 
ao invés de carregar toda a página, os componentes vão ser dinamicamente carregados assim que necessário, tornando a experiencia do usuário mais fluida, rápida e com mais facilidade para sua utilização.
</p>

<hr>
<strong>A princípio, é indubtável destacar as ferramentas utilizadas na aplicação:</strong>
<p>Ela foi construida em duas partes principais:</p>
<ol>
  <strong>BACK-END:</strong>
  <li>O back-end foi desenvolvido usando o framework TYPESCRIPT, levando em consideração suas especificações e aplicação de tipagem.</li>
  <li>Juntamente com o NODEJS.</li>
  <li>Foi usado o ORM Prisma, com sua interface Prisma studio, para conectar o servidor interno com o banco de dados, além de construir o próprio schema do banco.</li>
  <li>O banco de dados usado foi o Mongodb Atlas, banco de dados não relacional em cloud(na nuvem do google), o que permite que o desenvolvedor foque mais na aplicação e construção da lógica no projeto, e menos na manutenção do banco.</li>
  <li>Todo o backend foi baseado no SOA(Arquitetura orientada a serviços), construida em camadas de aplicação(Rotas, controladores e serviços).</li>
  <hr>
</ol>
<ol>
  <strong>FRONT-END: </strong>
  <li>O front foi construido usando o framework ANGULAR juntamente com o TYYPESCRIPT, construindo componentes de acordo com a necessidade.</li>
  <li>Para que o front faça requisições e receba resposta do back, foi usado a ferramenta AXIOS para fazer essas requisições.</li>
  <li>Além disso, foi utilizado a biblioteca TAILWINDCSS, para aplicação de estilização inline, de acordo com as classes ja configuradas da biblioteca.</li>
  <li>Toda a lógica foi construida baseada nessas ferramentas, desenvolvendo a interface da aplicação.</li>
</ol>
<hr>

<strong>O objetivo da aplicação é fornecer uma interface intuitiva para a gestão de dados com as seguintes funcionalidades principais:</strong>
<strong>Create (Criar):</strong>
<ul>
  <li>Permite ao usuário adicionar novos registros ao banco de dados.</li>
  <li>A interface inclui um formulário estilizado com TailwindCSS, que é enviado para o backend utilizando Axios para realizar a operação de criação.</li>
</ul>

<strong>Read (Ler):</strong>
<ul>
  <li>Exibe uma lista de registros armazenados no banco de dados.</li>
  <li>A lista é carregada e atualizada dinamicamente, proporcionando uma visualização clara e responsiva dos dados.</li>
  <li>Implementado com Angular para a renderização da lista e Axios para a comunicação com a API backend.</li>
</ul>

<strong>Update (Atualizar):</strong>
<ul>
  <li>Permite a edição de registros existentes.</li>
  <li>Um formulário de edição é disponibilizado ao usuário, preenchido com os dados atuais do registro, e permite a modificação dos campos.</li>
  <li>As atualizações são enviadas ao backend via Axios, e a aplicação reflete as alterações de forma imediata.</li>
</ul>

<strong>Delete (Excluir):</strong>
<ul>
  <li>Permite a remoção de registros da lista.</li>
  <li>O usuário pode excluir registros com uma interação simples, e a exclusão é processada no backend com Axios e atualizada na interface do usuário.</li>
</ul>
<hr>

<strong>Frontend:</strong>
Angular: Framework para construir a interface do usuário e gerenciar o estado da aplicação.
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando segurança e facilidade de manutenção.
TailwindCSS: Framework de CSS utilitário para criar interfaces responsivas e estilizadas rapidamente.
Axios: Biblioteca para fazer requisições HTTP ao backend e manipular a comunicação entre frontend e backend.

<strong>Backend:</strong>
MongoDB Atlas: Banco de dados NoSQL hospedado na nuvem, usado para armazenar e gerenciar os dados da aplicação.
Prisma ORM: Ferramenta para mapeamento objeto-relacional que facilita a comunicação entre a aplicação e o banco de dados MongoDB, fornecendo um esquema de dados claro e um conjunto de ferramentas para a manipulação de dados.
<hr>
<h3>Validação:</h3>
<p>A aplicação usa a ferramenta JOI, uma das principais bibliotecas extenas para validação dos dados enviados do front para o back.</p>

<strong>OBS:</strong>
<p>Cada funcionalidade da aplicação possue uma validação de dados, desde a criação de um novo cliente, validando sejá há determinadas informações no banco que já possua as caracteristicas daquele valor em que o cliente esta tentando cadastrar.</p>
<p>Logo, a aplicação possue validação para listar, criar, atualizar e deletar um determinado Cliente.</p>

<h2>Preview:</h2>
<p>Listagem do clientes cadastrados__</p>

![Captura de tela 2024-10-21 083750](https://github.com/user-attachments/assets/e202e881-1e41-4ea3-a517-677bb35f17d8)

<p>Componente para cadastrar um novo Cliente_</p>


![Captura de tela 2024-10-21 083810](https://github.com/user-attachments/assets/5b0de063-d885-4387-9a73-fca34667ceed)

<p>Componente para atualizar as informações de um Cliente específico_</p>

![Captura de tela 2024-10-21 083824](https://github.com/user-attachments/assets/6eb17909-e9c8-4e89-b1e1-d58c71073260)

<p>Componente para confirmar a deleção de um cliente específico_</p>

![Captura de tela 2024-10-21 083839](https://github.com/user-attachments/assets/064ec36e-a9e5-4bb2-a73e-640714016d3d)
