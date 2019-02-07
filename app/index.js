//import is for default export, addToDom is just a name we gave for a var, should keep it the same name you export
import addToDom from "./add_to_dom"; //Import used for other files for there stuff
//import {add, myArray} from "./calculate"; //for Named Functions
import calcDefault, {add, myArray} from "./calculate";


addToDom("h1",`2 + 8 = ${add(2, 8)}`);//WIll need to re-bundle before it will work

