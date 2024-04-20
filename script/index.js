
// ....................Open Nav Menu.................... //
$("#openIcon").on("click", function () {
    $(".side_nav").animate({ width: "200px" }, 100);
    $(".hero").animate({ marginLeft: "200px" }, 100);
})

// ....................Close Nav Menu.................... //
$("#closeIcon").on("click", function () {
    $(".side_nav").animate({ width: "0" }, 100);
    $(".hero").animate({ marginLeft: "0" }, 100);
})

// ....................Show Singers Info.................... //
$(".singer").on("click", function () {
    $('.singers p').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});


// ....................Time Counter Function.................... //
window.onload = () => {
    timeCountDown("15 June 2024 8:59:00");
}

function timeCountDown(partyTime) {
    let partyDate = new Date(partyTime);
    partyDate = partyDate.getTime() / 1000;

    let currentDate = new Date();
    currentDate = currentDate.getTime() / 1000;
    let timeDifference = partyDate - currentDate;

    let day = Math.floor(timeDifference / (24 * 60 * 60));
    let hour = Math.floor((timeDifference - (day * (24 * 60 * 60))) / 3600);
    let minutes = Math.floor((timeDifference - (day * (24 * 60 * 60)) - (hour * 3600)) / 60);
    let seconds = Math.floor((timeDifference - (day * (24 * 60 * 60)) - (hour * 3600) - (minutes * 60)))

    $("#day").html(`${day} D`)
    $("#hour").html(`${hour} H`)
    $("#minutes").html(`${minutes} M`)
    $("#seconds").html(`${seconds} S`)

    setInterval(() => {
        timeCountDown(partyTime)
    }, 1000)
}

// ....................Control TextArea Letters.................... //

let lettersLenght = 100;
$("#textArea").on("input", function () {
    let length = $("#textArea").val().length;
    let balanceLenght = lettersLenght - length;
    console.log(balanceLenght)
    if (balanceLenght <= 0) {
        $("#lettersMessage").html("You Reached Maximum Letters")
        $("#lettersMessage").css({ color: "red" })
    } else {
        $("#lettersMessage").html(`${balanceLenght} Remaining Letters`)
    }
});