function openCreatePage(){
    window.open('https://localhost:44357/home/create','_self')
}

function openCreateResident(){
    window.open('https://localhost:44357/resident/create','_self')
}

async function addBankBook(){
    var number = document.getElementById('add-number').value;
    var dateStart =document.getElementById('add-dateStart').value;
    var dateEnd = document.getElementById('add-dateEnd').value
    console.log(dateEnd);
    var address = document.getElementById('add-address').value;
    var square = document.getElementById('add-square').value;
    let isValidNumber = await existByNumber(number);
    console.log(isValidNumber);
    console.log(validData(dateStart,dateEnd));
    console.log(address!='');
    console.log(square!='');
    console.log(number!='')
    console.log(address);
    console.log(square);

    if(isValidNumber&&validData(dateStart,dateEnd)&&address!=''&&square!=''&&number!=''){

        const bankBook = {
            number: number,
            dateStart:String(dateStart),
            dateEnd:String(dateEnd),
            address:address,
            sqaure:Number(square),
            residents: null

        }
        console.log(bankBook);
        createNewBook(bankBook);
        console.log('good');
    }
    else{
        alert('Где то ошибка');
    }




}

function validData(dateStart,dateEnd){
    return dateStart<dateEnd;
}

function _displaySelect(data){
    const select = document.getElementById('select');

    data.$values.forEach(item=>{
        let options = document.createElement('option')
        options.id = item.id;
        options.value = item.id;
        let number = document.createTextNode(item.number);
        options.appendChild(number)

        select.appendChild(options)
    })

}

async function addResident(){
    var fio = document.getElementById('add-fio').value;
    var phoneNumber = document.getElementById('add-phoneNumber').value;
    var ls = document.getElementById('select').value;
    console.log(ls);

    if(fio!=''&&phoneNumber!=''){
        const resident ={
            fio: String(fio),
            bankBookId:Number(ls),
            phoneNumber:String(phoneNumber)
        };
        createNewResident(resident);
        console.log(resident);
    }

}


