const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("show-links");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-links");
  });
});

// model popup
const data = {
  name: "Keeping track of hundreds of components",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  imageDesktop: "images/desktop-image-portfolio.png",
  githubIcon: "images/icongithub.svg",
  liveIcon: "images/icon-export.svg",
  technologiesMobile: ["Ruby on Rails", "CSS", "JavaScript"],
  technologiesDesktop: [
    "CodeKit",
    "GitHub",
    "JavaScript",
    "Bootstrap",
    "Terminal",
    "Codepen",
  ],
  sourceLink: "https://github.com/MohamedHNoor/mobile-firs-project1",
  liveLink: "https://mohamedhnoor.github.io/Portfolio-project1/",
};
const myModal = document.getElementById("myModal");
myModal.innerHTML = `<div class="modal-content">
<div class="modal-header">
  <div class="bg-img">
  <span class="close">&times;</span>
  <img class="desktop-bg" src="${data.imageDesktop}" />
  </div>
</div>
<div class="modal-body">
  <h3 id="title">${data.name}</h3>
  <ul class="tags" id="tech">
  ${data.technologiesDesktop.map((ele) => `<li>${ele}</>`)}
  </ul>
  <ul class="tags" id="mobile-ul">
  ${data.technologiesMobile.map((ele) => `<li>${ele}</>`)}
  </ul>
  <p id="description">${data.description}</p>
</div>
<div class="modal-footer">
  <a href="${data.liveLink}">
    <button type="submit" class="project-view-btn">
      <span> See Live</span>
      <img
        src="${data.liveIcon}"
        alt="See Live Project"
        width="20"
        height="20"
      /></button
  ></a>
  <a href="${data.sourceLink}">
    <button type="submit" class="project-view-btn">
      <span>See Source</span>
      <img
        src="${data.githubIcon}"
        alt="See Source Code"
        width="20"
        height="20"
      /></button
  ></a>
</div>
</div>
`;

function viewProjectDetails() {
  myModal.style.display = "block";
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  myModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === myModal) {
    myModal.style.display = "none";
  }
};
