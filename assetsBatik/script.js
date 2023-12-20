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
            title: "Batik Parang",
            paragraph: "Batik Parang adalah motif tertua asal Jawa yang mempunyai makna tidak pantang menyerah. Motif batik ini seperti ombak mengibaratkan ombak laut yang tidak akan berhenti bergerak seperti semangat yang pantang menyerah. Ada sekitar enam motif Parang, yaitu Parang Rusak, Parang Barong, Parang Kusumo, Parang Kecil, Parang Slobog dan Parang Klitik."
          });
    } else if (index === 1) {
        switch_content(images[1].getAttribute("src"), {
            title: "Batik Truntum",
            paragraph: "Motif Truntum kerap digunakan oleh orang tua yang ingin menikahkan anaknya dan mengandung makna cinta yang tulus tanpa syarat, abadi dan semakin lama semakin subur berkembang. Makna ini dalam bahasa Jawa disebut tumaruntum."
        });
    }else if(index ===2){
        switch_content(images[2].getAttribute("src"), {
            title: "Batik Megamendung",
            paragraph: "Mega mendung merupakan motif batik terkenal asal Cirebon. Mega berarti langit atau awan, sedangkan mendung berarti langit gelap. Sesuai dengan namanya, motif ini mengadaptasi bentuk awan yang bergelung dengan warna yang bergradasi. Motif ini mengandung makna yang sangat dalam yaitu kesabaran, berkepala dingin dan tidak mudah marah dalam menghadapi masalah."
        });
    }else if(index==3){
        switch_content(images[3].getAttribute("src"), {
            title: "Batik Kawung",
            paragraph: "Batik yang satu ini mempunyai pola bulatan yang serupa seperti buah Kawung, yaitu sejenis buah kelapa atau juga dianggap sebagai buah kolang-kaling yang ditata rapi secara geometris. Motif ini mempunyai makna keinginan dan usaha keras yang akan selalu membuahkan hasil. Selain itu, batik dengan motif Kawung juga melambangkan harapan agar manusia tetap selalu ingat akan asal usulnya."
        });
    }else if(index==4){
        switch_content(images[4].getAttribute("src"), {
            title: "Batik Sekar Jagad",
            paragraph: "Motif Sekar Jagad merupakan motif pedalaman yang berasal dari Solo dan Yogyakarta. Motif ini mempunyai makna peta dunia. ‘Kar’ dalam kata Sekar berasal dari bahasa Belanda yang mempunyai arti peta. Motif ini menggambarkan bentuk kebaikan. Harapan yang tersemat dari motif batik Sekar Jagad adalah agar kegembiraan dan keelokan budi dari pemakainya bisa terlihat dengan penuh pesona dari batik yang dikenakannya."
        });
    }else if(index==5){
        switch_content(images[5].getAttribute("src"), {
            title: "Batik Sidoasih",
            paragraph: "Sidoasih merupakan nama dari gabungan dua kata yaitu “sido” yang berarti terus-menerus, dan “asih” yang berarti sayang. Maka, kira-kira arti dari Sidoasih adalah kasih sayang yang tidak pernah berhenti. Karena artinya kasih sayang, biasanya batik Sidoasih digunakan oleh para pengantin Jawa dengan harapan pernikahan mereka akan selalu penuh cinta dan kasih sayang."
        });
    }else if(index==6){
        switch_content(images[6].getAttribute("src"), {
            title: "Batik Alas-alasan",
            paragraph: "Nama Alas-alasan berasal dari bahasa Jawa “Alas” yang berarti hutan. Nah, Alas-alasan dapat diartikan sebagai hutan-hutanan atau seperti hutan. Motif Alas-alasan ini termasuk salah satu motif batik tradisional yang pada motifnya terdapat berbagai macam jenis binatang. Makna dari motif ini adalah penggunanya diharapkan mampu mengajak orang lain untuk membaca ulang dan selalu mawas diri, arif, dan bijaksana selama menjalani hidup di dunia yang penuh dengan tantangan."
        });
    }else if(index==7){
        switch_content(images[7].getAttribute("src"), {
            title: "Batik Gurdha Latar Kembang",
            paragraph: "Batik Gurdha Latar Kembang memiliki makna kedudukan yang baik. Hal ini digambarkan dari motif atau ornamen mahkota yang gagah dan dikelilingi oleh bunga di sekitarnya. Motif Gurdha Latar Kembang memiliki harapan agar yang memakainya mendapatkan kedudukan yang pantas dan baik."
        });
    }else if(index==8){
        switch_content(images[8].getAttribute("src"), {
            title: "Batik Ulamsari Mas",
            paragraph: "Ulamsari Mas merupakan motif batik yang berasal dari Pulau Dewata, Bali. Motif ini biasanya menampilkan bentuk ikan dan udang yang menunjukkan kekayaan alam Bali. Selain itu, ikan dan udang yang termasuk ke dalam hewan laut ini menggambarkan mata pencaharian yang populer di kalangan masyarakat Bali, yaitu nelayan."
        });
    }else if(index==9){
        switch_content(images[9].getAttribute("src"), {
            title: "Batik Pring Sedapur",
            paragraph: "Meski jarang didengar, Pring Sedapur merupakan motif batik yang terkenal unik dan indah. Pasalnya, motif batik khas Jawa Timur ini memadukan corak pohon bambu, dengan unsur-unsur alam. Menjadikan tanaman bambu sebagai objek utama, batik motif Pring Sedapur melambangkan persatuan dan kekuatan. Dengan kata lain, motif batik ini mengajarkan manusia untuk hidup bersama dan rukun satu sama lain."
        });
    }else if(index==10){
        switch_content(images[10].getAttribute("src"), {
            title: "Batik Sidoluhur",
            paragraph: "Tak kalah menarik dengan lainnya, batik motif Sido Luhur juga menyimpan filosofi mendalam. Berasal dari kata “luhur” yang berarti agung dan terhormat, diharapkan siapa saja yang menggunakan batik Sido Luhur bisa menjadi panutan dan mendapatkan kehormatan dalam kehidupan. Menariknya, batik Sido Luhur kerap digunakan saat upacara mitoni (upacara adat saat memasuki usia 7 bulan kehamilan). Filosofinya, penggunaan batik Sido Luhur dapat membawa kebahagiaan."
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
    let scrollWidth = carousel.scrollWidth - carousel.width; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.width+10; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

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