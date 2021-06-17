Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100,
});
Webcam.attach("#camera")

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"> '
    });
}
console.log('ml5 version', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3qAUWk_zJ/model.json', modelLoaded)

//project-105

function modelLoaded() {
    console.log('model is loaded')
}

function check() {
    img = document.getElementById('selfie_image')
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results)
        document.getElementById("object_name").innerHTML = results[0].label
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(2)
    }
}