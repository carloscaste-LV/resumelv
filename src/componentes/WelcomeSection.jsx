import React from "react";
import '../static/WelcomeSeccion.css';
import Typed from 'typed.js';
import profileImage from '../static/imgs/profile3.jpg'


export default class WelcomeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideHeader: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    
  }
  
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    
  }

  handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      this.setState({ hideHeader: true });
      document.getElementById(`header`).classList.add("hide-header");
    } else {
      this.setState({ hideHeader: false });
      document.getElementById(`header`).classList.remove("hide-header");
    }
  }

  render() {
    
    return (
      <section id="welcome-section">      
        <div id="im">
        <div id="profile">
          <div id="img-container">
            <img src={profileImage} alt="profile img"/>
          </div>
          <div id="profile-text">
            <h1>My name is Carlos Castellanos</h1>
            <h2>I a'm a <span className="typing notranslate"><MyComponent/></span></h2>
          </div>
        </div>  
          <div id="about">
            <h3 translate="no">About Me</h3>
            <p translate="no">Soy un ingeniero mecatrónico apasionado por la tecnología y la programación. A lo largo de mi carrera he tenido la oportunidad de trabajar en diversos proyectos donde he podido aplicar mis conocimientos en robótica, automatización y control de procesos.</p>
            <p>Además, durante mi trayectoria profesional me he desarrollado como front-end developer, especializándome en la creación de experiencias de usuario atractivas y funcionales. Me encanta trabajar en equipo y encontrar soluciones creativas e innovadoras para cada proyecto que abordo.</p>
            <p>Considero que mi formación en ingeniería mecatrónica y mi experiencia en desarrollo web me han brindado un conjunto único de habilidades y conocimientos que me permiten abordar desafíos complejos con una visión integral y un enfoque práctico. Estoy comprometido con seguir aprendiendo y mejorando día a día para ofrecer siempre lo mejor de mí en cada proyecto en el que participo.</p>
          </div>
        </div>
      </section>
    );
  }
}


function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(".typing", {
      strings:["","Web Designer","Web Developer","Graphic Designer","Mecatronic Student"],
      typeSpeed:100,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

