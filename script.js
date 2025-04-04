//ex5
function ParImpar() {
    let n = parseInt(prompt("Escreva um número"));

    if (n % 2 == 0){
        parseInt(n = n + 1);
        console.log("O nº era par e agr é ímpar:", n);
    }
    else{
        parseInt(n = n + 1);
        console.log("O nº era ímpar e agr é par:", n);
    }
}

ParImpar();


//ex6
function VogalCons() {
    let pp = prompt("Digite uma letra");

        if ((pp == 'a') || (pp == 'e') || (pp == 'i') || (pp == 'o') || (pp == 'u')) {
            console.log("é uma vogal");
        } else {
            console.log("é uma consoante");
        }   

  }
  
  VogalCons();

  //ex7
  function Picole(){
    let pic = {"Chocolate":1.50,"Morango":2.50,"Creme":2.50,"Manga":3.20,"Melancia":3.40,"Vanilla Ice":3.00,"Céu Azul":3.60,"Brownie":4.00,"Hawaiano":5.00};

    console.log("Qual sabor de picolé deseja?");
    for (let sabor in cardapio)
        console.log(`- ${sabor}: R$${cardapio[sabor].toFixed(2)}`);

  }


  Picole();