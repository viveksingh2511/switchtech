import React from "react";
import "../css/home.css"


interface Props { onContactClick: () => void }


export default function Home({ onContactClick }: Props) {
    return (
        <section className="py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="hero-wrapper col-lg-6">

                        {/* Badge */}
                        <div className="mb-3 fade-up delay-1">
                            <span className="badge badge-new" style={{color:"#ec3e13"}}>
                                🔥 New Batch Starting August 15th, 2025
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="hero-title fade-up delay-2">
                            Become a&nbsp;
                            <span className="gradient-primary">Job-Ready</span><br/>
                                <span className="gradient-danger">Data Engineer</span>
                        </h1>

                        {/* Description */}
                        <p className="hero-text fade-up delay-3">
                            Master the full data engineering ecosystem — from building data pipelines
                            to deploying them in real-world environments. We guide you step-by-step
                            and support you until you get placed.
                        </p>

                        {/* Tech Stack */}
                        <div className="d-flex flex-wrap gap-2 my-4 fade-up delay-4">
                            <span className="tech-pill">Python</span>
                            <span className="tech-pill">SQL</span>
                            <span className="tech-pill">PySpark</span>
                            <span className="tech-pill">Airflow</span>
                            <span className="tech-pill">Jenkins</span>
                            <span className="tech-pill">AWS</span>
                            <span className="tech-pill">GCP</span>
                            <span className="tech-pill">JIRA</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="d-flex flex-column flex-sm-row gap-3 fade-up delay-5">
                            <button className="btn btn-danger btn-lg hero-btn fs-6">
                                Enroll Now <i className="bi bi-box-arrow-up-right ms-1"></i>
                            </button>
                            <button className="btn btn-outline-primary btn-lg glass-btn fs-6">
                                Download Curriculum
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="row g-3 mt-4 fade-up delay-6">
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock w-6 h-6 text-primary animate-pulse-soft"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <h4>16</h4>
                                    <small>Weeks</small>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-target w-6 h-6 text-success animate-pulse-soft"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                    <h4>8+</h4>
                                    <small>Technologies</small>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users w-6 h-6 text-warning animate-pulse-soft"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    <h4>15</h4>
                                    <small>Max Students</small>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="stat-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up w-6 h-6 text-danger animate-pulse-soft"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                    <h4>100%</h4>
                                    <small>Support</small>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6" data-aos="zoom-in">
                        <div className="card glass-card shadow-2xl mx-auto">
                            <div className="card-body p-4 p-md-4">

                                {/* Header */}
                                <div className="text-center mb-4">
                                    <div className="icon-box mx-auto mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="text-white">
                                            <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                                            <circle cx="12" cy="8" r="6"></circle>
                                        </svg>
                                    </div>

                                    <h3 className="fw-bold gradient-text mb-2">
                                        Complete Data Engineering Stack
                                    </h3>
                                    <p className="text-muted small">
                                        Everything you need to become a job-ready data engineer
                                    </p>
                                </div>

                                {/* Skills */}
                                <div className="d-grid gap-3 mb-4">
                                    <div className="skill-item fade-up">
                                        <span>Python & PySpark</span>
                                        <span className="badge bg-light text-dark">Data Processing</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>SQL & Data Warehousing</span>
                                        <span className="badge bg-light text-dark">Snowflake / BigQuery</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>Apache Airflow</span>
                                        <span className="badge bg-light text-dark">Orchestration</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>Jenkins & CI/CD</span>
                                        <span className="badge bg-light text-dark">Automation</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>JIRA & Project Mgmt</span>
                                        <span className="badge bg-light text-dark">Collaboration</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>AWS & GCP Cloud</span>
                                        <span className="badge bg-light text-dark">Cloud Platforms</span>
                                    </div>

                                    <div className="skill-item fade-up">
                                        <span>Placement Support</span>
                                        <span className="badge bg-light text-dark">Until You’re Hired</span>
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="text-center pt-3 border-top">
                                    <div className="d-flex justify-content-center align-items-center gap-2 mb-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="text-danger">
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        <p className="mb-0 fw-medium">Next Batch: August 15, 2025</p>
                                    </div>
                                    <small className="text-muted">Limited seats • Small batch size</small>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}