const urlBank = 'https://localhost:44379/api/BankBooks/';

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
        .then(data=>openDetailPage(data))
        .catch(error => console.error('Unable to get items.', error));
}