const requestURL = "directory.json";
let companies = [];

fetch(requestURL)
    .then(function (response) {
    return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    });

function displayCompanies(company) {  // Create elements to add to the document
    let card = document.createElement('div');
    let bn = document.createElement('p');
    let img = document.createElement('img');
    let ba = document.createElement('p');
    let bp = document.createElement('p');
    let bm = document.createElement('a');
    let market = document.createElement('p');
    // Change the textContent property of the h2 element to contain the prophet's full name
    bn.textContent = `${company.name}`;
    ba.textContent = `${company.address}`;
    bp.textContent = `${company.phone}`;
    bm.textContent = `${company.email}`;
    bm.setAttribute('href', '#');
    market.textContent = `${company.market}`;
    img.setAttribute('src', company.imageurl);
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(bn);
    card.appendChild(ba);
    card.appendChild(bp);
    card.appendChild(bm);
    card.appendChild(market);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
    }