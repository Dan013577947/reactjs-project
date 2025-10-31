
function ProjectsPageBody() {
  return (
    <div className="body">
      <div className="left-section">
        <h3>My Projects</h3>
        <p className="description">
          I enjoy experimenting with different technologies, from web development to Python GUI and simple games.
          Here are some of the projects I’ve built while learning programming concepts and improving my problem-solving skills.
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
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=TNLsxjkwc_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPageBody