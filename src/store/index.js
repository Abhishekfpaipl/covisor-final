import { createStore } from "vuex";
import about from "./about";
import business from "./business";
import pricing from "./pricing";
export default createStore({
  state: {
    autoScrolling: [
      {
        id: 1,
        name: 'Amazon',
        image: '/img/amazon.png'
      },
      {
        id: 2,
        name: 'Apple',
        image: "/img/apple.png"
      },
      {
        id: 3,
        name: 'Aws',
        image: "/img/aws.png"
      },
      {
        id: 4,
        name: 'Facebook',
        image: "/img/fb.png"
      },
      {
        id: 5,
        name: 'Google',
        image: "/img/google.png"
      },
      {
        id: 6,
        name: 'Meta',
        image: "/img/meta.png"
      },
      {
        id: 7,
        name: 'Microsoft',
        image: "/img/microsoft.png"
      },
      {
        id: 11,
        name: 'Vodafone',
        image: "/img/vodafone.png"
      },
    ],
    countries: [
      {
        id: 1,
        name: 'UK',
        image: 'https://thewebtycoons.com/img/uk.png'
      },
      {
        id: 2,
        name: 'Canada',
        image: "https://thewebtycoons.com/img/canada.png"
      },
      {
        id: 3,
        name: 'Dubai',
        image: "https://thewebtycoons.com/img/dubai.png"
      },
      {
        id: 4,
        name: 'Singapore',
        image: "https://thewebtycoons.com/img/singapore.png"
      },
      {
        id: 5,
        name: 'USA',
        image: "https://thewebtycoons.com/img/usa.png"
      },
    ], 
    customers: [
      {
        id: 1,
        show: false,
        imgr: '/img/customers/1.jpeg',
        name: 'Kusum',
        service: 'Digital Marketing',
        company: 'Stellar Pvt Ltd',
        rating: '5',
        text: "Covisor transformed our online presence. Their SEO strategies improved our search engine rankings significantly, and their social media campaigns have driven unprecedented traffic to our website. The team is knowledgeable, responsive, and a pleasure to work with. Highly recommend their services!"
      },
      {
        id: 2,
        show: false,
        imgr: '/img/customers/2.jpeg',
        name: 'Payal',
        service: 'Digital Marketing',
        company: 'BrightSpark  Pvt Ltd',
        rating: '4.5',
        text: "Covisor provided us with effective PPC campaigns and valuable insights into our audience's behavior. Their email marketing strategies also helped us retain customers and increase sales. There was a slight delay in the initial setup, but their results made it worth the wait."
      },
      {
        id: 3,
        show: false,
        imgr: '/img/customers/3.jpeg',
        name: 'Sumit',
        service: 'Digital Marketing',
        company: 'Elite Solutions Pvt Ltd',
        rating: '5',
        text: "Covisor offered a comprehensive digital marketing plan, including content marketing and influencer partnerships. While the strategies were innovative, the execution was sometimes inconsistent. Customer support was responsive, but project management could be improved."
      },
      {
        id: 4,
        show: false,
        imgr: '/img/customers/4.jpeg',
        name: 'Abhishek',
        service: 'Software Development',
        company: 'DevMasters Pvt Ltd',
        rating: '5',
        text: "Covisor delivered a robust and scalable software solution tailored to our business needs. Their agile development process kept us involved at every stage, and the final product exceeded our expectations. The team’s expertise and attention to detail were exceptional."
      },
      {
        id: 5,
        show: false,
        imgr: '/img/customers/5.jpeg',
        name: 'Rajat',
        service: 'Software Development',
        company: 'CodeCraft  Pvt Ltd',
        rating: '4',
        text: "We collaborated with Covisor for a custom application development project. Their technical skills are top-notch, and they implemented features that enhanced our operational efficiency. However, there were occasional communication lapses that delayed progress. Overall, a solid choice for software development."
      },
      {
        id: 6,
        show: false,
        imgr: '/img/customers/6.jpeg',
        name: 'Jayshree',
        service: 'Software Development',
        company: 'SoftWave Pvt Ltd',
        rating: '4.5',
        text: "Covisor developed our company's internal software. While the final product met our requirements, the development process faced several delays. The team was knowledgeable but could improve on meeting deadlines and providing clearer updates. The end result was satisfactory."
      },
      {
        id: 7,
        show: false,
        imgr: '/img/customers/7.jpeg',
        name: 'Lokesh',
        service: 'Website Development',
        company: 'PixelPerfect  Pvt Ltd',
        rating: '4',
        text: "Covisor created a stunning and user-friendly website for our business. Their design aesthetics are impeccable, and the site performs flawlessly across all devices. They were receptive to our ideas and made the entire process smooth and enjoyable. Highly recommend!"
      },
      {
        id: 8,
        show: false,
        imgr: '/img/customers/8.jpeg',
        name: 'Bhasker',
        service: 'Website Development',
        company: 'WebInnovators Pvt Ltd',
        rating: '3.5',
        text: "Covisor revamped our outdated website, giving it a modern look and improved functionality. The team was professional and skilled, delivering a site that aligns with our brand. There were minor hiccups during the integration phase, but they were resolved promptly. Overall, a positive experience."
      },
      {
        id: 9,
        show: false,
        imgr: '/img/customers/9.jpeg',
        name: 'Vivek',
        service: 'Website Development',
        company: 'NexGen Pvt Ltd',
        rating: '5',
        text: "Covisor Web Solutions built our new e-commerce site. The design and user interface are excellent, but the project took longer than expected to complete. Communication could have been better, with more frequent updates. Despite the delays, the final website is performing well and attracting more customers."
      },
    ],
    faqs: [
      {
        id: 109,
        name: "All",
        plans: [
          {
            question: "What services does your IT company provide?",
            answer: "Our IT company offers a range of services including software development, IT consulting, managed IT services, cloud solutions, cybersecurity, and technical support."
          },
          {
            question: "Where are you located?",
            answer: "Our headquarters are located in [City, Country]. We also have offices in [Other Locations]."
          },
          {
            question: "How long have you been in business?",
            answer: "We have been providing IT services since [Year]."
          },
          {
            question: "Who are your typical clients?",
            answer: "Our clients range from small businesses to large enterprises across various industries such as finance, healthcare, education, and retail."
          },
          {
            question: "What is managed IT services?",
            answer: "Managed IT services involve outsourcing your company's IT operations to a third-party service provider, who manages and assumes responsibility for providing a defined set of services."
          },
          {
            question: "What software development services do you offer?",
            answer: "We offer custom software development, mobile app development, web application development, and software maintenance and support."
          },
          {
            question: "Can you help with cloud migration?",
            answer: "Yes, we provide comprehensive cloud migration services including planning, execution, and ongoing management."
          },
          {
            question: "What kind of cybersecurity services do you offer?",
            answer: "Our cybersecurity services include vulnerability assessments, penetration testing, security audits, and incident response."
          },
          {
            question: "What kind of technical support do you offer?",
            answer: "We offer 24/7 technical support through various channels including phone, email, and live chat."
          },
          {
            question: "How quickly can you respond to support requests?",
            answer: "Our response times vary based on the service level agreement (SLA) but we strive to respond to all critical issues within [X] hours."
          },
          {
            question: "Do you provide on-site support?",
            answer: "Yes, we offer on-site support services as needed, in addition to remote support."
          },
          {
            question: "What is your process for handling IT issues?",
            answer: "Our process includes logging the issue, assessing its severity, assigning it to a specialist, and resolving it promptly. We also follow up to ensure complete resolution."
          },
          {
            question: "How do you price your services?",
            answer: "Our pricing depends on the type of service and the specific needs of the client. We offer both fixed-price and flexible pricing models."
          },
          {
            question: "Do you offer service packages?",
            answer: "Yes, we offer several service packages tailored to different business needs and sizes."
          },
          {
            question: "Is there a long-term contract required?",
            answer: "We offer both short-term and long-term contract options based on client preferences."
          },
          {
            question: "Can I customize my service package?",
            answer: "Absolutely, we can customize service packages to fit your specific business requirements."
          },
          {
            question: "How do I get started with your services?",
            answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
          },
          {
            question: "What is the onboarding process like?",
            answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
          },
          {
            question: "Do you offer a trial period for your services?",
            answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
          },
          {
            question: "How do you ensure a smooth transition to your services?",
            answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
          },
          {
            question: "What technologies do you specialize in?",
            answer: "We specialize in a wide range of technologies including [List of Technologies, e.g., Java, Python, .NET, AWS, Azure, etc.]."
          },
          {
            question: "How do you handle data security and privacy?",
            answer: "We follow industry best practices and comply with relevant regulations to ensure data security and privacy, including encryption, access controls, and regular security audits."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Yes, we have extensive experience integrating new solutions with existing systems to ensure seamless operation."
          },
          {
            question: "What is your approach to software development?",
            answer: "We follow agile methodologies to ensure iterative progress, flexibility, and client collaboration throughout the development process."
          },
          {
            question: "Do you require an NDA before starting a project?",
            answer: "Yes, we typically require a Non-Disclosure Agreement (NDA) to protect the confidentiality of both parties' information before commencing a project."
          },
          {
            question: "What is included in your NDA?",
            answer: "Our NDA includes clauses that ensure the confidentiality of shared information, outlines the obligations of both parties, and specifies the duration of the confidentiality agreement."
          },
          {
            question: "Can we use our own NDA?",
            answer: "Yes, we are open to reviewing and using your company's NDA, provided it meets our standards for confidentiality and mutual protection."
          },
          {
            question: "How long does the NDA remain in effect?",
            answer: "The NDA remains in effect for the duration specified in the agreement, typically ranging from one to five years, depending on the nature of the project and the information involved."
          },
          {
            question: "How can I contact your support team?",
            answer: "You can contact our support team via phone, email, or live chat available on our website."
          },
          {
            question: "What are your support hours?",
            answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
          },
          {
            question: "Where can I find documentation and resources?",
            answer: "Documentation and resources can be found in the client portal on our website."
          },
          {
            question: "How do I provide feedback on your services?",
            answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
          },
        ]
      },
      {
        id: 1,
        name: "General Information",
        plans: [
          {
            question: "What services does your IT company provide?",
            answer: "Our IT company offers a range of services including software development, IT consulting, managed IT services, cloud solutions, cybersecurity, and technical support."
          },
          {
            question: "Where are you located?",
            answer: "Our headquarters are located in [City, Country]. We also have offices in [Other Locations]."
          },
          {
            question: "How long have you been in business?",
            answer: "We have been providing IT services since [Year]."
          },
          {
            question: "Who are your typical clients?",
            answer: "Our clients range from small businesses to large enterprises across various industries such as finance, healthcare, education, and retail."
          }
        ]
      },
      {
        id: 2,
        name: "Services",
        plans: [
          {
            question: "What is managed IT services?",
            answer: "Managed IT services involve outsourcing your company's IT operations to a third-party service provider, who manages and assumes responsibility for providing a defined set of services."
          },
          {
            question: "What software development services do you offer?",
            answer: "We offer custom software development, mobile app development, web application development, and software maintenance and support."
          },
          {
            question: "Can you help with cloud migration?",
            answer: "Yes, we provide comprehensive cloud migration services including planning, execution, and ongoing management."
          },
          {
            question: "What kind of cybersecurity services do you offer?",
            answer: "Our cybersecurity services include vulnerability assessments, penetration testing, security audits, and incident response."
          }
        ]
      },
      {
        id: 3,
        name: "Support and Maintenance",
        plans: [
          {
            question: "What kind of technical support do you offer?",
            answer: "We offer 24/7 technical support through various channels including phone, email, and live chat."
          },
          {
            question: "How quickly can you respond to support requests?",
            answer: "Our response times vary based on the service level agreement (SLA) but we strive to respond to all critical issues within [X] hours."
          },
          {
            question: "Do you provide on-site support?",
            answer: "Yes, we offer on-site support services as needed, in addition to remote support."
          },
          {
            question: "What is your process for handling IT issues?",
            answer: "Our process includes logging the issue, assessing its severity, assigning it to a specialist, and resolving it promptly. We also follow up to ensure complete resolution."
          }
        ]
      },
      {
        id: 4,
        name: "Pricing and Contracts",
        plans: [
          {
            question: "How do you price your services?",
            answer: "Our pricing depends on the type of service and the specific needs of the client. We offer both fixed-price and flexible pricing models."
          },
          {
            question: "Do you offer service packages?",
            answer: "Yes, we offer several service packages tailored to different business needs and sizes."
          },
          {
            question: "Is there a long-term contract required?",
            answer: "We offer both short-term and long-term contract options based on client preferences."
          },
          {
            question: "Can I customize my service package?",
            answer: "Absolutely, we can customize service packages to fit your specific business requirements."
          }
        ]
      },
      {
        id: 5,
        name: "Client Onboarding",
        plans: [
          {
            question: "How do I get started with your services?",
            answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
          },
          {
            question: "What is the onboarding process like?",
            answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
          },
          {
            question: "Do you offer a trial period for your services?",
            answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
          },
          {
            question: "How do you ensure a smooth transition to your services?",
            answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
          }
        ]
      },
      {
        id: 6,
        name: "Technical Questions",
        plans: [
          {
            question: "What technologies do you specialize in?",
            answer: "We specialize in a wide range of technologies including [List of Technologies, e.g., Java, Python, .NET, AWS, Azure, etc.]."
          },
          {
            question: "How do you handle data security and privacy?",
            answer: "We follow industry best practices and comply with relevant regulations to ensure data security and privacy, including encryption, access controls, and regular security audits."
          },
          {
            question: "Can you integrate with our existing systems?",
            answer: "Yes, we have extensive experience integrating new solutions with existing systems to ensure seamless operation."
          },
          {
            question: "What is your approach to software development?",
            answer: "We follow agile methodologies to ensure iterative progress, flexibility, and client collaboration throughout the development process."
          }
        ]
      },
      {
        id: 7,
        name: "Non-Disclosure Agreement (NDA)",
        plans: [
          {
            question: "Do you require an NDA before starting a project?",
            answer: "Yes, we typically require a Non-Disclosure Agreement (NDA) to protect the confidentiality of both parties' information before commencing a project."
          },
          {
            question: "What is included in your NDA?",
            answer: "Our NDA includes clauses that ensure the confidentiality of shared information, outlines the obligations of both parties, and specifies the duration of the confidentiality agreement."
          },
          {
            question: "Can we use our own NDA?",
            answer: "Yes, we are open to reviewing and using your company's NDA, provided it meets our standards for confidentiality and mutual protection."
          },
          {
            question: "How long does the NDA remain in effect?",
            answer: "The NDA remains in effect for the duration specified in the agreement, typically ranging from one to five years, depending on the nature of the project and the information involved."
          }
        ]
      },
      {
        id: 8,
        name: "Contact and Support",
        plans: [
          {
            question: "How can I contact your support team?",
            answer: "You can contact our support team via phone, email, or live chat available on our website."
          },
          {
            question: "What are your support hours?",
            answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
          },
          {
            question: "Where can I find documentation and resources?",
            answer: "Documentation and resources can be found in the client portal on our website."
          },
          {
            question: "How do I provide feedback on your services?",
            answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
          }
        ]
      }
    ],
    whatMakesUsDifferent: [
      {
        icon: 'bi-shield-check',
        title: "Integrity properties",
        description: "Demonstrating transparency and honesty in all our commitments and actions, ensuring trust and reliability in every interaction.",
      },
      {
        icon: 'bi-star',
        title: "Excellence",
        description: "Going beyond expectations by understanding your needs deeply and meticulously crafting solutions that surpass ordinary standards.",
      },
      {
        icon: 'bi-people',
        title: "Teamwork",
        description: "Leveraging collective strengths to provide you with adaptable and superior solutions, fostering a collaborative environment where every voice contributes meaningfully."
      },
      {
        icon: 'bi-shield-lock',
        title: "Privacy and safety",
        description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
      },
      {
        icon: 'bi-graph-up',
        title: "Quality services",
        description: "Crafting bespoke web designs that drive impactful user experiences and convey a distinct brand message, led by experienced designers from concept to execution.",
      },
      {
        icon: 'bi-palette',
        title: "Creativity",
        description: "Solving challenges innovatively, refusing to settle for ordinary solutions, and creating bespoke strategies that not only solve problems but also distinguish your business.",
      },
      {
        icon: 'bi-calendar-check ',
        title: "Dependability",
        description: "Consistently delivering on promises, meeting deadlines with proactive communication, and treating your business's success as our own commitment.",
      },
      {
        icon: 'bi-emoji-laughing',
        title: "Fun",
        description: "Cultivating a positive and enjoyable workplace environment, fostering creativity, exceptional client service, and the well-being of our team members through humor and camaraderie.",
      },
      {
        icon: 'bi-hand-thumbs-up ',
        title: "Helping Hand",
        description: "Fostering a supportive and positive workplace environment."
      },
      {
        icon: 'bi-gem',
        title: "World Class Quality",
        description: "Delivering exceptional quality in all our services."
      },
      {
        icon: 'bi-tags',
        title: "Competitive Pricing",
        description: "Offering the best prices without compromising on quality."
      },
      {
        icon: 'bi-lightning ',
        title: "Incredibly Fast Delivery",
        description: "Ensuring quick and efficient delivery for our clients."
      }
    ],
  },
  getters: {
    getAutoScrolling: state => state.autoScrolling,
    getCountries: state => state.countries,
    getFeaturedIn: state => state.featuredIn,
    getCustomers: state => state.customers,
    getFaqs: state => state.faqs,
    getWhatMakesUsDifferent: state => state.whatMakesUsDifferent,
  },
  mutations: {},
  actions: {},
  modules: {
    about: about,
    business: business,
    pricing : pricing,
  },
});
