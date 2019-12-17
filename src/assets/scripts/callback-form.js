let popupForm = () => {
    let container = document.querySelectorAll('.popup-container');
    document.querySelector('.form-telephone .close').addEventListener('click', () => {
        container[0].style.visibility = 'hidden';
        document.querySelector('.form-telephone').insertAdjacentElement('beforeEnd', document.querySelector('#tel-form'));

        container[0].querySelector('.popup-content').innerHTML = ''
    })
    container[0].querySelector('.popup-content').appendChild(document.querySelector('#tel-form'));

    container[0].style.visibility = 'visible';
    return
};

let formValid = (form) => {
    let name = form.querySelector('[name=name]'),
        email = form.querySelector('[name=email]'),
        message = form.querySelector('textarea');

    let finalObject = {};
    emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    telExpression = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (email && email.value.match(emailExpression)) {
        finalObject.email = email.value;
        console.log(true);
    }
    if (form.querySelector('textarea')) {
        finalObject.message = message.value;
    }
    if (form.querySelector('[name=telephone]') && form.querySelector('[name=telephone]').value.match(telExpression)) {
        finalObject.tel = form.querySelector('[name=telephone]').value;
    };
    !name.value ? name.classList.add('invalid') : finalObject.name = name.value;
    // !message.value ? null : finalObject.message = message.value;
    if (finalObject.name && finalObject.email) {

    };
    console.log(finalObject);
}
let readMoreList = document.querySelectorAll('.read-more-block');
readMoreList.forEach(e => {

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