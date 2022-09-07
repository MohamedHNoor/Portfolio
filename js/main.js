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
const data = [
  {
    id: 1,
    name: "Keeping track of hundreds of components",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: "images/desktop-image-portfolio.png",
    githubIcon: "images/icongithub.svg",
    liveIcon: "images/icon-export.svg",
    technologiesMobile: ["Ruby on Rails", "CSS", "JavaScript"],
    technologiesDesktop: [ "CodeKit", "GitHub", "JavaScript", "Bootstrap", "Terminal", "Codepen"],
    sourceLink: "https://github.com/MohamedHNoor/mobile-firs-project1",
    liveLink: "https://mohamedhnoor.github.io/Portfolio-project1/",
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
];

const myModal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementById("closeBtn");

const closeModal = () => {
  myModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === myModal) {
    myModal.style.display = "none";
  }
};

function viewProjectDetails(projectIndex) {
  const project = data[projectIndex];
  myModal.innerHTML = `<div class="modal-content">
<div class="modal-header">
  <div class="bg-img">
  <span onclick="closeModal()" id="closeBtn" class="close">&times;</span>
  <img class="desktop-bg" src="${project.imageDesktop}" />
  </div>
</div>
<div class="modal-body">
  <div class="title-container">
    <h3 id="title">${project.name}</h3>
  </div>
  <ul class="tags" id="tech">
  ${project.technologiesDesktop.map((ele) => `<li>${ele}</>`)}
  </ul>
  <ul class="tags" id="mobile-ul">
  ${project.technologiesMobile.map((ele) => `<li>${ele}</>`)}
  </ul>
  <p id="description">${project.description}</p>
  <div class="modal-footer">
  <a href="${project.liveLink}">
    <button type="submit" class="project-view-btn">
      <span> See Live</span>
      <img
        src="${project.liveIcon}"
        alt="See Live Project"
        width="20"
        height="20"
      /></button
  ></a>
  <a href="${project.sourceLink}">
    <button type="submit" class="project-view-btn">
      <span>See Source</span>
      <img
        src="${project.githubIcon}"
        alt="See Source Code"
        width="20"
        height="20"
      /></button
  ></a>
</div>
</div>
</div>
`
;
  myModal.style.display = "block";
}
