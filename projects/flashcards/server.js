let express = require ("express");
let app = express ();
let bodyParser = require ("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = process.env.PORT
if (port == null || port == ""){
   port = 1972;
}

let mongodb=require("mongodb");
let db

connectionString="mongodb+srv://flashcardUser:Drih88wxede0MP7t@cluster0-sucgt.mongodb.net/Flashcards?retryWrites=true&w=majority";
mongodb.connect(connectionString, {useNewUrlParser:true}, function (err, client) {
  db=client.db();
  app.listen (port, function () {
    console.log (`Listening intently on port FM ${port}.`)
  })
})

app.get ('/', function (req, res) {
  db.collection("BBG").find().toArray (function (err, items) {
    res.send (`<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <title>Flashcards</title>
      </head>
      <body>
      <div class = container>
        <div class="jumbotron" id="jumbotron">
          <h1 class="display-4">Ginosko Greek</h1>
          <p class="lead">Ginosko Greek is a flashcard program that will help you memorize and review Biblical Greek while keeping track of strong and weak areas as you go. This version of Ginosko Greek contains all of the words and definitions from William Mounce's Basics of Biblical Greek. This program provides you with the resources to memorize and review nearly 80% of the word occurrences in the Greek New Testament.</p>

          <hr class="my-4">
          <div class="dropdown show">
            <a class="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Review Chapter
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a class="dropdown-item" href="#">all</a>
              <a class="dropdown-item" href="#">3</a>
              <a class="dropdown-item" href="#">4</a>
              <a class="dropdown-item" href="#">5</a>
            </div>
          </div>
        </div>

        <div class="accordion" id="accordionExample">

          ${items.map (function (item) {
            return (` <div class="card">
            <div class="card-header" id="heading${item.word}">
              <h2 class="mb-0">
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse${item.word}" aria-expanded="true" aria-controls="collapse${item.word}">
                    ${item.word}
                </button>
                <br><br>
                <h6>chapter: ${item.chapter}</h6>
              </h2>
            </div>
            <div id="collapse${item.word}" class="collapse" aria-labelledby="heading${item.word}" data-parent="#accordionExample">
              <div class="card-body">
                ${item.meaning}
                <img src="/assets/img/bootstrap.svg" alt="" width="32" height="32" title="Bootstrap">

                <br><br>
                <button type="button" class="btn btn-outline-success btn-sm">Correct</button>
                <button type="button" class="btn btn-outline-danger btn-sm">Incorrect</button>
                <br><br><br>
                <p style="color: slategray">chapter ${item.chapter}</p>
              </div>
            </div>
          </div>`)
          }).join('')}

       </div>
       <br><br>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

      </body>
    </html>`)
  })

})

