import {addToDom} from './helper'; //add ./helper first then in { will show whats in here}. 

export class Person {
  constructor(name){
    this.name = name;
  }
  speak(text){
    addToDom(`${this.name} says: ${text}`);
  }
  great(){
    this.speak(`Hello, name is ${this.name}!`)
  }
}
//added this.superpower to show you need a constructor then. 
export class SuperPerson extends Person {//Extending from Person we have access to the same functions
  constructor(name, superPower){
    super(name);//have to call method super(), parent constructor first in order to use this for this object.
    
    this.superPower = superPower; 
  }
  saySuperPower(){                   //No constructor is needed for an extended class, nor does react need one at all.
    this.speak(`My super power is ${this.superPower}`); //This comes from a base class then can branch off ot other forms from there
  }
}