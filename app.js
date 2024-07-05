let rating = {
    rating1: document.getElementById('rating-1'),
    rating2: document.getElementById('rating-2'),
    rating3: document.getElementById('rating-3'),
    rating4: document.getElementById('rating-4'),
    rating5: document.getElementById('rating-5'),

}
let ratingPoints = 0;
rating.rating1.addEventListener('click', () => {
    ratingPoints = parseInt(rating.rating1.innerText);
    rating.rating1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.rating1.style.color = 'black';
    for (let item in rating) {
        if (rating[item] !== rating.rating1) {
            rating[item].style.backgroundColor = ' rgba(120, 120, 120, 0.069)';
            rating[item].style.color = ' hsl(217, 12%, 63%)';
        }
    }
    console.log(ratingPoints);
});
rating.rating2.addEventListener('click', () => {
    ratingPoints = parseInt(rating.rating2.innerText);
    rating.rating2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.rating2.style.color = 'black';
    for (let item in rating) {
        if (rating[item] !== rating.rating2) {
            rating[item].style.backgroundColor = ' rgba(120, 120, 120, 0.069)';
            rating[item].style.color = ' hsl(217, 12%, 63%)';
        }
    }
    console.log(ratingPoints);
});
rating.rating3.addEventListener('click', () => {
    ratingPoints = parseInt(rating.rating3.innerText);
    rating.rating3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.rating3.style.color = 'black';
    for (let item in rating) {
        if (rating[item] !== rating.rating3) {
            rating[item].style.backgroundColor = ' rgba(120, 120, 120, 0.069)';
            rating[item].style.color = ' hsl(217, 12%, 63%)';
        }
    }
    console.log(ratingPoints);
});
rating.rating4.addEventListener('click', () => {
    ratingPoints = parseInt(rating.rating4.innerText);
    rating.rating4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.rating4.style.color = 'black';
    for (let item in rating) {
        if (rating[item] !== rating.rating4) {
            rating[item].style.backgroundColor = ' rgba(120, 120, 120, 0.069)';
            rating[item].style.color = ' hsl(217, 12%, 63%)';
        }
    }
    console.log(ratingPoints);
});
rating.rating5.addEventListener('click', () => {
    ratingPoints = parseInt(rating.rating5.innerText);
    rating.rating5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rating.rating5.style.color = 'black';
    for (let item in rating) {
        if (rating[item] !== rating.rating5) {
            rating[item].style.backgroundColor = ' rgba(120, 120, 120, 0.069)';
            rating[item].style.color = ' hsl(217, 12%, 63%)';
        }
    }
    console.log(ratingPoints);
});


let submit = document.querySelector('button');

submit.addEventListener('click',()=>{
    document.querySelector('.container header svg').style.display = 'none';
    document.querySelector('.container header .rating-paragraph').style.display = 'none';
    for(let i = 0; i < 5;i++){
        document.querySelectorAll('.rating-points div')[i].style.display='none';
    }
    document.querySelector('.container .rating-heading').style.display = 'none';
    // document.querySelectorAll('.rating-points div').style.display = 'none';
    document.querySelector('.container img').style.display = 'block';
    document.querySelector('.container .rating-result').style.display = 'block';
    document.querySelector('.container .thank-heading').style.display = 'block';
    document.querySelector('.container .thank-you-paragraph').style.display = 'block';
    document.querySelector('.container .rating-result').innerText = `You select ${ratingPoints} out of 5`;
    submit.style.display = 'none';

});

