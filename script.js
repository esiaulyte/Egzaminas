const burger = document.getElementById("burger");
const sideNav = document.querySelector(".side-nav");
const tabs = document.getElementsByClassName("tab");
const buttons = document
  .getElementById("tabs-buttons")
  .querySelectorAll("button");

const headerLinks = document
  .querySelectorAll("nav")[0]
  .querySelectorAll("button");

const pageSections = document.querySelectorAll("section");

function showTab(event, id) {
  for (var tab of tabs) {
    tab.classList.remove("block");
  }
  document.getElementById(id).classList.add("block");

  // Mygtukų stilius
  for (var button of buttons) {
    button.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

function showPage(event, id) {
  for (var link of headerLinks) {
    link.classList.remove("active-header-link");

    if (link.id === id + "-link") {
      for (var section of pageSections) {
        if (section.id === id) {
          window.scrollTo({
            top: section.offsetTop - 100,
            left: 0,
            behavior: "smooth",
          });
        }
      }

      link.classList.add("active-header-link");
    }
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    burger.classList.remove("rotate");
    sideNav.classList.remove("translate");
  }
});

// const nav1 = document;
// const links1 = nav1.querySelectorAll(".link");

// const nav2 = document.querySelectorAll("nav")[1]
// const links2 = nav2.querySelectorAll(".link");

// const sections = document.querySelectorAll("section")
// window.addEventListener("scroll", function(){
//     let current = ""
//     for(let section of sections){
//         const sectionTop = section.offsetTop
//         if(window.pageYOffset >= sectionTop - 50) {
//             current = section.getAttribute("id")
//         }
//     }

//     for(var x of links1){
//         x.classList.remove("active")
//         if(x.getAttribute("href") === "#" + current){
//             x.classList.add("active")
//         }
//     }

//     for(var x of links2){
//         x.classList.remove("active")
//         if(x.getAttribute("href") === "#" + current){
//             x.classList.add("active")
//         }
//     }
// })
