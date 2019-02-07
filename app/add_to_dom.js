export default function addToDom(tagName, text){
  const newTag = document.createElement(tagName);
  newTag.innerText = text;
  document.getElementById("root").appendChild(newTag);
}
//Export can be for anything that can be stored. 
//default is for the setting of it
//export default addToDom; //Used to import this function to access other places