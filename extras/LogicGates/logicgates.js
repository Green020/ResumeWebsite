function RunLogicGate() {
    var INPUT_1 = document.getElementById('INPUT_1').checked;
    var INPUT_2 = document.getElementById('INPUT_2').checked;
    var GATE_1 = document.getElementById('GATE_1').value;

    var redLIGHT = document.getElementById('redLight');
    var greenLIGHT = document.getElementById('greenLight');

    var valResult;

    ShowTable(GATE_1);

    switch (GATE_1) {
        case "OPEN":
            if (INPUT_1 == true) {
                valResult = INPUT_1;
            }
            else if (INPUT_2 == true) {
                valResult = INPUT_2
            }
            else {
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

    if (valResult == true) {
        redLIGHT.style.display = "none";
        greenLIGHT.style.display = "block";
    }
    else if (valResult == false) {
        redLIGHT.style.display = "block";
        greenLIGHT.style.display = "none";
    }

    /* var GATE_1 = document.getElementById('OUTPUT_1').value = valResult; */
}

function ShowTable(gate) {
    var openGATE = document.getElementById('openGATE');
    var andGATE = document.getElementById('andGATE');
    var orGATE = document.getElementById('orGATE');
    var xorGATE = document.getElementById('xorGATE');
    var notGATE = document.getElementById('notGATE');
    var nandGATE = document.getElementById('nandGATE');
    var norGATE = document.getElementById('norGATE');
    var xnorGATE = document.getElementById('xnorGATE');
    var closedGATE = document.getElementById('closedGATE');

    switch (gate) {
        case "OPEN":
            openGATE.style.display = "block";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "AND":
            openGATE.style.display = "none";
            andGATE.style.display = "block";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "OR":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "block";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "XOR":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "block";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "NOT":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "block";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "NAND":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "block";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "NOR":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "block";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "none";
            break;
        case "XNOR":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "block";
            closedGATE.style.display = "none";
            break;
        case "CLOSED":
            openGATE.style.display = "none";
            andGATE.style.display = "none";
            orGATE.style.display = "none";
            xorGATE.style.display = "none";
            notGATE.style.display = "none";
            nandGATE.style.display = "none";
            norGATE.style.display = "none";
            xnorGATE.style.display = "none";
            closedGATE.style.display = "block";
            break;

    }
}