function show(){
    console.log("button clicked")}



function game(){
    let ans = prompt("Enter the Answers 5+5")
    if(ans==10){
        setTimeout(function () {
            alert("Level 1 passed")
        },2000)
      }
      else{
        setTimeout(function () {
            alert("Try again")
        },2000)
      }
      
}
