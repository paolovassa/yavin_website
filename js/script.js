function userScroll() {
    const nav = document.querySelector(".navbar");
    const toTopBtn = document.querySelector("#to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("navbar-sticky");
            toTopBtn.classList.add("show");
        } else {
            nav.classList.remove("navbar-sticky");
            toTopBtn.classList.remove("show");
        }
    });
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function incrementStats() {
    const counters = document.querySelectorAll(".counter");//Array che contiene tutti gli elementi che hanno la classe counter

    counters.forEach((counter) => {
        counter.innerText = 0;

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");//Valore finale che deve essere scritto nell'elemento
            const c = +counter.innerText;//Valore attualmente scritto nell'elemento

            const increment = target / 200;

            if (c < target) {
                counter.innerText = Math.ceil(c + increment);
                setTimeout(updateCounter, 1);
            } else {
                counter.innerText = target;
            }

        }

        updateCounter();
    })
}

//Event Listeners
document.addEventListener('DOMContentLoaded', userScroll);
document.addEventListener('DOMContentLoaded', incrementStats);
document.getElementById("to-top").addEventListener('click',scrollToTop);