<h1>Oque é um CRUD? Operações essenciais de gestão de dados!</h1>

<strong>SPA:</strong><p>Uma aplicação SPA<strong>(Single-Page-Aplication)</strong> é um tipo de aplicação WEB que carrega uma única página, ou um único elemento HTML, ou melhor dizendo, um único componente e, 
ao invés de carregar toda a página, os componentes vão ser dinamicamente carregados assim que necessário, tornando a experiencia do usuário mais fluida, rápida e com mais facilidade para sua utilização.
</p>

<strong>A princípio, é indubtável destacar as ferramentas utilizadas na aplicação:</strong>
<p>Esta aplicação é um CRUD (Create, Read, Update, Delete) desenvolvida utilizando Angular, TypeScript, TailwindCSS e Axios no frontend;</p>
<p>E MongoDB Atlas com Prisma ORM no backend. </p>

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

<strong>Frontend:</strong>
Angular: Framework para construir a interface do usuário e gerenciar o estado da aplicação.
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript, proporcionando segurança e facilidade de manutenção.
TailwindCSS: Framework de CSS utilitário para criar interfaces responsivas e estilizadas rapidamente.
Axios: Biblioteca para fazer requisições HTTP ao backend e manipular a comunicação entre frontend e backend.

<strong>Backend:</strong>
MongoDB Atlas: Banco de dados NoSQL hospedado na nuvem, usado para armazenar e gerenciar os dados da aplicação.
Prisma ORM: Ferramenta para mapeamento objeto-relacional que facilita a comunicação entre a aplicação e o banco de dados MongoDB, fornecendo um esquema de dados claro e um conjunto de ferramentas para a manipulação de dados.

<strong>OBS:</strong>
<p>Cada funcionalidade da aplicação possue uma validação de dados, desde a criação de um novo cliente, validando sejá há determinadas informações no banco que já possua as caracteristicas daquele valor em que o cliente esta tentando cadastrar.</p>
<p>Validação para listar, criar, atualizar e deletar um determinado Cliente.</p>

<h2>Preview:</h2>
<p>Listagem do clientes cadastrados__</p>

![Captura de tela 2024-08-30 142237](https://github.com/user-attachments/assets/ec66c19b-bb5a-4e88-aca8-236121a59dfb)

<p>Componente para cadastrar um novo Cliente_</p>

![Captura de tela 2024-08-30 141714](https://github.com/user-attachments/assets/5f5e747e-bbfa-4f40-8469-9d595eeb82f8)

<p>Componente para aatualizar as informações de um Cliente específico_</p>

![Captura de tela 2024-08-30 142354](https://github.com/user-attachments/assets/66fa877a-48d2-48b1-8c60-4e6ea95f791a)

<p>Componente para confirmar a deleção de um cliente específico_</p>

![Captura de tela 2024-08-30 142016](https://github.com/user-attachments/assets/02666c7e-beb4-42eb-83f7-de2a18c102a7)
