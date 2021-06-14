function valueInput() {
    // ambil semua hasil input form dihalaman form, masukan kedalam object 
    let data = {
        nama : document.querySelector('.nama-pemohon-inp').value,
        namaSdr : document.querySelector('.sdr-kandung-inp').value,
        namaSdrAyah : document.querySelector('.sdr-ayah-inp').value,
        namaSdrKakek : document.querySelector('.sdr-kakek-inp').value,
        qabilah : document.querySelector('.qabilah-inp').value,
        ttl : document.querySelector('.ttl-inp').value,
        alamat : document.querySelector('.alamat-inp').value,
        namaAnak : document.querySelector('.namaAnak-inp').value

    };

    // masukan data dari input ke div pada modal, dan juga ke input hidden agar nnti dikirim ke backend

    // nama-pemohon
    document.querySelector('.namaPemohon').innerHTML = data.nama;
    document.querySelector('.np-hidden').setAttribute("value",data.nama);

    // nama-saudara
    document.querySelector('.sdr-kandung-inp').innerHTML = data.namaSdr;
    document.querySelector('.nsdr-hidden').setAttribute("value",data.namaSdr);

    // nama-saudara Ayah
    document.querySelector('.sdr-ayah-inp').innerHTML = data.namaSdrAyah;
    document.querySelector('.nSdrAyah-hidden').setAttribute("value",data.namaSdrAyah);

// nama-saudara kakek <- dari sini
    document.querySelector('.sdr-kakek-inp').innerHTML = data.namaSdrKakek;
    document.querySelector('.nSdrKakek-hidden').setAttribute("value",data.namaSdrKakek);

    // qabilah
    document.querySelector('.qabilah-inp').innerHTML = data.qabilah;
    document.querySelector('.qbl-hidden').setAttribute("value",data.qabilah);

    // ttl
    document.querySelector('.ttl-inp').innerHTML = data.ttl;
    document.querySelector('.ttl-hidden').setAttribute("value",data.ttl);

    // alamat
    document.querySelector('.alamat-inp').innerHTML = data.alamat;
    document.querySelector('.alamat-hidden').setAttribute("value",data.alamat);

    // nama Anak
    document.querySelector('.namaAnak-inp').innerHTML = data.namaAnak;
    document.querySelector('.nAnak-hidden').setAttribute("value",data.namaAnak);


}

//cek ukuran browser
const width = window.innerWidth;


// jika lebar device < 400
if (width < 400) {

// logic dibawa ini untuk menghapus tag form pada hal html agar ketika disubmit pada mobile, data2nya tidak dikirim ke class php
    let form1 = document.querySelector('.formulir1');
    form1.innerHTML = '<br>';

    let form2 = document.querySelector('.formulir2');
    form1.innerHTML = '<br>';



}

