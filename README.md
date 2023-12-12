 
<!-- Badges -->
<div align="center">
 <img src="/img/model_0.png" width="20%">
 <h1><strong>AgroNet</strong></h1>
</div>

<div align="center">

<a href="https://github.com/AndreAlbu/IoTAgro/repo-size"><img src="https://img.shields.io/github/repo-size/AndreAlbu/IoTAgro" alt="Repo Size"/></a>
<a href="https://github.com/AndreAlbu/IoTAgro/languages/count"><img src="https://img.shields.io/github/languages/count/AndreAlbu/IoTAgro" alt="Language"/></a>
<a href="https://github.com/AndreAlbu/IoTAgro/stargazers"><img src="https://img.shields.io/github/stars/AndreAlbu/IoTAgro" alt="Stars Badge"/></a>
<a href="https://github.com/AndreAlbu/IoTAgro/network/members"><img src="https://img.shields.io/github/forks/AndreAlbu/IoTAgro" alt="Forks Badge"/></a>
<a href="https://github.com/AndreAlbu/IoTAgro/pulls"><img src="https://img.shields.io/github/issues-pr/AndreAlbu/IoTAgro" alt="Pull Requests Badge"/></a>
<a href="https://github.com/AndreAlbu/IoTAgro/awesome-githttps://github.com/AndreAlbu/IoTAgro/hub-profile-readme/issues"><img src="https://img.shields.io/github/issues/AndreAlbu/IoTAgro" alt="Issues Badge"/></a>
<a href="https://github.com/AndreAlbu/SVCf/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/AndreAlbu/IoTAgro?color=2b9348"></a>
<a href="https://github.com/AndreAlbu/IoTAgro/blob/master/LICENSE"><img src="https://img.shields.io/github/license/AndreAlbu/IoTAgro?color=2b9348" alt="License Badge"/></a>

<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
  </h4>
</div>

</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Índice

- [Sobre o Projeto](#star2-sobre-o-projeto)
  * [Tecnologias](#space_invader-tecnologias)
  * [Features](#dart-features)
- [Como tudo funciona](#eyes-como-tudo-funciona)
- [Licença](#warning-license)
- [Artigos Publicados](artigos-ja-publicados)
- [Contato](#handshake-contact)
  

<!-- About the Project -->
## :star2: Sobre o projeto

<div align="center">
O <strong>AgroNet</strong> é um protótipo que consiste em apresentar um sistema para auxiliar produtores no controle e gerenciamento remoto da irrigação de uma plantação. Por meio do sistema, os produtores têm a possibilidade de realizar consultas históricas sobre a umidade do solo, umidade relativa do ar e temperatura do ar. Além disso, o sistema ainda possibilita o acionamento de bombas para a irrigação de forma automática baseado na leitura de sensores, e também remoto através de um aplicativo mobile.<br><br>
</div>


<div align="center">
   <img alt="Exemplo da Aplicação" src="/img/model_1.png" width="30%">
   <img alt="Exemplo da Aplicação" src="/img/model_2.png" width="30%">
   <img alt="Exemplo da Aplicação" src="/img/model_3.png" width="30%">
</div>

<!-- Tecnologias -->
### :space_invader: Tecnologias

<details>
  <summary>Cliente</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Servidor</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://go.dev/">Golang</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
    <li><a href="https://socket.io/">SocketIO</a></li>
    <li><a href="https://www.prisma.io/">Prisma</a></li>    
    <li><a href="https://www.apollographql.com/">Apollo</a></li>
    <li><a href="https://graphql.org/">GraphQL</a></li>
  </ul>
</details>

<details>
<summary>Banco de Dados</summary>
  <ul>
    <li><a href="https://thingspeak.com/">ThingSpeak IoT</a></li>
    <li><a href="https://firebase.google.com/">Firebase</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
    <li><a href="https://www.jenkins.io/">Jenkins</a></li>
    <li><a href="https://circleci.com/">CircleCLI</a></li>
  </ul>
</details>

<!-- Características -->
### :dart: Features

- Usabilidade
- Acesso remoto
- Dados persistidos
- Rápida integração
- Ajustes realizados pelo usuário

<!-- Uso -->
## :eyes: Como tudo funciona

O <strong>AgroNet</strong> é um sistema que utiliza-se de dois banco de dados, o primeiro e mais conhecido é o Firebase e o segundo é o ThingSpeak IoT. Com o Firebase são armezanados os dados gerados pelo usuário e informações temporários geradas pelo sensor, isso devido o custo de armazenado do Firebase. Já o ThingSpeak ele armazena toda informação gerada no sistema, seja os dados gerados pelo sensor quanto os acionamento realizado pelo aplicativo. 

Para a interface do usuário foi desenvolvido um aplicativo mobile, que concentra todas as informações geradas de forma simples e intuitiva. Além disso, com ele é possível ajustar parâmetros como o limite dos sensores e o tempo máximo que o sensor deve ficar ligado.

Abaixo uma ilustração de como o sistema funciona:

<div align="center">
  <img src="/img/model_5.png" width="60%">
</div>

De forma bem resumida, o ESP8266 funciona como cerebro do sistema rsrsrs, pois ele é responsável por receber e enviar os dados.

<div align="center">
 <p>Modelo ThingSpeak</p>
 <img src="/img/model_6.png" width="60%">
</div>

<!-- Licença -->
## :warning: License

Fique a vontade para utilizar o código e se basear na arquitetura 🫡

Para qualquer dúvida entre em contato!

## 🧪 Artigos já publicados

[IoT para o Gerenciamento Remoto da Irrigação: Análise da Confiabilidade do Sistema](https://sol.sbc.org.br/index.php/encompif/article/view/20431)

[Analisando a Confiabilidade com Efase no Desempenho de Sensores de um Sistema de IOT para o Gerenciamento Remoto da Irrigação](https://revistas.unifacs.br/index.php/rsc/article/view/7704)

<!-- Contatos -->
## :handshake: Contact

André Albuquerque - aalbuquerque689@gmail.com

Pedro Almeida - pedro.emanuel.lima08@aluno.ifce.edu.br

Joyce Sousa - joyce.sousa.monteiro06@aluno.ifce.edu.br

Entre no servidor do Discord: [Servidor de dúvidas](https://discord.com/invite/NqhDpGEp)

Project Link: [AgroNet](https://github.com/AndreAlbu/IoTAgro/)

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/AndreAlbu">
        <img src="https://avatars.githubusercontent.com/u/47752060?v=4" width="100px;" alt="Foto do André no GitHub"/><br>
        <sub>
          <b>André Albuquerque</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PedroEmanuelLima">
        <img src="https://avatars.githubusercontent.com/u/58365600?v=4" width="100px;" alt="Foto do Pedro Emanuel"/><br>
        <sub>
          <b>Pedro Emanuel</b>
        </sub>
      </a>
    </td>
    <td align="center">
       <a href="https://github.com/joycesousam">
        <img src="https://avatars.githubusercontent.com/u/56177331?v=4" width="100px;" alt="Foto da Joyce Sousa"/><br>
        <sub>
          <b>Joyce Sousa</b>
        </sub>
      </a>
    </td>
    <td align="center">
       <a href="https://github.com/robsonf">
        <img src="https://avatars.githubusercontent.com/u/9002336?v=4" width="100px;" alt="Foto do Robson Feitosa"/><br>
        <sub>
          <b>Robson Feitosa</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
