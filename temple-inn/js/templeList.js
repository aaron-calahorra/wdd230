const requestURL = "templeInnLocations.json";
let i = '';
let temples = [];

fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {  // Create elements to add to the document
    let card = document.createElement('div');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let ad = document.createElement('p');
    let phone = document.createElement('p');
    let serv = document.createElement('p');
    let an = document.createElement('p');
    let gb = document.createElement('p');
    let de = document.createElement('p');
    let ap = document.createElement('a');
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = temple.temple;
    img.setAttribute('src', temple.imageURL);
    img.setAttribute('alt', temple.temple);
    ad.textContent = "Address: " + temple.address;
    phone.textContent = temple.telephone;
    serv.textContent = temple.services;
    an.textContent = "Announcement: " + temple.announced;
    gb.textContent = "Groundbreaking: " + temple.groundbreaking;
    de.textContent = "Dedication: " + temple.dedicated;
    de.setAttribute('class', 'de-spacing')
    ap.setAttribute('href', temple.appointment);
    ap.setAttribute('class', 'orange-button')
    ap.textContent = 'Make an appointment';
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(ad);
    card.appendChild(phone);
    card.appendChild(serv);
    card.appendChild(an);
    card.appendChild(an);
    card.appendChild(gb);
    card.appendChild(de);
    card.appendChild(ap);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.temple-list').appendChild(card);
}
