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
      "Enthusiastic",
      "Motivated",
      "Collaborative",
      "Passionated",
      "Optimistic"
    ],
    aboutTitle: "About Me",
    aboutTitleBg: "About Me",
    aboutTextFirst: "My name is Franco Gabriel Sanchez, I'm 29 years old and I live in Buenos Aires, Argentina. I'm a self-taught full-stack developer and passionate about programming. What interests me most in web application development is being able to do something that people find useful and can access it from anywhere in the world.",
    aboutTextSecond: "As a person with capacities for communication and socialization I have a natural predisposition to teamwork and I always try to do my best so that the group reaches its objectives. In my spare time I like to play the guitar, hang out with my friends, meet new people, work on personal projects, and play video games. Nice to meet you!",
    aboutButton: "Contact this guy",
    skillsClick: "Click me",
    skillsTitle: "Skills",
    skillsTitleBg: "Skills",
  },
  es: {
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navSkills: "Habilidades",
    navProyects: "Proyectos",
    navContact: "Contacto",
    navResume: "Curriculum",
    heroTitle: "Hola! Bienvenido a mi portafolio",
    heroSubtitle: "Mi nombre es Franco Sanchez",
    heroTypingStatic: "Soy un",
    heroTypingDynamic: [
      "Desarrollador",
      "Diseñador",
      "Freelancer",
      "Entusiasta",
      "Motivado",
      "Colaborativo",
      "Apasionado",
      "Optimista"
    ],
    aboutTitle: "Sobre mí",
    aboutTitleBg: "Sobre mí",
    aboutTextFirst: "Mi nombre es Franco Gabriel Sanchez, tengo 29 años y vivo en Buenos Aires, Argentina. Soy un desarrollador Full-Stack autodidacta y apasionado de la programación. Lo que más me interesa en el desarrollo de aplicaciones web es el poder realizar algo que la gente encuentre útil y pueda acceder a ello desde cualquier parte del mundo.",
    aboutTextSecond: "Al ser una persona con capacidades para la comunicación y la sociabilización tengo predisposición al trabajo en equipo y a dar lo mejor de mi parte para que el grupo llegue a sus objetivos. En mis tiempos libres me gusta tocar la guitarra, salir con mis amigos, conocer gente nueva, trabajar en proyectos personales y jugar videojuegos. ¡Encantado de conocerte!",
    aboutButton: "Habla conmigo",
    skillsClick: "Hazme click",
    skillsTitle: "Habilidades",
    skillsTitleBg: "Habilidades",
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

const langSelector = (selectedLanguage) => {
  const stringArray = Object.entries(strings[selectedLanguage])
  console.log(stringArray);
  for ( let i = 0; i < stringArray.length; i++ ){
    console.log(stringArray[i][0],stringArray[i][1]);
    stringArray[i][0] === 'heroTypingDynamic'
      ? dynamicTexts = stringArray[i][1]
      : document.querySelector(`#${stringArray[i][0]}`).textContent = stringArray[i][1];
  } 
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
    revealTop < ( windowHeight - revealPoint )
      ? items[i].classList.add('active')
      : items[i].classList.remove('active');
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
})