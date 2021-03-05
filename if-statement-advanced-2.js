var shirtWidth = 27.99;
var shirtLength = 33.99;
var shirtSleeve = 10.129;

if((18<=shirtWidth&&shirtWidth<20)&&(shirtLength>=28&&shirtLength<29)&&(shirtSleeve>=8.13&&shirtSleeve<8.38)){
    console.log("S");
}else if((20<=shirtWidth&&shirtWidth<22)&&(shirtLength>=29&&shirtLength<30)&&(shirtSleeve>=8.38&&shirtSleeve<8.63)){
    console.log("M");
}else if((22<=shirtWidth&&shirtWidth<24)&&(shirtLength>=30&&shirtLength<31)&&(shirtSleeve>=8.63&&shirtSleeve<8.88)){
    console.log("L");
}else if((24<=shirtWidth&&shirtWidth<26)&&(shirtLength>=31&&shirtLength<33)&&(shirtSleeve>=8.88&&shirtSleeve<9.63)){
   console.log("XL");
}else if((26<=shirtWidth&&shirtWidth<28)&&(shirtLength>=33&&shirtLength<34)&&(shirtSleeve>=9.63&&shirtSleeve<10.13)){
  console.log("2XL");
}else if((28<=shirtWidth)&&(shirtLength>=34)&&(shirtSleeve>=10.13)){
   console.log("3XL");
}else{
    console.log("NA");
}
