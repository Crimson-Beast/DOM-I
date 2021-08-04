const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const homeAnchor = document.createElement('a')
const coolAnchor = document.createElement('a')
const nav = document.querySelector('nav')

homeAnchor.setAttribute('href', "#")
coolAnchor.setAttribute('href', "#")

nav.appendChild(coolAnchor)
nav.prepend(homeAnchor)

const navAnchors = document.querySelectorAll('header nav a');
//console.log(navAnchors)
navAnchors[0].textContent = "Home";
navAnchors[1].textContent = "Services";
navAnchors[2].textContent = "Product";
navAnchors[3].textContent = "Vision";
navAnchors[4].textContent = "Features";
navAnchors[5].textContent = "About";
navAnchors[6].textContent = "Contacts";
navAnchors[7].textContent = "Cool Stuff";

navAnchors.forEach(x => x.style = "color: green")
// x is replaces the numbers like this navAnchors[x] so x is the children

const Awesome = document.querySelector('h1');
const split = document.createElement('br');
Awesome.textContent = `DOM ${split.textContent = "Is"} Awesome`;
// not quite sure this work correctly was aiming for <br> Is <br> in between the words
const button1 = document.querySelector('button');
button1.textContent = "Get Started";

const roundImg = document.getElementById('cta-img');
roundImg.setAttribute('src', "img/header-img.png");

const subTitles = document.querySelectorAll('.text-content h4');
//  console.log(subTitles)
subTitles[0].textContent = "Features";
subTitles[1].textContent = "About";
subTitles[2].textContent = "Services";
subTitles[3].textContent = "Product";
subTitles[4].textContent = "Vision";

const para  = document.querySelectorAll('.text-content p');
//  console.log(para)
para[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', "img/mid-page-accent.jpg");

const contact = document.querySelector(".contact h4");
// console.log(contact)
contact.textContent = "Contact"
const contactInfo = document.querySelectorAll(".contact p");
// console.log(contactInfo)
contactInfo[0].textContent = `123 Way 456 Street ${split.textContent = "Somewhere, USA"}`;
contactInfo[1].textContent = "1 (888) 888-8888";
contactInfo[2].textContent = "sales@greatidea.io";

const copyright = document.querySelector("footer p");
// console.log(copyright)
copyright.textContent = "Copyright Great Idea! 2018";

