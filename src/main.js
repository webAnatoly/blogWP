import './main.scss';



document.addEventListener("DOMContentLoaded", function(event) {

  // обработчик клика для раскрывающихся меню в панели навигации
  const navClickHandler = (e) => {
    const t = e.target;
    const ct = e.currentTarget;
    const droppedMenu = ct.querySelector('.dropdown-menu');
    const arrow = ct.querySelector('.nav-expanded-item__arrow');
    if (t.classList.contains('nav-li') ||
        t.classList.contains('svg-nav-arrow') ||
        t.tagName == "IMG" ||
        t.tagName == "svg" || 
        t.tagName == "path") {
        droppedMenu.classList.toggle('dropdown-menu--hidden');
        arrow.classList.toggle('nav-expanded-item__arrow--reversed');
    }
  }

  // получить все елементы nav-expanded-item
  const allExpanded = document.querySelectorAll('.nav-expanded-item');
  if (allExpanded !== null && allExpanded.length > 0) {
    console.log('allExpanded', allExpanded);
    // на каждый элемент навесить обработчик клика
    Array.prototype.forEach.call(allExpanded, (btn) => {
      btn.addEventListener('click', (e) => navClickHandler(e));
    });
  }
});