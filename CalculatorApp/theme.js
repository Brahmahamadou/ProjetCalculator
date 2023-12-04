let point_un = document.querySelector('.point_un');
let point_deux = document.querySelector('.point_deux');
let point_trois = document.querySelector('.point_trois');
let hiddenUn = document.querySelector('.hidden_un');
let hiddenDeux = document.querySelector('.hidden_deux');
let hiddenTrois = document.querySelector('.hidden_trois');
let span_un = document.querySelector('.span1');
let span_deux = document.querySelector('.span2');
let span_trois = document.querySelector('.span3');
let body = document.querySelector('body');
let chiffre_un = document.querySelector('.chiffre1');
let theme = document.querySelector('.them');
let calculatorName = document.querySelector('.calcu');
let ecranCalcul = document.querySelector('.ecran');
let touche = document.querySelector('.touche');
let button = document.querySelectorAll(".buton");
let del = document.querySelector(".DEL");
let reset = document.querySelector(".RESET");
let equal = document.querySelector(".equal");
let circle = document.querySelector(".cercle")

point_un.addEventListener('click', function () {
    point_un.style.backgroundColor = "#EA5B5A";
    point_deux.style.backgroundColor = "";
    point_trois.style.backgroundColor = "";
    circle.style.backgroundColor = "";
    body.style.backgroundColor = "";
    chiffre_un.style.color = "";
    theme.style.color = "";
    calculatorName.style.color = "";
    ecranCalcul.style.backgroundColor = "";
    ecranCalcul.style.color = "";
    touche.style.backgroundColor = "";
    del.style.color = "";
    reset.style.color = "";
    del.style.backgroundColor = "";
    reset.style.backgroundColor = "";
    equal.style.backgroundColor = "";
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = "";
        button[i].style.backgroundColor = "";
        button[i].style.boxShadow = "";
    }
    //point_deux.classList.add('hidden');
    //point_trois.classList.add('hidden');
});
point_deux.addEventListener('click', function () {
    point_deux.style.backgroundColor = "#EA5B5A";
    point_un.style.backgroundColor = "#D7D2D5";
    point_trois.style.backgroundColor = "";
    circle.style.backgroundColor = "#D7D2D5";
    body.style.backgroundColor = "#E9E9EA";
    chiffre_un.style.color = "#2C3551";
    theme.style.color = "#2C3551";
    calculatorName.style.color = "#2C3551";
    ecranCalcul.style.backgroundColor = "#F0EFF0";
    ecranCalcul.style.color = "";
    touche.style.backgroundColor = "#CDC8CA";
    del.style.color = "";
    reset.style.color = "";
    del.style.backgroundColor = "";
    reset.style.backgroundColor = "";
    equal.style.backgroundColor = "";
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = "";
        button[i].style.backgroundColor = "";
        button[i].style.boxShadow = "";
    }

    //point_un.classList.add('hidden');
    //point_trois.classList.add('hidden');

});
point_trois.addEventListener('click', function () {
    point_trois.style.backgroundColor = "#09A9A4";
    point_deux.style.backgroundColor = "";
    point_un.style.backgroundColor = "#1F0436";
    body.style.backgroundColor = "#21043D";
    chiffre_un.style.color = "#FEE05B";
    circle.style.backgroundColor = "#1F0436";
    theme.style.color = "#FEE05B";
    calculatorName.style.color = "#FEE05B";
    ecranCalcul.style.backgroundColor = "#1c0233";
    ecranCalcul.style.color = "#FEE05B";
    touche.style.backgroundColor = "#1c0233";
    del.style.color = "#F0EFF0";
    del.style.boxShadow = "0px 5px 5px -5px";
    reset.style.boxShadow = "0px 5px 5px -5px";
    reset.style.color = "#F0EFF0";
    del.style.backgroundColor = "#321645";
    reset.style.backgroundColor = "#321645";
    equal.style.backgroundColor = "#09ABA7";
    for (let i = 0; i < button.length; i++) {
        button[i].style.color = "#FEE05B";
        button[i].style.backgroundColor = "#5D0485";
        button[i].style.boxShadow = "0px 5px 5px -5px";
    }
    //point_un.classList.add('hidden');
    //point_deux.classList.add('hidden');
});