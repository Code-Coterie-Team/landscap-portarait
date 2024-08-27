function widthGreaterThanHeight() {
    const width = Number(document.getElementById("numWidth").value);
    const hight = Number(document.getElementById("numHeight").value);
    let textResult = document.getElementById("showText");
    let result;
    if (width > hight) {
        result = "it is landscap";
        // return true;
        console.log(result)
    } else if (width < hight) {
        result = "it is portarait";
        // return false;
        console.log(result)
    } 
    else {
        result = "they are equal";
        // return "they are equal"
        console.log(result)
    }
    textResult.innerHTML = result;
    
}


// let booleanWAndH = widthGreaterThanHeight();
// console.log("landscap : " + booleanWAndH)
