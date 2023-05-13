var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');
var table3 = document.getElementById('table3');
const sub = document.querySelector('#submit');
var prices = {
    'Biryani': 250,
    'Kebab': 100,
    'Paratha': 50,
    'Pizza': 200
}
var t1 = 0, t2 = 0, t3 = 0;

sub.addEventListener('click', async (e) => {
    e.preventDefault();
    var dish = document.getElementById('dish');
    var table = document.getElementById('table');
    var obj = {
        'dish': dish.value,
        'table': table.value
    }
    //post on crud
    try {
        const res = await axios.post("http://localhost:5000/add-order", obj)
        displayOnScreen(res.data);
    }
    catch (err) {
        console.log(err);
    }
})
//on load functionality
window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await axios.get("http://localhost:5000/fetch-all");
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
    li.textContent = `${res.dish}   ${prices[res.dish]}/-`;
    //create delete button
    var del = document.createElement('button');
    del.setAttribute('class', 'delete');
    del.innerText = 'X';
    //append button in li
    li.appendChild(del);
    
    if (res.tableNo == 'Table 1') {
        table1.appendChild(li);
        t1 += prices[res.dish];
        document.getElementById('total1').textContent = t1;
    }
    else if (res.tableNo == 'Table 2') {
        table2.appendChild(li);
        t2 += prices[res.dish];
        document.getElementById('total2').textContent = t2;
    }
    else {
        table3.appendChild(li);
        t3 += prices[res.dish];
        document.getElementById('total3').textContent = t3;
    }
    //delete functionality
    del.addEventListener('click', async (e) => {
        e.preventDefault();
        if (res.tableNo == 'Table 1') {
            table1.removeChild(li);
            t1 -= prices[res.dish];
            document.getElementById('total1').textContent = t1;

        }
        else if (res.tableNo == 'Table 2') {
            table2.removeChild(li);
            t2 -= prices[res.dish];
            document.getElementById('total2').textContent = t2;
        }
        else {
            table3.removeChild(li);
            t3 -= prices[res.dish];
            document.getElementById('total3').textContent = t3;
        }
        try {
            await axios.delete(`http://localhost:5000/delete-order/${res.id}`);
        }
        catch (err) {
            console.log(err)
        }
    })
}