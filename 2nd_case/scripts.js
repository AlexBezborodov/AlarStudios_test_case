

const items = document.querySelector('.item'),
      item = items.querySelector('.data-placeholder'),  
      btnSave = document.querySelector("[name = 'btn-save']");
      

    let personData = [['Alex', +380955465591],['Karina',+380967597462],['Anatoliy',+380635425579],['Karina R', +380995427826]];      
     
    function showDB () {

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
                <button class="btn-style">Del</button>
            </div>    
            `;
        });
    };
    showDB();
      





const addItems = () => {
    
    const name = document.querySelector("[name = 'name']").value,
          phone = document.querySelector("[name = 'phone']").value,
          inputs = document.querySelectorAll('.input-data');
          

    if(name != ''&& name !=Number ) {
        
        personDataitem = [ name , Number(phone)];
        personData.push(personDataitem);
        console.log(personData);

    }else {
        console.log('Something wrong');
    }
    
    showDB();
    inputs.innerHTML = '';
}
btnSave.addEventListener('click', addItems);