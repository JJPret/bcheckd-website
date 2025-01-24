import "./LandingPage.css";
import logo from '../../images/bcheckd-logo.png';
import femicare from '../../images/femicare.webp';
import capefertility from '../../images/cape-fertility.png';
import pretoriafertility from '../../images/pretoria-fertility.png';
import jj from '../../images/jj.jpeg';
import andrew from '../../images/Andrew-Martin-300x300.jpg';
import mark from '../../images/mark.jpeg';
import linkedInLogo from '../../images/174857.png';

import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>

      {/* Header Section */}

      <div className="header-container">
        
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="header-app">
          <button className="button" onClick={() => navigate('/login')}>Login</button>
        </div>

      </div>

      <h1>Consent Management for Fertility Clinics and Patients</h1>
      <div className="headline">
          <h3></h3>
          <h3>Obtaining and Managing Informed Consent has never been this Safe and Easy!</h3>
          <h3></h3>
          <button className="button-2" onClick={() => navigate('/signup')}>Sign Up</button>
      </div>



      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="workflow-steps">
          <div className="workflow-step">
            <strong>Assign Treatment</strong>
            <p>
              The doctor selects the appropriate fertility treatment from a predefined list of options, ensuring streamlined workflows and accurate record-keeping.
            </p>
          </div>
          <div className="workflow-step">
            <strong>Consent Sent</strong>
            <p>
              A legally compliant, treatment-specific consent form is generated and sent digitally to the patient for review via a secure electronic system.
            </p>
          </div>
          <div className="workflow-step">
            <strong>Sign the Consent</strong>
            <p>
              Both the patient and the doctor electronically sign the consent using One-Time Password (OTP) verification, ensuring regulatory compliance.
            </p>
          </div>
          <div className="workflow-step">
            <strong>Secure Storage</strong>
            <p>
              The signed consent is encrypted and stored in a secure digital repository, accessible anytime by both the doctor and the patient for future reference.
            </p>
          </div>
        </div>
      </section>




      {/* Features Section */}
      <div className="features">
        <h2>Reasons to Choose Our Solution</h2>
        
        <section className="section features">
          <div>
            <h3>Effortless Consent Management</h3>
            <p>
              Simplify consent management with pre-configured treatment templates, automated workflows, and real-time notifications, significantly reducing administrative overhead and minimizing manual errors.
            </p>
          </div>
          <div>
            <h3>Comprehensive Legal Protection</h3>
            <p>
              Empower patients with legally compliant, lawyer-prepared consent documents that align with global medical standards, ensuring accuracy, transparency, and protection for all parties.
            </p>
          </div>
          <div>
            <h3>Education Materials</h3>
            <p>
              Provide patients with clear and concise educational resources alongside consent documents, enhancing their understanding while reducing consultation time and improving overall satisfaction.
            </p>
          </div>
          <div>
          <h3>Comprehensive Digital Solution</h3>
          <p>
            Identity verification, electronic signing, and consent management are seamlessly integrated into a fully digital workflow, ensuring efficiency, security, and compliance.
          </p>
          </div>
          <div>
            <h3>Scalable and Future-Ready</h3>
            <p>
              Built on cloud-based architecture, the solution supports multiple users, treatments, and locations with ease, offering seamless scalability to meet growing demands.
            </p>
          </div>
        </section>
      </div>













    {/* About Us Section */}
      
      
      <section className="about-us">
        <h2>About Us</h2>
        <div class="people-container">

          <div>
            <img src={andrew} alt="Logo" />
            <h3>Andrew Martin</h3>
            <div><b>CEO & Co-Founder</b></div>
            <p>
            Andrew is a seasoned fertility lawyer and the co-founder of bcheckd. With personal experience navigating the fertility journey, he brings a unique perspective, combining legal expertise with genuine empathy. Andrew translates complex legal processes into practical solutions, making informed consent seamless, secure, and accessible for fertility professionals and patients.
            </p>
            <a href="https://www.linkedin.com/in/andrew-martin-05986116b/">
              <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </div>

          <div>
            <img src={jj} alt="Logo" />
            <h3>Juan-Jacques Pretorius</h3>
            <div><b>CTO & Co-Founder</b></div>
            <p>
            Juan-Jacques is the CTO and co-founder of bcheckd, combining deep technical expertise with a passion for innovation. With a strong foundation in actuarial science, software development, and blockchain technology, he is committed to solving complex challenges in the fertility industry. 
            Juan-Jacques focuses on building secure, scalable, and intuitive systems. 
            </p>
            <a href="https://www.linkedin.com/in/juan-jacques-pretorius-a93540261/#">
              <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </div>
          
          <div>
            <img src={mark} alt="Logo" />
            <h3>Mark Bosman</h3>
            <div><b>Advisor</b></div>
            <p>
            Mark is a seasoned entrepreneur with a track record of founding and scaling VC-backed SaaS startups. With expertise in business development and value creation across sectors like Gaming, Telco, and Finance, he provides strategic guidance to bcheckd. Mark is passionate about leveraging disruptive technologies to drive innovation and impact in Africa.
            </p>
            <a href="https://www.linkedin.com/in/markabosman/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </div>

        </div>
      </section>


      {/* Social Proof Section */}
      <section className="social-proof">
        <h2>Trusted by Leading Fertility Clinics</h2>
       
        <div className='image-container'>
          <a href="https://femicarefertility.co.za" target="_blank" rel="noopener noreferrer">
            <img src={femicare} alt="Logo" />
          </a>
          <a href="https://ptafertility.co.za" target="_blank" rel="noopener noreferrer">
            <img src={pretoriafertility} alt="Logo" />
          </a>
          <a href="https://capefertility.co.za" target="_blank" rel="noopener noreferrer">
            <img src={capefertility} alt="Logo" />
          </a>
        </div>
      </section>


      {/* Contact/CTA Section */}
      <section className="contact">
        <h2>Ready to transform your clinic's workflow?</h2>
        <div className='contact-details'>
          <div>  
            Juan-Jacques Pretorius (CTO)
          </div>
          <div>
            juan-jacques@bcheckd.io
          </div>
          <div>
            083 794 6068
          </div>
          
        </div>
      </section>



      
    </div>
  );
};

export default LandingPage;
