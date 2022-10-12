const dice = document.getElementsByClassName("dice");

const advice = document.querySelectorAll("blockquote");

const id = document.getElementById('id');

let api_response = null;

dice.addEventListener("click", function(){
    $.ajax({
        url : "https://api.adviceslip.com/advice",
        dataType: "json",
        type: "get",
        sucess: function (response){
            api_response= response.slip;
            id.innerHTML= response.slip;
            advice.innerHTML= api_response.advice
        },
    });
});