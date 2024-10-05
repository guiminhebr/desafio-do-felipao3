class Heroi{
    constructor(nome, idade, classe){
      this.nome = nome 
      this.idade = idade
      this.classe = classe.toLowerCase()  // para facilitar a verificação de parametros, coloquei essa função para padronizar os valores
  }
    atacar(){
     let ataque = ""
     if (this.classe === "guerreiro"){
        ataque = "Espada"
      }
     else if(this.classe === "mago"){
        ataque = "Magia"
     }
     else if(this.classe === "monge"){
       ataque = "Artes Marciais"
     }
     else if (this.classe === "ninja"){
       ataque = "Shuriken"
     }
     else{
       ataque = "A mão"
     }
     console.log(`O ${this.classe} atacou usando ${ataque}`)
    
    
    
      
    }
  }
  //exemplo com 5 herois
  let Link = new Heroi("Link", 20, "Guerreiro")
  console.log(Link)
  Link.atacar()
  let Merlin = new Heroi("Merlin", 600, "mago")
  console.log(Merlin)
  Merlin.atacar()
  let ShiaoLee = new Heroi("Shiao Lee", 30, "monge")
  console.log(ShiaoLee)
  ShiaoLee.atacar()
  let Naruto = new Heroi("Naruto", 14, "Ninja")
  console.log(Naruto)
  Naruto.atacar()
  let pessoaNormal = new Heroi("Roberto", 34, "Humano normal")
  console.log(pessoaNormal)
  pessoaNormal.atacar()