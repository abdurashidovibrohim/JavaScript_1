 let w = 19

if(w % 2 == 0){
    console.log('w soni juft')
}else{
    console.log('w soni toq')
}

let a = parseInt(Math.random() * 100)
if (a % 2 == 0) {
  console.log(a + " soni juft")
} else {
  console.log(a + " soni toq")
}
if (a % 3 == 0) {
  if (a % 5 == 0) {
    console.log(a + " soni 3ga va 5ga bo'linadi")
  } else {
    console.log(a + " soni 3ga bo'linadi")
  }
} else if (a % 5 == 0) {
  console.log(a + " soni 5ga bo'linadi")
} else {
  console.log(a + " soni 3ga ham 5ga ham bo'linmaydi")
}
let b = parseInt(Math.random() * 20)
let c = parseInt(Math.random() * 20)
let difference1 = b-5
let difference2 = c-5
difference1 = Math.abs(difference1)
difference2 = Math.abs(difference2)
console.log("b= " + b + " c= " + c)
if (b > 5) {
  if (c > 5) {
    if (b > c) {
      console.log(c + " soni 5ga yaqinroq")
    } else {
      console.log(b + " soni 5ga yaqinroq")
    }
  } else if(difference1 > difference2) {
    console.log(c + " soni 5ga yaqinroq")
  
}else{
  console.log(b + " soni 5ga yaqinroq")
}
} else if(c>5){
if(difference1 > difference2) {
  console.log(c + " soni 5ga yaqinroq")
}else if(difference1 < difference2){
  console.log(b + " soni 5ga yaqinroq")
}else{
  console.log("ikkalasi ham teng yaqin")
}
}else if(b>c){
  console.log(b + " soni 5ga yaqinroq")
}else{
  console.log(c + " soni 5ga yaqinroq")
}