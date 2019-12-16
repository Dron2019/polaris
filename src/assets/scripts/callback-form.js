let popupForm = () => {
    let container = document.querySelectorAll('.popup-container');
    container[0].querySelector('.close').addEventListener('click', () => {
        container[0].style.visibility = 'hidden';
        document.querySelector('.contact-text-block').insertAdjacentElement('afterEnd', document.querySelector('form'));

        container[0].querySelector('.popup-content').innerHTML = ''
    })
    container[0].querySelector('.popup-content').appendChild(document.querySelector('form'));

    container[0].style.visibility = 'visible';
    return

};

let formValid = (form) => {
    let name = form.querySelector('[name=name]'),
        email = form.querySelector('[name=email]'),
        message = form.querySelector('[name=message]');
    let finalObject = {};
    emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailExpression)) {
        email.classList.remove('invalid');
        finalObject.email = email.value;
        console.log(true);
    } else {
        email.classList.add('invalid');
        console.log(false);
    };
    !name.value ? name.classList.add('invalid') : finalObject.name = name.value;
    // !message.value ? null : finalObject.message = message.value;
    if (finalObject.name && finalObject.email) {

        console.log('SEND ME');

    }
}
let readMoreList = document.querySelectorAll('.read-more-block');
readMoreList.forEach(e => {
    console.log(e.tagName);
    e.addEventListener('click', function(i) {

        if (e.tagName == 'BUTTON') {
            formValid(e.parentElement)
            return
        } else {
            i.preventDefault();
            popupForm();
        }
    });
});