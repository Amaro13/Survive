"use strict";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function acordar(j, h) {
  j.fome += 20;
  h = 5;
  console.log(`Você acorda as ${h} da manhã  com o alarme.`);
  return h;
}

export function preparar(j, h, d) {
  const a = prompt(
    `1) Escovar os dentes se vestir e ir trabalhar. (Sanidade: -10, Fome: +10)\n2) Café da manhã, escovar os dentes se vestir e ir trabalhar. (Sanidade: -5,Fome é zerada e 50% de chance de atraso)\n3)Tomar banho, café da manhã, escovar os dentes se vestir e ir trabalhar. ( 66% Perigo de atraso para o trabalho e Fome é zerada)\n`
  );
  if (a == 1) {
    j.sanidade -= 10;
    j.fome += 10;
  } else if (a == 2) {
    h += Math.floor(Math.random() * 2 + 1) - 1;
    j.sanidade -= 5;
    j.fome = 0;
  } else if (a == 3) {
    h += Math.floor(Math.random() * 3 + 1) - 1;
    j.fome = 0;
  }

  h += 2;
  if (h > 7) {
    j.atrasos += 1;
    console.log(
      `Chegou atrasado no emprego chegando as ${h} invés de 7 horas.\n Lembre-se só pode ter 6 faltas no mês ou é demitido.\n Você tem ${j.atrasos} atrasos.`
    );
  }
  if (d % 30 == 0 && d > 29) {
    j.atrasos = 0;
    console.log(`Final do mês. Atrasos reiniciaram para 0.`);
  }
  return h;
}

export function aula(j, h) {
  const a = prompt(
    `1) Sim. (Sanidade: -10, Fome: +5)\n2) Não, vou comer, tomar banho e ir dormir. (Sanidade: -15, Fome é zerada)\n`
  );
  if (a == 1) {
    j.sanidade -= 10;
    j.fome += 5;
  } else if (a == 2) {
    j.sanidade -= 15;
    j.fome += 0;
  }

  h = 23;

  console.log(`Aula termino as ${h}, boa noite.`);

  return h;
}

export function dormir(j, a) {
  j.sanidade += 11 * a;
  j.sono -= 10 * a;
  if (j.sono < 0) {
    j.sono = 0;
  }
  if (j.sanidade > 100) {
    j.sanidade = 100;
  }
}
