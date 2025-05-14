class DesenvolvedoresWeb {
    constructor(nome, anosExperiencia) {
        this.nome = nome;
        this.anosExperiencia = anosExperiencia;
    }
}

class FrontEnd extends DesenvolvedoresWeb{
    constructor(nome, anosExperiencia, tecnologias) {
        super(nome, anosExperiencia);
        this.tecnologias = tecnologias;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou Dev Front-End com ${this.anosExperiencia} anos de experiência.`);
        console.log(`As tecnologias que eu domino são ${this.tecnologias.join(", ")}`);
    }
}

class BackEnd extends DesenvolvedoresWeb {
    constructor(nome, anosExperiencia, linguagemPrincipal) {
        super(nome, anosExperiencia);
        this.linguagemPrincipal = linguagemPrincipal;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou Dev Back-End com ${this.anosExperiencia} anos de experiência.`);
        console.log(`A minha linguagem de programação principal é ${this.linguagemPrincipal}.`);
    }
}

class FullStack extends DesenvolvedoresWeb {
    constructor(nome, anosExperiencia, projetos) {
        super(nome, anosExperiencia);
        this.projetos = projetos;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou Dev Full-Stack com ${this.anosExperiencia} anos de experiência.`);
        console.log(`Ao todo criei ${this.projetos} projetos na minha carreira.`);
    }
}

const dev1 = new FrontEnd("Jenifer", 3, ["HTML", "CSS", "JavaScript"]);
const dev2 = new BackEnd("Matheus", 6, "Phyton");
const dev3 = new FullStack("Fernando", 8, 34)

dev1.apresentar();
dev2.apresentar();
dev3.apresentar();