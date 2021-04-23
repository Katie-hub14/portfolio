function f1() {​​​​​
alert("Coming soon!");
}​​​​​
function f2() {​​​​​
alert("Coming soon!");
}​​​​​
function f3() {​​​​​
alert("Coming soon!");
}​​​​​
//encryption(encrypts a plain text into a cipher text)
function encrypt() {
    var pmessage = prompt ("Enter the plaintext message here");
    var ciphertext = "";
    ciphertext = pmessage.replace(/a/g , "at").replace(/k/g , "kat").replace(/e/g , "et");
    document.getElementById("box").innerhtml = ciphertext.charAt()
}

//decryption (decrypts the cipher text into the plain text)
function decrypt()
   var cmessage = prompt("Enter a ciphertext message");
   var plaintext = "";
   plaintext = cmessage.replace(/kat/g , "k").replace(/et/g , "e").replace(/at/g , "a");
   document.getElementById("box").innerHTML = plaintext.charCodeAt()