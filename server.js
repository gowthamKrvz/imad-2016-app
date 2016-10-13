var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-one'   : {
        title : 'Article One | gowtham_krvz',
        heading : 'Article one',
        date : ' Oct ,13 ,2016 | 12:36AM',
        content : 
        `<p>
            This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
        </p>
        <p>
            This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.This is my first article.
        </p>`
        
    },
    'article-two'   : {
        title : 'Article Two | gowtham_krvz',
        heading : 'Article two',
        date : ' Oct ,22 ,2016 | 11:56PM',
        content : 
        `<p>
           This is Article two serving you.
        </p>`
    },
    'article-three' : {
        title : 'Article Three | gowtham_krvz',
        heading : 'Article three',
        date : ' Nov ,06 ,2016 | 05:14AM',
        content : 
        `<p>
           This is Article three serving you.
        </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate=
    `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr />
                <div>
                    ${heading}
                </div>
                <div>
                    <p>
                    ${date}
                    </p>
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}

app.get('/:articleName', function(req,res){
    //The colon is used to convert the particulalr phrase after it (i.e., articleName in this case) into variable name.
    //So now articleName == ArticleOne.
 res.send(createTemplate(articles[articleName]));
    //articles[articleName] == {} ArticleOne (i.e., contents of ArticleOne).
 articleName = req.params.articleName;
    //The above statement is used for extracting the value to articleName.
    });

var counter = 0;
app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
