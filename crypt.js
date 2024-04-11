
function getMsg(){
    let message1 = document.querySelector("input").value;
    let response = document.getElementById("response");

    let p = document.querySelector("p");
    response.style.display = "block";


    let originalMsg = []
    message1 = message1.toLowerCase();
    for (let i = 0; i < message1.length; i++){
        let code = message1.charCodeAt(i) + 60
        if (message1.charCodeAt(i) === 32){
            originalMsg.push(' ')
            continue;
        }
        while (code > 122){
            code = (code - 122) + 96
        }
        originalMsg.push(String.fromCharCode(code))
    }
    originalMsg = originalMsg.join('');
    console.log(originalMsg)
    originalMsg = originalMsg.toString();


    originalMsg = originalMsg.replaceAll('a', ';');
    originalMsg = originalMsg.replaceAll('b', '}');
    originalMsg = originalMsg.replaceAll('c', '{');
    originalMsg = originalMsg.replaceAll('d', '§');
    originalMsg = originalMsg.replaceAll('e', '=');
    originalMsg = originalMsg.replaceAll('f', '+');
    originalMsg = originalMsg.replaceAll('g', '_');
    originalMsg = originalMsg.replaceAll('h', '-');
    originalMsg = originalMsg.replaceAll('i', ']');
    originalMsg = originalMsg.replaceAll('j', ':');
    originalMsg = originalMsg.replaceAll('k', '*');
    originalMsg = originalMsg.replaceAll('l', '&');
    originalMsg = originalMsg.replaceAll('m', '%');
    originalMsg = originalMsg.replaceAll('n', '$');
    originalMsg = originalMsg.replaceAll('o', '#');
    originalMsg = originalMsg.replaceAll('p', '@');
    originalMsg = originalMsg.replaceAll('q', '±');
    originalMsg = originalMsg.replaceAll('r', '9');
    originalMsg = originalMsg.replaceAll('s', '8');
    originalMsg = originalMsg.replaceAll('t', '7');
    originalMsg = originalMsg.replaceAll('u', '6');
    originalMsg = originalMsg.replaceAll('v', '5');
    originalMsg = originalMsg.replaceAll('w', '4');
    originalMsg = originalMsg.replaceAll('x', '3');
    originalMsg = originalMsg.replaceAll('y', '2');
    originalMsg = originalMsg.replaceAll('z', '1');

    
    originalMsg = originalMsg.replaceAll('A', ';');
    originalMsg = originalMsg.replaceAll('B', '}');
    originalMsg = originalMsg.replaceAll('C', '{');
    originalMsg = originalMsg.replaceAll('D', '§');
    originalMsg = originalMsg.replaceAll('E', '=');
    originalMsg = originalMsg.replaceAll('F', '+');
    originalMsg = originalMsg.replaceAll('G', '_');
    originalMsg = originalMsg.replaceAll('H', '-');
    originalMsg = originalMsg.replaceAll('I', ']');
    originalMsg = originalMsg.replaceAll('J', ':');
    originalMsg = originalMsg.replaceAll('K', '*');
    originalMsg = originalMsg.replaceAll('L', '&');
    originalMsg = originalMsg.replaceAll('M', '%');
    originalMsg = originalMsg.replaceAll('N', '$');
    originalMsg = originalMsg.replaceAll('O', '#');
    originalMsg = originalMsg.replaceAll('P', '@');
    originalMsg = originalMsg.replaceAll('Q', '±');
    originalMsg = originalMsg.replaceAll('R', '9');
    originalMsg = originalMsg.replaceAll('S', '8');
    originalMsg = originalMsg.replaceAll('T', '7');
    originalMsg = originalMsg.replaceAll('U', '6');
    originalMsg = originalMsg.replaceAll('V', '5');
    originalMsg = originalMsg.replaceAll('W', '4');
    originalMsg = originalMsg.replaceAll('X', '3');
    originalMsg = originalMsg.replaceAll('Y', '2');
    originalMsg = originalMsg.replaceAll('Z', '1');
    

    originalMsg = originalMsg.replaceAll(' ', '[');
    p.textContent = originalMsg;
}


function decodeMsg(){
    let secretMsg = document.getElementById("decode").value;
    let response = document.getElementById("response");

    let p = document.querySelector("p");


    secretMsg = secretMsg.replaceAll('[', ' ');

    secretMsg = secretMsg.replaceAll('1', 'z');
    secretMsg = secretMsg.replaceAll('2', 'y');
    secretMsg = secretMsg.replaceAll('3', 'x');
    secretMsg = secretMsg.replaceAll('4', 'w');
    secretMsg = secretMsg.replaceAll('5', 'v');
    secretMsg = secretMsg.replaceAll('6', 'u');
    secretMsg = secretMsg.replaceAll('7', 't');
    secretMsg = secretMsg.replaceAll('8', 's');
    secretMsg = secretMsg.replaceAll('9', 'r');
    secretMsg = secretMsg.replaceAll('±', 'q');
    secretMsg = secretMsg.replaceAll('@', 'p');
    secretMsg = secretMsg.replaceAll('#', 'o');
    secretMsg = secretMsg.replaceAll('$', 'n');
    secretMsg = secretMsg.replaceAll('%', 'm');
    secretMsg = secretMsg.replaceAll('&', 'l');
    secretMsg = secretMsg.replaceAll('*', 'k');
    secretMsg = secretMsg.replaceAll(':', 'j');
    secretMsg = secretMsg.replaceAll(']', 'i');
    secretMsg = secretMsg.replaceAll('-', 'h');
    secretMsg = secretMsg.replaceAll('_', 'g');
    secretMsg = secretMsg.replaceAll('+', 'f');
    secretMsg = secretMsg.replaceAll('=', 'e');
    secretMsg = secretMsg.replaceAll('§', 'd');
    secretMsg = secretMsg.replaceAll('{', 'c');
    secretMsg = secretMsg.replaceAll('}', 'b');
    secretMsg = secretMsg.replaceAll(';', 'a');

    
    secretMsg = secretMsg.replaceAll('1', 'Z');
    secretMsg = secretMsg.replaceAll('2', 'Y');
    secretMsg = secretMsg.replaceAll('3', 'X');
    secretMsg = secretMsg.replaceAll('4', 'W');
    secretMsg = secretMsg.replaceAll('5', 'V');
    secretMsg = secretMsg.replaceAll('6', 'U');
    secretMsg = secretMsg.replaceAll('7', 'T');
    secretMsg = secretMsg.replaceAll('8', 'S');
    secretMsg = secretMsg.replaceAll('9', 'R');
    secretMsg = secretMsg.replaceAll('±', 'Q');
    secretMsg = secretMsg.replaceAll('@', 'P');
    secretMsg = secretMsg.replaceAll('#', 'O');
    secretMsg = secretMsg.replaceAll('$', 'N');
    secretMsg = secretMsg.replaceAll('%', 'M');
    secretMsg = secretMsg.replaceAll('&', 'L');
    secretMsg = secretMsg.replaceAll('*', 'K');
    secretMsg = secretMsg.replaceAll(':', 'J');
    secretMsg = secretMsg.replaceAll(']', 'I');
    secretMsg = secretMsg.replaceAll('-', 'H');
    secretMsg = secretMsg.replaceAll('_', 'G');
    secretMsg = secretMsg.replaceAll('+', 'F');
    secretMsg = secretMsg.replaceAll('=', 'E');
    secretMsg = secretMsg.replaceAll('§', 'D');
    secretMsg = secretMsg.replaceAll('{', 'C');
    secretMsg = secretMsg.replaceAll('}', 'B');
    secretMsg = secretMsg.replaceAll(';', 'A');
    

    let message2 = []
    
    for (let i = 0; i < secretMsg.length; i++){
        let code2 = secretMsg.charCodeAt(i) - 60
        if (secretMsg.charCodeAt(i) === 32){
            message2.push(' ')
            continue;
        }
        while (code2 < 96){
            code2 = (code2 - 96) + 122
        }
        message2.push(String.fromCharCode(code2))
    }
    message2 = message2.join('');
    console.log(message2)
    message2 = message2.toString();


    response.style.display = "block";
    p.textContent = message2;
}

