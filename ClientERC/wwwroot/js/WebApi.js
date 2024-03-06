const urlBank = 'https://localhost:44379/api/BankBooks/';
const urlResident = 'https://localhost:44379/api/Residents/';
function getBankBooks(){
    const ds = fetch(urlBank)
        .then(response=>response.json())
        .then(data=>_displayItems(data))
        .catch(error => console.error('Unable to get items.', error));
    console.log(ds)
}

function getBankBook(id) {
    const ds = fetch(urlBank+id)
        .then(response=>response.json())
        .then(data=>_displayItem(data))
        .catch(error => console.error('Unable to get items.', error));
}

async function getBankNotVoid(id){
    const ds = await fetch(urlBank+id);
    const data =await ds.json();

    return data;
}
async function existByNumber(number){
    const ds = await fetch(urlBank+"NumberExist?Number="+number);
    const data = await ds.json();
    const isValid = await JSON.parse(data);
    return isValid;
}

function createNewBook(bankBook){
    const ds = fetch(urlBank,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bankBook)
    })
        .then(response=>response.json())
        .then(()=>{
            window.open('https://localhost:44357/');
        })
        .catch(error=>console.error('Erorr',error));
}

 function updateBook(bankBook){
    const ds = fetch(urlBank+bankBook.id,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(bankBook)
    })
        .then(()=>{
            window.open('https://localhost:44357','_self')
        })
        .catch(error=>console.error('Unable to update item',error))
}

function deletePage(id){
    fetch(urlBank+id,{
        method:'DELETE'
    })
        .then(()=>{
            window.open('https://localhost:44357/','_self')
        })
        .catch(error=>console.error('Unable to delete book',error));

}

async function getResidetTable(){
    const ds = fetch(urlResident)
        .then(response=>response.json())
        .then(data=>_displayResidents(data))
        .catch(error=>console.error('Unable to get items',error));
}

function getResident(id) {
    const ds = fetch(urlResident+id)
        .then(response=>response.json())
        .then(data=>_displayResident(data))
        .catch(error => console.error('Unable to get items.', error));
}

function getListBank(){
    const ds = fetch(urlBank)
        .then(response=>response.json())
        .then(data=>_displaySelect(data))
        .catch(error => console.error('Unable to get items.', error));
    console.log(ds)
}

function createNewResident(resident){
    const ds = fetch(urlResident,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body: JSON.stringify(resident)
    })
        .then(response=>response.json())
        .then(()=>{
            window.open('https://localhost:44357/resident/index')
        })
        .catch(error=>console.error('Unable to add item',error));
}

function deleteResident(id){
    fetch(urlResident+id,{
        method:'DELETE'
    })
        .then(()=>{
            window.open('https://localhost:44357/resident/index','_self')

        })
        .catch(error=>console.error('Unable to delete book',error));

}

async function getResidentNotVoid(id){
    const ds = await fetch(urlResident+id);
    const data = await ds.json()
    return data;

}

function updateResident(resident){
    const ds = fetch(urlResident+resident.id,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(resident)
    })
        .then(()=>{
            window.open('https://localhost:44357/resident/index','_self')
        })
        .catch(error=>console.error('Unable to update item',error));
}