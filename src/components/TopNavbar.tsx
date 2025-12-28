import "../css/navbar.css"

interface Props {
    onNav: (section: "home" | "course" | "instructor" | "contact") => void;
    theme: string;
    setTheme: (t: string) => void;
}


export default function TopNavbar({ onNav, theme, setTheme }: Props) {
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");


    return (
        <nav className={`navbar navbar-expand-lg shadow-sm ${theme === "dark"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-transparent"
            }`}>
            <div className="container">
                <div className="icon-box d-flex align-items-center justify-content-center shadow">
                    <span className="text-white fw-bold fs-4">S</span>
                </div>
                <div className="d-flex flex-column ps-2">
                    <span className="brand-text fw-bold fs-4 lh-1 btn p-0" onClick={()=>onNav("course")}>SwitchTech</span>
                    <span className="brand-subtext mt-1">DATA ENGINEERING</span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse justify-content-center" id="navMenu">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center">
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => onNav("home")}>
                                Home
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => onNav("course")}>
                                Course
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => onNav("instructor")}>
                                Instructor
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link" style={{ cursor: "pointer" }} onClick={() => onNav("contact")}>
                                Contact
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex align-items-center gap-4">

                    {/* Phone Link */}
                    <a href="tel:+918446920420"
                        className="phone-link d-flex align-items-center gap-2 small p-2 rounded text-decoration-none">

                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            className="phone-icon">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                            19.79 19.79 0 0 1-8.63-3.07
                            19.5 19.5 0 0 1-6-6
                            19.79 19.79 0 0 1-3.07-8.67
                            A2 2 0 0 1 4.11 2h3
                            a2 2 0 0 1 2 1.72
                            12.84 12.84 0 0 0 .7 2.81
                            2 2 0 0 1-.45 2.11
                            L8.09 9.91a16 16 0 0 0 6 6
                            l1.27-1.27a2 2 0 0 1 2.11-.45
                            12.84 12.84 0 0 0 2.81.7
                            A2 2 0 0 1 22 16.92z"/>
                        </svg>

                        <span data-testid="text-phone">+91 8446920420</span>
                    </a>

                    {/* Enroll Button */}
                    <button className="btn btn-danger enroll-btn shadow-lg"
                        data-testid="button-enroll">
                        <span className="fw-semibold">Enroll Now</span>
                    </button>
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="theme-toggle-btn"
                    >
                        <span className="icon-wrap pb-1">
                            {theme === "dark" ? (
                                // Sun icon
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            ) : (
                                // Moon icon
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                </svg>
                            )}
                        </span>
                    </button>


                </div>

            </div>
        </nav>
    );
}