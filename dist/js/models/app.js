import { Negociacao } from "./negociacao.js";


const negociacao = new Negociacao(new Date(), 10,300);

console.log(negociacao);

negociacao.quantidade = 3000;

console.log(negociacao)