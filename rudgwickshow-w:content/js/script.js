let details1='Learn about the magnificent and mighty traction engines at work in our agricultural working sections with tree trunk sawing, thrashing and baling demonstrations. See the chainsaw sculptors at work, the rural displays, ferret racing, all the vintage vehicles at work, acres of markets stalls, large autojumble section plus an action packed main arena events.';
let details2 ='Come to see and stroke the heavy horses and take a look at our large pet and farm animal sections.Enjoy the always amusing animal parades from chickens to shires with an owl fly past.If you have a goat, sheep,pig ,cow, horse or any animal you’d like to show or bring along feel free. You can always enjoy the  amusing animal parades from chickens to shires with an owl fly past, we even have ferret racing and we’ve seen rabbits, guineas, chicks, ducks, hedgehog and even tortoises.';
let details3='We have a massive 140ft beer marquee with mini beer festival, while listening to live agricultural music from the New Forest Plonkers or relax in the Tea and Ploughman’s lunch marquee.';
let details4='We have a massive 140ft beer marquee with mini beer festival, while listening to live agricultural music from the New Forest Plonkers or relax in the Tea and Ploughman’s lunch marquee.';
let details5='You can sit down and take a break in our 140ft beer marquee with mini beer festival, while listening to live agricultural music from the New Forest Plonkers or relax in the Tea and Ploughman’s lunch marquee.';
let details6='In case you plan on attending several days and need camping, we shall be pleased to assist you.Just fill in the form below and send it to us, then we shall be more than happy to reserve you space for camping.';
let details7='This country show has something for everyone to enjoy, the sights and sounds of the beautifully restored vehicles and exhibits of the past pondering around the site. We also have various displays of cute animals and sometimes if you’re lucky a stray owl will fly over your heads.';
let details8 ='Ride on the old time traditional fair, Visit our 6,000 square feet quality Craft Marquee and new Food Hall with homemade cakes and lots more. We have people that come in fancy dress let alone all our stalls; we have various food stalls, clothing stalls and little goodie stalls';

let photo = document.createElement("img");
document.querySelector('#event-image').appendChild(photo);

const event1Details = () => {   
photo.setAttribute("src","img/event-steam-large.jpg");
document.querySelector('#js-swap').innerHTML = '<h3>Steam Show</h3>' + '<br>';
document.querySelector('#js-swap').innerHTML += details1;
document.querySelector('#details').style.display="flex";
}

document.querySelector("#event-img-1").addEventListener("click", event1Details);

const event2Details = () => {
    photo.setAttribute("src","img/event-farm-animal-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Farm Animals</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details2;
}
document.querySelector("#event-img-2").addEventListener("click", event2Details);

const event3Details = () => {
    photo.setAttribute("src","img/event-children-activity-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Armed Combat</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details3;
}
document.querySelector("#event-img-3").addEventListener("click", event3Details);

const event4Details = () => {
    photo.setAttribute("src","img/event-beer-festival-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Beer Festival</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details4;
}
document.querySelector("#event-img-4").addEventListener("click", event4Details);

const event5Details = () => {
    photo.setAttribute("src","img/event-music-festival-large.jpg");
    document.querySelector('#js-swapt').innerHTML = '<h3>Agricultural Music</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details5;
}
document.querySelector("#event-img-5").addEventListener("click", event5Details);

const event6Details = () => {
    photo.setAttribute("src","img/event-camping-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Public Camping</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details6;
}
document.querySelector("#event-img-6").addEventListener("click", event6Details);

const event7Details = () => {
    photo.setAttribute("src","img/event-dog-show-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Best Friends</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details7;
}
document.querySelector("#event-img-7").addEventListener("click", event7Details);

const event8Details = () => {
    photo.setAttribute("src","img/event-farmer-market-large.jpg");
    document.querySelector('#js-swap').innerHTML = '<h3>Farmer Market</h3>' + '<br>';
    document.querySelector('#js-swap').innerHTML += details8;
}
document.querySelector("#event-img-8").addEventListener("click", event8Details);