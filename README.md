<div align="center">
  
  <img src="src/img/" alt="Rick and Morty Portal" />

  # Rick and Morty - Projeto Data Lovers
  
 <br>

  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt="Node.js" style="height: 30px;"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style="height: 30px;"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style="height: 30px;"/>

  <br>
  
  **Status do Projeto:** _Concluído_ 

  Confira o resultado do projeto [aqui](https://amanda-holanda.github.io/SAP008-data-lovers/) 
  
</div>

## Índice

* [1. Resumo do projeto](#1-resumo-do-projeto)
* [2. Histórias de usuário](#2-histórias-do-usuário)
* [3. Desenho da Interface de Usuário](#3-desenho-da-interface-de-usuário)
  * [3.1 Protótipo de baixa fidelidade](#31-protótipo-de-baixa-fidelidade)
  * [3.2 Protótipos de alta fidelidade](#32-protótipos-de-alta-fidelidade)
* [4. Considerações Técnicas](#4-considerações-técnicas)
  * [4.1 Testes Unitários](#41-testes-unitários)
  * [4.2 Testes de Usabilidade](#42-testes-de-usabilidade)
  * [4.3 Planejamento](#43-planejamento)
  * [4.4 Ferramentas utilizadas](#44-ferramentas-utilizadas)
  * [4.5 Tech Skills](#45-tech-skills)
* [5. Sobre as Desenvolvedoras](#5-sobre-as-desenvolvedoras)

***

## 1. Resumo do projeto

Neste projeto criou-se um site dedicado aos fãs de Rick and Morty com o objetivo de catalogar todos os personagens da série. Dessa forma, o
usuário consegue encontrar os seus personagens favoritos e obter mais informações sobre eles de maneira fácil e prática.

Iniciou-se o projeto fazendo uma pesquisa sobre o usuário. Concluiu-se que os principais objetivos do usuário em relação ao produto são:

A) Obter mais informações sobre seus personagens favoritos, principalmente sobre seu: nome, gênero, local de origem, espécie, imagem em quantos episódios aparecem e números de episódios;

B) Entretenimento: Utilizam o produto quando querem dar risada, sair um pouco da realidade ou usar o som da série como fundo musical.

## 2. Histórias do usuário

Iniciou-se o projeto determinando quatro (4) histórias de usuário:

### História 1: "Como fã da série, gostaria de poder visualizar todos os personagens da série para que eu consiga ter acesso as suas principais características de forma mais fácil."

A partir dessa história, criou-se a funcionalidade de exibir os cards dos personagens na tela. Definiu-se que essa história estava finalizada quando os cards de todos os personagens foram printados na tela do navegador.


### História 2: “Como fã da série, gostaria de saber quais personagens são alienígenas, pois eu amo ficção científica.”

A partir dessa história, criou-se a funcionalidade do botão espécie, na qual o usuário pode verificar quais espécies pertencem aos personagens. Definiu-se que essa história estava pronta quando os cards dos personagens filtrados por espécie (alienígena, humano e desconhecido) foram exibidos na tela do navegador.


### História 3: “Eu como estudante de Ciências Sociais, gostaria de saber a média de personagens femininas que existem na série para colocar nos dados do meu TCC.”

A partir dessa história, criou-se a funcionalidade de exibir a porcentagem dos personagens na tela de acordo com o filtro escolhido. Definiu-se que essa história estava finalizada quando foi exibido na tela do navegador a média dos personagens com base no filtro selecionado.


### História 4:  “Como fã de Rick and Morty, gostaria muito de encontrar os nomes dos personagens com facilidade, pois tenho muita dificuldade em memorizá-los.”

A partir dessa história, criou-se a funcionalidade de caixa de pesquisa na qual permite o usuário pesquisar o seu personagem pelo nome. Definiu-se que essa história estava finalizada quando, ao escrever o nome de um personagem na caixa de pesquisa, os cards referentes ao nome pesquisado eram exibidos na tela do navegador.

## 3. Desenho da Interface de Usuário

### 3.1 Protótipo de baixa fidelidade

Após definir as histórias de usuário, criou-se um protótipo de baixa fidelidade como consta na imagem abaixo:

<img src="src/img/prototipobaixafidelidade.png" alt="Prototipo de Baixa Fidelidade" style="height: 200px" />

### 3.2 Protótipos de alta fidelidade

Logo depois, criou-se no Figma um protótipo de alta fidelidade como consta nas imagens abaixo:

### Protótipo de alta fidelidade da tela de início - Mobile, Tablet e Desktop:

<img src="src/img/page-inicio-mobile-tablet-desktop.png" alt="protipo alta fidelidade" style="height: 300px" />

### Protótipo de alta fidelidade - Mobile:

<img src="src/img/mobile-versão-inicial-final.png" alt="protipo alta fidelidade" style="height: 300px" />

### Protótipo de alta fidelidade - Tablet:

<img src="src/img/tablet-versão-final.png" alt="protipo alta fidelidade" style="height: 300px" />

### Protótipo de alta fidelidade - Desktop:

<img src="src/img/desktop-versão-inicial-final.png" alt="protipo alta fidelidade" style="height: 300px" />

## 4. Considerações Técnicas

### 4.1 Testes unitários

Inicialmente, criou-se um array mock chamado de `arrayTest` com o objetivo de simular um array para construir os testes de forma mais prática.

### Teste do objeto `dataFunctions`: 
Criou-se um teste para verificar se o objeto `dataFunctions`, que contém todas as funções principais no data.js, é um objeto. Logo depois, criou-se testes para as funções de filtrar, buscar por nome, ordenar e calcular a porcentagem dos personagens.

### Teste de filtrar: 
Primeiramente, criou-se um teste para verificar se a função `filtrar` se trata de uma função. Depois, definiu-se um teste para verificar a quantidade de objetos que continham o status 'morto' na array mock. Logo depois, foi testado em qual posição os objetos que continham o status 'morto' se encontravam na array mock. Fizemos o mesmo para testar o status 'vivo'. Seguindo a mesma lógica, definiu-se um teste para verificar a quantidade de objetos que continham o espécie 'alien' na nossa array mock. Logo depois, foi testado em qual posição os objetos que continham o espécie 'alien' se encontravam na array mock. Fizemos o mesmo para testar a espécie 'unknown'. Por fim, definiu-se um teste para verificar a quantidade de objetos que continham o gênero 'female' na array mock. Logo depois, foi testado em qual posição os objetos que continham o gênero 'female' se encontravam na array mock. 

### Teste de ordenar: 
Criou-se um teste para verificar se a função `ordenar` se trata de uma função. Além disso, definiu-se um teste para verificar a quantidade de objetos que retornavam na array mock quando a função era chamada. Por fim, criou-se um teste para verificar os objetos que retornavam os nomes dos personagens em ordem alfabética de forma crescente e descrescente.

### Teste de buscar por nome: 
Criou-se um teste para verificar se a função `buscarPorNome` se trata de uma função. Além disso, definiu-se um teste para verificar a quantidade de objetos que continham o nome 'Rick' na array mock.

### Teste de calcular a porcentagem:
Criou-se um teste para verificar se a função `calcularPorcentagem` se trata de uma função. Além disso, definiu-se um teste para verificar o câlculo da média dos porcentagens vivos e mortos da array mock.

### 4.2 Testes de usabilidade

A seguir estão os 4 (quatro) principais problemas detectados por usuários durante o processo de construção do projeto e como os mesmos foram solucionados.

### Problema 1
O usuário não conseguia visualizar as informações descritas nos cards dos personagens quando acessava a página principal do site no seu celular, pois os templates estavam dispostos em 3 (três) colunas. Dessa forma, para solucionar esse problema, alterou-se a disposição dos cards para apenas uma coluna, ficando bem mais legível e visível para o usuário, quando este acessa o site pelo seu celular.

### Problema 2
No primeiro momento, criou-se um campo de pesquisa com o objetivo de que o usuário pudesse pesquisar o personagem pelo nome. No entanto, colocou-se dentro do campo de pesquisa apenas a palavra "pesquisar". Por conta disso, o usuário relatou que ficou confuso sobre o que pesquisar, ou seja, se poderia pesquisar sobre o gênero do personagem, por exemplo. Para solucionar esse problema, adicionou-se dentro do campo de pesquisa o termo "buscar por nome". Dessa forma, ficou mais claro para o usuário o objetivo principal da sua pesquisa.

### Problema 3
No primeiro momento, criou-se o botão "Sobre" no cabeçalho da página principal, com o objetivo de redirecionar o usuário para uma página com informações sobre quem desenvolveu o site. No entanto, o usuário ficou confuso, relatou que não sabia do que se tratava esse "Sobre" e perguntou se era referente à informações sobre a série. Para solucionar esse problema, substituiu-se o botão para "Sobre nós". Dessa forma, ficou mais claro para o usuário do que se tratava a funcionalidade desse botão.

### Problema 4
No primeiro momento, adicionou-se uma imagem clicável na página inicial, com o objetivo do usuário, ao clicar na imagem, ser redirecionado para a página principal do site. Entretando, o usuário relatou que ficou confuso, pois ele não tinha a informação de que a imagem era clicável. Para solucionar esse problema, adicionamos um texto acima da imagem dizendo: "clique na imagem abaixo". Dessa forma, ficou mais claro para usuário de que ele deveria clicar na imagem para acessar a página principal do site.

### 4.3 Planejamento
### 4.4 Ferramentas utilizadas
### 4.5 Tech Skills

## 5. Sobre as Desenvolvedoras
Projeto desenvolvido por:
* Amanda Holanda [Linkedin](https://www.linkedin.com/in/amandaholanda/) | [GitHub](https://github.com/amanda-holanda)
* Angélica Melo [Linkedin](https://www.linkedin.com/in/angellmelo/) | [GitHub](https://github.com/AngelMelo12).


