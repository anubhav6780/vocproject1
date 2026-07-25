const portfolioGrid = document.querySelector(".portfolio-grid");
const filterBtns = document.querySelectorAll(".filter-btn");

function displayVideos(videoArray) {
  portfolioGrid.innerHTML = "";

  videoArray.forEach((video) => {
    portfolioGrid.innerHTML += `
      <div class="card">
          <img src="${video.image}" alt="${video.title}">
          <div class="card-content">
              <h3>${video.title}</h3>
              <p class="category">${video.category}</p>
          </div>
      </div>
    `;
  });
}

// Initial Load
displayVideos(videos);

// Filter Logic
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    // Active Button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.dataset.category;

    if (category === "all") {
      displayVideos(videos);
    } else {
      const filteredVideos = videos.filter(
        (video) => video.category === category
      );

      displayVideos(filteredVideos);
    }
  });
});