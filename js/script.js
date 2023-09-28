function replaceName() {
  let name = prompt("Siapakah nama anda?", "");
  document.getElementById("name").innerHTML = name;
}

document.getElementById("replace-name").addEventListener("click", function () {
  replaceName();
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var autoSlideInterval;
  var i;
  var imgList = document.getElementsByClassName("slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";

  // clearInterval(autoSlideInterval); // Hentikan interval sebelumnya jika ada

  // autoSlideInterval = setInterval(function () {
  //   plusDivs(1);
  // }, 3000);

  console.log(slideIndex);
}

document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.forms["contact-form"]["your-name"].value;
  let email = document.forms["contact-form"]["email"].value;
  let select = document.forms["contact-form"]["select"].value;
  console.log(name);
  console.log(email);
  console.log(select);
  if (!name) {
    document.getElementById("name-error").innerHTML = "nama tidak boleh kosong";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }
  if (!email) {
    document.getElementById("email-error").innerHTML =
      "email tidak boleh kosong";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }
  if (select == "tidak ada") {
    document.getElementById("select-error").innerHTML =
      "select tidak boleh kosong";
  } else {
    document.getElementById("select-error").innerHTML = "";
  }
});
