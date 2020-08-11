const anchors = document.querySelectorAll('a.nav__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


const copy = document.querySelector('.copy-js');
const email = document.querySelector('.email-js');
const title = document.querySelector('.title-js');
copy.addEventListener('click', copyEmail);

function copyEmail() {

  email.select();
  document.execCommand("copy");

  title.textContent = 'Email (copied!)';
  document.getSelection().removeAllRanges();
};


const portfolio = document.querySelector('.portfolio__button');
portfolio.addEventListener('click', toggle);
function toggle(e) {
	e.preventDefault();
	portfolio.classList.add('portfolio-js');
	portfolio.textContent = 'Ooops... I`ll have more projects when you give me a job!'
}

