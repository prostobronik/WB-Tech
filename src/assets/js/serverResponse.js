import { initialize, initializeSlider } from "./initialize.js";
import preloader from "./preloader.js";

export default async function () {
   const requestURL = "https://private-dcbb75-lampshop.apiary-mock.com/lamps";
   const mock = [
      {
         id: 1,
         name: "Geometric Lamp",
         published_at: "2021-02-05T08:40:51.620Z",
         material: "copper",
         height: 33,
         width: 15,
         weight: 2.5,
         electrification: "LED 10W, G9, 220-240V, 50 Hz",
         image: "https://i.postimg.cc/pXWqhdnX/Lamp-1-2.png",
         isDarkMode: false,
      },
      {
         id: 2,
         name: "Black Geometric Lamp",
         published_at: "2021-02-05T08:40:51.620Z",
         material: "metal",
         height: 45,
         width: 12,
         weight: 2.4,
         electrification: "LED 10W, G9, 220-240V, 40 Hz",
         image: "https://i.postimg.cc/BQJ1cYsJ/Lamp-2-2.png",
         isDarkMode: true,
      },
      {
         id: 3,
         name: "Beige Geometric Lamp",
         published_at: "2021-02-05T08:40:51.620Z",
         material: "plastic",
         height: 40,
         width: 13,
         weight: 2.2,
         electrification: "LED 10W, G9, 220-240V, 30 Hz",
         image: "https://i.postimg.cc/FHTr5p2g/Lamp-6-1.png",
         isDarkMode: false,
      },
      {
         id: 4,
         name: "White Round Lamp",
         published_at: "2021-02-05T08:40:51.620Z",
         material: "plastic",
         height: 20,
         width: 50,
         weight: 3,
         electrification: "LED 10W, G9, 220-240V, 30 Hz",
         image: "https://i.postimg.cc/G2CnB0W3/pngwing-com.png",
         isDarkMode: false,
      },
   ];
   let loader = await preloader();
   let json = await fetch(requestURL)
      .then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
         }
         loader();
         return response.json();
      })
      .catch((err) => {
         console.error(`Fetch problem: ${err.message}`);
         loader();
         return mock;
      });

   initialize(json[0]);
   initializeSlider(json);

   return json;
}
