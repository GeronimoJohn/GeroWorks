// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBChtqNiRhf5CZPZUFatgAHbxHZaiiW0IQ",
    authDomain: "contact-form-a4306.firebaseapp.com",
    databaseURL: "https://contact-form-a4306.firebaseio.com",
    projectId: "contact-form-a4306",
    storageBucket: "contact-form-a4306.appspot.com",
    messagingSenderId: "122988224290",
    appId: "1:122988224290:web:b1117051ec3d50847d8f7b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo Collections
let contactInfo = firebase.database().ref("infos");

//  end of firebase connection

// show menu in mobile
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu("nav-toggle", "nav-menu");

// Add and removes active class on click
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    // active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    // Closes nav menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// scroll home
sr.reveal('.home_title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home-img',{delay: 400}); 
sr.reveal('.home_social-icon',{ interval: 200}); 

// scroll about
sr.reveal('.about_img',{}); 
sr.reveal('.about_subtitle',{delay: 400}); 
sr.reveal('.about_text',{delay: 400}); 

// scroll skills
sr.reveal('.skills_subtitle',{}); 
sr.reveal('.skills_text',{}); 
sr.reveal('.skills_data',{interval: 200}); 
sr.reveal('.skills_img',{delay: 600});

// scroll works/portfolio
sr.reveal('.work_img',{interval: 200}); 

// scroll contact
sr.reveal('.contact_input',{interval: 200}); 

// contact form
// listen for a submit
document.querySelector(".contact_form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // get input values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact_form").reset();

    sendEmail(name, email, message);
}

// save infos to Firebase
function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        contactName: name, 
        contactEmail: email, 
        contactMessage: message,
    });
}

// send email 
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'johnageronimo1@gmail.com',
        Password: "vplrgujrsasbsnwt",
        To: 'johnageronimo1@gmail.com', 
        From: 'johnageronimo1@gmail.com',
        Subject: `${name} sent you a message`, 
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then((message) => alert("Mail sent successfully"));
}