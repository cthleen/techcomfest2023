const images = document.querySelectorAll(".carousel img");
const big_image = document.querySelector("article img");
const title = document.querySelector("article h2");
const par = document.querySelector("article p");

function switch_content(source, newText) {
    big_image.style.opacity = 0;
    title.style.opacity = 0;
    par.style.opacity = 0;

    setTimeout(() => {
      big_image.setAttribute("src", source);
      title.innerText = newText.title;
      par.innerText = newText.paragraph;

      big_image.style.opacity = 1;
      title.style.opacity = 1;
      par.style.opacity = 1;
    }, 200);
  }

// Fungsi untuk mengubah teks berdasarkan gambar yang diklik
function updateText(index) {
    if (index === 0) {
        switch_content(images[0].getAttribute("src"), {
            title: "Rendang",
            paragraph: "Rendang merupakan masakan yang berasal dari Minangkabau, terbuat dari olahan daging yang dimasak dengan bumbu rempah. Kuliner yang satu ini begitu digemari karena punya cita rasa yang lezat. Bahkan, tahun 2017 lalu, rendang dinobatkan sebagai makanan terenak nomor 1 versi CNN Travel."
        });
    } else if (index === 1) {
        switch_content(images[1].getAttribute("src"), {
            title: "Pempek",
            paragraph: "Makanan berbahan daging ikan dan tepung kanji ini konon sudah ada sejak abad ke-16. Pempek menjadi kuliner favorit masyarakat, karena punya rasa yang komplit. Ada rasa asam, manis, pedas, dan gurih. Pempek juga hadir dalam beberapa jenis, antara lain pempek lenjer, bulat, kulit ikan, dan yang paling terkenal adalah pempek kapal selam, yang berisi telur ayam."
        });
    }else if(index ===2){
        switch_content(images[2].getAttribute("src"), {
            title: "Gudeg",
            paragraph: "Kalau berkunjung ke Jogja, rasanya kurang lengkap jika belum makan gudeg atau dijadikan sebagai oleh-oleh untuk orang tersayang. Gudeg Jogja terkenal dengan rasanya yang manis dan terbuat dari nangka muda yang diolah dengan santan. Makanan khas Jogja ini akan terasa lebih nikmat jika disantap dengan nasi hangat, kuah santan kental, ayam kampung, tempe, tahu, dan telur."
        });
    }else if(index==3){
        switch_content(images[3].getAttribute("src"), {
            title: "Nasi Liwet",
            paragraph: "Nasi liwet adalah nasi yang dimasak dengan santan dan punya rasa yang gurih, mirip dengan nasi uduk. Nasi ini disajikan dengan suwiran ayam, areh (santan kental), dan sayur labu siam. Rasanya benar-benar gurih sekali. Cocok disantap saat sarapan maupun makan malam."
        });
    }else if(index==4){
        switch_content(images[4].getAttribute("src"), {
            title: "Bakso",
            paragraph: "Makanan yang berupa bola daging ini biasanya terbuat dari campuran daging sapi giling dan tepung tapioka. Kini, bakso hadir dalam jenis yang lebih variatif dan tidak selalu berbentuk bulat. Satu porsi bakso biasanya akan disajikan dengan kuah kaldu dan diberi topping berupa mie, tahu, bawang goreng, dan seledri."
        });
    }else if(index==5){
        switch_content(images[5].getAttribute("src"), {
            title: "Lumpia",
            paragraph: "Lumpia merupakan hasil olahan dari tepung beras yang dibentuk menjadi lembaran yang sangat tipis kemudian diberi berbagai macam isian, seperti rebung, telur, daging, sayuran segar, atau makanan laut."
        });
    }else if(index==6){
        switch_content(images[6].getAttribute("src"), {
            title: "Rawon",
            paragraph: "Indonesia punya banyak sekali makanan khas yang terbuat dari daging. Salah satunya adalah rawon. Sup daging dengan kuah kental berwarna hitam ini merupakan makanan khas yang berasal dari Jawa Timur. Warna hitam gelap pada rawon dihasilkan oleh kluwek dicampur dengan potongan daging sapi yang lembut. Rawon biasanya disajikan dengan nasi, tauge, daun bawang, telur asin, dan daun kerupuk udang sebagai pelengkap."
        });
    }else if(index==7){
        switch_content(images[7].getAttribute("src"), {
            title: "Sate Lilit",
            paragraph: "Sate yang menjadi ikon dari kuliner Bali ini cukup mudah ditemukan di berbagai lokasi wisata, seperti di Badung, Denpasar, hingga Gianyar. Untuk yang belum pernah mencoba, sate lilit itu apa sih? Berbeda dari sate pada umumnya yang berupa tusukan potongan daging, sate lilit berbentuk gumpalan adonan yang terbuat dari daging yang membalut tusuk sate. Selain itu, sate ini juga tidak dihidangkan dengan bumbu kacang, karena bumbu adonannya sudah kaya akan cita rasa."
        });
    }
}

images.forEach((image, index) => {
    image.onclick = () => {
      updateText(index);
    };
  });

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper .arrow");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width

    // hide left arrow if at the beginning
    arrowIcons[0].style.display = carousel.scrollLeft <= 0 ? "none" : "block";

    // hide right arrow if at the end
    arrowIcons[1].style.display = carousel.scrollLeft >= scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.width + 10; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

carousel.addEventListener("scroll", showHideIcons); // listen for scroll event and update arrow visibility

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.width) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.width+10;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 2 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 2 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

const menuToggle=document.querySelector(".menu-toggle input");
const nav=document.querySelector("nav ul");
menuToggle.addEventListener('click',function(){
    nav.classList.toggle('slide');
})