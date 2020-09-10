
function Convert(){
    let inputAmount;
    let from=parseFloat(document.getElementById('from').value)
    let to=parseFloat(document.getElementById('to').value)

    inputAmount = document.getElementById('Amount').value;
    let Amount = parseInt(inputAmount)

    let S = (Amount * to)/from;
    // document.write("S =" + S)
    document.getElementById('abc').innerHTML="S =" + S
}
