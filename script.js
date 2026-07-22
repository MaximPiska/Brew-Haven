
// Масив із фотографіями
const images = [
    "Images/cafe1.avif",
    "Images/cafe2.avif",
    "Images/cafe3.avif",
    "Images/cafe4.avif"
];

// Знаходимо картинку
const image = document.getElementById("slider-image");

// Знаходимо кнопки
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// Починаємо з першого фото
let current = 0;

// Кнопка "Вперед"
next.addEventListener("click", function () {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    image.style.opacity = 0;
    setTimeout(function () {
        image.src = images[current];
        image.style.opacity = 1;
    }, 400);

});

// Кнопка "Назад"
prev.addEventListener("click", function () {

    current--;

    if (current < 0) {
        current = images.length - 1;
    }


    image.style.opacity = 0;
    setTimeout(function () {
        image.src = images[current];
        image.style.opacity = 1;
    }, 400);

});






const reviews = [
    {
        name: "Олена",
        text: "Дуже затишно і смачно!",
        stars: "⭐⭐⭐⭐⭐"
    },

    {
        name: "Максим",
        text: "Найкраще місце для відпочинку з друзями.",
        stars: "⭐⭐⭐⭐"
    },

    {
        name: "Анна",
        text: "Дуже сподобались десерти!",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        name: "Арсен",
        text: "У вас круто!",
        stars: "⭐⭐⭐⭐"
    }
];


let currentReview = 0;


const name = document.getElementById("review-name");
const text = document.getElementById("review-text");
const stars = document.getElementById("review-stars")

function showReview() {

    const card = document.querySelector(".review-card");

    card.style.opacity = 0;


    setTimeout(function () {

        name.textContent = reviews[currentReview].name;
        text.textContent = reviews[currentReview].text;
        stars.textContent = reviews[currentReview].stars;


        card.style.opacity = 1;

    }, 300);

}


// Кнопка вперед

document.getElementById("next-review").onclick = function () {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview();

};



// Кнопка назад

document.getElementById("prev-review").onclick = function () {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview();

};

let selectedStars = "⭐⭐⭐⭐⭐";


const starsButtons = document.querySelectorAll(".stars-select span");


starsButtons.forEach(function (star) {

    star.onclick = function () {

        let number = star.dataset.star;


        selectedStars = "⭐".repeat(number);


        starsButtons.forEach(function (s) {

            if (s.dataset.star <= number) {

                s.textContent = "⭐";

            } else {

                s.textContent = "☆";

            }

        });

    }

});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbzdLXDVMzT-3Y6Qyc1sg-pMLqohK_Pn4Wau0Rir4T_YJW4hySMPuDvNpznXrenq7mz1/exec";



const form = document.getElementById("booking-form");


form.addEventListener("submit", function(e){

    e.preventDefault();

    console.log("Форма працює");


    fetch(scriptURL, {

        method: "POST",

        body: JSON.stringify({

            name: document.getElementById("name").value,

            surname: document.getElementById("surname").value,

            table: document.getElementById("table").value,

            date: document.getElementById("date").value,

            time: document.getElementById("time").value

        })

    })


    .then(response => response.json())


    .then(data => {

        console.log(data);

        alert("✅ Дані відправлено!");

        form.reset();

    })


    .catch(error => {

        console.error("Помилка:", error);

        alert("❌ Помилка при бронюванні");

    });


});

