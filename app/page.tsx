export default function Home() {
  return (
    <div>
      <main>
        <header>
          <div className="top">
            <div className="wrap nav">
              <div className="logo">Bhavesh Khatri</div>
              <div className="links">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </header>

            <section id="home" className="hero">
        <div className="wrap hero-box">
            <div className="hero-text">
                <div className="tag">Full-Stack Developer | AI/ML Student</div>
                <h1>Bhavesh Khatri</h1>
                <p>Building clean, fast, and useful web apps with Next.js, React, TypeScript, Firebase, and modern UI
                    ideas.</p>
                <div className="btns">
                    <a href="#work" className="btn dark">View Work</a>
                    <a href="#contact" className="btn light">Hire Me</a>
                </div>
                <div className="info">
                    <span>Jodhpur, Rajasthan</span>
                    <span>bhaveshkhatri1357@gmail.com</span>
                    <span>+91 9672731644</span>
                </div>
            </div>
            <div className="hero-photo">
                <img src="/Bhavesh_Khatri_Photo.png" alt="Bhavesh Khatri" />
            </div>
        </div>
    </section>

   <section id="about" className="section">
        <div className="wrap">
            <h2>About</h2>
            <p>I am a full-stack web development learner and AI/ML student focused on product building, rapid
                prototyping, and shipping practical solutions.</p>
        </div>
    </section>
    
    <section id="work" className="section alt">
        <div className="wrap">
            <h2>Experience</h2>
            <div className="card">
                <h3>Winter Research Intern</h3>
                <p>IIT Kharagpur (NPTEL) - Remote | Dec 2025 - Feb 2026</p>
                <p>Completed a 12-week internship, worked on research tasks, and was selected through Elite NPTEL
                    certification.</p>
            </div>
            <div className="card">
                <h3>B.Tech in Artificial Intelligence</h3>
                <p>JIET Group of Institutions, Jodhpur | Sep 2024 - Jun 2028</p>
                <p>Building strong foundations in software engineering, AI systems, and real-world application
                    development.</p>
            </div>
        </div>
    </section>
    <section id="skills" className="section">
        <div className="wrap">
            <h2>Skills</h2>
            <div className="grid">
                <div className="card">
                    <h3>Languages</h3>
                    <p>JavaScript, TypeScript, HTML, CSS</p>
                </div>
                <div className="card">
                    <h3>Frameworks</h3>
                    <p>Next.js, React, Node.js, Tailwind CSS</p>
                </div>
                <div className="card">
                    <h3>Tools</h3>
                    <p>Firebase, Supabase, Git, AI tools</p>
                </div>
                <div className="card">
                    <h3>Concepts</h3>
                    <p>Full-stack development, UI/UX, product design, prototyping</p>
                </div>
            </div>
        </div>
    </section>
    <section id="projects" className="section alt">
        <div className="wrap">
            <h2>Projects</h2>
            <div className="card">
                <h3>Accord Living</h3>
                <p>Smart society management system built with Next.js, React, Firebase, and Tailwind CSS.</p>
            </div>
            <div className="card">
                <h3>Traceback</h3>
                <p>Privacy-first lost and found web app with secure authentication and dashboards.</p>
            </div>
            <div className="card">
                <h3>Eduverse</h3>
                <p>Gamified learning platform with AI-assisted features and responsive UI/UX.</p>
            </div>
        </div>
    </section>

    <section id="achievements" className="section">
        <div className="wrap">
            <h2>Achievements</h2>
            <div className="card">
                <h3>NPTEL Elite Certification</h3>
                <p>Received Elite certification for outstanding performance in the Winter Research Internship at IIT Kharagpur.</p>
            </div>
        </div>
    </section>

    <section id="contact" className="section alt">
        <div className="wrap">
            <h2>Contact</h2>
            <p>Feel free to reach out if you have any questions or would like to collaborate!</p>
            <div className="info">
                <span>Jodhpur, Rajasthan</span>
                <span>bhaveshkhatri1357@gmail.com</span>
                <span>+91 9672731644</span>
            </div>
        </div>
    </section>
       
      </main>
    </div>
  );
}
