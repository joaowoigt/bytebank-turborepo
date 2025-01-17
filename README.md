Olá, seja bem vindo ao resultado do meu Tech Challenge ✌️. Meu nome é João Woigt, meu é rm356898, você pode ler mais sobre mim no final deste ReadMe na sessão Sobre o desenvolvedor

## Iniciando o projeto

### Via terminal

Apos clonar o projeto, no terminal dentro da pasta rode o comando para instalar as dependencias:

```bash
npm install
```

Em seguida, rode o comando

```bash
npm run dev
```

Possiveis problemas:
Caso tenha algum problema rodando desta maneira, pode ser que falte a dependencia do turbo repo. Para resolver rode o comando

```bash
npm install turbo --global
```

### Via DockerCompose

Em um terminal com acesso ao docker, entre na raiz do projeto e rode o comando

```bash
docker compose up
```

O projeto deverá estar rodando na porta 3000 se disponivel

## Acessando o projeto publica

Este projeto foi publicado utilizando a Vercel. Passei algumas dificuldades com a AWS, apesar de ter conseguido mandar a imagem do projeto para
o ECR, ao roda-las no EC2 não reproduzia nada.
Contudo, o backend esta publicado numa instancia do EC2 na porta http://44.203.160.113:443

Link para acessar a home (agrupador de todos os microfrontends) -> https://bytebank-turborepo-home.vercel.app/ <br>
Link para acessar apenas o microfrontend de login -> https://bytebank-turborepo-login.vercel.app/<br>
Link para acessar apenas o microfrontend da dashboard -> https://bytebank-turborepo-dashboard.vercel.app/<br>

## Utilizado no projeto

- NextJs
- Zones (mircrofrontend do nextJs)
- TurboRepo
- Redux
- Axios
- Docker
- Design system
- TypeScript

## Sobre o desenvolvedor

Olá, meu nome é João Woigt, sou desenvolvedor deste 2020 quando decidi fazer a transição da minha area de estudo (Ciências Socias) para a programação a fim de encontrar melhores oportunidades. Participei de diversos bootcamps, em destaque O Santander Bootcampo | Mobile developer e o curso da Ada Tech Web full-stack. Hoje me especializo em desenvolvimento mobile, com foco em Android e Kotlin multiplataforma. Atuo faz 4 anos na area, tendo passado por projetos como Rock in Rio, Banco Pan e Stone, onde me encontro empregado atualmente.
Fique a vontade para se conectar em meu [Linkedin](https://www.linkedin.com/in/joaowoigt/)
