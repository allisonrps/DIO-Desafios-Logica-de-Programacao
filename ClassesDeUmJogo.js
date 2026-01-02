// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque = "";

    // Estrutura de decisão
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    // Saída
    console.log(`o ${this.tipo} de ${this.idade} anos, atacou usando ${ataque}!!`);
  }
}

// Exemplo de uso
const heroi1 = new Heroi("Arthas", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 150, "mago");
const heroi3 = new Heroi("Lee", 40, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

// Chamando o método atacar
heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
