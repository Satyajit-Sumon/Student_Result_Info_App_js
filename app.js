const stName = document.querySelector('.stName');
const stRoll = document.querySelector('.stRoll');
const stDept = document.querySelector('.stDept');
const stGpa = document.querySelector('.stGpa');
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    if(stName.value =='' || stRoll.value =='' || stDept.value =='' || stGpa.value ==''){
        alert('all fields are required');
    }
    else{
        let tbody = document.querySelector('.tbody');
        let tr = document.createElement('tr');
        tbody.appendChild (tr);

        // For Name Field
        let td = document.createElement('td');
        td.innerHTML = stName.value;
        tr.appendChild (td);

        // For Roll Field
        let td1 = document.createElement('td');
        td1.innerHTML = stRoll.value;
        tr.appendChild (td1);

        // For Dept Field
        let td2 = document.createElement('td');
        td2.innerHTML = stDept.value;
        tr.appendChild (td2);

        // For GPA Field
        let td3 = document.createElement('td');
        td3.innerHTML = stGpa.value;
        tr.appendChild (td3);
    }
})