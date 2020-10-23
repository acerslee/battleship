var view = {
    displayMessage: function(msg){
        var message = document.getElementById("message")
        message.innerHTML = msg;
    },
    displayHit: function(location){
        var cell = document.getElementByClass(location)
        cell.setAttribute("class", "hit")
    },
    displayMiss: function(location){
        var cell = document.getElementByClass(location)
        cell.setAttribute("class", "miss")
    }
};