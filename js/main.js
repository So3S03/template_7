let navElements = document.querySelectorAll('.nav');
navElements.forEach(element => {
    element.addEventListener('click', () => {
        navElements.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    });
});