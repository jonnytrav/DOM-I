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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);
 
//Added text to the heading and nav//
let navItems = document.querySelectorAll('a');
navItems[0].textContent = "Services";
navItems[1].textContent = "Product";
navItems[2].textContent = "Vision"; 
navItems[3].textContent = "Features";
navItems[4].textContent = "About";
navItems[5].textContent = "Contact";

let heading = document.querySelector('h1');
heading.textContent = siteContent["cta"]["h1"];

document.querySelector("button").textContent = "Get Started";

//Adding text to the "text-content" divs//
let textBoxes = document.getElementsByClassName("text-content");
textBoxes[0].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["features-h4"];
textBoxes[0].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["features-content"];

textBoxes[1].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["about-h4"];
textBoxes[1].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["about-content"];

textBoxes[2].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["services-h4"];
textBoxes[2].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["services-content"];

textBoxes[3].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["product-h4"];
textBoxes[3].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["product-content"];

textBoxes[4].getElementsByTagName('h4')[0].textContent = siteContent["main-content"]["vision-h4"];
textBoxes[4].getElementsByTagName('p')[0].textContent = siteContent["main-content"]["vision-content"];

let contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].textContent = siteContent["contact"]["contact-h4"];
contact.getElementsByTagName('p')[0].textContent = siteContent["contact"]["address"];
contact.getElementsByTagName('p')[1].textContent = siteContent["contact"]["phone"];
contact.getElementsByTagName('p')[2].textContent = siteContent["contact"]["email"];

navItems[0].style.color = 'green';
navItems[1].style.color = 'green';
navItems[2].style.color = 'green';
navItems[3].style.color = 'green';
navItems[4].style.color = 'green';
navItems[5].style.color = 'green';


//Easy access to nav//
let navAccess = document.getElementsByTagName('nav')[0];

//Establishing variables to be prepended and appended//
let appendedA = document.createElement("a");
let prependedA = document.createElement("a");

//Adding content between the <a> tags//
appendedA.textContent = "Resources";
prependedA.textContent = "Sign In";

//Inserting variables//
nav.prepend(prependedA);
navAccess.appendChild(appendedA);

//Matching up styles//
appendedA.style.color = 'green';
prependedA.style.color = 'green';

let footer = document.getElementsByTagName('footer')[0];

copyRight = footer.getElementsByTagName('p')[0];
copyRight.textContent = siteContent["footer"]["copyright"];


 

