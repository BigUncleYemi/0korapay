const flkty = new Flickity(elem, { wrapAround: true });
const mobileNavBtn = document.querySelector('#open_dashboard_nav');
const closeMobileNavBtn = document.querySelector('#close_dashboard_nav');
const mobileNav = document.querySelector('aside.dashboard_nav');
const hoverBtns = document.querySelectorAll('.dashboard_main_section-book-meta-mobile-btn');
const closeHoverBtns = document.querySelectorAll('.dashboard_main_section-book-meta-mobile-btn-close');
const overlay = document.querySelectorAll('#overlay');
const mobileSearch = document.querySelector('#mobile-search');
const navList = document.querySelectorAll('.nav_items ul li');
const navLogoSec = document.querySelector('.nav_logo');
const navSearchSec = document.querySelector('.nav_search-conc');
const closeNavSearchSec = document.querySelector('#close_nav_search');
const navSearchInput = document.querySelector('nav .nav_search .nav_search-conc input');
const searchButton = document.getElementById("search-btn");

mobileNavBtn.addEventListener("click", () => {
  mobileNav.style.marginLeft = "0px";
});

closeMobileNavBtn.addEventListener("click", () => {
  mobileNav.style.marginLeft = "-1400px";
});

hoverBtns.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    overlay[index].classList.add("open");
    closeHoverBtns[index].style.display = "block";
    hoverBtns[index].style.display = "none";
  });
});

closeHoverBtns.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    overlay[index].classList.remove("open");
    hoverBtns[index].style.display = "block";
    closeHoverBtns[index].style.display = "none";
  });
});

mobileSearch.addEventListener("click", () => {
  navLogoSec.style.display = "none";
  navSearchSec.style.display = "flex";
  navSearchSec.style.width = "85%";
  closeNavSearchSec.style.display = "block";
  navList.forEach((elem) => {
    elem.style.display = "none";
  })
});

closeNavSearchSec.addEventListener("click", () => {
  navLogoSec.style.display = "flex";
  navSearchSec.style.display = "none";
  closeNavSearchSec.style.display = "none";
  navList.forEach((elem) => {
    elem.style.display = "block";
  })
});

function autocomplete(inp, arr) {
  let currentFocus;
  inp.addEventListener("input", function (e) {
    let b, i, val = this.value;
    let a = document.querySelector(".nav_search-conc-autocomplete");
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a.style.display = "none";
    for (i = 0; i < arr.length; i++) {
      let joinArr = `${arr[i].name} - ${arr[i].author}`;
      if (joinArr.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.setAttribute("class", "nav_search-conc-autocomplete-item");
        b.innerHTML = `<span>${arr[i].name}</span><span id="author"> - ${arr[i].author}</span>`;
        b.innerHTML += `<input type='hidden' value="${joinArr}">`;
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
          Promise.resolve(
            bookData
          ).then(res => {
            res.filter(
              item => item.name === this.getElementsByTagName("input")[0].value.split(" - ")[0]
            ).map((item, index) => {
              console.log(item)
              if(index === 0){
                recent.innerHTML = populateData(item);
                all.innerHTML = populateData(item);
              } else {
                recent.innerHTML += populateData(item);
                all.innerHTML += populateData(item);
              }
            })
          }).catch(e => {
            console.error(e);
          })

        });
        if (b) {
          a.appendChild(b);
          a.style.display = "block";
        } else {
          a.appendChild(b);
        }
      }
    }
  });

  inp.addEventListener("keydown", function (e) {
    var x = document.querySelector(".nav_search-conc-autocomplete");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  searchButton.addEventListener("click", function (e) {
    closeAllLists();
    Promise.resolve(
      bookData
    ).then(res => {
      res.filter(
        item => {
          let joinArr = `${item.name} - ${item.author}`;
          return joinArr.includes(inp.value)
        }
      ).map((item, index) => {
        if(index === 0){
          recent.innerHTML = populateData(item);
          all.innerHTML = populateData(item);
        } else {
          recent.innerHTML += populateData(item);
          all.innerHTML += populateData(item);
        }
      })
    }).catch(e => {
      console.error(e);
    })

  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.querySelector(".nav_search-conc-autocomplete");
    var y = document.querySelectorAll(".nav_search-conc-autocomplete-item");
    for (var i = 0; i < y.length; i++) {
      if (elmnt !== y[i] && elmnt !== inp) {
        if (y.length > 0) {
          x.removeChild(y[i]);
        } else {
          x.style.display = "none";
        }
      }
      x.style.display = "none";
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

autocomplete(navSearchInput, bookData)
