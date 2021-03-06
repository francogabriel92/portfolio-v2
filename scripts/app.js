const strings = {
  en: {
    navHome: "Home",
    navAbout: "About me",
    navSkills: "Skills",
    navProyects: "Proyects",
    navContact: "Contact",
    navResume: "Resume",
    heroTitle: "Hi! Welcome to my portfolio",
    heroSubtitle: "I'm Franco Sanchez",
    heroTypingStatic: "I'm a",
    heroTypingDynamic: [
      "Developer",
      "Designer",
      "Freelancer",
      "Motivated",
      "Collaborative",
      "Passionated",
      "Positive"
    ],
    aboutTitle: "About Me",
    aboutTitleBg: "About Me",
    aboutTextFirst: "My name is Franco Gabriel Sanchez, I'm 29 years old and I live in Buenos Aires, Argentina. I'm a self-taught full-stack developer and passionate about programming. What interests me most in web application development is being able to do something that people find useful and can access it from anywhere in the world.",
    aboutTextSecond: "As a person with capacities for communication and socialization I have a natural predisposition to teamwork and I always try to do my best so that the group reaches its objectives. In my spare time I like to play the guitar, hang out with my friends, meet new people, work on personal projects, and play video games. Nice to meet you!",
    aboutButton: "Contact this guy",
    skillsClick: "Click me",
    skillsTitle: "Skills",
    skillsTitleBg: "Skills",
    proyectsTitle: "Proyects",
    proyectsTitleBg: "Proyects",
    proyectGymDesc:"One page web-app dedicated to the management of gym clients through a CRUD system.\r\n \r\nThe user interface was made with ReactJs and React Router.\r\n \r\nThe backend is designed with NodeJs and Express, has a login system with Json Web Token technology, tests performed with Jest and the database is based on MongoDB.\r\n \r\nTechs and frameworks used: ReactJs, React Router, React Bootstrap, Axios, Mongoose, Formik, Yup, MongoDb, JWT, Jest, Bcrypt.",
    proyectPortfolioDesc: "One page web portfolio realized entirely with HTML5, CSS3 and native JavaScript.\r\n \r\nThis page has multilanguage functionaliby developed by Js, animations and its prototype has been done with Adobe XD.",
    goToCode: "Go to code",
    contactTitle: "Contact",
    contactTitleBg: "Contact",
    contactText: "Do you like what you see?",
    contactSubtitleAccent: "Let's work together!",
    formTitle: "You can send me a message through this form:",
    formName: "Name",
    formMail: "Mail",
    formSubject: "Subject",
    formMessage: "Message",
    formSend: "Send",
    contactOr: "Or",
    mailMe: "Mail me",
    followMe: "Follow me",
    contactMe: "Contact me",
    modalClose: "Close"
  },
  es: {
    navHome: "Inicio",
    navAbout: "Sobre m??",
    navSkills: "Habilidades",
    navProyects: "Proyectos",
    navContact: "Contacto",
    navResume: "Curriculum",
    heroTitle: "Hola! Bienvenido a mi portafolio",
    heroSubtitle: "Mi nombre es Franco Sanchez",
    heroTypingStatic: "Soy un",
    heroTypingDynamic: [
      "Desarrollador",
      "Dise??ador",
      "Freelancer",
      "Entusiasta",
      "Motivado",
      "Colaborativo",
      "Apasionado",
      "Optimista"
    ],
    aboutTitle: "Sobre m??",
    aboutTitleBg: "Sobre m??",
    aboutTextFirst: "Mi nombre es Franco Gabriel Sanchez, tengo 29 a??os y vivo en Buenos Aires, Argentina. Soy un desarrollador Full-Stack autodidacta y apasionado de la programaci??n. Lo que m??s me interesa en el desarrollo de aplicaciones web es el poder realizar algo que la gente encuentre ??til y pueda acceder a ello desde cualquier parte del mundo.",
    aboutTextSecond: "Al ser una persona con capacidades para la comunicaci??n y la sociabilizaci??n tengo predisposici??n al trabajo en equipo y a dar lo mejor de mi parte para que el grupo llegue a sus objetivos. En mis tiempos libres me gusta tocar la guitarra, salir con mis amigos, conocer gente nueva, trabajar en proyectos personales y jugar videojuegos. ??Encantado de conocerte!",
    aboutButton: "Habla conmigo",
    skillsClick: "Hazme click",
    skillsTitle: "Habilidades",
    skillsTitleBg: "Habilidades",
    proyectsTitle: "Proyectos",
    proyectsTitleBg: "Proyectos",
    proyectGymDesc:" Aplicaci??n de una p??gina dedicada a la gesti??n de clientes de gimnasios mediante un sistema CRUD.\r\n \r\nLa interfaz de usuario fue realizada con ReactJs y React Router. El backend esta dise??ado con NodeJs y Express, cuenta con un sistema de login con tecnolog??a de Json Web Token, testings realizados con Jest y la base de datos esta basada en MongoDB.\r\n \r\nTecnolog??as y librer??as utilizadas: ReactJs, React Router, React Bootstrap, Axios, Mongoose, Formik, Yup, MongoDb, JWT, Jest, Bcrypt.",
    proyectPortfolioDesc: "Portfolio Web de una p??gina realizado enteramente con HTML5, CSS3 y JavaScript nativo.\r\n \r\nEsta p??gina contiene funcionabilidad Multilenguaje a traves de Js, animaciones y su dise??o fue maquetado en Adobe XD.",
    goToCode: "Ir al c??digo",
    contactTitle: "Contacto",
    contactTitleBg: "Contacto",
    contactText: "??Te gusta lo que ves?",
    contactSubtitleAccent: "??Vamos a trabajar juntos!",
    formTitle: "Puedes enviarme un mensaje a trav??s de este formulario:",
    formName: "Nombre",
    formMail: "Mail",
    formSubject: "Asunto",
    formMessage: "Mensaje",
    formSend: "Enviar",
    contactOr: "O",
    mailMe: "Env??ame un mail",
    followMe: "S??gueme",
    contactMe: "Cont??ctame",
    modalClose: "Cerrar"
  }
};

// Typing Effect

let dynamicTexts = strings.en.heroTypingDynamic;

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typingEffect() {
  if( count === dynamicTexts.length ) count = 0;
  currentText = dynamicTexts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.dynamic-txts').textContent = letter;
  if( letter.length === currentText.length ) {
    count++;
    index = 0;
  };
  setTimeout(typingEffect, 300)
}());

// Language selector

let actualLanguage = "en";
const navResumeButton = document.getElementById('navResumeButton');

const langSelector = (selectedLanguage) => {
  const stringArray = Object.entries(strings[selectedLanguage])
  for ( let i = 0; i < stringArray.length; i++ ){
    stringArray[i][0] === 'heroTypingDynamic'
      ? dynamicTexts = stringArray[i][1]
      : document.querySelector(`#${stringArray[i][0]}`).textContent = stringArray[i][1];
  }
  actualLanguage === "en" ? actualLanguage = "es" : actualLanguage = "en";
  navResumeButton.addEventListener('click', () => {
    actualLanguage === "en"
      ? navResumeButton.href = "./media/resume.pdf"
      : navResumeButton.href = "./media/Curriculum.pdf"
  })
}

document.querySelector('#lang-es-button').addEventListener('click', () => langSelector("es"))
document.querySelector('#lang-en-button').addEventListener('click', () => langSelector("en"))

// Trigger when visible 

function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const revealPoint = 200;
  let windowHeight = window.innerHeight;
  for ( let i = 0; i < items.length; i++ ) {
    let revealTop = items[i].getBoundingClientRect().top;
    if (revealTop < ( windowHeight - revealPoint )) items[i].classList.add('active');
  }
}

window.addEventListener('scroll', revealOnScroll, { passive: true });

// Skills click animation

document.querySelector('.circle.clickable').addEventListener('click', () => {
  document.querySelector('.circle.clickable').classList.add('clicked');
  const appearingElements = document.querySelectorAll('.circle.floating');
  appearingElements.forEach(element => {
    element.classList.add('clicked')
  });
});

// Contact form handler

(function() {
  emailjs.init("user_OeGxdzrEFcXbnNGxL8MKV");
})();

const modal = document.querySelector('.modal-container');
const modalTitle = document.querySelector('#modalTitle');
const modalContent = document.querySelector('#modalContent');
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  emailjs.sendForm( 'service_ozusnmn','template_sbn5v4o', contactForm)
    .then(() => {
      if (actualLanguage === "en") {
        modalTitle.innerHTML = "Success! <i class=\"far fa-check-circle\">";
        modalContent.textContent = "Remember to attach your mail in the form for a response. Thank your for contact me!";
      } else {
        modalTitle.innerHTML = "Listo! <i class=\"far fa-check-circle\">";
        modalContent.textContent = "Recuerda incluir tu mail en el formulario para una respuesta. ??Gracias por contactarte!";;
      }
      modal.classList.remove('hidden');
    })
    .catch ( (error) => {
      if (actualLanguage === "en") {
        modalTitle.innerHTML = "Oops! <i class=\"far fa-times-circle\">";
        modalContent.textContent = "Something went wrong :(";
      } else {
        modalTitle.innerHTML = "Ups! <i class=\"far fa-times-circle\">";
        modalContent.textContent = "Algo sali?? mal :(";;
      }
      modal.classList.remove('hidden');
      console.log(error);
    })
});

// Burguer menu

const menuBtn = document.querySelector('.nav__menu-btn');
const navMenu = document.querySelector('.nav__menu');
const navLogo = document.querySelector('.logo');
const navMenuItems = document.querySelectorAll('.navItem');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(menuOpen) {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('open');
    navLogo.classList.remove('open');
    menuOpen = false;
  } else {
    menuBtn.classList.add('open');
    navMenu.classList.add('open');
    navLogo.classList.add('open');
    menuOpen = true;
  }
})
navMenuItems.forEach( element => {
  element.addEventListener('click', () => {
    if (menuOpen) {
      menuBtn.classList.remove('open');
      navMenu.classList.remove('open');
      navLogo.classList.remove('open');
      menuOpen = false;
    }
  });
});

// Modal button handler 

document.querySelector('#modalClose').addEventListener('click', () => {
  modal.classList.add('hidden'); 
});

