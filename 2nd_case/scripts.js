

const   items = document.querySelector('.item'),
        infoArea = document.querySelector('.info-area'),
        item = items.querySelector('.data-placeholder'),  
        btnSave = document.querySelector("[name = 'btn-save']"),
        response = document.querySelector('.error-response'),
        name = document.querySelector("[name = 'name']"),
        phone = document.querySelector("[name = 'phone']"),
        inputs = document.querySelectorAll('input');

      console.log(phone.style);

let personData = [['Alex', +380955465591],['Karina',+380967597462],['Anatoliy',+380635425579],['Karina R', +380995427826]];      
    
function ShowDB () {

    items.innerHTML = '';
    personData.forEach((data, i) => {
        items.innerHTML += `
        <div class="data-placeholder">
            <div class="data-item">
                ${personData[i][0]}
            </div>
            <div class="data-item">
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
        });

    });
}

function ShowRowsCount () {
    const counter = document.querySelector('h1');
    counter.innerText = `DataBase (${personData.length} rows)`;
}

const hideError = () => {

    response.style.display = 'none';
    phone.style.borderBottomColor = '';

}
     
const addItems = () => {

    let newName = name.value,
        newPhone = phone.value;
    
    if (newPhone > 20) {
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