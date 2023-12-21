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
            title: "Sekaten",
            paragraph: "Sekaten yang merupakan tradisi yang sering dilakukan oleh masyarakat Solo dan Yogyakarta untuk merayakan Isra’ Mi’raj. Ritual Sekaten ini pada umumnya dilakukan di sekitaran alun-alun yang ada di bagian utara Keraton Surakarta serta Keraton Yogyakarta. Pada umumnya, tradisi sekaten terdiri dari beberapa rangkaian acara. Namun, yang paling ditunggu oleh para warga adalah momen dimana rebutan gunung-gunungan yang berisikan hasil bumi."
        });
    } else if (index === 1) {
        switch_content(images[1].getAttribute("src"), {
            title: "Ngaben",
            paragraph: "Ngaben adalah upacara pembakaran jenazah Hindu di Bali untuk mengembalikan roh leluhur ke tempat asalnya. Dalam bahasa Bali, ngaben juga disebut palebon, yang berasal dari kata 'lebu' (prathiwi/tanah) dan artinya menjadikan tanah (abu). Tujuannya adalah mempercepat ragha sarira agar kembali ke panca maha buthadi alam dan memungkinkan atma menuju alam pitra."
        });
    }else if(index ===2){
        switch_content(images[2].getAttribute("src"), {
            title: "Kasada",
            paragraph: "Warga menganggap Gunung Bromo adalah bagian alam yang suci dan telah menjadi sumber kehidupan bagi mereka. Sehingga ritual melemparkan persembahan ke Kawah Gunung Bromo juga sebagai penghormatan. Selain penghormatan dan penyucian melalui ritual pelabuhan (melempar sesaji ke dalam kawah), warga Tengger juga menjadikan Gunung Bromo sebagai pusat dalam segala hal. Itulah kenapa sanggar dan rumah yang dibangun menghadap Gunung Bromo. Makna ini tidak berubah hingga sekarang meskipun bentuk sesajinya mengalami perkembangan. Begitu juga dengan ritualnya yang semakin kompleks dengan musik dan tarian adat."
        });
    }else if(index==3){
        switch_content(images[3].getAttribute("src"), {
            title: "Lompat Batu Suku Nias",
            paragraph: "Sebuah tradisi yang hanya dilakukan oleh laki-laki suku Nias. Tradisi Lompat Batu biasanya dilakukan para pemuda dengan cara melompati tumpukan batu setinggi 2 meter untuk menunjukkan bahwa mereka sudah pantas untuk dianggap dewasa secara fisik. Selain ditampilkan sebagai acara adat, Tradisi Lompat Batu ini juga bisa menjadi pertunjukan yang menarik, khususnya bagi para wisatawan yang datang ke sana."
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
