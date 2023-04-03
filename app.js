var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');
var table3 = document.getElementById('table3');
const sub = document.querySelector('#submit');

sub.addEventListener('click', async (e) => {
    e.preventDefault();
    var price = document.getElementById('price');
    var dish = document.getElementById('dish');
    var table = document.getElementById('table');
    var obj = {
        'price': price.value,
        'dish': dish.value,
        'table': table.value
    }
    //post on crud
    try {
        const res = await axios.post("https://crudcrud.com/api/960c2ab7b6354e12976e48f97b28e237/restroBill", obj)
        displayOnScreen(res.data);
    }
    catch (err) {
        console.log(err);
    }
})
//on load functionality
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get("https://crudcrud.com/api/960c2ab7b6354e12976e48f97b28e237/restroBill");
        for (let i = 0; i < response.data.length; i++) {
            displayOnScreen(response.data[i]);
        }
    }
    catch (err) {
        console.log(err)
    }
})

function displayOnScreen(res) {
    //create the li-textElement
    var li = document.createElement('li');
    li.setAttribute('class', 'list-group-item');
    li.textContent = `${res.price}/-  ${res.table}  ${res.dish}`;
    //create delete button
    var del = document.createElement('button');
    del.setAttribute('class', 'delete');
    del.innerText = 'X';
    //append button in li
    li.appendChild(del);
    if (res.table == 'Table 1') {
        table1.appendChild(li);
    }
    else if (res.table == 'Table 2') {
        table2.appendChild(li);
    }
    else {
        table3.appendChild(li);
    }
    //delete functionality
    del.addEventListener('click', (e) => {
        e.preventDefault();
        if (res.table == 'Table 1') {
            table1.removeChild(li);
        }
        else if (res.table == 'Table 2') {
            table2.removeChild(li);
        }
        else {
            table3.removeChild(li);
        }
        axios.delete(`https://crudcrud.com/api/960c2ab7b6354e12976e48f97b28e237/restroBill/${res._id}`);
    })
}