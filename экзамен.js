function reverse(s){
 const Rim = {
  'I' : 1,
  'V' : 5,
  'X' : 10
 } 
let result = 0
let prevalue = 0

for (let i = s.lenght - 1; i >= 0; i--){
  const currentvalue = Rim[s[i]]
    if (currentvalue < prevalue) {
      result -= currentvalue
    }
    else{
      result += currentvalue
    }
    preresult = currentvalue
}
return result
}