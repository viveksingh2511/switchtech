import React from "react";
import "../css/course.css"
import Stack_Icons from "../assets/Technology_stack_icons.webp"


const Course = () => {
    return (
        <section id="course" className="course-section">
            <div className="container">

                {/* Header */}
                <div className="course-header">
                    <span className="badge">Comprehensive Curriculum</span>
                    <h2>
                        <span className="fw-bold gradient-text">Data Engineering Bootcamp</span>
                    </h2>
                    <p>
                        A hands-on, industry-oriented program to master data pipelines,
                        cloud platforms, and real-world ETL workflows.
                    </p>
                </div>

                {/* Tech Stack Image */}
                <div className="tech-stack">
                    <img src={Stack_Icons} alt="Tech Stack" width="50%" />
                </div>

                {/* Modules */}
                <div className="modules-grid">
                    <div className="module-card" onClick={() => window.location.href = "/1_Introduction_to_Python.html"} style={{ cursor: "pointer" }}>
                        <div className="icon">🐍</div>
                        <h3>Python</h3>
                        <span className="tag">Core Language</span>
                        <p>Build strong Python foundations for ETL, automation, and data workflows.</p>
                    </div>

                    <div className="module-card" onClick={() => window.location.href = "/sql_guide.html"} style={{ cursor: "pointer" }}>
                        <div className="icon">🗄️</div>
                        <h3>SQL</h3>
                        <span className="tag">Core Skill</span>
                        <p>Query, clean, transform, and optimize large-scale datasets.</p>
                    </div>

                    <div className="module-card" onClick={() => window.location.href = "/Apache AirFlow.html"} style={{ cursor: "pointer" }}>
                        <div className="icon">🔁</div>
                        <h3>Apache Airflow</h3>
                        <span className="tag">Orchestration</span>
                        <p>Automate and monitor production-grade data pipelines.</p>
                    </div>

                    <div className="module-card" onClick={() => window.location.href = "/Jenkins.html"} style={{ cursor: "pointer" }}>
                        <div className="icon">⚙️</div>
                        <h3>Jenkins</h3>
                        <span className="tag">CI/CD</span>
                        <p>Automate build, test, and deployment pipelines.</p>
                    </div>

                    <div className="module-card" onClick={() => window.location.href = "/AWS.html"} style={{ cursor: "pointer" }}>
                        <div className="icon">☁️</div>
                        <h3>AWS</h3>
                        <span className="tag">Cloud</span>
                        <p>Deploy scalable data systems on cloud platforms.</p>
                    </div>

                    <div
                        className="module-card"
                        onClick={() => window.location.href = "/GCP.html"}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="icon">☁️</div>
                        <h3>GCP</h3>
                        <span className="tag">Cloud & Big Data</span>
                        <p>
                            Build and manage scalable data pipelines using BigQuery, Cloud Storage,
                            Dataflow, and Pub/Sub on Google Cloud.
                        </p>
                    </div>

                </div>

                {/* Why Choose */}
                <div className="why-section">
                    <h3 className="fw-bold gradient-text">Why Choose SwitchTech?</h3>
                    <ul>
                        <li>Real-world ETL & API projects</li>
                        <li>Industry mentorship & mock interviews</li>
                        <li>Resume & portfolio building</li>
                        <li>Placement support till hired</li>
                    </ul>
                </div>

                {/* Course Stats */}
                <div className="stats">
                    <div><strong>16</strong><span>Weeks</span></div>
                    <div><strong>8</strong><span>Technologies</span></div>
                    <div><strong>15+</strong><span>Projects</span></div>
                    <div><strong>250+</strong><span>Hours</span></div>
                </div>

                {/* CTA */}
                <div className="cta">
                    <button>Enroll Now</button>
                </div>

            </div>
        </section>

    );
}
export default Course;