
function ProjectsPageBody() {
  return (
    <div className="body">
      <div>
        <h3>My Projects</h3>
        <div className="description">
          Throughout my journey of learning programming, I explored various technologies and built many projects—from simple games to desktop applications to automation tools. Recently, I’ve shifted my focus toward React.js and front-end development, creating projects that are now connected to the web. While my earlier works weren’t focused on front-end, they helped me build a strong foundation in logic and problem-solving that I now apply to web development.
        </div>
        <div className="video-grid">
          <iframe
            src="https://www.youtube.com/embed/n7Qw__cRfIk"
            width='500px'
            height='300px'
            allowFullScreen
            frameBorder='0'
          >
          </iframe>
          <div className="project-description">
            <div>
              <h1 className="highlight project-title">InventoProfit</h1> is a Final group project and I am the main contributor. I made the program using Python and Tkinter Library for GUI, it has features such as QR code auto generate for each item added, QR code scan using laptop/desktop camera, login and creation account system, forgot password, sales history, daily sales, weekly sales, monthly sales, expenses handling, inventory, and so on. I used txt as database, and used own logic to manipulate the database in txt. The project needed patience and data handling skills.
            </div>
            <div>
              <h3 className="tech-stack-text">Tech Stack</h3>
              <i className="fa-brands fa-projects fa-python">
                <span className="tooltip"> Python</span>
              </i>
              <i className="fa-solid fa-projects fa-database">
                <span className="tooltip"> Database (.txt)</span>
              </i>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/VQQe5uidCOk"
            width='500px'
            height='300px'
            allowFullScreen
            frameBorder='0'
          >
          </iframe>
          <div className="project-description">
            <div>
              <h1 className="highlight project-title">Philippines Earthquake Records</h1> The project automates the collection and processing of earthquake data from PHIVOLCS. It fetches raw earthquake data using SOAP for HTML parsing, removed duplicates and null using pandas, processes it with Python scripts, runs transformations with dbt, and loads it into PostgreSQL for analytics. The entire workflow is scheduled and managed using Apache Airflow, containerized with Docker, and visualized using Superset.
            </div>
            <div>
              <h3 className="tech-stack-text">Tech Stack</h3>
              <i className="fa-brands fa-projects fa-python">
                <span className="tooltip"> Python</span>
              </i>
              <i className="fa-solid fa-projects fa-database">
                <span className="tooltip"> SQL</span>
              </i>

              <img className="airflow-img" src="airflow.png" alt="Airflow" />
              <span className="tooltip fa airflow-text">Airflow</span>

              <i class="fa-brands fa-projects fa-docker">
                <span className="tooltip"> Docker</span>
              </i>
            </div>
          </div>
          <iframe
            src="https://www.youtube.com/embed/tbXHcp_y7rY"
            width='500px'
            height='300px'
            allowFullScreen
            frameBorder='0'
          >
          </iframe>
          <div className="project-description">
            <div>
              <h1 className="highlight project-title">Weather Data Records</h1> The project automates the collection and processing of weather data from my home. It fetches raw weather data from Weatherstack API, processes it using Python scripts, and runs transformations with dbt before loading it into PostgreSQL for analytics. The pipeline is scheduled and managed with Apache Airflow and containerized using Docker, and displayed the final output through Superset.
            </div>
            <div>
              <h3 className="tech-stack-text">Tech Stack</h3>
              <i className="fa-brands fa-projects fa-python">
                <span className="tooltip"> Python</span>
              </i>
              <i className="fa-solid fa-projects fa-database">
                <span className="tooltip"> SQL</span>
              </i>

              <img className="airflow-img" src="airflow.png" alt="Airflow" />
              <span className="tooltip fa airflow-text">Airflow</span>

              <i class="fa-brands fa-projects fa-docker">
                <span className="tooltip"> Docker</span>
              </i>
            </div>
          </div>
        </div>

      </div>




    </div>
  );
}

export default ProjectsPageBody