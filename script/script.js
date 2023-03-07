// Открытие popup и закрытие
const popup = document.querySelector('.popup_application');
const popupCard = popup.querySelector('.popup__card')
const openPopup = document.querySelectorAll('.js-popup-open');
const closePopup = popup.querySelector('.js-popup-close');
const send = popup.querySelector('.js-send');
const popupGood = document.querySelector('.popup_good');
const closePopupGood = popupGood.querySelector('.js-popup-close-good');
const closePopupThanks = popupGood.querySelector('.js-thanks')
const popupBad = document.querySelector('.popup_bad');
const closePopupBad = popupBad.querySelector('.js-popup-close-bad');
const closePopupMore = popupBad.querySelector('.js-more')
const body = document.querySelector('body');
//ширина скролла
const scrollWidth = window.innerWidth - body.offsetWidth + 'px';

const popupOpen = (open, object) => {
    open.addEventListener('click', (event) => {
        event.preventDefault();

        object.classList.add('popup_active');
        body.classList.add('body_lock');
        body.style.paddingRight = scrollWidth;
    })
}

const popupClose = (close, object) => {
    close.addEventListener('click', (event) => {
        event.preventDefault();

        object.classList.remove('popup_active');
        body.classList.remove('body_lock');
        body.style.paddingRight = '0px'
    })
}

const goodOrBad = (close, object, object2) => {
    close.addEventListener('click', (event) => {
        event.preventDefault();

        object.classList.remove('popup_active');
        object2.classList.add('popup_active');
    })
}

const outsideWindow = (object) => {
    document.addEventListener('mousedown', (event) => { 
        if (event.target === object) {
            event.preventDefault();
            
            object.classList.remove('popup_active');
            body.classList.remove('body_lock');
            body.style.paddingRight = '0px'
        }
    });
}

openPopup.forEach((popupLink) => {
    popupOpen(popupLink, popup);
});
popupClose(closePopup, popup);
outsideWindow(popup);
goodOrBad(send, popup, popupGood);
popupClose(closePopupGood, popupGood);
popupClose(closePopupThanks, popupGood);
outsideWindow(popupGood);
//goodOrBad(send, popup, popupBad);
//popupClose(closePopupBad, popupBad);
//popupClose(closePopupMore, popupBad);
//outsideWindow(popupBad);

// Открытие бургер
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__info');

let menuOpen = false;

if(burger) {
    burger.addEventListener('click',() => {
        if(!menuOpen) {
            burger.classList.add('header__burger_close');
            menu.classList.add('header__info_active');
            body.classList.add('body_lock');
            menuOpen = true;
        } else {
            burger.classList.remove('header__burger_close');
            menu.classList.remove('header__info_active');
            body.classList.remove('body_lock');
            menuOpen = false;
        }
    });
}

// Маска для телефона
const tel = document.querySelectorAll('.js-tel');

window.addEventListener("DOMContentLoaded", () => {
    [].forEach.call(tel, (input) => {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        const pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, (a) => {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        let reg = matrix.substring(0, this.value.length).replace(/_+/g,
            (a) => {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
    });
});