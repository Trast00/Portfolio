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
  var container = document.createElement('div')
  container.id = "project-detail-modal"
  container.classList.add('work-detail-wrapper')

  var wrapper = document.createElement('div')
  wrapper.classList.add('work-detail')

  //add icons-close  element
  var btnClose = document.createElement('div')
  btnClose.id = "btn-close-detail"
  btnClose.classList.add('close-icon')
  var icon = document.createElement('i')
  icon.classList.add('fa-solid', 'fa-xmark')
  btnClose.append(icon)
  btnClose.addEventListener('click', function() {
    document.getElementById("project-detail-modal").remove()
  })
  var row = document.createElement('div')
  row.classList.add('row')
  row.append(btnClose)
  wrapper.append(row)

  //add img
  var img = document.createElement('img')
  img.src = project.image
  img.alt = "Project Image"
  wrapper.append(img)
  //add title
  var title = document.createElement('h2')
  title.textContent = project.name
  wrapper.append(title)

  //add list-tag
  var listTag = document.createElement('ul')
  listTag.classList.add('list-tag')
  for (var i=0; i<project.technologies.length; i++){
    var tag = document.createElement("li")
    tag.classList.add("tags")
    tag.textContent = project.technologies[i]
    listTag.append(tag)
  }
  wrapper.append(listTag)

  //add description
  var description = document.createElement('p')
  description.id = "work-detail-description"
  description.textContent = project.description
  wrapper.append(description)

  //add buttons
  var btnGroupe = document.createElement('div')
  btnGroupe.classList.add('btn-group')

  var btnLive = document.createElement('button')
  var btnSource = document.createElement('button')
  btnLive.classList.add('buttons')
  btnSource.classList.add('buttons')

  var btnLiveText = document.createElement('p')
  btnLiveText.textContent = "See Live"
  btnLive.append(btnLiveText)
  var btnIcon = document.createElement('img')
  btnIcon.src = "images/iconsLive.png"
  btnLive.append(btnIcon)

  var btnSourceText = document.createElement('p')
  btnSourceText.textContent = "See Source"
  btnIcon = document.createElement('i')
  btnIcon.classList.add('fa-brands', 'fa-github')
  btnSource.append(btnSourceText)
  btnSource.append(btnIcon)

  btnGroupe.append(btnLive)
  btnGroupe.append(btnSource)
  wrapper.append(btnGroupe)

  container.append(wrapper)
  //show wrapper on body
  document.body.append(container)
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
defaultDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
var listProject = [
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project1.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project2.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project3.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project4.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project5.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } },
  {name: "Multi-Post Stories Gain+Glory", description: defaultDescription, image: "images/Project6.png", technologies: ["Ruby on rails", "css", "JavaScript", "html"], link: { live: "", source: "" } }
]
/* Create list of project dynamically */
var listWork = document.getElementById("list-work")
listProject.forEach(project => {
  let work = document.createElement('li')
  let img = document.createElement('img')
  let detailContainer = document.createElement('div')
  let title = document.createElement('h2')
  let listTag = document.createElement('ul')
  var btnShowDetail = document.createElement('button')
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
})