export default async function () {
   const loader = `<div class="preloader lds-dual-ring"></div>`;
   const featureLamp = document.querySelector(".feature__lamp");
   const sliderList = document.querySelector(".slider");
   const previewLamp = document.querySelector(".preview__container");

   featureLamp.insertAdjacentHTML("afterbegin", loader);
   sliderList.insertAdjacentHTML("afterbegin", loader);
   previewLamp.insertAdjacentHTML("afterbegin", loader);

   return function () {
      const findPreloader = document.querySelectorAll(".preloader");
      for (let i = 0; i < findPreloader.length; i++) {
         findPreloader[i].remove();
      }
   };
}
