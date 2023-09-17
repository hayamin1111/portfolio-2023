
// const buttons = document.querySelectorAll('button');

// buttons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const elem = e.currentTarget;
//     const target = elem.dataset.target;

//     const buttonWrapper = document.querySelector(`.link-${target}`);
//     console.log(`${target}`);
//     buttonWrapper.classList.add('is-show');

//     const section = document.querySelector(`.section-${target}`);
//     section.classList.add('is-show');
//   });
// });

//scroll連動アニメーション
const targetElems = document.querySelectorAll('.section');

const options = {
  root: null,
  rootMargin: "-20% 0px -20% 0px",
  threshold: 0
}

const callback = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      changeColor(entry.target);
      console.log('見えています。');
    } else {
      console.log('見えていません。');
    }
  });
}

const observer = new IntersectionObserver(callback, options);

targetElems.forEach(targetElem => {
  observer.observe(targetElem);
});

function changeColor(target){

  const currentActiveSection = document.querySelector('.is-changeColor');
  if(currentActiveSection !== null) {
    console.log(currentActiveSection);
    currentActiveSection.classList.remove('is-changeColor');
  }
  target.classList.add('is-changeColor');
};
