const loginButton = document.getElementById('login');
const dropdown = document.querySelector('.dropdown');

loginButton.addEventListener('mouseenter', function () {
    const rect = loginButton.getBoundingClientRect();

    dropdown.style.position = 'absolute';
    dropdown.style.top = `${rect.bottom + window.scrollY}px`;
    dropdown.style.left = `${rect.left + window.scrollX}px`;
    dropdown.style.display = 'block';
    document.body.appendChild(dropdown); 
});

loginButton.addEventListener('mouseleave', function () {
    dropdown.style.display = 'none';
});




const dotButton = document.getElementById('dot');
const dropMenu = document.querySelector('.drop');

document.body.appendChild(dropMenu);

dotButton.addEventListener('mouseenter', function () {
    const rect = dotButton.getBoundingClientRect();
    dropMenu.style.position = 'absolute';
    dropMenu.style.top = `${rect.bottom + window.scrollY}px`;
    dropMenu.style.left = `${rect.left + window.scrollX - dropMenu.offsetWidth}px`;
    dropMenu.style.display = 'block';
});

dotButton.addEventListener('mouseleave', function () {
    dropMenu.style.display = 'none';
});

