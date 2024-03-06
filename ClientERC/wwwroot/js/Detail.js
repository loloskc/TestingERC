
var BankBook;
function openDetailPage(id){

    window.open("https://localhost:44357/home/detail/"+id,'_self');
}


function _displayItem(data){
    console.log(data);
    const div = document.getElementById('detailpage');
    console.log(div);

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
    div.appendChild(pSquare)

    



}
