// Exercício 3

var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

var hoje = new Date();
var diaSemanaExtenso = diasDaSemana[hoje.getDay()];

alert("Hoje é " + diaSemanaExtenso + ".");
