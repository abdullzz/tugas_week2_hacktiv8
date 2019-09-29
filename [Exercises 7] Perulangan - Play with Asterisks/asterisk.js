//1. Menyusun Barisan Bintang
function menyusun_barisan_bintang(){
  var rows1 = 1;
  for(var counter = 0; counter < 5;counter++)
  {
    console.log("*")
  }
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
function nested_barisan_bintang(){
  var rows2 = 5;
  var result = "";
  for(let i = 1; i <= rows2; i++)
  {
    for(let j = 1; j <= rows2; j++)
    {
      result += "*"
    }
    result += "\n"
  }
  console.log(result)
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
function segitiga_barisan_bintang(){
  var rows3 = 5;
  var result = "";
  for(let i = 1; i <= rows3; i++)
  {
    for(let j = 1; j <= i; j++)
    {
      result += "*"
    }
    result += "\n"
  }
  console.log(result)
}

menyusun_barisan_bintang()
console.log("\n")
nested_barisan_bintang()
console.log("\n")
segitiga_barisan_bintang()