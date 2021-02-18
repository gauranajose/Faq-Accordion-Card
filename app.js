const elements = document.querySelectorAll('ul li');

console.log(elements);

const toggleHandler = event => {
    event.stopPropagation();
    const element = event.currentTarget.firstElementChild;
    element.nextElementSibling.classList.toggle('hidden');
    element.firstElementChild.classList.toggle('active');
    element.lastElementChild.classList.toggle('active-img');
}

for(const el of elements) {
    el.addEventListener('click', toggleHandler);
}