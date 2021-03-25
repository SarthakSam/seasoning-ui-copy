window.onload = () => {
    document.querySelector("#small-popup-open-btn").onclick = () => {
        document.querySelector("#small-popup").classList.add("active");
        let closeButtons = document.querySelectorAll("#small-popup .popup__close");
        for(let button of closeButtons) {
            button.addEventListener('click', closePopup.bind(null, "small-popup"));
        }
    }

    function closePopup(id) {
        let closeButtons = document.querySelectorAll(`#${id} .popup__close`);
        for(let button of closeButtons)
            button.removeEventListener('click', closePopup);
        document.querySelector(`#${id}`).classList.remove("active");
    }

    document.querySelector("#popup-open-btn").onclick = () => {
        document.querySelector("#medium-popup").classList.add("active");
        let closeButtons = document.querySelectorAll("#medium-popup .popup__close");
        for(let button of closeButtons) {
            button.addEventListener('click', closePopup.bind(null, "medium-popup"));
        }
    }

    // function closePopup() {
    //     let closeButtons = document.querySelectorAll("#popup .popup__close");
    //     for(let button of closeButtons)
    //         button.removeEventListener('click', closePopup);
    //     document.querySelector("#popup").classList.remove("active");
    // }

    document.querySelector("#large-popup-open-btn").onclick = () => {
        document.querySelector("#large-popup").classList.add("active");
        let closeButtons = document.querySelectorAll("#large-popup .popup__close");
        for(let button of closeButtons) {
            button.addEventListener('click', closePopup.bind(null, "large-popup"));
        }
    }

    // function closePopup() {
    //     let closeButtons = document.querySelectorAll("#large-popup .popup__close");
    //     for(let button of closeButtons)
    //         button.removeEventListener('click', closePopup);
    //     document.querySelector("#large-popup").classList.remove("active");
    // }
}



