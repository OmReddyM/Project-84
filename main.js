cnv = document.getElementById("myCanvas");
ctx = cnv.getContext("2d");
alphabet = "alphabet.jpeg"; number = "number.jpeg"; arrow = "arrow.jpeg"; special = "special.jpeg"; other = "other.png";
images = [alphabet, number, arrow, special, other]
window.addEventListener("keydown", keyDown);
function keyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((keyPressed > 96 && keyPressed < 123) || (keyPressed > 64 && keyPressed < 91)) {
        dispKey(0);
        document.getElementById("output").innerHTML = "Alphabet key pressed<br>ASCII number of pressed key = " + keyPressed;
        console.log("Alphabet Key");
    } else if ((keyPressed > 47 && keyPressed < 58)) {
        dispKey(1);
        document.getElementById("output").innerHTML = "Number key pressed<br>ASCII number of pressed key = " + keyPressed;
        console.log("Number Key");
    } else if ((keyPressed > 36 && keyPressed < 41)) {
        dispKey(2);
        document.getElementById("output").innerHTML = "Arrow key pressed<br>ASCII number of pressed key = " + keyPressed;
        console.log("Arrow Key");
    } else if ((keyPressed == 16 || keyPressed == 17 || keyPressed == 18 || keyPressed == 27)) {
        dispKey(3);
        document.getElementById("output").innerHTML = "Special key pressed<br>ASCII number of pressed key = " + keyPressed;
        console.log("Special Key");
    } else {
        dispKey(4);
        document.getElementById("output").innerHTML = "Other key pressed<br>ASCII number of pressed key = " + keyPressed;
        console.log("Other Key");
    }
}
function dispKey(x) {
    ImgTag = new Image();
    ImgTag.onload = ctx.drawImage(ImgTag, 0, 0, cnv.width, cnv.height);
    ImgTag.src = images[x];
}