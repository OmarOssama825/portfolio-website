import { useEffect, useRef, useState } from "react";
import droneImg from "./assets/Visuals/mpc.gif";
import robairImg from "./assets/Visuals/robair.gif";
import smartcityImg from "./assets/Visuals/Warp.png";
import beamImg from "./assets/Visuals/beamo.gif";
import roboticArmImg from "./assets/Visuals/roboticarm.gif";
import cncImg from "./assets/Visuals/inventorCAM.jpg";
import microrobotImg from "./assets/Visuals/mnrmicro.gif";
import crushingImg from "./assets/Visuals/crushing.gif";
import lvdtImg from "./assets/Visuals/lvdt.gif";
import elevatorImg from "./assets/Visuals/elevatorbasys3.gif";
import areaCoverageImg from "./assets/Visuals/pso.gif";
import pvImg from "./assets/Visuals/pvsyst.jpg";
//import bldcImg from "./assets/Visuals/robairImg.jpg";
import javaGameImg from "./assets/Visuals/marvel.jpg";
import agvImg from "./assets/Visuals/agv.gif";
import uavControlImg from "./assets/Visuals/uavlqr.gif";
//import learningMpcImg from "./assets/learning-mpc.jpg";

const featuredProjects = [
  {
    id: "drone",
    title: "Drone Control Laws Benchmarking",
    period: "2025–2026",
    description:
      "Benchmarked PID, LQR, MPC, and backstepping control laws for a drone with tilting arms, focusing on robustness and precision.",
    tags: ["PID", "LQR", "MPC", "Control"],
    image: droneImg,
    details:
      "This project focused on comparing several control strategies on a tilting-arm drone platform and evaluating their robustness under perturbations and tracking requirements.",
    expanded: {
      goal:
        "Compare multiple control strategies on the same aerial platform and assess robustness, tracking quality, and stability under perturbations.",
      tools: ["MATLAB", "Simulink", "PID", "LQR", "MPC", "Backstepping"],
      contribution:
        "Modeled the system, implemented the controllers, analyzed the behavior under disturbances, and compared performance across different control laws.",
      result:
        "Built a structured benchmark to understand trade-offs between simplicity, robustness, and tracking performance.",
    },
  },
  {
    id: "robair",
    title: "RobAir — ROS2 Person Following",
    period: "2025–2026",
    description:
      "Built person detection, tracking, follow-me behavior, localization, and teleoperation in a ROS2 workflow.",
    tags: ["ROS2", "LiDAR", "Tracking"],
    image: robairImg,
    details:
      "This system combined detection, person tracking, localization, and teleoperation in a ROS2 pipeline to support a follow-me mobile robotics behavior.",
    expanded: {
      goal:
        "Develop a mobile robot behavior capable of detecting and following a person while maintaining reliable localization and operator control.",
      tools: ["ROS2", "LiDAR", "Tracking", "Teleoperation"],
      contribution:
        "Integrated the perception and follow-me pipeline, connected localization and robot control, and tested the behavior in a ROS2 environment.",
      result:
        "Produced a complete person-following workflow combining detection, tracking, navigation logic, and teleoperation.",
    },
  },
  {
    id: "smartcity",
    title: "Smart City Visual Localization",
    period: "2024",
    description:
      "Worked on autonomy for miniature vehicles in a smart city testbed for cooperative driving and visual localization.",
    tags: ["Localization", "Autonomy", "Research"],
    image: smartcityImg,
    details:
      "The project explored miniature autonomous vehicles in a smart city environment, with emphasis on visual localization and cooperative driving research.",
    expanded: {
      goal:
        "Study visual localization and autonomy for miniature vehicles operating in a cooperative smart-city testbed.",
      tools: ["Computer Vision", "Localization", "Autonomy", "Research"],
      contribution:
        "Contributed to the visual localization and autonomy side of the project and supported the research workflow around miniature vehicles.",
      result:
        "Strengthened the testbed as a research platform for miniature autonomous driving scenarios.",
    },
  },
  
  {
  id: "robotic-arm",
  title: "Robotic Arm",
  period: "2024",
  description:
    "Designed and controlled a robotic arm using MATLAB/Simulink and Python, including simulation and Arduino prototyping.",
  tags: ["Robotics", "Simulink/Simscape","CoppeliaSim", "Arduino"],
  image: roboticArmImg,
  details:
    "This project involved robotic arm design, control, simulation, and prototyping across software and hardware tools.",
  expanded: {
    goal:
      "Design and control a robotic arm while connecting simulation with practical prototyping.",
    tools: ["MATLAB", "Simulink", "Python", "Simscape", "Arduino", "CoppeliaSim"],
    contribution:
      "Worked on modeling, control, simulation, and prototyping of the robotic arm system.",
    result:
      "Produced a robotic arm workflow spanning simulation, control design, and hardware-oriented implementation.",
  },
},
{
  id: "agv",
  title: "Autonomous Ground Wheeled Vehicle",
  period: "2025",
  description:
    "Controlled a model-scale vehicle to traverse a track at constant speed while avoiding collisions by changing lanes.",
  tags: ["ROS", "Gazebo", "Raspberry Pi"],
  image: agvImg,
  details:
    "This project focused on autonomous navigation for a model-scale ground vehicle using constant-speed traversal and lane-changing collision avoidance.",
  expanded: {
    goal:
      "Enable a model-scale autonomous vehicle to follow a track at constant speed and avoid environmental collisions through lane changes.",
    tools: ["ROS", "Gazebo", "Raspberry Pi"],
    contribution:
      "Worked on the control and simulation workflow for track traversal, collision avoidance, and lane-switching behavior.",
    result:
      "Built an autonomous driving setup for model-scale navigation with reactive obstacle avoidance and stable motion.",
  },
},

{
  id: "microrobot",
  title: "Microrobot Motion Analysis",
  period: "2022",
  description:
    "Analyzed microrobot motion in fluid flow for biomedical applications using experimental video processing.",
  tags: ["Microrobotics", "Biomedical", "Video Analysis"],
  image: microrobotImg,
  details:
    "This project focused on analyzing the motion of microrobots in flow conditions relevant to biomedical applications such as targeted drug delivery.",
  expanded: {
    goal:
      "Evaluate microrobot motion under different actuation frequencies and flow rates for biomedical use cases.",
    tools: ["Tracker", "Video Processing", "Data Analysis", "Microrobotics"],
    contribution:
      "Recorded and processed experiments, extracted motion behavior, and compared velocity responses under varying conditions.",
    result:
      "Generated motion analysis results useful for understanding actuation and flow effects in microrobotic systems.",
  },
},

];

const detailedProjects = [
  {
  id: "uav-basic-control",
  title: "Quadrotor UAV Basic Control",
  period: "2025–2026",
  description:
    "Modeled and controlled a Parrot Mambo quadrotor using cascaded control, nonlinear simulation, and flight-test oriented design.",
  tags: ["UAV", "Control", "MATLAB/Simulink"],
  image: uavControlImg,
  details:
    "This lab project focused on quadrotor modeling, inner-loop identification, nonlinear position-loop simulation, linearization around hover, and controller design for real flight scenarios.",
  expanded: {
    goal:
      "Model and synthesize an outer-loop controller for quadrotor position tracking, then validate it in simulation and real-flight experiments.",
    tools: [
      "MATLAB",
      "Simulink",
      "Quadrotor Modeling",
      "LQR/LQI",
      
    ],
    contribution:
      "Implemented nonlinear and linearized models, analyzed cascaded control behavior, studied roll and pitch inner-loop dynamics, and evaluated trajectory tracking and perturbation rejection.",
    result:
      "Produced a control workflow linking modeling, simulation, controller tuning, and real UAV flight testing on a Parrot Mambo platform.",
  },
},
{
  id: "learning-mpc-platooning",
  title: "Learning MPC for Two-Car Platooning",
  period: "2026",
  description:
    "Developed a leader–follower control strategy for two-car platooning, using Learning MPC maintaining safe target gap under track constraints.",
  tags: ["MPC", "Learning MPC", "Autonomy", "Control"],
  //image: learningMpcImg,
  details:
    "This project focused on leader–follower platooning on a track, where the leader races and the follower must safely maintain a target spacing objective under the same constraints.",
  expanded: {
    goal:
      "Design a follower controller that maintains a desired gap from the leader while respecting safety and track constraints.",
    tools: ["MPC", "Learning MPC", "Vehicle Dynamics", "Trajectory Tracking"],
    contribution:
      "Implemented a follower control strategy with spacing and safety constraints.",
    result:
      "Built a platooning control framework", // for comparing state-only and preview-based follower strategies under constrained racing conditions.
  },
},


  ...featuredProjects,
  {
    id: "area-coverage",
    title: "Drones’ Area Coverage Optimization",
    period: "2024",
    description:
      "Applied meta-heuristic optimization techniques to improve wireless coverage with drones while minimizing the number of units required.",
    tags: ["MATLAB", "Optimization", "Drones","KPIs","Metaheuristics"],
    image: areaCoverageImg,
    details:
      "This project focused on multi-agent cooperative optimization for drone-based wireless coverage, balancing performance and cost-efficiency.",
    expanded: {
      goal:
        "Generate near-optimal wireless coverage solutions using drones while minimizing fleet size and maximizing effective area coverage.",
      tools: [
        "MATLAB",
        "Simulated Annealing",
        "Genetic Algorithm",
        "PSO",
        "Aquila Optimizer",
      ],
      contribution:
        "Implemented and compared meta-heuristic optimization methods to study trade-offs between number of drones and achieved coverage.",
      result:
        "Built an optimization workflow for cooperative drone deployment with strong cost-performance insight.",
    },
  },

  {
    id: "lvdt",
    title: "Vibration Measurement using LVDT",
    period: "2024",
    description:
      "Designed and prototyped a system to measure industrial vibrations using electromechanical sensors and resonance frequency shift.",
    tags: ["LVDT", "Sensors", "Measurement"],
    image: lvdtImg,
    details:
      "This project involved vibration measurement in an industrial setting with emphasis on LVDT sensing and resonance frequency shift.",
    expanded: {
      goal:
        "Measure vibration behavior in industrial equipment using electromechanical sensing principles.",
      tools: ["LVDT", "Sensor Technology", "Measurement", "Resonance Analysis"],
      contribution:
        "Worked on the sensing setup, deployment concept, and interpretation of vibration-related changes in industrial equipment.",
      result:
        "Developed a practical vibration-monitoring concept for industrial equipment using sensor-based analysis.",
    },
  },

  {
    id: "crushing-machine",
    title: "Coffee Bean Crushing Machine",
    period: "2024",
    description:
      "Simulated an automated pneumatic system to crush coffee beans and place them into a container.",
    tags: ["Pneumatics", "Automation", "Sensors"],
    image: crushingImg,
    details:
      "This project focused on building an automated pneumatic process using sensing and actuation components to crush coffee beans and place them into a container.",
    expanded: {
      goal:
        "Design an automated pneumatic workflow for crushing coffee beans and handling the transfer process.",
      tools: [
        "Double-acting pneumatic cylinder",
        "Solenoid impulse valve",
        "Proximity sensor",
        "Relay",
        "Reed switch",
        "Festo FluidSIM",
      ],
      contribution:
        "Worked on the automation logic, actuation flow, and integration of sensing elements for the crushing and transfer sequence.",
      result:
        "Produced a structured pneumatic automation concept combining actuation and sensor-driven sequencing.",
    },
  },

  {
    id: "pv-system",
    title: "Design and Economic Analysis of a Residential PV System",
    period: "2025",
    description:
      "Selected PV modules and inverter, designed the single-line diagram, and performed sizing, cost estimation, and payback analysis.",
    tags: ["PVsyst", "Energy", "System Design"],
    image: pvImg,
    details:
      "This project involved the design and economic analysis of a residential PV system using real consumption data and geographical location.",
    expanded: {
      goal:
        "Design an appropriate residential PV system based on actual demand, installation context, and economic feasibility.",
      tools: ["PVsyst", "System Sizing", "Single-Line Diagram", "Economic Analysis"],
      contribution:
        "Selected components, designed the electrical layout, sized the system, and evaluated cost and payback using Egyptian market prices.",
      result:
        "Produced a technically and economically grounded PV system design tailored to real consumption and location constraints.",
    },
  },

  /*{
    id: "bldc-foc",
    title: "BLDC Speed Control using FOC",
    period: "2025",
    description:
      "Simulated Field-Oriented Control for BLDC motor speed regulation using Clarke/Park transforms and PI-based control loops.",
    tags: ["Simulink", "FOC", "BLDC"],
    image: bldcImg,
    details:
      "This project focused on simulation of Field-Oriented Control for speed regulation of a brushless DC motor.",
    expanded: {
      goal:
        "Achieve reliable BLDC speed regulation through d-q frame control and current-loop decoupling.",
      tools: [
        "Simulink",
        "Clarke Transformation",
        "Park Transformation",
        "PI Control",
      ],
      contribution:
        "Implemented the transformation chain, designed the speed and current control loops, and simulated the voltage-command generation process.",
      result:
        "Built a complete FOC simulation workflow for BLDC speed control with layered PI regulation.",
    },
  },*/
  {
    id: "cnc",
    title: "CNC Programming for Molds and Dies",
    period: "2023",
    description:
      "Designed and simulated CNC machining workflows for molds and dies using Inventor CAM.",
    tags: ["CNC", "Inventor CAM", "Manufacturing"],
    image: cncImg,
    details:
      "This internship project focused on CNC programming, toolpath planning, machining simulation, and G-code generation.",
    expanded: {
      goal:
        "Develop accurate and efficient CNC machining workflows for molds and dies manufacturing.",
      tools: ["Inventor CAM", "Toolpath Planning", "G-code", "Manufacturing"],
      contribution:
        "Created machining setups, simulated multi-axis operations, and generated manufacturing-ready CNC programs.",
      result:
        "Built practical CNC experience in digital manufacturing workflow from design to simulated machining output.",
    },
  },

  {
    id: "beam",
    title: "Self-Balancing Beam",
    period: "2023",
    description:
      "Implemented PID control, sensor fusion, Kalman filtering, and FreeRTOS on embedded hardware.",
    tags: ["Embedded", "Kalman", "FreeRTOS"],
    image: beamImg,
    details:
      "This project involved embedded control implementation, sensor fusion, and real-time execution for a balancing system using filtering and scheduling techniques.",
    expanded: {
      goal:
        "Stabilize a balancing system in real time using control and filtering techniques on embedded hardware.",
      tools: ["ESP8266", "MPU6050", "Kalman Filter", "PID", "FreeRTOS"],
      contribution:
        "Implemented the control loop, integrated sensor fusion, and handled real-time task scheduling on the embedded platform.",
      result:
        "Created a working embedded balancing system that combined estimation, control, and real-time execution.",
    },
  },

  {
    id: "elevator",
    title: "Small-scale Elevator",
    period: "2022",
    description:
      "Built a model-scale 3-floor lift controlled using an FPGA Basys 3 development board.",
    tags: ["Basys3", "Vivado/Xilinx", "VHDL", "FPGA"],
    image: elevatorImg,
    details:
      "This project focused on the control logic of a small-scale elevator serving three floors using FPGA-based implementation.",
    expanded: {
      goal:
        "Implement reliable floor sequencing and control logic for a 3-floor elevator model.",
      tools: ["Basys3", "Vivado", "FPGA Logic"],
      contribution:
        "Worked on elevator sequencing, control behavior, and hardware-oriented digital implementation.",
      result:
        "Produced a working model-scale elevator control system using FPGA-based logic.",
    },
  },
  

  {
    id: "java-game",
    title: "Marvel – Ultimate War",
    period: "2022",
    description:
      "Created a 2D Java game using object-oriented programming principles and GUI development.",
    tags: ["Java", "OOP", "GUI", "Javax Swing"],
    image: javaGameImg,
    details:
      "This project involved building a 2D Java game in Eclipse with object-oriented design and graphical user interaction.",
    expanded: {
      goal:
        "Develop a playable 2D Java game while applying object-oriented programming concepts and GUI development.",
      tools: ["Java", "Eclipse", "OOP", "GUI"],
      contribution:
        "Worked on game structure, object interaction, and interface development.",
      result:
        "Built a complete Java game project demonstrating OOP and desktop GUI skills.",
    },
  },
];



const scrollingProjects = [...featuredProjects, ...featuredProjects];

const education = [
  {
    degree: "Master of Science",
    school: "Grenoble INP – ENSE3",
    period: "2025–2026",
    description:
      "Mobile, Autonomous and Robotic Systems (MARS), with focus on control theory, perception, AI, and embedded robotics.",
  },
  {
    degree: "Bachelor of Science in Engineering and Materials Science",
    school: "German University in Cairo (GUC)",
    period: "2020–2025",
    description:
      "Major in Mechatronics, graduated with honors. Thesis: Development of a scaled smart city testbed for cooperative driving and visual localization.",
  },
  {
    degree: "Diplôme du Baccalauréat Général",
    school: "Collège de la Salle",
    period: "2006–2020",
    description:
      "Scientific track (Série Scientifique), graduated with Mention Bien.",
  },
];

const publications = [
  {
    title: "MRS Lab’s Smart City: Navigating Autonomy for Miniature Vehicles",
    venue:
      "2024 6th Novel Intelligent and Leading Emerging Sciences Conference (NILES)",
    year: "2024",
    type: "Conference Paper",
  },
];

export default function App() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const offsetRef = useRef(0);
  const directionRef = useRef(-1);
  const isPausedRef = useRef(false);

  const [direction, setDirection] = useState("left");
  const [expandedProjects, setExpandedProjects] = useState({});

  useEffect(() => {
    directionRef.current = direction === "left" ? -1 : 1;
  }, [direction]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6;

    const animate = () => {
      const totalWidth = track.scrollWidth / 2;

      if (!isPausedRef.current) {
        offsetRef.current += speed * directionRef.current;

        if (offsetRef.current <= -totalWidth) {
          offsetRef.current = 0;
        }

        if (offsetRef.current >= 0) {
          offsetRef.current = -totalWidth;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const pauseScroll = () => {
    isPausedRef.current = true;
  };

  const resumeScroll = () => {
    isPausedRef.current = false;
  };

  const handleLeftZoneEnter = () => {
    setDirection("right");
    resumeScroll();
  };

  const handleRightZoneEnter = () => {
    setDirection("left");
    resumeScroll();
  };

  const handleZoneLeave = () => {
    resumeScroll();
  };

  const toggleProject = (projectId) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo">Omar Baracat</div>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#publications">Publications</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Robotics • Control • Autonomous Systems</p>
          <h1>Robotics Portfolio</h1>
          <p className="hero-text">
            I work on robotics, control, ROS2, embedded systems, and autonomous
            platforms. This portfolio highlights my projects with visuals,
            videos, and short technical summaries.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact</a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <div>
              <h2>Featured Projects</h2>
              <p>A quick visual overview of selected robotics and control work.</p>
            </div>
          </div>

          <div className="projects-marquee-wrapper">
            <div
              className="hover-zone hover-zone-left"
              onMouseEnter={handleLeftZoneEnter}
              onMouseLeave={handleZoneLeave}
              aria-label="Move projects left"
            >
              <span className="side-arrow">←</span>
            </div>

            <div
              className="hover-zone hover-zone-right"
              onMouseEnter={handleRightZoneEnter}
              onMouseLeave={handleZoneLeave}
              aria-label="Move projects right"
            >
              <span className="side-arrow">→</span>
            </div>

            <div
              className="projects-marquee"
              onMouseEnter={pauseScroll}
              onMouseLeave={resumeScroll}
            >
              <div className="projects-track" ref={trackRef}>
                {scrollingProjects.map((project, index) => (
                  <a
                    className="project-card"
                    key={`${project.id}-${index}`}
                    href={`#${project.id}`}
                  >
                    <div className="project-media">
                      <img src={project.image} alt={project.title} />
                    </div>

                    <div className="project-content">
                      <div className="project-top">
                        <h3>{project.title}</h3>
                        <span>{project.period}</span>
                      </div>

                      <p>{project.description}</p>

                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span className="tag" key={`${project.id}-${tag}-${index}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Projects</h2>

          <div className="details-list">
            {detailedProjects.map((project) => {
              const isExpanded = !!expandedProjects[project.id];

              return (
                <article className="detail-card" id={project.id} key={project.id}>
                  <div className="detail-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="detail-text">
                    <p className="detail-period">{project.period}</p>
                    <h3>{project.title}</h3>
                    <p>{project.details}</p>

                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="expand-btn"
                      onClick={() => toggleProject(project.id)}
                    >
                      {isExpanded ? "Collapse project" : "Expand project"}
                    </button>

                    {isExpanded && (
                      <div className="expanded-project">
                        <div className="expanded-grid">
                          <div className="expanded-text">
                            <div className="expanded-block">
                              <h4>Goal</h4>
                              <p>{project.expanded.goal}</p>
                            </div>

                            <div className="expanded-block">
                              <h4>What I did</h4>
                              <p>{project.expanded.contribution}</p>
                            </div>

                            <div className="expanded-block">
                              <h4>Result</h4>
                              <p>{project.expanded.result}</p>
                            </div>

                            <div className="expanded-block">
                              <h4>Tools</h4>
                              <div className="tag-list">
                                {project.expanded.tools.map((tool) => (
                                  <span className="tag" key={tool}>
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="expanded-media">
                            <div className="media-placeholder">IMAGE / VIDEO 1</div>
                            <div className="media-placeholder">IMAGE / VIDEO 2</div>
                            <div className="media-placeholder media-wide">
                              EXTRA VISUAL / PLOT / DEMO
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-header">
            <div>
              <h2>Education</h2>
              <p>Academic background in robotics, mechatronics, control, and autonomy.</p>
            </div>
          </div>

          <div className="info-grid">
            {education.map((item) => (
              <article className="info-card" key={item.degree}>
                <p className="info-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <h4 className="info-school">{item.school}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="section">
          <div className="section-header">
            <div>
              <h2>Publications</h2>
              <p>Research and academic contributions.</p>
            </div>
          </div>

          <div className="info-grid">
            {publications.map((item) => (
              <article className="info-card" key={item.title}>
                <p className="info-period">{item.year}</p>
                <h3>{item.title}</h3>
                <p className="info-place">{item.venue}</p>
                <p>{item.type}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <h2>About</h2>
          <p>
            A second year MSc Robotics student with focus on autonomy, control, perception,
            embedded systems, and reinfrocement learning.
          </p>
        </section>
        <section id="contact" className="section">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <div className="contact-buttons">
              <a className="btn btn-primary" href="mailto:omar.baracat@grenoble-inp.org">
                Email
              </a>

              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/omar-ossama-4681881b2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">
                Download CV
              </a>

              <a className="btn btn-secondary" href="https://scholar.google.fr/citations?user=XUhsROIAAAAJ" target="_blank" rel="noreferrer">
                Google Scholar
              </a>

              <a className="btn btn-secondary" href="https://www.researchgate.net/profile/Omar-Ossama" target="_blank" rel="noreferrer">
                ResearchGate
              </a>
            </div>

            <p className="contact-meta">Based in Grenoble, France</p>
          </div>
        </section>


      </main>
    </div>
  );
}

