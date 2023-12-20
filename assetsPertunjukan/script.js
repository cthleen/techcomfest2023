const iframeSrcArray = [
    "https://www.youtube-nocookie.com/embed/ZSQU5GFxIgo?si=o5_RrHI2mbC3fhmq&start=9",
    "https://www.youtube-nocookie.com/embed/vbeLyZ7Jo_E?si=eK5k1pQMuEozBe4m&start=5",
    "https://www.youtube-nocookie.com/embed/QkOfGFtobms?si=Jb2oy2j8ltz6vYRF",
    "https://www.youtube-nocookie.com/embed/SG-Aw5_v8BQ?si=fC9qfYa5Ij7EHMpI",
    "https://www.youtube-nocookie.com/embed/HXqX6AXsfmU?si=JQCMdI3l-9_J0r5R",
    "https://www.youtube-nocookie.com/embed/99xgYhQNaOc?si=i_DEuDzpRMwSBYYe",
    "https://www.youtube-nocookie.com/embed/kYJCOq74BKs?si=XqEku4TA97EPsofX",
    "https://www.youtube-nocookie.com/embed/C5lVd_2neqs?si=GE3NUbyDniP9IwYS"
  ];
  
const big_image = document.querySelector("article .video-container iframe");
const title = document.querySelector("article .text h2");
const par = document.querySelector("article .text p");
const images = document.querySelectorAll(".carousel img");
  function switch_content(videoIndex, newText) {
    big_image.style.opacity = 0;
    title.style.opacity = 0;
    par.style.opacity = 0;
  
    setTimeout(() => {
      big_image.src=iframeSrcArray[videoIndex];
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
      switch_content(0, {
        title: "Reog Ponorogo",
        paragraph: "Reog Ponorogo adalah seni pertunjukan tradisional dari Ponorogo, Jawa Timur, Indonesia. Pertunjukan ini menampilkan tarian dan pertarungan dramatis antara Singo Barong (kepala singa raksasa) yang dipakai oleh seorang pemain dan kelompok Warok, pahlawan lokal. Reog Ponorogo bukan hanya sebuah tontonan seni pertunjukan, tetapi juga mencerminkan kekayaan budaya, mitologi, dan nilai-nilai lokal. Pertunjukan ini terus dilestarikan sebagai bagian penting dari warisan budaya Indonesia."
      });
    } else if (index === 1) {
      switch_content(1, {
        title: "Ketoprak",
        paragraph: "Ketoprak adalah seni pertunjukan tradisional Jawa, Indonesia, yang menggabungkan elemen teater, musik, tari, dan komedi. Ketoprak bukan hanya hiburan, tapi juga menjadi wadah untuk menyampaikan pesan moral, nilai budaya, dan kritik sosial. Dengan elemen seninya yang beragam, Ketoprak mencerminkan kehidupan sehari-hari dan nilai lokal dari masyarakat Indonesia."
      });
    }else if(index===2){
        switch_content(2, {
            title: "Tari Kecak",
            paragraph: "Tari Kecak adalah seni pertunjukan tradisional yang berasal dari Bali, Indonesia. Awalnya, Tari Kecak merupakan ritual kuno Bali yang disebut sebagai Sanghyang yang bertujuan mengusir roh jahat. Saat ini, Tari Kecak menjadi sebuah seni pertunjukan tradisional yang berupa drama musikal yang indah."
        });
    }else if(index===3){
        switch_content(3, {
            title: "Tari Saman",
            paragraph: "Tari Saman adalah tarian tradisional yang berasal dari suku Gayo, Aceh, Indonesia. Tari Saman berbeda dengan tarian pada umumnya karena Tari Saman tidak menggunakan alat musik. Tari Saman hanya menampilkan gerakan tepuk tangan, menjentikkan jari, menggoyangkan badan dan kepala, dan beberapa gerakan lainnya. Setiap gerakan penari Saman mengandung nilai filosofi alam, lingkungan, dan kehidupan masyarakat Gayo."
        });
    }else if(index===4){
        switch_content(4, {
            title: "Ludruk",
            paragraph: "Ludruk adalah seni pertunjukan tradisional asal Jawa Timur, Indonesia, yang menggabungkan unsur teater, komedi, dan musik. Dalam pertunjukannya, Ludruk menghadirkan cerita-cerita yang menggambarkan kehidupan sehari-hari, disisipkan dengan sentuhan humor yang khas. Tak hanya menghibur, Ludruk juga menjadi cerminan kearifan lokal dan nilai-nilai tradisional Jawa Timur."
        });
    }else if(index===5){
        switch_content(5, {
            title: "Tari Piring",
            paragraph: "Tari Piring adalah seni tari tradisional yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Tarian ini unik karena melibatkan gerakan tari yang indah sambil membawa sepasang piring di tangan. Tarian ini biasanya dipentaskan ketika upacara pernikahan, penyambutan tamu, dan upacara adat."
        });
    }else if(index===6){
        switch_content(6, {
            title: "Wayang Kulit",
            paragraph: "Wayang Kulit adalah seni pertunjukan tradisional Indonesia yang menggunakan bayangan kulit untuk menceritakan cerita, seperti Mahabharata atau Ramayana. Pertunjukan ini dipandu oleh seorang dalang, dengan tokoh-tokoh wayang diproyeksikan sebagai bayangan di layar putih tipis. Wayang Kulit bukan sekadar hiburan, melainkan juga sarana penting dalam melestarikan dan menyampaikan nilai-nilai budaya serta spiritual Indonesia."
        });
    }else if(index===7){
        switch_content(7, {
            title: "Tari Barong",
            paragraph: "Tari Barong adalah seni pertunjukan tradisional dari Bali, Indonesia, yang menampilkan pertarungan antara Barong dan Rangda. Barong, yang dianggap sebagai makhluk mitologis berbentuk singa atau babi, melambangkan kebaikan, sementara Rangda melambangkan kejahatan. Pertarungan antara Barong dan Rangda tidak hanya mewakili perjuangan kebaikan dan kejahatan, tetapi juga mencerminkan keseimbangan alam, siklus kehidupan, dan nilai-nilai moral."
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
  };

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
    if (carousel.scrollLeft - (carousel.scrollWidth - carousel.width) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.width + 10;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
      return carousel.scrollLeft += positionDiff > firstImgWidth / 2 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 2 ? valDifference : -positionDiff;
  };

  const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("touchstart", dragStart);

  document.addEventListener("mousemove", dragging);
  carousel.addEventListener("touchmove", dragging);

  document.addEventListener("mouseup", dragStop);
  carousel.addEventListener("touchend", dragStop);

  const menuToggle = document.querySelector(".menu-toggle input");
  const nav = document.querySelector("nav ul");
  menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
  });