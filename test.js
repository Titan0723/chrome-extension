document.onreadystatechange = function () {
if (document.readyState == "complete") {
    var pTags = document.getElementsByTagName("P");
    var tweetClass = document.getElementsByClassName("TweetTextSize TweetTextSize--16px js-tweet-text tweet-text");
    var tweetClass2 = document.getElementsByClassName("TweetTextSize TweetTextSize--26px js-tweet-text tweet-text");
    const pTagsArr = [...pTags]; //Array.prototype.slice.call(pTags);

    const tweetClassArr = [...tweetClass];
    tweetClassArr.forEach(function(x){
        x.style.color = "#ef9610";
        x.style.fontFamily = "Comic Sans MS";
        x.style.fontVariant = "small-caps";  
        x.style.fontStyle = "oblique";
        x.style.direction = "rtl"; 
        x.style.webkitTransform = "rotateY(180deg)";
        x.style.mozTransform = "rotateY(180deg)";
        x.style.oTransform = "rotateY(180deg)";
        x.style.msTransform = "rotateY(180deg)";
        x.style.unicodeBidi = "bidi-override";
    })
    const tweetClassArr2 = [...tweetClass2];
    tweetClassArr2.forEach(function(x){
        x.style.color = "#f23ad9";
        x.style.fontFamily = "Comic Sans MS";
        x.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 20px #fff, 0 0 30px #FF1177, 0 0 40px #FF1177, 0 0 60px #FF1177, 0 0 100px #FF1177, 0 0 100px #FF1177";
        
    })
   }
 }