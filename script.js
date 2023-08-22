// search bar

const searchContainer = document.querySelector(".search");
const searchInput = searchContainer.querySelector(".search-input");
const searchButton = document.getElementById("search-button");

function toggleSearch() {
  searchContainer.classList.toggle("active");
  if (searchContainer.classList.contains("active")) {
    searchInput.focus();
  }
}

function hideList() {
  hideTimeout = setTimeout(function () {
    document.getElementById("options").classList.add("hidden");
  }, 200);
}

hideList();
function showList() {
  clearTimeout(hideTimeout);
  document.getElementById("options").classList.remove("hidden");
}

const slideButton = document.getElementById("slide-button");
const slideContainer = document.querySelector(".slide-container");
const slideItems = document.querySelectorAll(".slide-item");

function toggleSlide() {
  const slideContainer = document.querySelector(".slide-container");
  const slideItems = document.querySelectorAll(".slide-item");

  slideContainer.classList.toggle("active");

  if (slideContainer.classList.contains("active")) {
    slideItems.forEach((item) => (item.style.display = "block"));
    slideContainer.style.height = `${slideItems.length * 40}px`;
  } else {
    slideItems.forEach((item) => (item.style.display = "none"));
    slideContainer.style.height = "0";
  }
}

// open mobile menu

const burger = document.querySelectorAll(".navbar-burger");
const menu = document.querySelectorAll(".navbar-menu");

if (burger.length && menu.length) {
  for (var i = 0; i < burger.length; i++) {
    burger[i].addEventListener("click", function () {
      for (var j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("hidden");
      }
    });
  }
}

// close mobile menu

const close = document.querySelectorAll(".navbar-close");
const backdrop = document.querySelectorAll(".navbar-backdrop");

if (close.length) {
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function () {
      for (var j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("hidden");
      }
    });
  }
}

if (backdrop.length) {
  for (var i = 0; i < backdrop.length; i++) {
    backdrop[i].addEventListener("click", function () {
      for (var j = 0; j < menu.length; j++) {
        menu[j].classList.toggle("hidden");
      }
    });
  }
}

// Scroll to section buttons

function scrollToProjects() {
  scrollIntoViewWithOffset("#projects");
}

function scrollToBusiness() {
  scrollIntoViewWithOffset("#business");
}

function scrollToOffer() {
  scrollIntoViewWithOffset("#offer");
}

function scrollToContact() {
  scrollIntoViewWithOffset("#contact");
}

const scrollIntoViewWithOffset = (selector) => {
  var offset = document.querySelector(".navbar").offsetHeight;
  window.scrollTo({
    behavior: "smooth",
    top:
      document.querySelector(selector).getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  });
};

// Slider

var mySwiper = new Swiper(".swiper-container", {
  speed: 600,
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

// Project images

const masonryGrid = document.querySelector(".photos");
const expandButton = document.getElementById("expand-button");
const projectsGradient = document.getElementById("projects-gradient");
const grid = document.querySelector(".masonry-grid");
const dialogElement = document.createElement("dialog");
grid.appendChild(dialogElement);

const apiKey = "nsNlNQgg0x1Y86DKaS_ieKT__KW0BjBCquQFTLe7XJM";
const gardenQuery = "garden";
let currentPage = 1;

async function fetchGardenImages(page) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${gardenQuery}&count=8&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      }
    );
    const data = await response.json();

    data.forEach((photo) => {
      const imgElement = document.createElement("img");
      imgElement.src = photo.urls.regular;

      const divWithImage = document.createElement("div");
      divWithImage.className = "masonry-grid-item";
      divWithImage.appendChild(imgElement);
      divWithImage.addEventListener("click", () =>
        openImageModal(photo.urls.regular)
      );

      masonryGrid.appendChild(divWithImage);
    });

    var msnry = new Masonry(grid, {
      itemSelector: ".masonry-grid-item",
      columnWidth: ".masonry-grid-sizer",
      gutter: ".masonry-gutter-sizer",
      percentPosition: true,
    });

    imagesLoaded(grid).on("progress", function () {
      msnry.layout();
    });
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Modal popup

function openImageModal(imageUrl) {
  dialogElement.className = "modal w-10/12 focus:outline-0";
  dialogElement.innerHTML = `
    <div class="w-full modal-dialog px-4 md:px-20 lg:px-24 py-2 h-[90vh]">
      <div class="flex top-0 justify-between pt-4">
        <div class="mb-6">
          <span class="text-lg">Nazwa projektu</span>
          <span class="text-sm text-darkGrey "><br>Opis</span>
        </div>
        <div class="flex items-center">
          <button id="close-button" class="focus:outline-0">
            <img src="./assets/images/closeIcon.svg" class="w-4"/>
          </button>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 items-center justify-between h-[80%] w-full">
        <div id="dialog-div" class="flex flex-1 justify-center items-center min-w-[200px] md:min-w-[400px] lg:min-w-[600px] w-full h-full bg-no-repeat bg-contain bg-center"></div>
        <div class="flex flex-col w-full h-full flex-1 justify-center min-w-[200px] md:min-w-[400px] md:max-w-[600px]">
          <div class="text-sm text-darkGrey">Galeria</div>
          <div id="grid-container" class="grid grid-cols-3  gap-2 [&>*]:aspect-[4/3] [&>*]:bg-darkGrey [&>*:hover]:bg-grey"></div>   
        </div>
      </div> 
    </div>
    `;
  const dialogDiv = document.getElementById("dialog-div");
  const gridContainer = document.getElementById("grid-container");

  dialogDiv.style.backgroundImage = `url('${imageUrl}')`;

  dialogElement.showModal();
  dialogElement.addEventListener("click", function (event) {
    if (
      !event.target.closest(".modal-dialog") ||
      event.target.closest("#close-button")
    ) {
      dialogElement.close();
    }
  });

  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    gridContainer.appendChild(div);
  }
}

fetchGardenImages(currentPage);
currentPage++;

expandButton.addEventListener("click", function () {
  fetchGardenImages(currentPage);
  currentPage++;
  expandButton.style.display = "none";
  projectsGradient.style.transition = "opacity 1s ease";
  projectsGradient.style.opacity = "0";

  setTimeout(function () {
    projectsGradient.style.backgroundImage = "none";
  }, 500);
});
