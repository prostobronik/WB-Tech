import { initialize } from "./initialize.js";
import serverData from "./serverResponse.js";

const response = (document.onload = serverData());

const slider = document.querySelector(".slider");
const sliderItems = slider.getElementsByClassName("slider__item");
const previewRoom = document.querySelectorAll(".preview__room");
const previewLamp = document.querySelector(".preview__lamp");

const darkModeBtn = slider.querySelector(".button__dark");
const lightModeBtn = slider.querySelector(".button__light");

var index = 0;

slider.addEventListener("click", function (event) {
    let target = event.target;

    if (
        target.classList.contains("slider__item") ||
        target.closest(".slider__item")
    ) {
        if (target.classList.contains("slider__item")) {
            index = Array.prototype.indexOf.call(sliderItems, target);

            toggleClassActive(target);
            response.then((data) => {
                initialize(data[index]);
                if (data[index].isDarkMode) {
                    darkModeBtn.style.cursor = "pointer";
                    darkModeBtn.classList.add("button__dark-active");
                } else {
                    darkModeBtn.style.cursor = "default";
                    darkModeBtn.classList.remove("button__dark-active");
                }
            });
        } else {
            target = target.closest(".slider__item");
            index = Array.prototype.indexOf.call(sliderItems, target);

            toggleClassActive(target);
            response.then((data) => {
                initialize(data[index]);
                if (data[index].isDarkMode) {
                    darkModeBtn.style.cursor = "pointer";
                    darkModeBtn.classList.add("button__dark-active");
                } else {
                    darkModeBtn.style.cursor = "default";
                    darkModeBtn.classList.remove("button__dark-active");
                }
            });
        }

        previewRoom[0].classList.add("active");
        previewRoom[1].classList.remove("active");
        previewLamp.style.display = "block";
    }

    if (target.classList.contains("button__dark-active")) {
        previewRoom.forEach((image) => {
            image.classList.toggle("active");
        });
        previewLamp.style.display = "none";
        darkModeBtn.disabled = true;
        lightModeBtn.style.cursor = "pointer";

        
    }
});

lightModeBtn.onclick = function () {
    previewRoom[0].classList.add("active");
    previewRoom[1].classList.remove("active");
    previewLamp.style.display = "block";

    darkModeBtn.disabled = false;
};

function toggleClassActive(target) {
    Array.prototype.forEach.call(sliderItems, function (item) {
        if (item.classList.contains("slider__item-active")) {
            item.classList.remove("slider__item-active");
        }
    });
    target.classList.add("slider__item-active");
}
