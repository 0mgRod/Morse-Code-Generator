const genView = document.getElementById("genMorse")
let genString = ""

function genMorse(string) {
  genString = ""
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "A" || string.charAt(i) == "a") {
      genString = genString + ".- "
    } else if (string.charAt(i) == "B" || string.charAt(i) == "b") {
      genString = genString + "-... "
    } else if (string.charAt(i) == "C" || string.charAt(i) == "c") {
      genString = genString + "-.-. "
    } else if (string.charAt(i) == "D" || string.charAt(i) == "d") {
      genString = genString + "-.. "
    } else if (string.charAt(i) == "E" || string.charAt(i) == "e") {
      genString = genString + ". "
    } else if (string.charAt(i) == "F" || string.charAt(i) == "f") {
      genString = genString + "..-. "
    } else if (string.charAt(i) == "G" || string.charAt(i) == "g") {
      genString = genString + "--. "
    } else if (string.charAt(i) == "H" || string.charAt(i) == "h") {
      genString = genString + ".... "
    } else if (string.charAt(i) == "I" || string.charAt(i) == "i") {
      genString = genString + ".. "
    } else if (string.charAt(i) == "J" || string.charAt(i) == "j") {
      genString = genString + ".--- "
    } else if (string.charAt(i) == "K" || string.charAt(i) == "k") {
      genString = genString + "-.- "
    } else if (string.charAt(i) == "L" || string.charAt(i) == "l") {
      genString = genString + ".-.. "
    } else if (string.charAt(i) == "M" || string.charAt(i) == "m") {
      genString = genString + "-- "
    } else if (string.charAt(i) == "N" || string.charAt(i) == "n") {
      genString = genString + "-. "
    } else if (string.charAt(i) == "O" || string.charAt(i) == "o") {
      genString = genString + "--- "
    } else if (string.charAt(i) == "P" || string.charAt(i) == "p") {
      genString = genString + ".--. "
    } else if (string.charAt(i) == "Q" || string.charAt(i) == "q") {
      genString = genString + "--.- "
    } else if (string.charAt(i) == "R" || string.charAt(i) == "r") {
      genString = genString + ".-. "
    } else if (string.charAt(i) == "S" || string.charAt(i) == "s") {
      genString = genString + "... "
    } else if (string.charAt(i) == "T" || string.charAt(i) == "t") {
      genString = genString + "- "
    } else if (string.charAt(i) == "U" || string.charAt(i) == "u") {
      genString = genString + "..- "
    } else if (string.charAt(i) == "V" || string.charAt(i) == "v") {
      genString = genString + "...- "
    } else if (string.charAt(i) == "W" || string.charAt(i) == "w") {
      genString = genString + ".-- "
    } else if (string.charAt(i) == "X" || string.charAt(i) == "x") {
      genString = genString + "-..- "
    } else if (string.charAt(i) == "Y" || string.charAt(i) == "y") {
      genString = genString + "-.-- "
    } else if (string.charAt(i) == "Z" || string.charAt(i) == "z") {
      genString = genString + "--.. "
    } else if (string.charAt(i) == " ") {
      genString = genString + "/ "
    } else if (string.charAt(i) == "-") {
      genString = genString + "-....- "
    } else if (string.charAt(i) == "/") {
      genString = genString + "-..-. "
    } else if (string.charAt(i) == ":") {
      genString = genString + "---... "
    } else if (string.charAt(i) == "(") {
      genString = genString + "-.--. "
    } else if (string.charAt(i) == ")") {
      genString = genString + "-.--.- "
    } else if (string.charAt(i) == "&") {
      genString = genString + ".-... "
    } else if (string.charAt(i) == "@") {
      genString = genString + ".--.-. "
    } else if (string.charAt(i) == '"') {
      genString = genString + ".-..-. "
    } else if (string.charAt(i) == ".") {
      genString = genString + ".-.-.- "
    } else if (string.charAt(i) == ",") {
      genString = genString + "--..-- "
    } else if (string.charAt(i) == "!") {
      genString = genString + "-.-.-- "
    } else if (string.charAt(i) == "'") {
      genString = genString + ".----. "
    } else if (string.charAt(i) == "+") {
      genString = genString + ".-.-. "
    } else if (string.charAt(i) == "=") {
      genString = genString + "-...- "
    } else if (string.charAt(i) == "1") {
      genString = genString + ".---- "
    } else if (string.charAt(i) == "2") {
      genString = genString + "..--- "
    } else if (string.charAt(i) == "3") {
      genString = genString + "...-- "
    } else if (string.charAt(i) == "4") {
      genString = genString + "....- "
    } else if (string.charAt(i) == "5") {
      genString = genString + "..... "
    } else if (string.charAt(i) == "6") {
      genString = genString + "-.... "
    } else if (string.charAt(i) == "7") {
      genString = genString + "--... "
    } else if (string.charAt(i) == "8") {
      genString = genString + "---.. "
    } else if (string.charAt(i) == "9") {
      genString = genString + "----. "
    } else if (string.charAt(i) == "0") {
      genString = genString + "----- "
    } else if (string.charAt(i) == "?") {
      genString = genString + "..--.."
    }
  }
  genString = genString.slice(0, -1)
  genView.innerText = genString
}

function convertToText(text) {
  let morseCode = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
    'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
    's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
  }

  let words = text.split(' ');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    for (let letter in morseCode) {
      if (morseCode[letter] === words[i]) {
        result += letter;
      }
    }
  }
  return result;
}
