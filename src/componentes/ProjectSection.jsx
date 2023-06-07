import React from "react";
import Button from './Button.jsx';
import SliceImg from "./SliceImg.jsx";



import projectImage1 from "../static/imgs/lyadar.png"
import projectImage2 from '../static/imgs/DALL·E 2023-02-26 21.41.25.png'
import projectImage3 from '../static/imgs/scd41-co2-sensor-module-with-co2-temperature-and-humidity-sensor-pim587.jpg'
const projects=[
  {
    label:"Lidar",
    imgFoot:"distance mapping from a static reference point",
    description:`The project is a <span>control application</span> consisting of four parts: <span>communication structure</span> ESP32(server)-PC(client), <span>data processing</span>, <span>API</span>, and <span>data visualization</span>. The connection is made through <span>websockets</span>, and the server sends data to the client in string form. Then, the client uses two data processing functions, one for the <span>VL53L0X sensor</span> and another for the <span>MPU6050</span>. To process and store the data, an <span>API</span> with <span>POST</span> and <span>GET</span> methods is used, which connects to a <span>PostgreSQL</span> database. Finally, the <span>Javascript canvas library</span> is used to visualize the data in the form of <span>line charts</span>.

    In the first part of the project, an <span>ESP32(server)-PC(client) communication structure</span> is used, which connects through <span>websockets</span>, and the server sends data to the client in string form. Then, in the second part, the client uses two <span>data processing</span> functions to manipulate the data it receives from the server and store it in a <span>PostgreSQL</span> database using an <span>API</span> with <span>POST</span> and <span>GET</span> methods. In the third part, an <span>API</span> is used that connects to a <span>PostgreSQL</span> database to process and store the data. Finally, in the last part, the <span>Javascript canvas library</span> is used to visualize the data in the form of <span>line charts</span>.
    
    This project is an example of how a <span>server-client communication</span> structure can be used to process and store data asynchronously. It also shows how <span>data processing</span> functions can be used to manipulate the data received from the server and how data can be visualized using a <span>Javascript library</span>. Overall, this project can be used as a base for future projects that require <span>real-time data processing</span> and <span>data visualization</span>.`,
    src:`${projectImage1}`
  },

  {
    label:"Hidroponía",
    imgFoot:"illustration created with dalle 2 of a hydroponic system",
    description:`This is an IoT-based <span>hydroponic system</span> project that utilizes the nutrient film technique (NFT). The project consists of a <span>pump</span> that uses PVC channels where the plants are placed. The plants receive <span>nutrients from the water</span> that is constantly recirculated through the tubes.

    Recurrent neural networks (RNN) will be used to predict the plant's <span>pH</span> and display the results graphically on a daily basis, optimizing the cultivation time. Although this method is practical, the <span>initial investment cost</span> is high for some individuals. However, since it produces <span>high-quality vegetables</span>, they can be sold as such.
    
    The IoT hydroponic system has an additional functionality that is divided into three main sections: <span>client</span>, <span>graphical user interface</span>, and <span>server</span>. The server section acts as an intermediary between the client and the graphical interface. <span>Sensors</span> measure different parameters such as <span>pH level</span>, <span>water temperature</span>, <span>ambient humidity and temperature</span>, and are used for real-time monitoring and control of the NFT hydroponic system.`,
    src:`${projectImage2}`
  },
  {
    label:"MedidorCo2",
    imgFoot:"A picture of a co2 sensor taken from google",
    description:`<span>Monitoreo de CO2</span> de una <span>habitación cerrada</span> con poca ventilación utilizando un sensor SCD41 y una tarjeta STM32. El objetivo es realizar mediciones periódicas de la calidad del aire en las habitaciones debido a la problemática global causada por la pandemia en los últimos dos años. Se busca encontrar soluciones para tener espacios más seguros y controlados, buscando un futuro más prometedor para todos.




`,
    src:`${projectImage3}`
  }
]



const descriptions = projects.map(project => {
  const description = project.description;
  const spans = description.split(/<span>([^<]+)<\/span>/g);
  const elements = [];

  for (let i = 0; i < spans.length; i++) {
    if (i % 2 === 0) {
      // Texto normal, agregar como texto plano con saltos de línea
      const lines = spans[i].split("\n");
      for (let j = 0; j < lines.length; j++) {
        elements.push(<React.Fragment key={i + "_" + j}>{lines[j]}</React.Fragment>);
        if (j < lines.length - 1) {
          elements.push(<br key={i + "_" + j + "_br"} />);
        }
      }
    } else {
      // Texto dentro de span, agregar como span HTML con clase "highlights"
      elements.push(<span className="highlights" key={i}>{spans[i]}</span>);
    }
  }
  
  return elements;
});








class ProjectSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      projectDescription: projects[0].description,
      projects: {
        label: projects[0].label,
        imgFoot: projects[0].imgFoot,
        src: projects[0].src
      },
      slideDirection: ""
    };

    
    }
    slideImg = (direction, projects, projectDescription) => {
      if (direction === "right" || direction === "left") {
        this.setState({
          projects: projects,
          projectDescription: projectDescription
        });
      }
    };
    
    
    // clickButton = (buttonTitle) => {
    //   projects.forEach((project) => {
    //     if (project.label === buttonTitle) {
    //       console.log(project);
    //       this.setState({
    //         projectDescription: project.description,
    //         projects: {
    //           label: project.label,
    //           imgFoot: project.imgFoot,
    //           src: project.src
    //         },
    //         slideDirection: ""
    //       });
    //     }
    //   });
    // };
    

    
    render() {
        return (
            <section id="project-section">
										<div id = "projects">
											<div id="project-header">
                        {projects.map((project,index) => {
                          return(
                          <div className="project-box">
                            <Button buttonId={project.label} key={index} className="project-title" clickButton={()=>this.clickButton(project.label)} title={project.label}/>
                          </div>)
                        })}
											</div>
											<div id={`project-description`} >
                        <div id="project-description-text">
                          <h2 id="project-title">{this.state.projects.label}</h2>
                          <p>{this.state.projectDescription}</p>
                          {/* <img className="slide-img" src={this.state.projects.src} alt={this.state.projects.label} /> */}
                          
                          <div className="image-container">
                            <img className="slide-img" src={this.state.projects.src} alt={this.state.projects.label}/>
                            <div class="image-caption">
                              <p><span class="highlights">Figure 1:</span>{this.state.projects.imgFoot}</p>
                            </div>
                          </div>

                          {/* <p>{this.state.projects.imgFoot}</p> */}
                        </div>
                      </div>
                      <SliceImg projects={projects} slideImg = {this.slideImg} description = {descriptions}/>
                    </div>
            </section>
        )
    }
}


export default ProjectSection 