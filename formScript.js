function ambilNama() {
    let data = document.querySelector('#namaPemohon').value;
    alert(data);

}

//cek ukuran browser
const width = window.innerWidth;

if (width < 400) {

    let form1 = document.querySelector('.formulir1');
    form1.innerHTML = '<br>';

    let form2 = document.querySelector('.formulir2');
    form1.innerHTML = '<br>';



}

