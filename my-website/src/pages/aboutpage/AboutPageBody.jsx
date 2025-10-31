

function AboutPageBody() {
  return (
    <div className="body">
      <div className="left-section">
        <h3>My Journey</h3>
        <p className="description">
          My interest in web development began with a simple curiosity about how websites work. I started experimenting with HTML and CSS, and over time, I discovered how powerful JavaScript and React can be in creating dynamic, interactive interfaces.

          Since then, I’ve been continuously improving my front-end skills and learning how to turn design ideas into real, functional web applications. I enjoy combining creativity with problem-solving to build things that people can actually use and enjoy.
        </p>
        <br />
        <h3>Skills and Tools</h3>
        <span className="description">Here are some of the technologies and tools I’m comfortable with:</span>
        <div className="skills">
          <i className="fa-brands fa-about test fa-html5">
            <span className="tooltip"> HTML</span>
          </i>
          <i className="fa-brands fa-about fa-css3-alt">
            <span className="tooltip"> CSS</span>
          </i>
          <i className="fa-brands fa-about fa-js">
            <span className="tooltip"> Javascript</span>
          </i>
          <i className="fa-brands fa-about fa-react">
            <span className="tooltip"> ReactJs</span>
          </i>
          <i className="fa-brands fa-about fa-python">
            <span className="tooltip"> Python</span>
          </i>
          <i className="fa-solid fa-about fa-database">
            <span className="tooltip"> SQL</span>
          </i>

        </div>
        <br />
        <h3>My Goal</h3>
        <span className="description">
          I aim to create web interfaces that not only look great but also provide a seamless user experience. I believe that simplicity, clarity, and performance are the foundations of good web design.

          I’m currently improving my React and Node.js skills while working on personal projects to sharpen my front-end development expertise.
        </span>
      </div>
    </div>
  );
}

export default AboutPageBody