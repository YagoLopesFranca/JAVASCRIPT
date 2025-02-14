// var agora = new Date();
// var diaSem = agora.getDay();
/*
0 = Domingo
1 = Segunda 
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
 */

// console.log(diaSem);
// switch (diaSem) {
//   case 0:
//     console.log("Domingo");
//     break;
//   case 1:
//     console.log("Segunda");
//     break;
//   case 2:
//     console.log("Terça");
//     break;
//   case 3:
//     console.log("Quarta");
//     break;
//   case 4:
//     console.log("Quinta");
//     break;
//   case 5:
//     console.log("Sexta");
//     break;
//   case 6:
//     console.log("Sabado");
//     break;
//   default:
//     console.log("[ERRO] Dia invalido!");
//     break;
// }
console.log("LANCHONETE");
let pedido = 2;
console.log(pedido);
switch (pedido) {
  case 0:
    console.log("hambuergue, batata-frita, suco de laranja");
    break;
  case 1:
    console.log("Pizza Brotinho");
    break;
  case 2:
    console.log("Purê de aimpim");
    break;
  case 3:
    console.log("Lazanha de frango e Refrigerante");
    break;
  default:
    console.log(`[ERRO] Pedido Invalido`);
    break;
}
