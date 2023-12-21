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
            title: "Candi Borobudur",
            paragraph: "Candi Borobudur merupakan peninggalan Buddha terbesar di dunia antara 780-840 Masehi yang dibangun oleh Dinasti Syailendra. Kala itu, Dinasti Syailendra merupakan dinasti yang berkuasa dan mereka membangun candi ini sebagai tempat pemujaan Buddha dan tempat ziarah. Tempat ini berisi petunjuk agar manusia menjauhkan diri dari nafsu dunia dan menuju pencerahan dan kebijaksanaan menurut Buddha. Peninggalan ini ditemukan oleh Pasukan Inggris pada tahun 1814 dibawah pimpinan Sir Thomas Stamford Raffles. Area candi berhasil dibersihkan seluruhnya pada tahun 1835."
          });
    } else if (index === 1) {
        switch_content(images[1].getAttribute("src"), {
            title: "Candi Prambanan",
            paragraph: "Candi Prambanan merupakan kompleks candi Hindu terbesar di Indonesia. Kuat dugaan bahwa Candi Prambanan dibangun sekitar pertengahan abad ke-9 oleh raja dari Wangsa Sanjaya, yaitu Raja Balitung Maha Sambu. Dugaan tersebut didasarkan pada isi Prasasti Siwagrha yang ditemukan di sekitar Prambanan dan saat ini tersimpan di Museum Nasional di Jakarta. Prasasti berangka tahun 778 Saka (856 M) ini ditulis pada masa pemerintahan Rakai Pikatan."
        });
    }else if(index ===2){
        switch_content(images[2].getAttribute("src"), {
            title: "Taman Nasional Komodo",
            paragraph: "Taman Nasional Komodo terletak di tengah kepulauan Indonesia antara Pulau Sumba dan Pulau Flores. Tempat ini terdiri dari tiga pulau besar dan pulau-pulau kecil yang berasal dari gunung berapi. Taman Nasional Komodo ini telah dinyatakan sebagai Taman Nasional Pertama Indonesia pada tanggal 06 Maret 1980. Bentang alamnya menyediakan habitat bagi berbagai satwa liar luar biasa di Indonesia."
        });
    }else if(index==3){
        switch_content(images[3].getAttribute("src"), {
            title: "Pura Tanah Lot",
            paragraph: 
"Pura Tanah Lot di Bali, terletak di atas batu karang Pantai Beraban, adalah destinasi wisata yang sangat direkomendasikan. Sejarahnya dimulai pada abad ke-15, ketika Bhagawan Dang Hyang Nirartha dari Pulau Jawa datang untuk menyebarkan ajaran Agama Hindu. Ia menggunakan kekuatan spiritual untuk melindungi diri dari serangan Bendesa Beraban dengan memindahkan batu karang besar ke tengah lautan, membentuk Pura Tanah Lot."
        });
    }else if(index==4){
        switch_content(images[4].getAttribute("src"), {
            title: "Taman Nasional Ujung Kulon",
            paragraph: "Taman Nasional Ujung Kulon merupakan salah satu dari taman nasional tertua di Indonesia yang terletak di barat daya Pulau Jawa, Kabupaten Pandeglang. Taman Nasional Ujung Kulon dinyatakan sebagai Natural World Heritage Site oleh UNESCO, meskipun pernah terdampak oleh letusan Krakatau. Taman nasional ini identik dengan Badak Jawa yang sudah terancam punah."
        });
    }else if(index==5){
        switch_content(images[5].getAttribute("src"), {
            title: "Hutan Hujan Tropis Sumatra",
            paragraph: "Hutan Hujan Tropis Sumatra telah ditetapkan oleh UNESCO sebagai situs warisan dunia sejak tahun 2004. Sebagai salah satu area pelestarian terbesar di Asia Tenggara, hutan hujan tropis ini terletak di kawasan Bukit Barisan dan memiliki potensi untuk menjadi habitat bagi berbagai fauna Sumatera dan spesies-spesies yang terancam punah. Wilayah Hutan Hujan Tropis Sumatera meluas hingga tujuh provinsi, mencakup Lampung, Sumatera Selatan, Sumatera Barat, Jambi, Bengkulu, Sumatera Utara, dan Aceh."
        });
    }else if(index==6){
        switch_content(images[6].getAttribute("src"), {
            title: "Museum Manusia Purba Sangiran",
            paragraph: "Museum Manusia Purba Sangiran adalah museum arkeologi yang terletak di Kalijambe, Kabupaten Sragen, Jawa Tengah, Indonesia. Museum ini berdekatan dengan area situs fosil purbakala Sangiran yang merupakan salah satu Situs Warisan Dunia UNESCO. Museum Sangiran beserta situs arkeologinya, selain menjadi objek wisata yang menarik juga merupakan arena penelitian tentang kehidupan pra sejarah terpenting dan terlengkap di Asia, bahkan dunia."
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
