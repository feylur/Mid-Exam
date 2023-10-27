let todos = document.getElementById('todos') 
let addbtn = document.getElementById('addbtn')

addbtn.addEventListener('click', function () {

    let input = document.getElementById('input').value;
    if (input) {
        let unique_val = Date.now()  
         
        str = `${input} <button class='delete_button' onclick='delete_button(${unique_val})'> Delete </button> `
        
        let li = document.createElement('li') 
        
        li.innerHTML = str 
        todos.appendChild(li) 
       
    } else {
        alert('Title Required')  
    }
    `this is name ${name}`

})

function delete_button(unique_val) {  
    
    let lis = todos.getElementsByTagName('li');
    
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i];
        if(li.innerHTML.includes(unique_val)){ 
            todos.removeChild(li) 
            return
        }
    }
   
}



