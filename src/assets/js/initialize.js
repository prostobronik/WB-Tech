export function initialize(data) {
    const lampFeatures = document.querySelector(".feature__general");
    const lampImage = document.querySelector(".feature__image");
    const previewLamp = document.querySelector(".preview__lamp");

    const lampMaterial = lampFeatures.querySelector(".feature__material span");
    const lampDimensions = lampFeatures.querySelector(
        ".feature__dimensions span"
    );
    const lampNetWeight = lampFeatures.querySelector(
        ".feature__netWeight span"
    );
    const lampElectrification = lampFeatures.querySelector(
        ".feature__electrification span"
    );

    lampImage.src = `${data.image}`;
    lampMaterial.innerHTML = `${data.material}`;
    lampDimensions.innerHTML = `H ${data.height} x W ${data.width} x D ${data.width}`;
    lampNetWeight.innerHTML = `${data.weight}kg`;
    lampElectrification.innerHTML = `${data.electrification}`;

    previewLamp.src = `${data.image}`;
}

export function initializeSlider(data) {
    const slider = document.querySelector(".slider__list");

    for (let lamp of data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.alt = "lamp-icon";
        img.src = `${lamp.image}`;
        div.classList.add("slider__item");
        div.append(img);
        slider.append(div);
    }

    slider.firstChild.classList.add("slider__item-active");
}
