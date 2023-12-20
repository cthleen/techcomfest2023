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
            title: "Pencak Silat",
            paragraph: "Pencak silat adalah seni bela diri tradisional Indonesia. Salah satu ciri khas yang dimiliki oleh pencak silat adalah gerakannya yang terlihat seperti tarian. Pencak silat menjadi bela diri yang terkenal di kalangan negara Asia Tenggara hingga pada 11 Maret 1980 didirikan Persatuan Pencak Silat Antarbangsa (Persilat). Pencak Silat dipertandingkan di Sea Games sejak 1987 dan diakui oleh UNESCO sebagai warisan budaya tak benda milik Indonesia pada tahun 2019."
        });
    } else if (index === 1) {
        switch_content(images[1].getAttribute("src"), {
            title: "Egrang",
            paragraph: "Egrang adalah salah satu permainan sekaligus olahraga tradisional Indonesia yang menggunakan sepasang tongkat untuk berjalan. Permainan Egrang ini memiliki manfaat dalam latihan pengendalian diri dengan menjaga keseimbangan, meningkatkan fokus, dan memberikan dorongan rasa percaya diri. Selain itu, permainan ini juga memberikan hiburan bagi anak-anak dan orang dewasa."
        });
    }else if(index ===2){
        switch_content(images[2].getAttribute("src"), {
            title: "Jemparingan",
            paragraph: "Jemparingan adalah bentuk olahraga panahan tradisional yang berasal dari daerah Mataram, Jawa Tengah, Indonesia. Jemparingan berasal dari kata jemparing yang bermakna anak panah. Jemparingan dimainkan dengan busur yang disebut gandewa dan sasaran yang disebut bandulan. Jemparingan mengajarkan memanah sebagai pegangan hidup karena menyiratkan makna sawiji, greget, sengguh, lan ora mingkuh yang bermakna berkonsentrasi, semangat, percaya diri, dan memiliki rasa tanggung jawab."
        });
    }else if(index==3){
        switch_content(images[3].getAttribute("src"), {
            title: "Bakiak",
            paragraph: "Bakiak adalah permainan tradisional Indonesia yang berasal dari Sumatra Barat. Permainan ini menggunakan sejenis sandal yang terbuat dari kayu dan slop kaki yang digunakan untuk 3-5 orang. Permainan ini melatih kekompakan, koordinasi tubuh, konsentrasi, serta komunikasi antar tim."
        });
    }else if(index==4){
        switch_content(images[4].getAttribute("src"), {
            title: "Pacu Jalur",
            paragraph: "Pacu Jalur adalah sebuah lomba dayung tradisional asal Kabupaten Kuantan Singingi, Riau yang melibatkan perahu kayu gelondongan yang dikenal sebagai jalur. Selain menjadi ajang kompetisi, tradisi ini memiliki makna dan filosofi mendalam yang tercermin dalam setiap aspeknya, mulai dari pembuatan perahu hingga gerakan sang penari. Sebelum mengambil kayu besar untuk membuat jalur, masyarakat melakukan ritual sebagai bentuk penghormatan dan permohonan izin kepada hutan belantara."
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