import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  state = {
    showScrollToTop: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 200) {
      this.setState({ showScrollToTop: true });
    } else {
      this.setState({ showScrollToTop: false });
    }
  };

  getProfileInfo() {
    // Add logic to fetch or compute profile information
  }

  scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  toggleMenu = () => {
    const menu = document.querySelector('.profile-nav');
    menu.classList.toggle('active');
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <img src="https://avatars.githubusercontent.com/u/21263580?s=400&u=aa16faa9bc1386b72010430b8a765a96916c7b87&v=4" alt="Kyton Thaundi" className="profile-picture" />
          <h1>Kyton Thaundi</h1>
          <div className="hamburger-menu" onClick={this.toggleMenu} style={{ marginLeft: 'auto' }}>
            &#9776;
          </div>
        </div>
        <nav className="profile-nav">
          <ul>
            <li onClick={() => this.scrollToSection('professional-summary')}>Professional Summary</li>
            <li onClick={() => this.scrollToSection('key-achievements')}>Key Achievements</li>
            <li onClick={() => this.scrollToSection('professional-strengths')}>Professional Strengths</li>
            <li>
              Professional Experience
              <ul>
                <li onClick={() => this.scrollToSection('system-analyst')}>System Analyst</li>
                <li onClick={() => this.scrollToSection('health-informatics-systems-officer')}>Health Informatics Systems Officer</li>
                <li onClick={() => this.scrollToSection('support-and-deployment-officer')}>Support and Deployment Officer</li>
                <li onClick={() => this.scrollToSection('software-engineer')}>Software Engineer</li>
                <li onClick={() => this.scrollToSection('software-developer-intern')}>Software Developer (intern)</li>
              </ul>
            </li>
            <li onClick={() => this.scrollToSection('education-summary')}>Education Summary</li>
            <li onClick={() => this.scrollToSection('professional-accreditation')}>Professional Accreditation</li>
            <li onClick={() => this.scrollToSection('references')}>References</li>
          </ul>
        </nav>
        <div className="profile-content">
          <section id="professional-summary" className="profile-section">
            <h2>Professional Summary</h2>
            <p>
              Results-driven Information Technology professional with a proven track record of delivering innovative solutions that drive organizational growth. Skilled in business systems analysis, product management, database management, software development, and network administration. Proven ability to collaborate effectively with cross-functional teams, adapt to rapidly changing environments, and train and mentor technical staff. Passionate about leveraging technology to improve business outcomes.
            </p>
          </section>
          <section id="key-achievements" className="profile-section">
            <h2>Key Achievements</h2>
            <ul>
              <li>Led successful quarterly releases for 5 modules within the Malawi national Electronic Medical Record (EMR) system.</li>
              <li>Successfully led the modernization and migration of the TB Electronic Health Records system into the Malawi EMR.</li>
              <li>Trained over 1,000 healthcare workers in EMRs from over 70 health facilities across Malawi.</li>
              <li>Maintained an exceptional 96% uptime of EMRs in the 49 Health Facilities managed.</li>
            </ul>
          </section>
          <section id="professional-strengths" className="profile-section">
            <h2>Professional Strengths</h2>
            <ul>
              <li>Software Development Lifecycle (SDLC): Proficient in the various phases of the SDLC. Gather requirements, design solutions, test the solutions, and document all works for deployment teams.</li>
              <li>Agile Methodologies: Track record of working in Agile environments, delivering iterative solutions that continue to improve over time.</li>
              <li>Testing and Quality Assurance: Experience in creating test plans, test cases, and executing test scenarios.</li>
              <li>Version Control: Working experience using Git for version control.</li>
              <li>Requirements Gathering and Analysis: Successfully elicited and documented requirements for 4 successful releases of the National EMR implemented in Malawi.</li>
              <li>Problem-solving and Troubleshooting: Vast experience troubleshooting and solving various business information systems problems.</li>
              <li>Strong Leadership and Team Collaboration: Proven ability to lead and inspire teams, fostering a collaborative environment for effective project execution.</li>
              <li>Excellent Communication and Reporting: Effective oral and written communication skills, enabling clear and concise reporting and presentations.</li>
              <li>Bilingual Proficiency: Fluent in English and Chichewa, facilitating seamless communication in diverse settings.</li>
            </ul>
          </section>
          <section id="professional-experience" className="profile-section">
            <h2>Professional Experience</h2>
            <h3 id="system-analyst">System Analyst at Elizabeth Glaser Pediatric AIDS Foundation- Lilongwe Malawi</h3>
            <p>April 2024 – Present</p>
            <ul>
              <li>Serve as the main client interface for all aspects of application development projects. Coordinate project activities with stakeholders, maintain effective communication regarding status, timelines, and other details, ensure compliance with specifications, and resolve software bugs and deficiencies.</li>
              <li>Analyze business processes and requirements, propose technical specifications, interact with clients to recommend technology solutions, identify and map business processes, and gather user requirements. Write system design specifications, flow diagrams, schematics, file structures, reports, forms, and menus.</li>
              <li>Review code and flowchart processes, perform system quality assurance activities, test, troubleshoot, and debug system issues using appropriate technology, and prepare and execute testing plans to validate functionality and resolve issues.</li>
              <li>Technologies: Figma, Draw.IO, Shortcut, GitHub, Zoho, MySQL, docker.</li>
            </ul>
            <h3 id="health-informatics-systems-officer">Health Informatics Systems Officer at Elizabeth Glaser Pediatric AIDS Foundation- Blantyre Malawi</h3>
            <p>September 1st 2020 – 26th April 2024</p>
            <ul>
              <li>Lead in setting up machines and configuring hardware, ensuring system uptime in the assigned district, and troubleshooting system, data, and network issues.</li>
              <li>Implement data security, storage, and governance measures for the PEPFAR program.</li>
              <li>Provide technical assistance, user training, and mentorship to facility and district stakeholders in the rollout of electronic solutions, and ensure coordination and collaboration with IPs, DHO, and health facility staff.</li>
              <li>Technologies: docker, Zoho, GitHub, PRTG, VMware, MySQL.</li>
            </ul>
            <h3 id="support-and-deployment-officer">Support and Deployment Officer at Baobab Health Trust- Lilongwe Malawi</h3>
            <p>January 2019 – August 2020</p>
            <ul>
              <li>Perform system deployments and updates at healthcare centers in Malawi, conduct regular clinic visits to monitor system performance and resolve issues, and build and maintain relationships with partners and site maintenance teams.</li>
              <li>Set up indicators to ensure high system uptime, deliver quality and timely reports to MOH and other stakeholders, and evaluate reports upon system implementation.</li>
              <li>Monitor system usage and data quality during regular clinic visits, and analyze data to identify trends and areas for improvement.</li>
              <li>Technologies: docker, Redmine, GitHub, PRTG, VMware, MySQL.</li>
            </ul>
            <h3 id="software-engineer">Software Engineer at The Mile Ltd- Blantyre Malawi</h3>
            <p>May 2017 – December 2018</p>
            <ul>
              <li>Develop, test, and debug software according to client requirements, document source code and system components, and maintain systems post-launch.</li>
              <li>Conduct systems analysis to identify areas for improvement, recommend policy and operational changes, and co-plan networking projects.</li>
              <li>Engage with clients on technical issues related to various IT projects and write technical proposals for project initiatives.</li>
              <li>Technologies: C#, VB, CSS, PHP, MSSQL, JavaScript.</li>
            </ul>
            <h3 id="software-developer-intern">Software Developer (intern) at Tiwale Designs- Lilongwe Malawi</h3>
            <p>October 2016 – May 2017</p>
            <ul>
              <li>Analyze system requirements as directed by the product owner.</li>
              <li>Co-develop software applications and databases.</li>
              <li>Technologies: PHP, CSS, JavaScript, C#.</li>
            </ul>
          </section>
          <section id="education-summary" className="profile-section">
            <h2>Education Summary</h2>
            <p>MBA Management Information Systems- UNICAF (Expected 2025)</p>
            <p>BSc Management Information Systems- University of Malawi (2016)</p>
          </section>
          <section id="professional-accreditation" className="profile-section">
            <h2>Other Professional Accreditation Certificates</h2>
            <ul>
              <li>Introduction to Information Security Certificate (Cybrary)</li>
              <li>Introduction to Data Science (Cybrary)</li>
              <li>VSP-SV (Server Virtualization 2017) - VMWare</li>
              <li>End User: Social Engineering (Cybrary)</li>
            </ul>
          </section>
          <section id="references" className="profile-section">
            <h2>References</h2>
            <p>
              <strong>Vathlu Nazombe</strong><br />
              eHealth IT Implementation Specialist; UNDP<br />
              LinkedIn: <a href="https://www.linkedin.com/in/vathlu-nazombe">vathlu-nazombe</a>
            </p>
            <p>
              <strong>Chimwemwe Mputeni</strong><br />
              Health Information System Advisor; Compelling Works<br />
              LinkedIn: <a href="https://www.linkedin.com/in/chimwemwe-mputeni">chimwemwe-mputeni</a>
            </p>
            <p>
              <strong>Mirriam Nsomba</strong><br />
              Managing Director; The Mile Limited<br />
              LinkedIn: <a href="https://www.linkedin.com/in/mirriam-nsomba">mirriam-nsomba</a>
            </p>
          </section>
        </div>
        <footer className="profile-footer">
          <div className="watermark"> </div>
          <div className="fineprint">&copy; kytha 2025</div>
        </footer>
        {this.state.showScrollToTop && (
          <div className="scroll-to-top" onClick={this.scrollToTop}>
            &#8679;
          </div>
        )}
      </div>
    );
  }
}

export default Profile;