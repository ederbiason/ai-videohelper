<h1 align="center" style="text-align: center;">
  🎬 AI VideoHelper 🎬
</h1>




<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#desafios">Desafios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#actions">GitHub Actions</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="GitHub Actions" src="https://github.com/ederbiason/ai-videohelper/actions/workflows/github-actions.yml/badge.svg">
</p>




<h2 id="project">📁 Projeto</h2>




Este projeto consiste em uma ferramenta que automatiza a criação de descrições e títulos (por enquanto) para vídeos do YouTube a partir da transcrição do conteúdo. Basta fazer o upload de um vídeo que a Inteligencia Artificial do ChatGPT (Whisper) vai transcrever o áudio do vídeo e com base nessa transcrição gerar sugestões de título e descrição. Além da possibilidade de inserir um prompt personalizado para que a geração das sugestões atenda as necessidades do usuário.




<h2 id="technologies">💻 Tecnologias</h2>




Este projeto foi desenvolvido utilizando tecnologias como:




## ⚙️ Back-end




- Node.JS
- TypeScript
- Fastify
- Prisma
- Dotenv
- OpenAI
- Zod




## 🖥️ Front-end




- Next.JS
- React
- TypeScript
- Tailwind CSS
- Axios
- FFmpeg
- Shadcn UI




<h2 id="usage">💡 Utilização</h2>




A aplicação está dividida entre o Back-end na pasta [(server)](https://github.com/ederbiason/ai-videohelper/tree/master/server) e o Front-end na pasta [(client)](https://github.com/ederbiason/ai-videohelper/tree/master/client). <br>
Porém ao fazer o clone do projeto as duas já vão vir no arquivo, basta abrir um VSCode (ou qualquer que seja a IDE) para cada pasta. <br>
Para executar a aplicação em sua máquina localmente, certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:




1. Clone o projeto:




```
$ git clone https://github.com/ederbiason/ai-videohelper.git
```




2. Acesse a pasta do projeto:




```
$ cd ai-videohelper
```
## Para rodar o Front-end
1. Acesse o Front-end:




```
$ cd client
```




2. Instale as dependências:




```
$ npm install
```




3. Inicie o servidor:




```
$ npm run dev
```




## Para rodar o Back-end
1. Acesse o Back-end:
```
$ cd server
```




2. Instale as dependências:




```
$ npm install
```




3. Execute as migrações:




```
$ npx prisma migrate dev
```




4. Inicie o servidor:




```
$ npm run dev
```




⚠️ **Importante**: Crie um arquivo .env de acordo com o arquivo .env.example. No campo DATABASE_URL, especifique a URL do banco de dados que deseja utilizar. Crie uma conta no site [OpenAI](https://openai.com/), obtenha sua chave da API e preencha o campo OPENAI_API_KEY com sua chave.


<h2 id="desafios">🎯 Desafios</h2>
- [x] **Desafio de Configuração Inicial do GitHub**: Configure um arquivo de configuração `.gitignore` para excluir arquivos desnecessários do repositório. <br>
- [x] **Desafio de Integração com API**: Integre o GitHub Actions com uma API externa, como um serviço de notificação. <br>
- [x] **Desafio de Configuração de Badge**: Adicione um badge de status do GitHub Actions ao seu README.md para mostrar o status do pipeline. <br>
- [x] **Desafio de Variáveis de Ambiente**: Utilize variáveis de ambiente no GitHub Actions para armazenar informações sensíveis, como chaves de API. <br>
- [x] **Desafio de Análise de Desempenho**: Utilize ferramentas como Lighthouse para avaliar o desempenho do site e implemente otimizações. <br>
- [x] **Desafio de Branch Protegida**: Configure a branch principal como protegida, exigindo revisões de código antes de mesclar pull requests.


<h2 id="actions">😸 GitHub Actions</h2>

### [build_and_test.yml](https://github.com/ederbiason/ai-videohelper/blob/master/.github/workflows/build_and_test.yml)
Esta Action verifica se tudo está configurado corretamente, instala as ferramentas necessárias e constrói o projeto, tanto a parte do front-end quanto do back-end. Depois, ele roda todos os testes para ter certeza de que tudo está funcionando como deveria.

### [dependency-review.yml](https://github.com/ederbiason/ai-videohelper/blob/master/.github/workflows/dependency-review.yml)
Esta Action possui duas etapas: a primeira é para clonar o repositório e a segunda é para realizar uma revisão de dependências utilizando uma ação específica para isso. Essa configuração ajuda a automatizar a revisão de dependências em novos pull requests.

### [github-actions.yml](https://github.com/ederbiason/ai-videohelper/blob/master/.github/workflows/github-actions.yml)
Esta Action é acionada em todos os pushes e pull_requests do projeto, sempre que algo chega na branch principal a Action é executada. 

### [openaiapi.yml](https://github.com/ederbiason/ai-videohelper/blob/master/.github/workflows/openaiapi.yml)
Esta Action integra o GitHub Actions com a API da OpenAI, que também foi utilizada no projeto. Ele usa um script local para realizar uma tarefa de completamento com a OpenAI.



<h2 id="license">📝 Licença</h2>




Este projeto está sob a licença MIT.




<div style="display: flex;">
  <a href="https://br.linkedin.com/in/eder-biason-b0a7b920b" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:ederbiason.eh@edu.unifil.br"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="https://www.instagram.com/ederbiason/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>







