Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
})

camera = document.getElementById("camera")

Webcam.attach("#camera")

function takesnapshot() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='selfie' src='" + data + "'>"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ak0HdmWOr/.json", modelloaded)
function check() {
    speak()
}
p1 = ""
p2 = ""
function speak() {
    synth = window.speechSynthesis
    data1 = "the first prediction is " + p1
    data2 = "and the second prediction is " + p2
    utterthis = new SpeechSynthesisUtterance(data1 + data2)
    synth.speak(utterthis)
}


function modelloaded() {
    console.log("modelloaded");
}


