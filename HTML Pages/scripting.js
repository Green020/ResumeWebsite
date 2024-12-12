/* ----- Variables & Arrays ----- */

/* ----- Functions and Events ----- */
function OnLoadBuild() {
    document.getElementById('checkMENU');

}

function SendMessage(message){
    document.getElementById('messageBoxOverlay').style.display = 'block';
    document.getElementById('messageMSGBox').style.display = 'block';
    document.getElementById('messageMSG').innerHTML = message;
}

function CloseMessage(){
    document.getElementById('messageBoxOverlay').style.display = 'none';
    document.getElementById('messageMSGBox').style.display = 'none';
    document.getElementById('messageMSG').innerHTML = "NO MESSAGE SET";
}