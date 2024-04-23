const bandselement = document.querySelector("#bandsList");
const bands = getAllBands();

function displayBandCards() {
    bands.forEach(band => {
        const div = document.createElement('div');
        div.classList.add('card', 'text-bg-dark', 'col-4');

        const img = document.createElement('img');
        img.src = `/img/bands/${band.img}`;
        img.classList.add('card-img');
        img.alt = '';
        img.height = 400;
        img.id = 'bandImage';

        const overlayDiv = document.createElement('div');
        overlayDiv.classList.add('card-img-overlay');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = band.name;
        title.id = 'bandName';

        overlayDiv.appendChild(title);
        div.appendChild(img);
        div.appendChild(overlayDiv);

        bandselement.appendChild(div);
    });
};

addEventListener('DOMContentLoaded', () => {
    displayBandCards();
});