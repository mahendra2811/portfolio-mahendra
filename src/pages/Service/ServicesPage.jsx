import React from 'react';
import './ServicesPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion'


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
      <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Services'
            />
        </h2>
        <div className="row">
            
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='Web development'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Creation of well-structured web pages, good responsive design, attractive color palette, with interactions that give the user satisfaction when browsing the website.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='Digital marketing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='A Design UX/UIboult me'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website'
                    />
                </p>
            </div>
            {/* extra for know we will tetle it leter on */}
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Web maintenance'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Web positioning (SEO)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Website optimization'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website'
                    />
                </p>
            </div> */}
        </div>
    </section>

       

        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id='services-questions'
              defaultMessage='Frequent questions'
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={<FormattedMessage
                id='services-questions-1'
                defaultMessage='How can I get a custom website designed for my business?'
              />}
              content={<FormattedMessage
                id='services-questions-p1'
                defaultMessage='To get started, simply reach out to me through our contact form, and I will schedule a consultation to discuss your specific business needs and design preferences.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-2'
                defaultMessage='What types of websites do you specialize in creating?'
              />}
              content={<FormattedMessage
                id='services-questions-p2'
                defaultMessage='We specialize in a wide range of websites, including business websites, e-commerce platforms, portfolios, and more. '
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-3'
                defaultMessage='What is the process of getting a website developed by your team?'
              />}
              content={<FormattedMessage
                id='services-questions-p3'
                defaultMessage='Our website development process involves an initial consultation, followed by project planning, design mockups, development, client feedback, and final deployment. We keep our clients informed and involved at every stage.'
              />}
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={<FormattedMessage
                id='services-questions-4'
                defaultMessage='Do you offer e-commerce website development services?'
              />}
              content={<FormattedMessage
                id='services-questions-p4'
                defaultMessage='Yes, we provide comprehensive e-commerce solutions, including online store development, payment gateway integration, and inventory management, to help businesses establish a robust online presence.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title={<FormattedMessage
                id='services-questions-5'
                defaultMessage='Can you incorporate specific features or functionalities into my website?'
              />}
              content={<FormattedMessage
                id='services-questions-p5'
                defaultMessage='Absolutely! We work closely with our clients to understand their unique requirements and can customize websites with specific features, such as contact forms, chat functionality, and more.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title={<FormattedMessage
                id='services-questions-6'
                defaultMessage='What technologies do you use for website development?'
              />}
              content={<FormattedMessage
                id='services-questions-p6'
                defaultMessage='We leverage the latest web technologies, including HTML5, CSS3, JavaScript, and popular frameworks like React or Angular, ensuring that your website is modern, responsive, and scalable.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title={<FormattedMessage
                id='services-questions-7'
                defaultMessage='How long does it typically take to complete a website project?'
              />}
              content={<FormattedMessage
                id='services-questions-p7'
                defaultMessage='The timeline varies based on the complexity and scope of the project. We provide estimated timelines during the initial consultation, and our team works efficiently to meet agreed-upon deadlines.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title={<FormattedMessage
                id='services-questions-8'
                defaultMessage='Do you provide ongoing support and maintenance after the website is launched?'
              />}
              content={<FormattedMessage
                id='services-questions-p8'
                defaultMessage='Yes, we offer ongoing support and maintenance services to ensure your website stays up-to-date, secure, and continues to meet your evolving business needs.'
              />}
              dataAos="fade-left"
              dataAosDelay="300"
            />

          </div>
        </section>
      </main>


      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default Services;