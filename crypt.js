
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

    originalMsg = originalMsg.replaceAll('?', '⏃');
    originalMsg = originalMsg.replaceAll('!', 'Θ');
    originalMsg = originalMsg.replaceAll('.', 'Λ');
    originalMsg = originalMsg.replaceAll('1', 'Ξ');
    originalMsg = originalMsg.replaceAll('2', 'Σ');
    originalMsg = originalMsg.replaceAll('3', 'Υ');
    originalMsg = originalMsg.replaceAll('4', 'Φ');
    originalMsg = originalMsg.replaceAll('5', 'Ψ');
    originalMsg = originalMsg.replaceAll('6', 'Ω');
    originalMsg = originalMsg.replaceAll('7', 'α');
    originalMsg = originalMsg.replaceAll('8', 'β');
    originalMsg = originalMsg.replaceAll('9', 'ζ');
    originalMsg = originalMsg.replaceAll('0', '⊕'); 
    originalMsg = originalMsg.replaceAll('"', '⎐');
    originalMsg = originalMsg.replaceAll('(', '⍙');  
    originalMsg = originalMsg.replaceAll(')', '⌇');
    originalMsg = originalMsg.replaceAll(',', '⏁'); 

    //old

    originalMsg = originalMsg.replaceAll('a', '⏈');
    originalMsg = originalMsg.replaceAll('b', 'ク');
    originalMsg = originalMsg.replaceAll('c', 'ミ');
    originalMsg = originalMsg.replaceAll('d', 'ㄓ');
    originalMsg = originalMsg.replaceAll('e', 'ᆕ');
    originalMsg = originalMsg.replaceAll('f', '₿');
    originalMsg = originalMsg.replaceAll('g', 'ᘡ');
    originalMsg = originalMsg.replaceAll('h', 'Ⴟ');
    originalMsg = originalMsg.replaceAll('i', 'ૐ');
    originalMsg = originalMsg.replaceAll('j', '૪');
    originalMsg = originalMsg.replaceAll('k', 'ਲ');
    originalMsg = originalMsg.replaceAll('l', '֎');
    originalMsg = originalMsg.replaceAll('m', '֏');
    originalMsg = originalMsg.replaceAll('n', '҂');
    originalMsg = originalMsg.replaceAll('o', 'Ѿ');
    originalMsg = originalMsg.replaceAll('p', 'Ѫ');
    originalMsg = originalMsg.replaceAll('q', 'Ѧ');
    originalMsg = originalMsg.replaceAll('r', 'Ͽ');
    originalMsg = originalMsg.replaceAll('s', 'Ϫ');
    originalMsg = originalMsg.replaceAll('t', 'ϟ');
    originalMsg = originalMsg.replaceAll('u', 'Ϋ');
    originalMsg = originalMsg.replaceAll('v', 'ʬ');
    originalMsg = originalMsg.replaceAll('w', 'ʕ');
    originalMsg = originalMsg.replaceAll('x', 'ʆ');
    originalMsg = originalMsg.replaceAll('y', 'Ƹ');
    originalMsg = originalMsg.replaceAll('z', 'ƕ');

    
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


    secretMsg = secretMsg.replaceAll('ƕ', 'z');
    secretMsg = secretMsg.replaceAll('Ƹ', 'y');
    secretMsg = secretMsg.replaceAll('ʆ', 'x');
    secretMsg = secretMsg.replaceAll('ʕ', 'w');
    secretMsg = secretMsg.replaceAll('ʬ', 'v');
    secretMsg = secretMsg.replaceAll('Ϋ', 'u');
    secretMsg = secretMsg.replaceAll('ϟ', 't');
    secretMsg = secretMsg.replaceAll('Ϫ', 's');
    secretMsg = secretMsg.replaceAll('Ͽ', 'r');
    secretMsg = secretMsg.replaceAll('Ѧ', 'q');
    secretMsg = secretMsg.replaceAll('Ѫ', 'p');
    secretMsg = secretMsg.replaceAll('Ѿ', 'o');
    secretMsg = secretMsg.replaceAll('҂', 'n');
    secretMsg = secretMsg.replaceAll('֏', 'm');
    secretMsg = secretMsg.replaceAll('֎', 'l');
    secretMsg = secretMsg.replaceAll('ਲ', 'k');
    secretMsg = secretMsg.replaceAll('૪', 'j');
    secretMsg = secretMsg.replaceAll('ૐ', 'i');
    secretMsg = secretMsg.replaceAll('Ⴟ', 'h');
    secretMsg = secretMsg.replaceAll('ᘡ', 'g');
    secretMsg = secretMsg.replaceAll('₿', 'f');
    secretMsg = secretMsg.replaceAll('ᆕ', 'e');
    secretMsg = secretMsg.replaceAll('ㄓ', 'd');
    secretMsg = secretMsg.replaceAll('ミ', 'c');
    secretMsg = secretMsg.replaceAll('ク', 'b');
    secretMsg = secretMsg.replaceAll('⏈', 'a');

    
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
    

    //new 
     
    

    secretMsg = secretMsg.replaceAll('⎐', '"');
    secretMsg = secretMsg.replaceAll('⍙', '('); 
    secretMsg = secretMsg.replaceAll('⌇', ')');
    secretMsg = secretMsg.replaceAll('⏁', ','); 
    secretMsg = secretMsg.replaceAll('⊕', '0');
    secretMsg = secretMsg.replaceAll('ζ', '9');
    secretMsg = secretMsg.replaceAll('β', '8');
    secretMsg = secretMsg.replaceAll('α', '7');
    secretMsg = secretMsg.replaceAll('Ω', '6');
    secretMsg = secretMsg.replaceAll('Ψ', '5');
    secretMsg = secretMsg.replaceAll('Φ', '4');
    secretMsg = secretMsg.replaceAll('Υ', '3');
    secretMsg = secretMsg.replaceAll('Σ', '2');
    secretMsg = secretMsg.replaceAll('Ξ', '1');
    secretMsg = secretMsg.replaceAll('Λ', '.');
    secretMsg = secretMsg.replaceAll('Θ', '!');
    secretMsg = secretMsg.replaceAll('⏃', '?');
    
    
    
    

    
    
    
    

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

