const weddingDate =
new Date("June 24, 2026 20:00:00");

function updateCountdown(){

    const now = new Date();

    const difference =
    weddingDate - now;

    if(difference < 0){

        document.getElementById("countdown")
        .innerHTML = "🎉 The Celebration Has Started!";

        return;
    }

    const days =
    Math.floor(difference/(1000*60*60*24));

    const hours =
    Math.floor(
        (difference%(1000*60*60*24))
        /(1000*60*60)
    );

    const minutes =
    Math.floor(
        (difference%(1000*60*60))
        /(1000*60)
    );

    const seconds =
    Math.floor(
        (difference%(1000*60))
        /1000
    );

    document.getElementById("countdown")
.innerHTML =
`${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
}

updateCountdown();

setInterval(updateCountdown,1000);