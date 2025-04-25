/* ========================= Typing Animation ========================= */
let typed = new Typed(".typing", {
    strings: [
      "",
      "Front-End Programmer",
      "Web Developer",
      "AI Engineer",
      "Machine Learning Engineer",
      "Front-End Programmer",
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
  });
  
  /* ========================= Aside ========================= */
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
      removeBackSection();
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
          //allSection[j].classList.add("back-section")
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });
  }
  
  function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }
  
  function addBackSection(num) {
    allSection[num].classList.add("back-section");
  }
  
  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  
  function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
      navList[i].querySelector("a").classList.remove("active");
      const target = element.getAttribute("href").split("#")[1];
      if (
        target ===
        navList[i].querySelector("a").getAttribute("href").split("#")[1]
      ) {
        navList[i].querySelector("a").classList.add("active");
      }
    }
  }
  
  // Function to toggle technology list visibility
  function toggleTechList(domain) {
    // Get the corresponding technology list by domain
    const techList = document.querySelector(`.${domain}-tech-list`);
    
    // Toggle the visibility
    if (techList.classList.contains('hidden')) {
      techList.classList.remove('hidden');
    } else {
      techList.classList.add('hidden');
    }
  }
  
  
  document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  });
  
  // Update the nav toggler button event listener
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");

// Use both click and touch events for better mobile support
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
navTogglerBtn.addEventListener("touchstart", asideSectionTogglerBtn);

function asideSectionTogglerBtn(e) {
  e.preventDefault();
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  document.body.classList.toggle("menu-open");
  for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
  }
}

// Update nav item click handlers for mobile
for (let i = 0; i < totalNavList; i++) {
const a = navList[i].querySelector("a");
a.addEventListener("click", function(e) {
    // For mobile, prevent default only if it's a hash link
    if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
    }
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn(e);
    }
});

// Add touch event for mobile
a.addEventListener("touchstart", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
        e.preventDefault();
    }
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
            addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn(e);
    }
  });
}