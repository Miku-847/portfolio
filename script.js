import { projects } from './data/projectList.js';

const cursor = document.querySelector('.custom-cursor');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.js-close-button');

// for desktop
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// header for mobile layout
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});



const projectList = document.querySelector('.project-list');

projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
    <div class="editor-bar">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="filename">${project.filename || ""}</span>
    </div>

    <h3>${project.title}</h3>
    <p>${project.description}</p>

    ${project.learnings ? `
      <ul class="learnings">
        ${project.learnings.map(item => `<li>${item}</li>`).join("")}
      </ul>
    ` : ""}

    <img src="${project.image}" alt="${project.title}">

    <div class="project-link">
      ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
      <a href="${project.github}" target="_blank">GitHub</a>
    </div>
  `;

    projectList.appendChild(card);
});
