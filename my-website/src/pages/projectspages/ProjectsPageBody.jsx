
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

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/n7Qw__cRfIk"
            width='500px'
            height='300px'
            allowFullScreen
            frameBorder='0'
          >
          </iframe>

          <span className="description">
            InventoProfit is a Final group project and I am the main contributor. I made the program using Python and Tkinter Library for GUI, it has features such as QR code auto generate for each item added, QR code scan using laptop/desktop camera, login and creation account system, forgot password, sales history, daily sales, weekly sales, monthly sales, expenses handling, inventory, and so on. I used txt as database, and used own logic to manipulate the database in txt. The project needed patience and data handling skills.
          </span>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/n7Qw__cRfIk"
            width='500px'
            height='300px'
            allowFullScreen
            frameBorder='0'
          >
          </iframe>

          <div className="description">
            InventoProfit is a Final group project and I am the main contributor. I made the program using Python and Tkinter Library for GUI, it has features such as QR code auto generate for each item added, QR code scan using laptop/desktop camera, login and creation account system, forgot password, sales history, daily sales, weekly sales, monthly sales, expenses handling, inventory, and so on. I used txt as database, and used own logic to manipulate the database in txt. The project needed patience and data handling skills.
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPageBody