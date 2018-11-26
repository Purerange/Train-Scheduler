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
    var frequency = $("#frequencyInput").val().trim();
    var firstHour = first.substring(0,2);
    var firstSeconds = first.substring(3,5);

    // console.log("Name: " + name);
    // console.log("Destination: " + destination);
    // console.log("First train: " + first);
    // console.log("First train hour: " + firstHour);
    // console.log("First train seconds: " + firstSeconds);
    // console.log("Frequency: " + frequency);


    // database.ref().push({
    //     name: name,
    //     first: first,
    //     frequency: frequencyValue,
    //     months: months,
    //     destination: destination,
    //     earnings: earnings
    // });

    // var tr = $("<tr>");
    // var tdName = $("<td>");
    // var tdfirst = $("<td>");
    // var tdfrequency = $("<td>");
    // var tdMonths = $("<td>");
    // var tddestination = $("<td>");
    // var tdEarnings = $("<td>");

    // tdName.text(name);
    // tdfirst.text(first);
    // tdfrequency.text(frequencyValue);
    // tdMonths.text(months);
    // tddestination.text(destination);
    // tdEarnings.text(earnings);

    // tr.append(tdName);
    // tr.append(tdfirst);
    // tr.append(tdfrequency);
    // tr.append(tdMonths);
    // tr.append(tddestination);
    // tr.append(tdEarnings);

    // $(".table").append(tr);



    

})