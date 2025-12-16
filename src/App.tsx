import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Course from "./components/Course";
import Instructor from "./components/Instructor";
import Contact from "./components/Contact";


const App = () => {
const homeRef = useRef<HTMLDivElement | null>(null);
const aboutRef = useRef<HTMLDivElement | null>(null);
const servicesRef = useRef<HTMLDivElement | null>(null);
const contactRef = useRef<HTMLDivElement | null>(null);


const [theme, setTheme] = useState<string>(() => {
return (localStorage.getItem("theme") as string) || "light";
});


useEffect(() => {
AOS.init({ duration: 700, once: true });
}, []);


useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("theme", theme);
}, [theme]);


const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
};


return (
<div>
<TopNavbar
onNav={(section) => {
if (section === "home") scrollTo(homeRef);
if (section === "course") scrollTo(aboutRef);
if (section === "instructor") scrollTo(servicesRef);
if (section === "contact") scrollTo(contactRef);
}}
theme={theme}
setTheme={setTheme}
/>


<div ref={homeRef} id="home">
<Home onContactClick={() => scrollTo(contactRef)} />
</div>


<div ref={aboutRef} id="course">
<Course />
</div>


<div ref={servicesRef} id="instructor">
<Instructor />
</div>


<div ref={contactRef} id="contact">
<Contact />
</div>


<Footer />
</div>
);
}
export default App;