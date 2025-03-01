let totalNumber = document.querySelector("#totalNumber");
let form = document.querySelector("form");
let ul = document.querySelector("#ul");
let sum = 0;
axios
.get(`https://crudcrud.com/api/f8a3094b48784547acb9d1535d3b794c/studentManager`)
.then((res) => {
    for(let i = 0; i < res.data.length; i++){
        displayOnScreen(res.data[i]);
        sum++;
    }
    totalNumber.innerHTML = `All Notes : ${sum}`
})
.catch(err => console.log(err))

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
       
    
   
    let obj = {
        title : e.target.title.value,
        description : e.target.description.value
    }
    
    axios
        .post("https://crudcrud.com/api/f8a3094b48784547acb9d1535d3b794c/studentManager", obj)
        .then((res) => {
            displayOnScreen(res.data)
            
        })
        .catch(err => console.log(err))
        totalNumber.innerHTML = `All Notes : ${++sum}`
})

function displayOnScreen(studentDetails){
    let li = document.createElement("li");
    li.innerHTML = `${studentDetails.title} - ${studentDetails.description}`;
   
    li.id = `${studentDetails.title} - ${studentDetails.description}`;
    let del = document.createElement('button');
    del.textContent = "Delete";
    del.className = 'btn btn-danger';
    del.addEventListener('click', (e) => {
        let parent = e.target.parentElement;
        axios
            .delete(`https://crudcrud.com/api/f8a3094b48784547acb9d1535d3b794c/studentManager/${studentDetails._id}`)
        parent.remove();
        totalNumber.innerHTML = `All Notes : ${--sum}`
    })
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.className = 'btn btn-success'
    edit.addEventListener('click', (e)=> {
        let parent = e.target.parentElement;
        let id = parent.id;
        axios
            .delete(`https://crudcrud.com/api/f8a3094b48784547acb9d1535d3b794c/studentManager/${studentDetails._id}`)
        parent.remove();
        let arr = id.split('-');
        form.title.value = arr[0];
        form.description.value = arr[1];
        
        totalNumber.innerHTML = `All Notes : ${--sum}`
    })
    li.appendChild(del);
    li.appendChild(edit);
    ul.appendChild(li);
}