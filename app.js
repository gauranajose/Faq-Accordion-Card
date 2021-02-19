const elements = document.querySelectorAll('ul li');

const toggleHandler = event => {
    event.stopPropagation();
    const element = event.currentTarget.firstElementChild;
    element.nextElementSibling.classList.toggle('hidden');
    element.firstElementChild.classList.toggle('active');
    element.lastElementChild.classList.toggle('active-img');
    document.body.style.height = document.documentElement.scrollHeight + 'px';
}

for(const el of elements) {
    el.addEventListener('click', toggleHandler);
}