function highlightMenuItem(menuItemID, highlighted) {
  const elem = document.getElementById(menuItemID);
  if (highlighted) {
    elem.style.fontSize = '1.2rem';
    elem.style.textDecoration = 'underline';
  } else {
    elem.style.fontSize = '0.938rem';
    elem.style.textDecoration = 'none';
  }
}

function showProjectDetail(project) {
  console.log("show:", project)
}

/* toggle Menu button Event */
const menu = document.getElementById('mobile-nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
openMenu.addEventListener('click', () => {
  menu.style.right = '0';
});
closeMenu.addEventListener('click', () => {
  menu.style.right = '-100vw';
});

document.getElementById('works-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });
document.getElementById('about-me-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });
document.getElementById('footer-mobile-menu-item').addEventListener('click', () => { closeMenu.click(); });

/* highlight displayed section */
const workSection = document.getElementById('works');
const aboutMeSection = document.getElementById('about-me');
const footerSection = document.getElementById('footer');

workSection.addEventListener('mouseover', () => { highlightMenuItem('works-desktop-menu-item', true); });
aboutMeSection.addEventListener('mouseover', () => { highlightMenuItem('about-me-desktop-menu-item', true); });
footerSection.addEventListener('mouseover', () => { highlightMenuItem('footer-desktop-menu-item', true); });

workSection.addEventListener('mouseout', () => { highlightMenuItem('works-desktop-menu-item', false); });
aboutMeSection.addEventListener('mouseout', () => { highlightMenuItem('about-me-desktop-menu-item', false); });
footerSection.addEventListener('mouseout', () => { highlightMenuItem('footer-desktop-menu-item', false); });

/* Work Detail */
/*
-list of work 
-list of work create the work sections
-click event open or close work detail
*/
var listProject = [
  {name: "Multi-Post Stories Gain+Glory", description: "description 1", image: "images/Project1.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: "description 2", image: "images/Project2.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: "description 3", image: "images/Project3.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: "description 4", image: "images/Project4.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: "description 5", image: "images/Project5.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: "description 6", image: "images/Project6.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } }
]
/* Create list of project dynamically */
var listWork = document.getElementById("list-work")
for (var i=0; i<listProject.length; i++) {
  var project = listProject[i]

  let work = document.createElement('li')
  let img = document.createElement('img')
  let detailContainer = document.createElement('div')
  let title = document.createElement('h2')
  let listTag = document.createElement('ul')
  let btnShowDetail = document.createElement('button')
  /* Add Containt */
  work.classList.add('work')
  img.src = project.image
  img.alt = "Project image"

  title.classList.add('section-title')
  title.innerHTML = project.name

  listTag.classList.add('list-tag')
  for (var j=0; j<project.technologies.length; j++){
    var tag = document.createElement("li")
    tag.classList.add("tags")
    tag.textContent = project.technologies[j]
    listTag.append(tag)
  }

  btnShowDetail.classList.add('buttons')
  btnShowDetail.textContent = 'See Project'

  btnShowDetail.addEventListener('click', function() {showProjectDetail(project)})

  work.append(img)
  detailContainer.append(title)
  detailContainer.append(listTag)
  detailContainer.append(btnShowDetail)
  work.append(detailContainer)

  listWork.append(work)
}