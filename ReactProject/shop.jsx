import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Homepage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto', padding: '20px', backgroundColor: '#121212' ,border: '2px solid #00ffff'}}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', backgroundColor: 'black', padding: '20px', borderRadius: '5px',border: '2px solid #00ffff' }}>
        <h1 style={{ fontSize: '30px', color: 'white', fontWeight: 'bold' , fontFamily:'revert'}}>DiGimarketing PRO</h1>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
            <li><a href="#features" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Features</a></li>
            <li><a href="#pricing" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Pricing</a></li>
            <li><a href="#about" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold'}}>About</a></li>
            <li><Link to="/log" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}>Login</Link></li>
            <li><Link to="/sign" style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold'}}>Sign Up</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" style={{
        textAlign: 'center',
        marginBottom: '60px',
        padding: '60px 20px',
        backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/035/668/408/non_2x/ai-generated-black-abstract-abstract-triangle-black-abstract-backgrounds-free-photo.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        borderRadius: '10px',
        backgroundColor: 'rgba(18, 18, 18, 0.8)',
        border: '2px solid #00ffff'
      }}>
        <h2 style={{ fontSize: '48px', marginBottom: '20px', textShadow: '2px 2px 5px rgba(0,0,0,0.5)', color: '#00ffff' }}>Streamline Your Digital Marketing</h2>
        <p style={{ fontSize: '24px', marginBottom: '30px', textShadow: '1px 1px 3px rgba(0,0,0,0.5)', color: '#fff' }}>Manage all your social media accounts in one place</p>
        <button style={{
            backgroundColor: '#8e44ad',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
        }}>Start Free Trial</button>
      </section>
      {/* Features Section */}
            {/* About Us Section */}
      <section id="features" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', color: '#8e44ad', marginBottom: '40px', textAlign: 'center' }}>Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          <div style={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              border: '2px solid #00ffff'
            }}>
            <img src="https://i.pinimg.com/236x/09/9c/d5/099cd5179198ae0529c793c4948cc73c.jpg" alt="Social Media Management" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            <Link to="/social-media-management" style={{ textDecoration: 'none', fontSize: '22px',color: '#8e44ad' ,marginBottom: '10px'}}>Social Media Management</Link>
            <p style={{ fontSize: '18px', color: '#b3b3b3' }}>Schedule and publish content across multiple platforms</p>
          </div>
          <div style={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              border: '2px solid #00ffff'
            }}>
            <img src="https://media.istockphoto.com/vectors/bar-graph-icon-on-a-black-background-vector-id486900816?k=6&m=486900816&s=612x612&w=0&h=ssUHb_Nv7a3IDOyZIZEYgx8DsGN3DDtggX0m2n_SIc8=" alt="Analytics Dashboard" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            <Link to="/analytics-dashboard" style={{ textDecoration: 'none', fontSize: '25px',color: '#8e44ad',marginBottom: '10px' }}>Analytics Dashboard</Link>
            <p style={{ fontSize: '18px', color: '#b3b3b3' }}>Track your performance with detailed insights</p>
          </div>
          <div style={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              border: '2px solid #00ffff'
            }}>
            <img src="https://i.pinimg.com/236x/3a/10/5e/3a105e10d4817cc7a738723c8d10345f.jpg" alt="Team Collaboration" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            <Link to="/team-collaboration" style={{ textDecoration: 'none', fontSize: '25px',color: '#8e44ad', marginBottom: '10px' }}>Team Collaboration</Link>
            <p style={{ fontSize: '18px', color: '#b3b3b3' }}>Work seamlessly with your marketing team</p>
          </div>
          <div style={{
              backgroundColor: 'black',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              border: '2px solid #00ffff'
            }}>
            <img src="https://i.pinimg.com/236x/c9/13/54/c913544cb0f50d00176bd43c0144f6fa.jpg" alt="Content Calendar" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />
            <Link to="/content-calendar" style={{ textDecoration: 'none',  fontSize: '25px',color: '#8e44ad', marginBottom: '10px' }}>Content Calendar</Link>
            <p style={{ fontSize: '18px', color: '#b3b3b3' }}>Plan your content strategy with an intuitive calendar</p>
          </div>
        </div>
      </section>
     <section id="about" style={{ marginBottom: '60px', backgroundColor: 'black', padding: '40px', borderRadius: '10px', border: '2px solid #00ffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
      <img src="https://th.bing.com/th/id/OIP.M_-yBtws-x15osc3c8DhMwHaIZ?w=600&h=680&rs=1&pid=ImgDetMain" alt="About us" style={{ width: '50%', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }} />
      <div>
      <h2 style={{ fontSize: '50px', color: '#8e44ad', marginBottom: '20px', textAlign: 'center' }}>About Us</h2>
      <h1 style={{ fontSize: '36px', color: 'cyan' }}>Welcome to DigiMarketing Pro</h1>
      <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: 1.6 }}>
      At <strong>DigiMarketing Pro</strong>, we're dedicated to revolutionizing digital marketing. Our all-in-one platform is designed to simplify and amplify your marketing efforts, helping you effortlessly manage your digital presence and drive growth.
      </p>
      <h2 style={{ fontSize: '28px', color: 'cyan' }}>Our Mission</h2>
      <p style={{ fontSize: '18px', color: 'white', lineHeight: 1.6 }}>
      We aim to empower businesses of all sizes with innovative tools and insights to master their digital marketing strategies. We believe in leveraging data-driven decisions and fostering seamless team collaboration to achieve outstanding results.
      </p>
      </div>
      </div>
      </section> 
              

     {/* Pricing Section */}
     <section id="pricing" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', color: '#8e44ad', marginBottom: '40px', textAlign: 'center' }}>Pricing Plans</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {[ 
            { title: "Basic", price: "$29/month", features: ["5 Social Profiles", "Basic Analytics", "Content Scheduling"], link: "/payment/basic" },
            { title: "Pro", price: "$59/month", features: ["15 Social Profiles", "Advanced Analytics", "Priority Support"], link: "/payment/pro" },
            { title: "Enterprise", price: "$99/month", features: ["Unlimited Social Profiles", "Full Analytics Suite", "24/7 Support"], link: "/payment/enterprise" }
          ].map((plan, index) => (
            <div key={index} style={{
              border: '2px solid #00ffff',
              padding: '30px',
              borderRadius: '10px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: 'black'
            }}>
              <h3 style={{ fontSize: '28px', color: '#8e44ad', marginBottom: '10px' }}>{plan.title}</h3>
              <p style={{ fontSize: '36px', color: '#fff', marginBottom: '20px' }}>{plan.price}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', fontSize: '18px', color: '#b3b3b3' }}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>{feature}</li>
                ))}
              </ul>
              <Link to={{
  pathname: plan.link,
  state: { planTitle: plan.title, planPrice: plan.price } // Pass plan details to PaymentPage
}}>
  <button style={{
    backgroundColor: '#8e44ad',
    color: '#fff',
    border: 'none',
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
  }}>Choose Plan</button>
</Link>

            </div>
          ))}
        </div>
      </section>


          {/* Footer */}
          <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        <p>&copy; 2024 DiGimarketingPRO. All rights reserved to Priyadharshini R.</p>
        <p><a href="727723eucs175@skcet.ac.in" style={{ color: 'white' }}>727723eucs175@skcet.ac.in</a></p>
        
        <div style={{ margin: '20px 0' }}>
          <a href="https://www.facebook.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaFacebook /></a>
          <a href="https://www.twitter.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaTwitter /></a>
          <a href="https://www.instagram.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaInstagram /></a>
          <a href="https://www.linkedin.com" style={{ margin: '0 15px', color: 'white', fontSize: '24px' }}><FaLinkedin /></a>
        </div>

        <div style={{ margin: '20px 0' }}>
          <a href="/about" style={{ margin: '0 15px', color: 'white' }}>About Us</a>
          <a href="/services" style={{ margin: '0 15px', color: 'white' }}>Services</a>
          <a href="/contact" style={{ margin: '0 15px', color: 'white' }}>Contact</a>
          <a href="/privacy" style={{ margin: '0 15px', color: 'white' }}>Privacy Policy</a>
        </div>
      </footer>
      </div>
  );

}

export default Homepage;
