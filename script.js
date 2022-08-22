const obj = document.getElementById("txtToMorse")
let genString = ""

function genMorse(string) {
  genString = ""
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == "A" || string.charAt(i) == "a") {
      genString = genString + ".- "
    } else if (string.charAt(i) == "B" || string.charAt(i) == "b") {
      genString = genString + "-... "
    }
  }
  genString.slice(0, -1)
  console.log(genString)
}

genMorse("Ab")
