import './About.css';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>I am a self-taught web developer from Nigeria passionate about building things for the web. I love clean code, great design and solving real problems with technology.</p>
      <div className="skills">
        <h3>My Skills</h3>
        <div className="skills-grid">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>
    </div>
  );
}

export default About;