export default function Home() {
  return (
    <div className="home">
      {/* Top Header */}
      <header className="top-header">
        <h1 className="name">Sri Vastava Rangaraju</h1>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <a href="#experience">Experience </a>
          <a href="#skills">Skills </a>
          <a href="#education">Education </a>
          <a href="#certification">Certification </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/rnvsrivastava" target="_blank">
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/sri-vastava-rangaraju-naga-venkata-b87a77181/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <section className="hero">
        <div className="hero-text">
  <h2>Software Engineer</h2>

  <p>
    Software Engineer at Softura with experience in building reliable and scalable
    applications. I work mainly with Java, Python, AWS, databases, and React.js.
    My work includes developing backend APIs, implementing features using clean
    coding standards, writing unit tests, and deploying applications on AWS.
  </p>

  <p>
    I also have experience with machine learning models, including training and
    deployment. I am interested in deep learning, neural networks, computer
    vision, and humanoid robots.
  </p>

  <p>
    I am a strong problem solver and a clear communicator. Along with technical
    skills, I have a creative side with experience in photo editing, video
    editing, and graphic design. I enjoy building complete applications using
    any suitable technology.
  </p>
</div>


        <div className="hero-image">
          <img src="/profile.jpg" alt="Sri Vastava" />
        </div>
      </section>
    </div>
  );
}
