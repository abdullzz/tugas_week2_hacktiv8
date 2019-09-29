//1. Melakukan Looping Menggunakan While
function looping_menggunakan_while(){
  var counter = 0
  console.log("Looping Pertama".toUpperCase())
  while(counter != 20){
    counter += 2
    console.log(counter + " - I love coding")
  }
  console.log("Looping Kedua".toUpperCase())
  while(counter != 0){
    console.log(counter + " - I will become fullstack developer")
    counter -= 2
  }
}

//2. Melakukan Looping Menggunakan For
function looping_menggunakan_for()
{
  var counter = 0
  console.log("Looping Pertama".toUpperCase())
  for(counter = 1; counter <= 20; counter++){
    console.log(counter + " - I love coding")
  }
  console.log("Looping Kedua".toUpperCase())
for(counter = 20; counter >= 1; counter--){
    console.log(counter + " - I will become fullstack developer")
  }
}

//3. Angka Ganjil dan Genap
function looping_menggunakan_conditional()
{
  var counter;
  for(counter = 1; counter<=100; counter++){
    if(counter % 2 == 0){
      console.log("GANJIL")
    }
    else(console.log("GENAP"))
  }
  for(counter = 1; counter<=100; counter+=2){
    if(counter % 3 == 0){
      console.log(counter + " KELIPATAN 3" )
    }
    else{
      console.log("")
    }
  }
  for(counter = 1; counter<=100; counter+=5){
    if(counter % 6 == 0){
      console.log(counter + " KELIPATAN 6" )
    }
    else{
      console.log("")
    }
  }
  for(counter = 1; counter<=100; counter+=9){
    if(counter % 10 == 0){
      console.log(counter + " KELIPATAN 10" )
    }
    else{
      console.log("")
    }
  }
}

looping_menggunakan_while()
console.log("\n")
looping_menggunakan_for()
console.log("\n")
looping_menggunakan_conditional()

