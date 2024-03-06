
var BankBook;
function openDetailPage(id){

    window.open("https://localhost:44357/home/detail/"+id,'_self');
}

function openDetailResident(id){
    window.open('https://localhost:44357/resident/detail/'+id,'_self');
}


function _displayItem(data){
    console.log(data);

    const div = document.getElementById('detailpage');

    let pNumber = document.createElement('h2');
    let Number = document.createTextNode("Номер лицевого счета - "+data.number);
    pNumber.appendChild(Number);
    div.appendChild(pNumber)

    let pDateStart = document.createElement('h2');
    let DateStart = document.createTextNode("Дата начала действия - "+data.dateStart);
    pDateStart.appendChild(DateStart);
    div.appendChild(pDateStart)

    let pDateEnd = document.createElement('h2');
    let DateEnd = document.createTextNode("Дата окончания действия - "+data.dateEnd);
    pDateEnd.appendChild(DateEnd);
    div.appendChild(pDateEnd)

    let pAddress = document.createElement('h2');
    let Address = document.createTextNode("Адрес - "+data.address);
    pAddress.appendChild(Address);
    div.appendChild(pAddress)

    let pSquare = document.createElement('h2');
    let Square = document.createTextNode("Площадь помещения - "+data.sqaure);
    pSquare.appendChild(Square);
    div.appendChild(pSquare);

    console.log(data.residents.$values);
    _displayDetailTable(data.residents.$values);
}

function _displayResident(data){
    console.log(data);
    const div = document.getElementById('detailpage');

    let pFIO = document.createElement('h2')
    let fio = document.createTextNode('ФИО - '+data.fio);
    pFIO.appendChild(fio);
    div.appendChild(pFIO);

    let pPhone = document.createElement('h2');
    let Phone = document.createTextNode('Номер телефона - ' +data.phoneNumber );
    pPhone.appendChild(Phone);
    div.appendChild(pPhone);

    let pLs = document.createElement('h2');
    let ls;
    let address;
    if(data.bankBook!=null){
        ls = document.createTextNode('Номер лицевого счета - '+ data.bankBook.number);
        address =document.createTextNode('Адрес проживания - '+ data.bankBook.address);
    }
    else{
        ls = document.createTextNode('Номер лицевого счета - нет');
        address =document.createTextNode('Адрес проживания - нет');
    }
    pLs.appendChild(ls);
    div.appendChild(pLs);
    let pAddress = document.createElement('h2');
    pAddress.appendChild(address);
    div.appendChild(pAddress)
}


