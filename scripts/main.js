function f1() {​​​​​
alert("Coming soon!");
}​​​​​
function f2() {​​​​​
alert("Coming soon!");
}​​​​​
function f3() {​​​​​
alert("Coming soon!");
}​​​​​
//encryption(encrypts the plain text into a cipher text)
function encrypt() {
    var plainmessage = prompt("Enter the plaintext message here");
    var ciphertext = "";
    ciphertext = plainmessage.replace(/a/g , "at").replace(/k/g , "kat").replace(/e/g , "et");
    document.getElementById("labox").innerhtml = ciphertext.charCodeAt()
}

//decryption (decrypts the cipher text into the plain text)
function decrypt() {
   var cmessage = prompt("Enter a ciphertext message");
   var plaintext = "";
   plaintext = cmessage.replace(/kat/g , "k").replace(/et/g , "e").replace(/at/g , "a");
   document.getElementById("labox").innerHTML = plaintext.charCodeAt()
}