
function openEditPage(id){
    window.open('https://localhost:44357/home/edit/'+id,'_self')
    loadEdit(id);
}

function openEditResident(id){
    window.open('https://localhost:44357/resident/edit/'+id,'_self')
}
async function loadEdit(id){
    const item = await getBankNotVoid(id);
    console.log(item)

    document.getElementById('edit-number').value =new Number(item.number);
    document.getElementById('edit-dateStart').value =item.dateStart
    document.getElementById('edit-dateEnd').value = item.dateEnd
    document.getElementById('edit-address').value = item.address;
    document.getElementById('edit-square').value = item.sqaure;
}

async function editBankBook(id){
    var number = document.getElementById('edit-number').value;
    var dateStart = document.getElementById('edit-dateStart').value;
    var dateEnd = document.getElementById('edit-dateEnd').value;
    var address = document.getElementById('edit-address').value;
    var square = document.getElementById('edit-square').value;
    let isValidNumber = await existByNumber(number);
    if(isValidNumber&&validData(dateStart,dateEnd)&&address!=''&&square!=''&&number!=''){
        const bankBook ={
            id: id,
            number: number,
            dateStart:String(dateStart),
            dateEnd:String(dateEnd),
            address:address,
            sqaure: Number(square),
            residents: null
        };

        console.log(bankBook);
        updateBook(bankBook);
    }
    else{
        alert('Где то ошибка')
    }
}

async function loadEditResident(id){
    const item = await getResidentNotVoid(id);
    console.log(item);

    document.getElementById('edit-fio').value = item.fio;
    document.getElementById('edit-phoneNumber').value = item.phoneNumber;
    document.getElementById('select').value = item.bankBookId;

}

async function editResident(id){

}
