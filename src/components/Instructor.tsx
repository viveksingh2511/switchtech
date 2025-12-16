import React from "react";
import "../css/instructor.css"


export default function Instructor() {
    return (
        <section className="py-5 instructor-section">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <span className="badge bg-primary bg-opacity-10 text-primary mb-3">
                        Meet Your Instructor
                    </span>
                    <h2 className="fw-bold display-6">
                        Learn from an <span className="text-primary">Industry Expert</span>
                    </h2>
                    <p className="mt-3 mx-auto" style={{ maxWidth: "800px" }}>
                        Get mentored by Akshay Mehta, a seasoned Data Engineer with extensive
                        experience in scalable data pipelines, cloud technologies, and
                        placement-driven training.
                    </p>
                </div>

                <div className="row g-4 align-items-start">

                    {/* Instructor Card */}
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 h-100 instructor-card">
                            <div className="card-body p-4">

                                <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                                    <div className="position-relative">
                                        <img
                                            src="/assets/Instructor_professional_headshot_ea75d7ed-Crnwdzyt.png"
                                            alt="Instructor"
                                            className="rounded-circle border border-3 border-primary shadow"
                                            width="140"
                                            height="140"
                                        />
                                        <span className="badge bg-success position-absolute bottom-0 end-0 rounded-circle p-2">
                                            <i className="bi bi-award-fill text-white"></i>
                                        </span>
                                    </div>

                                    <div className="text-center text-md-start">
                                        <h4 className="fw-bold mb-1">Akshay Mehta</h4>
                                        <p className="text-muted mb-1">Lead Instructor & Founder</p>

                                        <p className="small text-muted mb-2">
                                            <i className="bi bi-geo-alt me-1"></i> Hinjewadi, Pune
                                        </p>

                                        <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-3">
                                            <span className="text-warning">
                                                ★★★★★
                                            </span>
                                            <span className="small fw-semibold">5.0</span>
                                            <span className="small text-muted">
                                                <i className="bi bi-people me-1"></i> 200+ Students
                                            </span>
                                        </div>

                                        <div className="mt-3 d-flex gap-2 justify-content-center justify-content-md-start">
                                            <a href="#" className="btn btn-outline-primary btn-sm">
                                                <i className="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#" className="btn btn-outline-dark btn-sm">
                                                <i className="bi bi-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm border-0 rounded-4 h-100">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-briefcase me-2 text-primary"></i>
                                    Professional Achievements
                                </h5>

                                <ul className="list-unstyled small text-muted">
                                    <li className="mb-2">✔ 7+ years in Data Engineering & Cloud</li>
                                    <li className="mb-2">✔ Production ETL pipelines (Fortune 500)</li>
                                    <li className="mb-2">✔ Expert in Python, SQL, PySpark, Airflow</li>
                                    <li className="mb-2">✔ Mentored 200+ students successfully</li>
                                    <li className="mb-2">✔ Real-world pipeline architecture focus</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="col-lg-6">
                        <div className="card shadow-sm border-0 rounded-4">
                            <div className="card-body p-4">
                                <h5 className="fw-bold mb-4">
                                    <i className="bi bi-award me-2 text-primary"></i>
                                    Technical Expertise
                                </h5>

                                {[
                                    { name: "Python & PySpark", value: "95%" },
                                    { name: "SQL & Warehousing", value: "93%" },
                                    { name: "Airflow & ETL", value: "92%" },
                                    { name: "AWS / GCP", value: "90%" },
                                    { name: "CI/CD & Jenkins", value: "88%" },
                                ].map((skill, i) => (
                                    <div className="mb-3" key={i}>
                                        <div className="d-flex justify-content-between small fw-semibold">
                                            <span>{skill.name}</span>
                                            <span>{skill.value}</span>
                                        </div>
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div
                                                className="progress-bar bg-primary progress-animate"
                                                style={{ width: skill.value }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="col-lg-6">
                        <div className="card shadow-lg border-0 rounded-4 text-center bg-primary text-white h-100">
                            <div className="card-body p-4 d-flex flex-column justify-content-center">
                                <i className="bi bi-people-fill display-4 mb-3"></i>
                                <h4 className="fw-bold">Ready to Become a Data Engineer?</h4>
                                <p className="small mb-4">
                                    Contact Akshay to discuss curriculum, career roadmap & placement support.
                                </p>
                                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center">
                                    <button className="btn btn-light fw-semibold">
                                        Contact Instructor <i className="bi bi-box-arrow-up-right ms-1"></i>
                                    </button>
                                    <button className="btn btn-outline-light">
                                        Schedule a Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Reviews */}
                <div className="mt-5">
                    <h3 className="fw-bold text-center mb-4">What Students Say</h3>

                    <div className="row g-4">

                        {/* Review Card */}
                        <div className="col-md-4">
                            <div className="card review-card shadow-sm h-100">
                                <div className="card-body">
                                    <div className="mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="bi bi-star-fill text-warning"></i>
                                        ))}
                                    </div>
                                    <p className="text-muted fst-italic">
                                        "Hands-on projects helped me crack my first Data Engineer role."
                                    </p>
                                    <h6 className="fw-bold mb-0">Priya Sharma</h6>
                                    <small className="text-muted">Data Engineer, TCS</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card review-card shadow-sm h-100">
                                <div className="card-body">
                                    <div className="mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="bi bi-star-fill text-warning"></i>
                                        ))}
                                    </div>
                                    <p className="text-muted fst-italic">
                                        "Best investment for my career. Clear explanations & support."
                                    </p>
                                    <h6 className="fw-bold mb-0">Rahul Patel</h6>
                                    <small className="text-muted">Data Engineer, Infosys</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card review-card shadow-sm h-100">
                                <div className="card-body">
                                    <div className="mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className="bi bi-star-fill text-warning"></i>
                                        ))}
                                    </div>
                                    <p className="text-muted fst-italic">
                                        "Placement support till hired. Highly recommended."
                                    </p>
                                    <h6 className="fw-bold mb-0">Sneha Reddy</h6>
                                    <small className="text-muted">Cloud Data Engineer</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    );
}