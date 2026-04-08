import { useEffect, useRef, useState } from "react";
import droneImg from "./assets/Visuals/robairImg.jpg";
import robairImg from "./assets/Visuals/robairImg.jpg";
import smartcityImg from "./assets/Visuals/robairImg.jpg";
import beamImg from "./assets/Visuals/robairImg.jpg";



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
    setDirection("left");
    resumeScroll();
  };

  const handleRightZoneEnter = () => {
    setDirection("right");
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
          <h1>Robotics portfolio built to show my work fast.</h1>
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
          <h2>Project Details</h2>

          <div className="details-list">
            {featuredProjects.map((project) => {
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
            Robotics engineer focused on autonomy, control, perception, and
            embedded systems.
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

              <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">
                Google Scholar
              </a>

              <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">
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

