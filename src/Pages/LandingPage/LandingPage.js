import "./LandingPage.css";
import logo from '../../images/bcheckd-logo.png';
import femicare from '../../images/femicare.webp';
import capefertility from '../../images/cape-fertility.png';
import pretoriafertility from '../../images/pretoria-fertility.png';
import jj from '../../images/jj.jpeg';
import andrew from '../../images/Andrew-Martin-300x300.jpg';
import mark from '../../images/mark.jpeg';
import linkedInLogo from '../../images/174857.png';



const LandingPage = () => {
  return (
    <div>

      {/* Header Section */}

      <div className="header-container">
        
        <div className="header-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="header-app">
          <div className="button">Login</div>
        </div>

      </div>

      <h1>Consent Management for Fertility Clinics and Patients</h1>
      <div className="headline">
          <h3></h3>
          <h3>Obtaining and Managing Informed Consent has never been this Safe and Easy!!</h3>
          <h3></h3>
          <div className="button-2">Sign Up</div>
      </div>


      {/* How It Works Section */}
      <section class="how-it-works">
        <h2>How It Works</h2>
        <div class="workflow-steps">
            <div class="workflow-step">
                <strong>Assign Treatment</strong> 
                <p>The doctor selects the appropriate treatment which creates a consent.</p>
            </div>
            <div class="workflow-step">
                <strong>Consent Sent</strong> 
                <p>The consent document is sent digitally to the patient for review.</p>
            </div>
            <div class="workflow-step">
                <strong>Sign the Consent</strong> 
                <p>Both the patient and the doctor sign the document electronically with secure OTP verification.</p>
            </div>
            <div class="workflow-step">
                <strong>Secure Storage</strong> 
                <p>The signed consent is securely stored and made accessible to both the doctor and the patient at any time.</p>
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
              Simplify the process of obtaining consents with pre-configured treatment
              options, automated workflows, and notifications, reducing administrative
              burden and manual follow-ups.
            </p>
          </div>
          <div>
            <h3>Comprehensive Legal Protection</h3>
            <p>
              Provide patients with clear, lawyer-prepared consent documents that ensure
              compliance with industry standards, leaving no room for ambiguity.
            </p>
          </div>
          <div>
            <h3>Integrated Education and Consent Materials</h3>
            <p>
              Deliver concise educational content alongside consents, minimizing the need
              for lengthy explanations and improving patient understanding.
            </p>
          </div>
          <div>
            <h3>Secure Digital Signing and Identity Verification</h3>
            <p>
              Enable electronic signing with OTP-based verification and trusted identity
              checks, ensuring security and convenience.
            </p>
          </div>
          <div>
            <h3>Scalable and Future-Ready</h3>
            <p>
              Designed to grow with your clinic’s needs, supporting multiple users,
              treatments, and locations effortlessly, while saving time and resources.
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
            <div><b>CEO, Co-Founder</b></div>
            <p>
            Andrew is a seasoned fertility lawyer and the founder of bcheckd. With personal experience navigating the fertility journey, he brings a unique perspective, combining legal expertise with genuine empathy. Andrew translates complex legal processes into practical solutions, making informed consent seamless, secure, and accessible for fertility professionals and patients.
            </p>
            <a href="https://www.linkedin.com/in/andrew-martin-05986116b/">
              <img src={linkedInLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </div>

          <div>
            <img src={jj} alt="Logo" />
            <h3>Juan-Jacques Pretorius</h3>
            <div><b>CTO, Co-Founder</b></div>
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
        <h2>Trusted by Leading IVF Clinics</h2>
       
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
