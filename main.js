function startmic()
{
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2fi_8cDmK/model.json", model_ready)
}

function model_ready()
{
    classifier.classify(gotresult)
}


function gotresult(e,r)
{
    if(e)
    {
        console.error(e)
    }

    else
    {
        console.log(r)
        document.getElementById("show_animal").innerHTML= "I can hear:"+ r[0].label
        document.getElementById("Detect_voice").innerHTML= "Accuracy- "+ (r[0].confidence*100).toFixed(2)+"% "

        img= document.getElementById("ear_picture")

        if(r[0].label=="Background Noise")
        {
            img.src= "https://shreepng.com/img/Inside/BodyPart/Ear/ear%20drawing.png"
        }

        if(r[0].label=="Dog")
        {
            img.src= "Dog_picture.jpg"
        }

        if(r[0].label=="Cat")
        {
            img.src= "Cat_picture.jpg"
        }

        if(r[0].label=="Rabbit")
        {
            img.src= "Rabbit_picture.jpg"
        }
    }
}