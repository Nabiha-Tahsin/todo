const form_data = document.querySelector('.form input')
const send_btn = document.querySelector('.form button')
const ul = document.querySelector('.container ul')
const del_btn = document.querySelector('.container ul li button')

// Show Data 
function showData (){
    let content = '';

    alldata.forEach((item, index) => {

        content += `
            <li>${item} <button onclick='deleteData("${index}")'><i class="fa-regular fa-trash-can"></i></button></li>    
    `
    })
    
    ul.innerHTML = content;
}

showData ();

// Send Data 
send_btn.onclick = () => {
    let value =  form_data.value;
    
    alldata.push(value)

    showData ();

    form_data.value = '';
}

// Delete Data
function deleteData(index){
    // 1 Mean we want to remove only 1 item
    alldata.splice(index, 1);
    
    showData ();
}

