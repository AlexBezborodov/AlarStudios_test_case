

const   items = document.querySelector('.item'),
        infoArea = document.querySelector('.info-area'),
        item = items.querySelector('.data-placeholder'),  
        btnSave = document.querySelector("[name = 'btn-save']"),
        response = document.querySelector('.error-response'),
        name = document.querySelector("[name = 'name']"),
        phone = document.querySelector("[name = 'phone']"),
        inputs = document.querySelectorAll('input'),
        edit = document.querySelector("[name = 'btn-edit']"),
        save = document.querySelector("[name = 'btn-save-all']"),
        cancel = document.querySelector("[name = 'btn-cancel']"),
        inputData = document.querySelector('.input-data');        


let personData = [['Alex', +380955465591],['Karina',+380967597462],['Anatoliy',+380635425579],['Karina R', +380995427826]];      

cancel.style.display = 'none';
save.style.display = 'none';    

function ShowDB () {

    items.innerHTML = '';
    personData.forEach((data, i) => {
        items.innerHTML += `
        <div id=${i} class="data-placeholder">
            <div class="data-item">
                ${personData[i][0]}
            </div>
            <div id=${i} class="data-item">
                ${personData[i][1]}            
            </div>
            <button class="btn-style delete">Del</button>
        </div>    
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {

        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            personData.splice(i,1);
            ShowDB();
            ShowRowsCount();
        });

    });
}

const editDB = () => {
    cancel.style.display = 'block';
    save.style.display = 'block';
    inputData.style.visibility = 'hidden';
    items.innerHTML = '';
    personData.forEach((data, i) => {

        

        items.innerHTML += `
        <div class="data-placeholder">
            <div id=${i} class="data-item editable" contenteditable="true">
                ${personData[i][0]}
            </div>
            <div id=${i} class="data-item editable" contenteditable="true">
                ${personData[i][1]}            
            </div>
            <button class="btn-style delete">Del</button>
        </div>    
        `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {

        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            personData.splice(i,1);
            EditDB();
            ShowRowsCount();
        });

    });
}

const cancelEdit = () => {
    cancel.style.display = 'none';
    inputData.style.visibility = 'visible';
    save.style.display = 'none';
    ShowDB();
    ShowRowsCount();

}

const saveAll = () => {

    let personDataItem = [];
        personData = [];
    
     document.querySelectorAll('.data-item').forEach((el, i) => {  
        
        personDataItem.push(el.innerText);
        

    });
    console.log(personDataItem);
    const size = 2,
          sliced_array = [];  
    for (let i = 0; i <personDataItem.length; i += size) {
        sliced_array.push(personDataItem.slice(i, i + size));
    }
    personData = sliced_array;
    console.log(personData);
    ShowDB();
    cancel.style.display = 'none';
    inputData.style.visibility = 'visible';
    save.style.display = 'none';

    

}

function ShowRowsCount() {
    const counter = document.querySelector('h1');
    counter.innerText = `DataBase (${personData.length} rows)`;
}

const hideError = () => {

    response.style.display = 'none';
    phone.style.borderBottomColor = '';

};
     
const addItems = () => {

    let newName = name.value,
        newPhone = phone.value;
    
    if (newPhone.length > 20) {
        response.style.display = 'block';
        response.innerText = 'number is too long';
        response.style.color = 'red';  
        phone.style.borderBottomColor = 'red';
    }else {

        if(newName != '' && newName !=Number ) {
            if(newName.length > 20 ){
    
              newName =  ` ${newName.substring(0, 21)}...`;
                
            }
    
            
            personDataitem = [ newName , Number(newPhone)];
            personData.push(personDataitem);
            console.log(personData);
            ShowRowsCount();
            response.style.display = 'block';
            response.innerText = 'Item added';
            response.style.color = 'blue';
            
    
        }else {
            response.style.display = 'block';
            response.innerText = 'Something wrong';
            response.style.color = 'red';     
        }

    }

    
    ShowDB();
    inputs.forEach(clearInput => clearInput.value = '');
    
};



ShowDB();
ShowRowsCount();

btnSave.addEventListener('click', addItems);
infoArea.addEventListener('click', hideError);
phone.addEventListener('click', hideError);
name.addEventListener('click', hideError);
edit.addEventListener('click', editDB);
cancel.addEventListener('click', cancelEdit);
save.addEventListener('click', saveAll)