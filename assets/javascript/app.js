// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCsS0o9xgxdRf_ZN577DzptrN-l5u5fq_U",
    authDomain: "train-scheduler-f0534.firebaseapp.com",
    databaseURL: "https://train-scheduler-f0534.firebaseio.com",
    projectId: "train-scheduler-f0534",
    storageBucket: "",
    messagingSenderId: "309382794640"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$("#submitButton").on("click", function(event) {

    event.preventDefault();

    var name = $("#nameInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var first = $("#firstInput").val().trim();
    var firstHour = first.substring(0,2);
    var firstMinutes = first.substring(3,5);
    var frequency = $("#frequencyInput").val().trim();

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();


    // console.log("Name: " + name);
    // console.log("Destination: " + destination);
    // console.log("First train: " + first);
    // console.log("First train hour: " + firstHour);
    // console.log("First train minutes: " + firstMinutes);
    // console.log("Frequency: " + frequency);
    // console.log("Current Time: " + today);
    // console.log("Current Hours: " + h);
    // console.log("Current Minutes: " + m);


    database.ref().push({
        name: name,
        destination: destination,
        first: first,
        firstHour: firstHour,
        firstMinutes: firstMinutes,
        frequency: frequency
    });

});

database.ref().on("value", function(snapshot) {

    $("#table").empty();

    // console.log(snapshot.val());

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    snapshot.forEach(function(childNodes) {
        var current = childNodes.val();
        var name = current.name;
        var destination = current.destination;
        var first = current.first;
        var firstHour = current.firstHour;
        var firstMinutes = current.firstMinutes;
        var frequency = current.frequency;

        var tr = $("<tr>");
        var tdName = $("<td>");
        var tdDestination = $("<td>");
        var tdFrequency = $("<td>");
        var tdNext = $("<td>");
        var tdMinutesAway = $("<td>");
    
        tdName.text(name);
        tdDestination.text(destination);
        tdFrequency.text(frequency);
    
        var next = "";
        var minutesAway;
    
        if ((parseFloat(firstHour) * 60 + parseFloat(firstMinutes)) > (parseFloat(h) * 60 + parseFloat(m))) {
            next = first;
            minutesAway = (parseFloat(firstHour) * 60 + parseFloat(firstMinutes) - (parseFloat(h) * 60 + parseFloat(m)));
        } else {
            minutesAway = (frequency - (m % frequency));
            if (m + minutesAway >= 60) {
                next = "" + (h+1) + ":" + (m + minutesAway - 60);
            } else {
                next = "" + h + ":" + (m + minutesAway);
            }
        }
    
        // console.log("Next train: " + next);
        // console.log("Minutes Away: " + minutesAway);
    
        tdNext.text(next);
        tdMinutesAway.text(minutesAway);
    
        tr.append(tdName);
        tr.append(tdDestination);
        tr.append(tdFrequency);
        tr.append(tdNext);
        tr.append(tdMinutesAway);
    
        $("#table").append(tr);
    })
});