

/* Node => module.exports
Web => window */

/* ESCOPO */

/* Global => Quando começamos a escrever nossa aplicação.
No contexto global, o This faz referencia ao objeto global, que é o objeto window no navegador de internet ou ao objeto global no Node.jd */

/* Local => Por exemplo, dentro de uma função */

/* Escopo Global: */

const global = "Lucas Douglas"


/* Escopo Local: */

function MeuNome() {

    const local = "Lucas Douglas"
}


/* this faz referencia ao objeto person */

const person = {
    name: "Lucas Douglas",
    age: 22,
    talk: function () {
        console.log(this.age)
    }
}
person.talk


/* Classes */

class Person {
    constructor(name, age){
console.log(`Olá ${name}`)
    this.name= name,
    this.age=age
}
  
    talk () {
        console.log(`Eu me chamo ${this.name} eu tenho ${this.age} anos`)
    }
}

const NewPerson = new Person("Lucas Douglas", 22)

 NewPerson.talk() 

