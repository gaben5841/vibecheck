
function checkVibe() {
    var random_boolean = Math.random() >= 0.4;
    console.log(random_boolean);
    if (random_boolean) {
        document.getElementById("type").innerHTML = "You have passed the vibe check";
        document.getElementById("type").id = "boop";
        
    } else {
        document.getElementById("type").innerHTML = "You have F A I L E D the vibe check";
        document.getElementById("type").id = "boop";
        document.getElementById("undeterminate").id = "failed";
    }
}

setTimeout(function() { checkVibe(); } , 3000);
