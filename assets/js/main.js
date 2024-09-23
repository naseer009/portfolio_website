/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer","FrontEnd Developer","FlutterFlow Expert"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})

/*--------------downloadbutton alert message---------------*/

const downloadLinks = document.querySelectorAll('.download-link');

downloadLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var userConfirmation = confirm("Do you want to download your CV?");
        if (!userConfirmation) {
            event.preventDefault(); // This will cancel the default download behavior
        }
    });
});



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* education info*/
const srright = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srLeft.reveal('.education-info',{delay: 100})
  // srLeft.reveal('.skills-box',{delay: 100})



/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

// achievements + icons works
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', (event) => {
      const achievementDetail = event.target.closest('.achievement').querySelector('.achievement-detail');
      
      achievementDetail.classList.toggle('open');
      event.target.textContent = achievementDetail.classList.contains('open') ? '-' : '+';
  });
});




/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)



// darkmode
        const toggleButton = document.getElementById('dark-mode-btn');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        // Set initial theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Update button content based on theme
        toggleButton.innerHTML = currentTheme === 'dark' 
            ? '<span>Switch to Light Mode</span> <i class="uil uil-sun"></i> ' 
            : ' <span>Switch to Dark Mode</span> <i class="uil uil-moon"></i>';
        
        // Toggle theme
        toggleButton.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            // Update button content
            toggleButton.innerHTML = theme === 'dark' 
                ? '<span>Switch to Light Mode</span> <i class="uil uil-sun"></i> ' 
                : '<span>Switch to Dark Mode</span> <i class="uil uil-moon"></i> ';
        });
      
      
/* send message to whatsapp AND g-mail*/
document.getElementById('sendButton').addEventListener('click', function(event) {
  // Get the form inputs
  const nameField = document.querySelector('.input-field[placeholder="Name"]');
  const emailField = document.querySelector('.input-field[placeholder="Email"]');

  // Validate the inputs
  if (nameField.value.trim() === '' || emailField.value.trim() === '') {
      // If either field is empty, the browser's default validation will trigger
      nameField.reportValidity();  // This will show the validation message
      emailField.reportValidity();
  } else {
      // If inputs are valid, display the contact options (WhatsApp and Gmail)
      const options = document.getElementById('contactOptions');
      options.style.display = 'block'; // Show the options after validation
  }
});

// WhatsApp button functionality
document.getElementById('whatsappButton').addEventListener('click', function() {
  const message = "Your message here"; // Replace with the actual message
  const phone = "+923179022285"; // Your WhatsApp number

  const confirmSend = confirm("Do you want to send this message via WhatsApp?");
  if (confirmSend) {
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  }
});



// Gmail button functionality
document.getElementById('gmailButton').addEventListener('click', function() {
  const email = "naseerudeen009@gmail.com"; // Your email
  const subject = "Subject Here"; // Replace with desired subject
  const body = "Your message here"; // Replace with the actual message

  const confirmSend = confirm("Do you want to send this email?");
  if (confirmSend) {
      window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
});

      