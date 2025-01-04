function RunLogicGate() {
    var INPUT_1 = document.getElementById('INPUT_1').checked;
    var INPUT_2 = document.getElementById('INPUT_2').checked;
    var GATE_1 = document.getElementById('GATE_1').value;

    var redLIGHT = document.getElementById('redLight');
    var greenLIGHT =document.getElementById('greenLight');

    var valResult;

    switch (GATE_1) {
        case "OPEN":
            if(INPUT_1 == true){
                valResult = INPUT_1;
            }
            else if(INPUT_2 == true){
                valResult = INPUT_2
            }
            else{
                valResult = false;
            }
            break;
        case "AND":
            valResult = INPUT_1 && INPUT_2;
            break;
        case "OR":
            valResult = INPUT_1 || INPUT_2;
            break;
        case "XOR":
            valResult = INPUT_1 !== INPUT_2;
            break;
        case "NOT":
            valResult = !INPUT_1;
            break;
        case "NAND":
            valResult = !(INPUT_1 && INPUT_2);
            break;
        case "NOR":
            valResult = !(INPUT_1 || INPUT_2);
            break;
        case "XNOR":
            valResult = (INPUT_1 && INPUT_2) || (!INPUT_1 && !INPUT_2);
            break;
        case "CLOSED":
            valResult = (INPUT_1 && INPUT_2) || (!INPUT_1 && !INPUT_2);
            break;
            
    }

    if(valResult == true){
        redLIGHT.style.display = "none";
        greenLIGHT.style.display = "block";
    }
    else if(valResult == false){
        redLIGHT.style.display = "block";
        greenLIGHT.style.display = "none";
    }

    /* var GATE_1 = document.getElementById('OUTPUT_1').value = valResult; */
}