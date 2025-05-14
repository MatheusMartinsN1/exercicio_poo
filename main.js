class DesenvolvedoresWeb {
    constructor(nome, anosExperiencia) {
        this.nome = nome;
        this.anosExperiencia = anosExperiencia;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.anosExperiencia} anos de experiência.`);
    }
}

class FrontEnd extends DesenvolvedoresWeb {
    constructor(nome, anosExperiencia, tecnologias) {
        super(nome, anosExperiencia);
        this.tecnologias = tecnologias;
    }

    apresentar() {
        console.log(`Sou ${this.nome}, desenvolvedor(a) Front-End com ${this.anosExperiencia} anos de experiência.`);
        console.log(`Domino ${this.tecnologias.join(", ")}`);
    }
}

class BackEnd extends DesenvolvedoresWeb {
    constructor(nome, anosExperiencia, linguagemPrincipal) {
        super(nome, anosExperiencia);
        this.linguagemPrincipal = linguagemPrincipal;
    }

    apresentar() {
        console.log(`Sou ${this.nome}, desenvolvedor(a) Back-End com ${this.anosExperiencia} anos de experiência.`);
        console.log(`Minha linguagem principal é ${this.linguagemPrincipal}`);
    }
}

const dev1 = new FrontEnd("Matheus", 2, ["HTML", "CSS", "JavaScript"]);
const dev2 = new BackEnd("Jenifer", 6, "PHP");
const dev3 = new BackEnd("Carlos", 4, "Node.js")

dev1.apresentar();
dev2.apresentar();
dev3.apresentar();