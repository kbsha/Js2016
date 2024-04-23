let toDoList=[];
function addToDo(){
    let inputElement = document.querySelector('.js-name-input');
     let name=inputElement.value;
     toDoList.push(name);
     console.log(toDoList);
     inputElement.value='';

  //  toDoList.push=userInput;
}