document.addEventListener("DOMContentLoaded", start)

function start(){
    let btnCalc = document.querySelector("button")
    btnCalc.addEventListener("click", count)
}

function count(){
    let inputTxT = document.getElementById("inputtext").value
    let pCount = document.getElementById("countnumber")
    if (inputTxT.length == "0"){
        document.getElementById("countnumber").textContent = "Please Write Something"
        document.getElementById("count").style.marginLeft = "100px"
        document.getElementById("countnumber").style.paddingLeft = "150px"
        document.getElementById("countnumber").style.paddingRight = "200px"
        document.getElementById("countnumber").style.paddingTop = "1px"
        document.getElementById("countnumber").style.paddingBottom = "1px"
        document.getElementById("countnumber").style.borderRadius = "500px"

    }else if(inputTxT.length != "0"){
        document.getElementById("countnumber").style.paddingLeft = "150px"
        document.getElementById("countnumber").style.paddingRight = "150px"
        document.getElementById("countnumber").style.paddingTop = "40px"
        document.getElementById("countnumber").style.paddingBottom = "40px"
        document.getElementById("countnumber").style.borderRadius = "500px"
        document.getElementById("countnumber").style.backgroundColor = "black"
        document.getElementById("countnumber").style.color = "white"
        document.getElementById("countnumber").style.fontSize = "32px"
    }
}