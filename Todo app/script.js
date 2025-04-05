let todoList = [
    {
        item:'Buy Milk',
        dueDate: '04/03/2025'
    },
    {
        item:'Go to College',
    dueDate: '05/03/2025'
}
];

displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if(todoItem && todoDate){
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
    }else{
        alert('Please enter both task and due date.');
    }
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';
    
    for(let i = 0; i<todoList.length; i++){
        // let item = todoList[i].item;
        // let date = todoList[i].dueDate;
        let {item, dueDate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i}, 1); displayItems();" class="delete-btn">Delete</button>
        `;
        
    }
    containerElement.innerHTML = newHtml;
}