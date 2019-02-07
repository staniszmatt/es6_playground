//Some functions that do some simple stuff
//when import from npm in '' just all the name installed
import $ from 'jquery' //used $ to keep with the syntax of jQuery 

export function addToDom(text){
  $("#root").append(`<h1>${text}</h1>`);
}