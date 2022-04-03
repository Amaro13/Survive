"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync();
// import * as func from "./funcoes.js";
import { acordar, preparar, aula, dormir } from "./funcoes.js";

///// Projeto final/////// - Jogo de Ficção Interativa
// O que é ficção interativa? Ficção interativa, geralmente abreviada como IF, é um software de emulação de ambientes no qual os jogadores usam comandos de texto para controlar personagens do jogo e influenciar o ambiente. São jogos baseados em texto, que se tornaram muito populares em uma época em que os computadores ainda não tinham a capacidade de processamento para processar jogos com uma interface gráfica muito avançada.
// O jogo se baseia em uma história em que você determina as ações do seu personagem através de escolhas que são dadas a cada momento. Cada uma dessas escolhas pode influenciar diretamente como a história se desenrolará, alterando as possibilidades e dando novas alternativas ao seu personagem.
// Como será o projeto
// Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.
// É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.
// É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido! Lembre-se que as escolhas devem impactar no que acontecerá com o personagem no decorrer da história, e adicionar eventos que podem ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.

const semana = [
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
  "domingo",
];

let jogador = {
  nome: "",
  sono: 0,
  sanidade: 100,
  fome: 0,
  atrasos: 0,
};

let horas = 5;
let dias = 0;

console.log(
  "Você é funcionário de uma empresa comum brasileira em um emprego comum, sua missão é sobreviver se mantendo vivo e são pela maior quantidade de dias possível. Boa sorte."
);
console.log(
  "Você perde se: \n Fome chegar a 100. \n Sanidade chegar a 0.\n Sono chegar a 100.\n 6 atrasos em um mês."
);

jogador.nome = prompt(`Qual o seu nome?`);

while (
  jogador.sanidade > 0 &&
  jogador.fome < 100 &&
  jogador.atrasos < 6 &&
  jogador.sono < 100
) {
  for (let i = 0; i < semana.length; i++) {
    if (i == 0) {
      horas = acordar(jogador, horas);
      console.log(jogador);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }
      console.log(
        `Segunda-feira é um dia puxado(-70 sanidade, + 70 sono, +30 fome). Qual sua primeira escolha?`
      );

      horas = preparar(jogador, horas, dias);

      if (jogador.atrasos >= 6) {
        console.log(
          `Você perdeu o emprego devido ter se atrasado muitas vezes no mês. ${jogador.atrasos} atrasos`
        );
        break;
      }

      console.log(
        "Você teve o dia de trabalho comum de segunda feira e perdeu 70 de sanidade, ganho 70 de sono e 30 de fome."
      );

      horas = 18;
      jogador.sanidade -= 70;
      jogador.sono += 70;
      jogador.fome += 30;

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu o emprego por ter faltado sem justificativa"
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }
      console.log(jogador);
      console.log(`Deseja assistir a aula?`);

      horas = aula(jogador, horas);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }

      console.log(
        `Parabéns por ter sobrevivido mais um dia, boa sorte amanhã.`
      );
      dormir(jogador, 6);
      dias += 1;
    } else if (i == 1) {
      horas = acordar(jogador, horas);
      console.log(jogador);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }
      console.log(
        `Terça-feira é um dia comum (-50 sanidade, +40 sono, + 30 fome). Qual sua primeira escolha?`
      );

      horas = preparar(jogador, horas, dias);

      if (jogador.atrasos >= 6) {
        console.log(
          `Você perdeu o emprego devido ter se atrasado muitas vezes no mês. ${jogador.atrasos} atrasos`
        );
        break;
      }

      console.log(
        "Você teve o dia de trabalho comum de terça feira e perdeu 50 de sanidade, ganho 40 de sono e 30 de fome."
      );

      horas = 18;
      jogador.sanidade -= 50;
      jogador.sono += 40;
      jogador.fome += 30;

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Fome: ${jogador.sono}`);
        break;
      }
      console.log(jogador);
      console.log(`Deseja assistir a aula?`);

      horas = aula(jogador, horas);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }

      console.log(
        `Parabéns por ter sobrevivido mais um dia, boa sorte amanhã.`
      );
      dormir(jogador, 6);
      dias += 1;
    } else if (i == 2) {
      horas = acordar(jogador, horas);
      console.log(jogador);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }
      console.log(
        `quarta-feira é um dia comum(-50 sanidade, +40 sono, + 30 fome). Qual sua primeira escolha?`
      );

      horas = preparar(jogador, horas, dias);

      if (jogador.atrasos >= 6) {
        console.log(
          `Você perdeu o emprego devido ter se atrasado muitas vezes no mês. ${jogador.atrasos} atrasos`
        );
        break;
      }

      console.log(
        "Você teve o dia de trabalho comum de quarta feira e perdeu 50 de sanidade, ganho 40 de sono e 30 de fome."
      );

      horas = 18;
      jogador.sanidade -= 50;
      jogador.sono += 40;
      jogador.fome += 30;

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu sem emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }
      console.log(jogador);
      console.log(`Deseja assistir a aula?`);

      horas = aula(jogador, horas);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }

      console.log(
        `Parabéns por ter sobrevivido mais um dia, boa sorte amanhã.`
      );
      dormir(jogador, 6);
      dias += 1;
    } else if (i == 3) {
      horas = acordar(jogador, horas);
      console.log(jogador);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }
      console.log(
        `Quinta-feira é um dia comum(-50 sanidade, +40 sono, + 30 fome). Qual sua primeira escolha?`
      );

      horas = preparar(jogador, horas, dias);

      if (jogador.atrasos >= 6) {
        console.log(
          `Você perdeu o emprego devido ter se atrasado muitas vezes no mês. ${jogador.atrasos} atrasos`
        );
        break;
      }

      console.log(
        "Você teve o dia de trabalho comum de quinta feira e perdeu 50 de sanidade, ganho 40 de sono e 30 de fome."
      );

      horas = 18;
      jogador.sanidade -= 50;
      jogador.sono += 40;
      jogador.fome += 30;

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }
      console.log(jogador);
      console.log(`Deseja assistir a aula?`);

      horas = aula(jogador, horas);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }

      console.log(
        `Parabéns por ter sobrevivido mais um dia, boa sorte amanhã.`
      );
      dormir(jogador, 6);
      dias += 1;
    } else if (i == 4) {
      horas = acordar(jogador, horas);
      console.log(jogador);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }
      console.log(
        `Sexta-feira é um dia puxado(-70 sanidade, + 70 sono, +30 fome). Qual sua primeira escolha?`
      );

      horas = preparar(jogador, horas, dias);

      if (jogador.atrasos >= 6) {
        console.log(
          `Você perdeu o emprego devido ter se atrasado muitas vezes no mês. ${jogador.atrasos} atrasos`
        );
        break;
      }

      console.log(
        "Você teve o dia de trabalho comum de sexta feira e perdeu 70 de sanidade, ganho 70 de sono e 30 de fome."
      );

      horas = 18;
      jogador.sanidade -= 70;
      jogador.sono += 70;
      jogador.fome += 30;

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }
      console.log(jogador);
      console.log(`Deseja assistir a aula?`);

      horas = aula(jogador, horas);

      if (jogador.fome >= 100) {
        jogador.fome = 100;
        console.log(
          "Você desmaiou de fraqueza, ao acordar no hospital descobre que devido a fome você desmaiou e perdeu o emprego por ter faltado sem justificativa."
        );
        console.log(jogador.nome, `Fome: ${jogador.fome}`);
        break;
      }

      if (jogador.sanidade <= 0) {
        jogador.sanidade = 0;
        console.log("Você perdeu sua sanidade.");
        console.log(jogador.nome, `Sanidade: ${jogador.sanidade}`);
        break;
      }

      if (jogador.sono >= 100) {
        console.log(
          "Você desmaiou e perdeu seu emprego por ter faltado sem justificativa."
        );
        jogador.sono = 100;
        console.log(jogador.nome, `Sono: ${jogador.sono}`);
        break;
      }

      console.log(
        `Parabéns por ter sobrevivido mais um dia, boa sorte amanhã.`
      );
      dormir(jogador, 6);
      dias += 1;

      console.log(jogador);
    } else if (i == 5) {
      horas = acordar(jogador, horas);
      console.log("Hoje é sábado.(+20 sanidade, fome = 0, sono=0)");
      jogador.sanidade += 20;
      jogador.fome = 0;
      jogador.sono = 0;
      if (jogador.sanidade > 100) {
        jogador.sanidade = 100;
      }
      console.log(jogador);
      dormir(jogador, 8);
    } else {
      horas = acordar(jogador, horas);
      console.log("Hoje é domingo.(+20 sanidade, fome = 0, sono=0)");
      jogador.sanidade += 20;
      jogador.fome = 0;
      jogador.sono = 0;
      if (jogador.sanidade > 100) {
        jogador.sanidade = 100;
      }
      console.log(jogador);
      dormir(jogador, 8);
    }
  }
}
console.log(`Você sobreviveu por ${dias} dias.`);
