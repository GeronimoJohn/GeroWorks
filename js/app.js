
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
