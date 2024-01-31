const url = "https://dicmaryzambrano.github.io/wdd230/chamber/data/gallery.json";
const sections = document.querySelectorAll(".gallery");

async function populateImages() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const imagesPerSection = Math.ceil(data.figures.length / sections.length);

    sections.forEach((section, i) => {
      const sectionImages = data.figures.slice(i * imagesPerSection, (i + 1) * imagesPerSection);

      sectionImages.forEach(image => {
        const figure = document.createElement("figure");
        figure.classList.add("hover");

        const img = document.createElement("img");
        img.src = image.img;
        img.alt = image.title;
        img.width = 1;
        img.height = 1;
        img.loading = "lazy";

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = image.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        section.appendChild(figure);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

populateImages();