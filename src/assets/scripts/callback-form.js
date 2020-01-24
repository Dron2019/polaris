let popupForm = () => {
    let container = document.querySelector('.popup-container');

    document.querySelector('.form-telephone .close').addEventListener('click', () => {
        autoToogleClass(container, 'menuClose');
        setTimeout(() => {
            container.style.visibility = 'hidden';
        }, 500);

        document.querySelector('.form-telephone').insertAdjacentElement('beforeEnd', document.querySelector('#tel-form'));
        container.querySelector('.popup-content').innerHTML = '';

    })
    container.querySelector('.popup-content').appendChild(document.querySelector('#tel-form'));
    // container.classList.add('menuOpen');

    autoToogleClass(container, 'menuOpen');
    container.style.visibility = 'visible';
    return
};
emailExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
telExpression = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
let formValid = (form) => {
    let name = form.querySelector('[name=name]'),
        email = form.querySelector('[name=email]'),
        message = form.querySelector('textarea'),
        tel = form.querySelector('[name=telephone]'),
        radio = form.querySelector('[name=checkedtime]'),
        responseSpan = form.querySelector('.response-span');
    let finalObject = {};
    if (radio) {
        radio.checked ? finalObject.time = form.querySelector('select').value : finalObject.time = form.querySelector('select ').value;
    }
    if (email && email.value.match(emailExpression)) {
        finalObject.email = email.value;
    }
    if (form.querySelector('textarea')) {
        finalObject.message = message.value;
    }
    if (tel && tel.value.match(telExpression)) {
        finalObject.tel = tel.value;
    };
    if (name.value) {
        finalObject.name = name.value;
    }
    if (finalObject.name) {
        let data = new FormData();
        for (const key in finalObject) {
            data.append(key, finalObject[key]);
        };
        let request = new XMLHttpRequest();
        request.open('POST', './inc/form.php');
        request.send(data);
        request.onload = () => {
            response = request.responseText;
            if (response == 'succes') {
                form.querySelector('.send-form').setAttribute('disabled', '');
                responseSpan.innerHTML = 'Ваше сообщение отправлено';
                formReset(form);
            } else {
                responseSpan.innerHTML = 'Ошибка отправки';
                // console.log('fail');
            }
        }
    } else {
        responseSpan.innerHTML = 'Необходимо заполнить все поля';
    }
};
let readMoreList = document.querySelectorAll('.form-js');
readMoreList.forEach(e => {

    e.addEventListener('click', function(i) {
        i.preventDefault();

        popupForm();

    });
});

let formReset = (form) => {
    if (form.id == 'tel-form') {
        dataLayer.push({
            'event': 'reguest'
        }) /**GTM Click observe */
    } else if (form.id == 'main-form') {
        dataLayer.push({
            'event': 'reguest2'
        }) /**GTM Click observe */
    }

    form.querySelectorAll('input,textarea').forEach(item => {
        item.innerHTML = '';
        item.value = '';
    })
}
let fieldValidation = (form) => {
    let array = [name = form.querySelector('[name=name]'),
        email = form.querySelector('[name=email]'),
        message = form.querySelector('textarea'),
        tel = form.querySelector('[name=telephone]'),
        radio = form.querySelector('input[name=checkedtime]')
    ];
    array.forEach(item => {
        if (item != null) {
            // console.log(item.name)
            item.addEventListener('blur', () => {
                switch (item.name) {
                    case 'name':
                        if (!item.value.match(/[a-z]{5}/g)) {
                            item.parentNode.querySelector('.line').classList.add('invalid');
                            // console.log(item.value.length);
                            // console.log(item.parentNode, 'parent');
                        } else {
                            item.parentNode.querySelector('.line').classList.remove('invalid');
                            // console.log(item.value.length);
                        }
                        break;
                    case 'email':
                        if (!item.value.match(emailExpression)) {
                            item.parentNode.querySelector('.line').classList.add('invalid');
                            // console.log(item.value);
                            // console.log(item.name);
                        } else {
                            item.parentNode.querySelector('.line').classList.remove('invalid');
                        }
                        break;
                    case 'telephone':
                        if (!item.value.match(telExpression)) {
                            item.parentNode.querySelector('.line').classList.add('invalid');
                            // console.log(item.value);
                            // console.log(item.name);
                        } else {
                            item.parentNode.querySelector('.line').classList.remove('invalid');
                        }
                        break;
                    default:
                        null
                        break;
                };
            });
        }
    })
};
let telForm = document.querySelector('#tel-form');
let messageForm = document.querySelector('#main-form');
fieldValidation(telForm);
fieldValidation(messageForm);
telForm.querySelector('.send-form').addEventListener('click', (e) => {
    formValid(telForm);

});
messageForm.querySelector('.send-form').addEventListener('click', (e) => {
    formValid(messageForm);
});

let sendForm = (object, url) => {
    let data = new FormData();
    let finalResponse = false;
    for (const key in object) {
        data.append(key, object[key]);
    };
    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.send(data);
    request.onload = () => {
        // console.log('a');
        // console.log(request);

    }
};

let inputDefaultText = (form) => {
    document.querySelector(form).querySelector('input[name=telephone]').addEventListener('focus', e => {
        e.target.value = '+(380)';
    })
};
inputDefaultText('#tel-form');

function autoToogleClass(selector, class1) {
    selector.classList.add(class1);
    setTimeout(() => {
        selector.classList.remove(class1);
    }, 1000);
};