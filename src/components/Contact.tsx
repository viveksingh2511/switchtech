import { useState } from "react";


const Contact = () => {
    const [status, setStatus] = useState<string>("");


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
        // TODO: hook to your backend or email service
        setTimeout(() => setStatus("Message sent (demo)."), 1000);
    };


    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <span className="badge bg-danger bg-opacity-10 text-danger mb-2">
                        🚀 Get In Touch
                    </span>
                    <h2 className="fw-bold display-6 mt-3">
                        Ready to <span className="text-danger">Transform</span> Your Career?
                    </h2>
                    <p className="mt-3">
                        Next cohort starts <strong>15 Jan 2026, 09:00</strong> · Enroll before seats fill.
                    </p>
                </div>

                <div className="row g-4">

                    {/* LEFT COLUMN */}
                    <div className="col-lg-6">

                        {/* Quick Contact Buttons */}
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <a href="tel:+919146820420" className="btn btn-outline-secondary btn-sm rounded-pill">
                                <i className="bi bi-telephone me-1"></i> Call
                            </a>
                            <a href="mailto:switchtech55@gmail.com" className="btn btn-outline-secondary btn-sm rounded-pill">
                                <i className="bi bi-envelope me-1"></i> Email
                            </a>
                            <a href="https://wa.me/919146820420" target="_blank" className="btn btn-outline-secondary btn-sm rounded-pill">
                                <i className="bi bi-whatsapp me-1"></i> WhatsApp
                            </a>
                        </div>

                        {/* Contact Info Card */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-info-circle text-primary me-2"></i>
                                    Contact Information
                                </h5>

                                <div className="mb-3">
                                    <i className="bi bi-telephone text-primary me-2"></i>
                                    <strong>+91 8446920420</strong>
                                    <div className="text-muted small">Call or WhatsApp</div>
                                </div>

                                <div className="mb-3">
                                    <i className="bi bi-envelope text-primary me-2"></i>
                                    <strong>switchtech55@gmail.com</strong>
                                    <div className="text-muted small">Email us anytime</div>
                                </div>

                                <div>
                                    <i className="bi bi-geo-alt text-primary me-2"></i>
                                    <strong>Hinjewadi, Pune</strong>
                                    <div className="text-muted small">Maharashtra, India</div>
                                </div>
                            </div>
                        </div>
                        {/* Cohort Info */}
                        <div className="card shadow-sm border-danger">
                            <div className="card-body text-center" style={{ background: "linear-gradient(175deg, #f8e7e4, transparent)", borderRadius: "0.7rem" }}>
                                <h5 className="fw-bold mb-4">
                                    <i className="bi bi-calendar-event text-danger me-2"></i>
                                    Next Cohort Details
                                </h5>

                                <div className="row g-3">
                                    <div className="col-6">
                                        <div className="p-3 bg-white rounded">
                                            <h4 className="text-danger fw-bold">15 Jan</h4>
                                            <small className="text-muted">Start Date</small>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-white rounded">
                                            <h4 className="fw-bold">4 Months</h4>
                                            <small className="text-muted">Duration</small>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-white rounded">
                                            <h4 className="fw-bold">15</h4>
                                            <small className="text-muted">Max Students</small>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="p-3 bg-white rounded">
                                            <h4 className="fw-bold">8</h4>
                                            <small className="text-muted">Seats Left</small>
                                        </div>
                                    </div>
                                </div>

                                <span className="badge bg-success bg-opacity-10 text-success mt-4">
                                    🔥 Early Bird Discount Available
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-6">

                        {/* Office Hours */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-clock text-primary me-2"></i>
                                    Office Hours
                                </h5>

                                <div className="d-flex justify-content-between">
                                    <span>Monday - Friday</span>
                                    <strong>9:00 AM - 6:00 PM</strong>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Saturday</span>
                                    <strong>10:00 AM - 4:00 PM</strong>
                                </div>
                                <div className="d-flex justify-content-between text-danger">
                                    <span>Sunday</span>
                                    <strong>Closed</strong>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="fw-bold mb-3">
                                    <i className="bi bi-send text-primary me-2"></i>
                                    Send us a Message
                                </h5>

                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Full Name *</label>
                                            <input type="text" className="form-control" placeholder="Your name" required />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label">Email (Optional)</label>
                                            <input type="email" className="form-control" placeholder="Your email" />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Phone</label>
                                            <input type="tel" className="form-control" placeholder="Phone number" />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" rows={4} placeholder="Tell us about your goals..."></textarea>
                                        </div>
                                    </div>

                                    <button className="btn btn-danger w-100 mt-4">
                                        Send Message <i className="bi bi-send ms-2"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}
export default Contact;