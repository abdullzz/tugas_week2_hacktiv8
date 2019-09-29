var tanggal=1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=10; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=1900; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch(bulan){
  case 1:
    output(tanggal,"Januari",tahun)
    break;
  case 2:
    output(tanggal,"Februari",tahun)
    break;
  case 3:
    output(tanggal,"Maret",tahun)
    break;
  case 4:
    output(tanggal,"April",tahun)
    break;
  case 5:
    output(tanggal,"Mei",tahun)
    break;
  case 6:
    output(tanggal,"Juni",tahun)
    break;
  case 7:
    output(tanggal,"Juli",tahun)
    break;
  case 8:
    output(tanggal,"Agustus",tahun)
    break;
  case 9:
    output(tanggal,"September",tahun)
    break;
  case 10:
    output(tanggal,"Oktober",tahun)
    break;
  case 11:
    output(tanggal,"November",tahun)
    break;
  case 12:
    output(tanggal,"Desember",tahun)
    break;
}

function output(tanggal,bulan,tahun){
  console.log(tanggal + " " + bulan + " " + tahun);
}