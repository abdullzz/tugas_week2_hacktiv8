var nama = "abdul";
var peran = "tabib";

//kode dibawah buat mencegah inputtan peran tidak memiliki huruf kapital pada char pertamanya
peran = peran.charAt(0).toUpperCase() + peran.slice(1)

function selamatDatang(nama){
  console.log("Selamat datang di Dunia Proxytia, "+ nama)
}


if(!nama){
  console.log("Nama harus diisi!");
}
else{
  if(!peran){

    console.log("Halo " + nama +", Pilih peranmu untuk memulai game!");
  }
  else{
    if(peran === "Tabib"){
      selamatDatang(nama);
      console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
    }
    else if(peran === "Ksatria"){
      selamatDatang(nama);
      console.log("Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!")
    }
    else if(peran === "Penyihir"){
      selamatDatang(nama);
      console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
    }
  }
}