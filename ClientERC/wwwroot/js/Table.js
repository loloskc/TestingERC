function _displayItems(data){
    const tBody = document.getElementById('bankBookTable')

    tBody.innerHTML ='';
    console.log(data);
    console.log(data.$values)
    data.$values.forEach(item=>{
        let tr = tBody.insertRow();
        tr.id = item.id;
        tr.onclick = (event) =>{
            openDetailPage(item.id)
        }

        let tdNumber = tr.insertCell(0);
        let Number = document.createTextNode(item.number);
        tdNumber.appendChild(Number);

        let tdDateStart = tr.insertCell(1);
        let DateStart = document.createTextNode(item.dateStart);
        tdDateStart.appendChild(DateStart);

        let tdDateEnd = tr.insertCell(2);
        let DateEnd = document.createTextNode(item.dateEnd);
        tdDateEnd.appendChild(DateEnd);

        let tdAddress = tr.insertCell(3);
        let Address = document.createTextNode(item.address);
        tdAddress.appendChild(Address);

        let tdSquare = tr.insertCell(4);
        let Square = document.createTextNode(item.sqaure);
        tdSquare.appendChild(Square);

        let tdResidents = tr.insertCell(5);
        item.residents.$values.forEach(resident=>{
            let paragraphElement = document.createElement("p");
            let textResident = document.createTextNode(resident.fio)
            paragraphElement.appendChild(textResident)
            tdResidents.appendChild(paragraphElement);
        });


    })

}

