const navigasi1 = document.querySelector('.navigasi1');
const navigasi2 = document.querySelector('.navigasi2');
const navigasi3 = document.querySelector('.navigasi3');


navigasi1.addEventListener('click', function () {
    navigasi1.style.color = '#833030';
    navigasi2.style.color = '#137A63';
    navigasi3.style.color = '#137A63';
});

navigasi2.addEventListener('click', function () {
    navigasi1.style.color = '#137A63';
    navigasi2.style.color = '#833030';
    navigasi3.style.color = '#137A63';
});

navigasi3.addEventListener('click', function () {
    navigasi1.style.color = '#137A63';
    navigasi2.style.color = '#137A63';
    navigasi3.style.color = '#833030';
});



/* Efek Gambar Menu*/
function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "95%";
}

function normalImg(x) {
    x.style.height = "250px";
    x.style.width = "90%";

}

function efekprofil(x) {
    x.style.width = "160px";
}

function normalprofil(x) {
    x.style.width = "150px";

}

/* Input email*/
function validateemail() {
    var email = document.getElementById("email").value;
    if (email != "") {
        document.getElementById("email").style.color = "Green";
        document.getElementById("email").innerHTML = "<strong>V</strong>"
        return true;
    } else {
        document.getElementById("email").style.color = "Red";
        document.getElementById("email").innerHTML = "<strong>X</strong>"
        return false;
    }
}

function result() {

    email = validateemail();
    if (email != "") {
        alert("Thank you for Join ");
    } else {
        alert("Please Complete The Email Address First");
    }
}