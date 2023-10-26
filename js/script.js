bars = document.querySelector('.bars');
bars.onclick = function()
{
    navbar = document.querySelector('#menu');
    navbar.classList.toggle('active');
}

textarea = document.querySelector('#textarea');

result = document.querySelector('#resultarea');

textarea.addEventListener('input', () =>
{
    const htmlCode = textarea.value;

    result.srcdoc = htmlCode;
});