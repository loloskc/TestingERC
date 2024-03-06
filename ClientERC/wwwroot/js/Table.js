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

function _displayDetailTable(data){
    const tBody = document.getElementById('residentTable');
    console.log(data);
    tBody.innerHTML = '';
    data.forEach(item=>{
        let tr = tBody.insertRow();
        tr.id = item.id;

        let tdId = tr.insertCell(0);
        let Id = document.createTextNode(item.id);
        tdId.appendChild(Id);

        let tdFIO = tr.insertCell(1);
        let FIO = document.createTextNode(item.fio);
        tdFIO.appendChild(FIO);

        let tdPhone = tr.insertCell(2);
        let Phone = document.createTextNode(item.phoneNumber);
        tdPhone.appendChild(Phone);

        let tdButton = tr.insertCell(3);
        let button = document.createElement('button')
        button.type='button';
        button.className = 'btn btn-danger'
        button.innerHTML ='Удалить'
        button.onclick = (event) =>{
            deleteResident(item.id);
        }
        console.log(button);
        tdButton.appendChild(button)

        let buttonEdit = document.createElement('button');
        buttonEdit.type = 'button';
        buttonEdit.className = 'btn btn-warning';
        buttonEdit.innerHTML ='Редактировать';
        buttonEdit.onclick = (event) =>{
            openEditResident(item.id)
        }
        buttonEdit.style = 'margin-left:10px'
        tdButton.appendChild(buttonEdit)


    });

}

function _displayResidents(data){
    const tBody = document.getElementById('resident');
    console.log(data)
    tBody.innerHTML='';
    data.$values.forEach(item=>{
        let tr = tBody.insertRow();
        tr.id = item.id;
        tr.onclick = (event) =>{
            openDetailResident(item.id)
        }

        let tdFIO = tr.insertCell(0);
        let FIO = document.createTextNode(item.fio);
        tdFIO.appendChild(FIO);

        let tdPhone = tr.insertCell(1);
        let Phone = document.createTextNode(item.phoneNumber);
        tdPhone.appendChild(Phone);


        let tdAddress = tr.insertCell(2);
        let Address;
        if(item.bankBook!=null){
            Address = document.createTextNode(item.bankBook.address);
        }
        else{
            Address =  document.createTextNode('Нет');
        }
        tdAddress.appendChild(Address);
    })
}