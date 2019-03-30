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
    // на каждый элемент навесить обработчик клика
    Array.prototype.forEach.call(allExpanded, (btn) => {
      btn.addEventListener('click', (e) => navClickHandler(e));
    });
  }

  // сделать, чтобы текстареа раздвигалась в процессе набора текста
  const textarea = document.getElementById('commentFormTextarea');
  const autoExpand = (field) => {
    // Reset field height
    field.style.height = 'inherit';

    // Get the computed styles for the element
    const computed = window.getComputedStyle(field);

    // Calculate the height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                + parseInt(computed.getPropertyValue('padding-top'), 10)
                + field.scrollHeight
                + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    field.style.height = height + 'px';
  } // end of autoExpand
  textarea.addEventListener('input', function (e) {
    // if (e.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(e.target);
  }, false);
  // подсветка textarea при фокусе
  textarea.addEventListener('focus', (e) => {
    e.target.style.border = '1px solid #ffcf34';
  });
  textarea.addEventListener('blur', (e) => {
    e.target.style.border = '1px solid #d9d9d9';
  });

  // подсветка инпутов при фокусе
  const commentForm = document.getElementById('addCommentForm');
  commentForm.userName.addEventListener('focus', (e) => {
    e.target.style.border = '1px solid #ffcf34';
  });
  commentForm.userName.addEventListener('blur', (e) => {
    e.target.style.border = '1px solid #d9d9d9';
  });
  commentForm.userEmail.addEventListener('focus', (e) => {
    e.target.style.border = '1px solid #ffcf34';
  });
  commentForm.userEmail.addEventListener('blur', (e) => {
    e.target.style.border = '1px solid #d9d9d9';
  });
});