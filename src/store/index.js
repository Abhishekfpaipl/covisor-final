import { createStore } from "vuex";
import about from "./about";
import business from "./business";
export default createStore({
  state: {
    pricing: [
      {
        "id": "1",
        "name": "Digital Marketing",
        "description": "Digital Marketing encompasses a range of online strategies and techniques to promote businesses, products, or services. It includes various specialized areas to help companies reach their target audience effectively in the digital space.",
        "plans": [
          {
            "id": "DM1",
            "name": "Search Engine Optimization",
            "description": "SEO is the process of optimizing a website to improve its visibility on search engines like Google. The goal is to increase organic (non-paid) traffic by achieving higher rankings on search engine results pages (SERPs).",
            "banner": "/img/services-banner/seo.jpg",
            "features": [
              {
                "name": "Keyword Research",
                "description": "Identifying and targeting the right keywords that potential customers are searching for."
              },
              {
                "name": "On-Page SEO",
                "description": "Optimizing individual web pages, including meta tags, headers, content, and internal links."
              },
              {
                "name": "Off-Page SEO",
                "description": "Building backlinks from other reputable sites to improve domain authority."
              },
              {
                "name": "Technical SEO",
                "description": "Improving site speed, mobile-friendliness, and ensuring a proper site structure."
              },
              {
                "name": "Content Creation",
                "description": "Developing high-quality, relevant content that attracts and engages users."
              },
              {
                "name": "Analytics and Reporting",
                "description": "Monitoring website traffic, rankings, and SEO performance metrics."
              }
            ]
          },
          {
            "id": "DM2",
            "name": "Pay-Per-Click Advertising",
            "description": "PPC is a model of online advertising where advertisers pay a fee each time their ad is clicked. It's a way of buying visits to your site, rather than attempting to 'earn' those visits organically.",
            "banner": "/img/services-banner/ppc.jpg",
            "features": [
              {
                "name": "Campaign Setup",
                "description": "Creating and structuring ad campaigns for optimal performance."
              },
              {
                "name": "Keyword Targeting",
                "description": "Selecting and bidding on relevant keywords to trigger ad displays."
              },
              {
                "name": "Ad Copywriting",
                "description": "Crafting compelling ad text to attract clicks and conversions."
              },
              {
                "name": "Performance Tracking",
                "description": "Monitoring and analyzing ad performance to optimize campaigns."
              }
            ]
          },
          {
            "id": "DM3",
            "name": "Content Marketing",
            "description": "Content marketing focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and drive profitable customer action.",
            "banner": "/img/services-banner/content-marketing.jpg",
            "features": [
              {
                "name": "Content Strategy",
                "description": "Developing a comprehensive plan for content creation and distribution."
              },
              {
                "name": "Blog Writing",
                "description": "Creating informative and engaging blog posts to attract and educate readers."
              },
              {
                "name": "Guest Posting",
                "description": "Writing articles for other websites to increase brand exposure and build backlinks."
              },
              {
                "name": "Content Distribution",
                "description": "Sharing content across various platforms to maximize reach and engagement."
              }
            ]
          },
          {
            "id": "DM7",
            "name": "Social Media Optimization",
            "banner": "/img/services-banner/social-media-opt.jpg",
            "description": "CRO is the systematic process of increasing the percentage of website visitors who take a desired action — be it filling out a form, becoming customers, or otherwise.",
            "features": [
              {
                "name": "A/B Testing",
                "description": "Comparing two versions of a webpage to see which performs better."
              },
              {
                "name": "User Behavior Analysis",
                "description": "Studying how users interact with your website."
              },
              {
                "name": "Landing Page Optimization",
                "description": "Improving landing pages to increase conversions."
              },
              {
                "name": "Conversion Tracking",
                "description": "Monitoring and analyzing user actions that lead to conversions."
              }
            ]
          },
          {
            "id": "DM4",
            "name": "Social Media Marketing",
            "banner": "/img/services-banner/social-media.jpg",
            "description": "Social media marketing uses social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic.",
            "features": [
              {
                "name": "Social Media Strategy",
                "description": "Developing a tailored approach for each social platform."
              },
              {
                "name": "Content Creation",
                "description": "Producing engaging posts, images, and videos for social media."
              },
              {
                "name": "Community Management",
                "description": "Interacting with followers and managing online communities."
              },
              {
                "name": "Analytics and Reporting",
                "description": "Tracking social media performance and ROI."
              }
            ]
          },

          {
            "id": "DM5",
            "name": "Email Marketing",
            "banner": "/img/services-banner/email-marketing.jpg",
            "description": "Email marketing involves sending commercial messages to a group of people via email, typically to develop relationships, generate leads, or drive sales.",
            "features": [
              {
                "name": "Email Campaign Setup",
                "description": "Creating and configuring email marketing campaigns."
              },
              {
                "name": "Template Design",
                "description": "Designing visually appealing and responsive email templates."
              },
              {
                "name": "List Management",
                "description": "Organizing and segmenting email subscriber lists."
              },
              {
                "name": "Analytics and Reporting",
                "description": "Tracking open rates, click-through rates, and other key metrics."
              }
            ]
          },
          {
            "id": "DM6",
            "name": "Influencer Marketing",
            "banner": "/img/services-banner/influencer-marketing.jpg",
            "description": "Influencer marketing leverages individuals with a dedicated social following to drive a brand's message to the larger market.",
            "features": [
              {
                "name": "Influencer Identification",
                "description": "Finding and vetting suitable influencers for your brand."
              },
              {
                "name": "Campaign Management",
                "description": "Overseeing influencer collaborations and campaigns."
              },
              {
                "name": "Content Collaboration",
                "description": "Working with influencers to create authentic, branded content."
              },
              {
                "name": "Performance Analysis",
                "description": "Measuring the impact and ROI of influencer campaigns."
              }
            ]
          },

          {
            "id": "DM8",
            "name": "Online Reputation Management",
            "banner": "/img/services-banner/online-reputation.jpg",
            "description": "Online reputation management involves monitoring, addressing, and influencing your business's digital reputation and credibility.",
            "features": [
              {
                "name": "Brand Monitoring",
                "description": "Tracking mentions of your brand across the internet."
              },
              {
                "name": "Review Management",
                "description": "Responding to and managing online reviews."
              },
              {
                "name": "Crisis Management",
                "description": "Handling and mitigating online PR crises."
              },
              {
                "name": "Reputation Repair",
                "description": "Implementing strategies to improve negative online reputations."
              }
            ]
          },
          {
            "id": "DM9",
            "name": "Mobile Marketing",
            "banner": "/img/services-banner/mobile-marketing.jpg",
            "description": "Mobile marketing is a multi-channel, digital marketing strategy aimed at reaching a target audience on their smartphones, tablets, and other mobile devices.",
            "features": [
              {
                "name": "App Marketing",
                "description": "Promoting mobile applications to increase downloads and usage."
              },
              {
                "name": "SMS Campaigns",
                "description": "Sending promotional messages via text to opted-in customers."
              },
              {
                "name": "Mobile Advertising",
                "description": "Creating and managing ads specifically for mobile devices."
              },
              {
                "name": "Mobile Analytics",
                "description": "Tracking and analyzing mobile user behavior and campaign performance."
              }
            ]
          },
          {
            "id": "DM10",
            "name": "Bulk Whatsapp",
            "banner": "/img/services-banner/bulk-whatsapp.jpg",
            "description": "Bulk WhatsApp marketing involves sending messages to a large number of WhatsApp users for promotional or informational purposes.",
            "features": [
              {
                "name": "CRM Software Integration",
                "description": "Connecting WhatsApp marketing with customer relationship management systems."
              },
              {
                "name": "Lead Management",
                "description": "Organizing and nurturing leads through WhatsApp."
              },
              {
                "name": "Customer Segmentation",
                "description": "Grouping customers for targeted messaging."
              },
              {
                "name": "Sales Automation",
                "description": "Automating sales processes through WhatsApp."
              }
            ]
          },
          {
            "id": "DM11",
            "name": "Bulk Messages",
            "banner": "/img/services-banner/bulk-messages.jpg",
            "description": "Bulk messaging involves sending a large number of SMS or other types of messages to a group of recipients simultaneously.",
            "features": [
              {
                "name": "Automated Campaigns",
                "description": "Setting up message campaigns that run automatically."
              },
              {
                "name": "Lead Nurturing",
                "description": "Using bulk messages to guide leads through the sales funnel."
              },
              {
                "name": "Email Automation",
                "description": "Automating email sequences for various customer interactions."
              },
              {
                "name": "Performance Analytics",
                "description": "Analyzing the effectiveness of bulk messaging campaigns."
              }
            ]
          },
          {
            "id": "DM12",
            "name": "Custom Digital Marketing",
            "banner": "/img/services-banner/digital-marketing.jpg",
            "description": "Custom digital marketing provides tailored strategies and solutions to meet specific business needs and goals.",
            "features": [
              {
                "name": "Tailored Strategy",
                "description": "Developing a unique digital marketing plan for your business."
              },
              {
                "name": "Custom Campaigns",
                "description": "Creating specialized campaigns across various digital channels."
              },
              {
                "name": "Advanced Analytics",
                "description": "Providing in-depth analysis and insights on marketing performance."
              },
              {
                "name": "Dedicated Support",
                "description": "Offering personalized assistance and consultation."
              }
            ]
          }
        ]
      },
      {
        "id": "2",
        "name": "Website Development",
        "description": "Website development involves creating and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.",
        "plans": [
          {
            "id": "WB1",
            "name": "Business Website",
            "banner": "/img/services-banner/business-web.jpg",
            "description": "A business website serves as an online presence for a company, providing information about products or services, contact details, and other relevant business information.",
            "features": [
              {
                "name": "Multiple Page Website",
                "description": "Creating various pages for different aspects of the business."
              },
              {
                "name": "Custom Email Accounts",
                "description": "Setting up professional email addresses with the business domain."
              },
              {
                "name": "Custom Domain",
                "description": "Registering and setting up a unique domain name."
              },
              {
                "name": "Business Analytics Tools",
                "description": "Implementing tools to track website performance and user behavior."
              }
            ]
          },
          {
            "id": "WB2",
            "name": "E-Commerce Website",
            "banner": "/img/services-banner/ecommerce.jpg",
            "description": "An e-commerce website allows businesses to sell products or services online, facilitating electronic transactions.",
            "features": [
              {
                "name": "Product Catalog",
                "description": "Creating and managing an online inventory of products."
              },
              {
                "name": "Payment Gateway Integration",
                "description": "Setting up secure online payment options."
              },
              {
                "name": "Inventory Management",
                "description": "Tracking and managing product stock levels."
              },
              {
                "name": "Customer Management System",
                "description": "Managing customer accounts and purchase history."
              }
            ]
          },
          {
            "id": "WB3",
            "name": "Wholesale E-Commerce Website",
            "banner": "/img/services-banner/wholesale.jpg",
            "description": "A wholesale e-commerce website is designed for business-to-business (B2B) transactions, allowing companies to sell products in bulk to other businesses.",
            "features": [
              {
                "name": "Bulk Order Management",
                "description": "Handling large volume orders efficiently."
              },
              {
                "name": "B2B Pricing",
                "description": "Implementing tiered pricing structures for wholesale customers."
              },
              {
                "name": "Client Login Portal",
                "description": "Providing secure access for business clients."
              },
              {
                "name": "Advanced Inventory System",
                "description": "Managing complex inventory for bulk sales."
              }
            ]
          },
          {
            "id": "WB4",
            "name": "Blog Website",
            "banner": "/img/services-banner/blog.jpg",
            "description": "A blog website is primarily focused on regularly updated content, often in an informal or conversational style.",
            "features": [
              {
                "name": "Multiple Authors",
                "description": "Allowing various contributors to create and publish content."
              },
              {
                "name": "SEO Tools",
                "description": "Implementing features to optimize content for search engines."
              },
              {
                "name": "Content Scheduling",
                "description": "Planning and automating content publication."
              },
              {
                "name": "Social Media Integration",
                "description": "Easily sharing blog content on social platforms."
              }
            ]
          },
          {
            "id": "WB5",
            "name": "Portfolio Website",
            "banner": "/img/services-banner/portfolio.jpg",
            "description": "A portfolio website showcases a person's or company's work, skills, and achievements.",
            "features": [
              {
                "name": "Project Galleries",
                "description": "Displaying work samples in an organized, visually appealing manner."
              },
              {
                "name": "Client Testimonials",
                "description": "Featuring feedback from satisfied clients."
              },
              {
                "name": "Contact Form",
                "description": "Providing an easy way for potential clients to get in touch."
              },
              {
                "name": "Responsive Design",
                "description": "Ensuring the website looks great on all devices."
              }
            ]
          },
          {
            "id": "WB6",
            "name": "Membership Website",
            "banner": "/img/services-banner/membership.jpg",
            "description": "A membership website offers exclusive content or services to registered members, often on a subscription basis.",
            "features": [
              {
                "name": "Member Registration",
                "description": "Allowing users to sign up for accounts."
              },
              {
                "name": "Exclusive Content",
                "description": "Providing content only accessible to registered members."
              },
              {
                "name": "Subscription Management",
                "description": "Handling different levels of membership and payments."
              },
              {
                "name": "Member Forums",
                "description": "Creating community spaces for members to interact."
              }
            ]
          },

          {
            "id": "WB7",
            "name": "Booking Website",
            "banner": "/img/services-banner/booking-web.jpg",
            "description": "A personal website serves as an online representation of an individual, often used for professional networking or personal branding.",
            "features": [
              {
                "name": "Personal Blog",
                "description": "Sharing thoughts, experiences, or expertise."
              },
              {
                "name": "Resume/CV Section",
                "description": "Displaying professional qualifications and experience."
              },
              {
                "name": "Photo Gallery",
                "description": "Showcasing personal or professional photos."
              },
              {
                "name": "Social Media Links",
                "description": "Connecting visitors to other online profiles."
              }
            ]
          },

          {
            "id": "WB8",
            "name": "News Website",
            "banner": "/img/services-banner/news-web.jpg",
            "description": "A news website provides timely information on current events, typically updated frequently throughout the day.",
            "features": [
              {
                "name": "Breaking News Section",
                "description": "Prominently displayed area for the latest and most important news stories."
              },
              {
                "name": "Article Categories",
                "description": "Organized sections for different types of news (e.g., politics, sports, technology)."
              },
              {
                "name": "Comment System",
                "description": "Allows readers to discuss articles and engage with the community."
              },
              {
                "name": "Newsletter Signup",
                "description": "Option for users to subscribe to regular news updates via email."
              },
              {
                "name": "Live Updates",
                "description": "Real-time coverage of ongoing events with automatic page refresh."
              },
              {
                "name": "Multimedia Integration",
                "description": "Incorporation of images, videos, and audio content within articles."
              },
              {
                "name": "Social Media Sharing",
                "description": "Easy-to-use buttons for sharing articles on various social platforms."
              },
              {
                "name": "Search Functionality",
                "description": "Robust search engine to find specific articles or topics."
              },
              {
                "name": "Mobile Responsiveness",
                "description": "Optimized design for seamless viewing on smartphones and tablets."
              },
              {
                "name": "Personalized News Feed",
                "description": "Customizable news selection based on user preferences and reading history."
              },
              {
                "name": "Author Profiles",
                "description": "Dedicated pages for journalists with their bio and article archives."
              },
              {
                "name": "Related Articles",
                "description": "Suggestions for similar or related news stories to keep readers engaged."
              },
              {
                "name": "Weather Widget",
                "description": "Local and global weather information integrated into the site."
              },
              {
                "name": "Advertising Integration",
                "description": "Spaces for display ads and sponsored content with tracking capabilities."
              }
            ]
          },
          {
            "id": "WB9",
            "name": "Custom Website",
            "banner": "/img/services-banner/custom-web.jpg",
            "description": "A bespoke website solution tailored to meet specific business needs and brand identity.",
            "features": [
              {
                "name": "Fully Tailored Design",
                "description": "Unique visual design that aligns perfectly with the brand's aesthetics and goals."
              },
              {
                "name": "Custom Functionality",
                "description": "Development of specific features and tools to meet unique business requirements."
              },
              {
                "name": "Advanced Security Features",
                "description": "Robust security measures including encryption, firewalls, and regular security audits."
              },
              {
                "name": "Dedicated Support",
                "description": "Personalized technical assistance and maintenance from a dedicated team."
              },
              {
                "name": "Scalable Architecture",
                "description": "Flexible system design that can grow and adapt with the business."
              },
              {
                "name": "Custom CMS",
                "description": "Tailored content management system for easy updates and content control."
              },
              {
                "name": "Integration with Existing Systems",
                "description": "Seamless connection with current business tools and software."
              },
              {
                "name": "Advanced Analytics",
                "description": "Custom-built analytics dashboard for detailed insights into website performance."
              },
              {
                "name": "Multi-language Support",
                "description": "Built-in functionality for multiple language versions of the website."
              },
              {
                "name": "Custom User Roles and Permissions",
                "description": "Detailed access control tailored to the organization's structure."
              },
              {
                "name": "Unique Interactive Elements",
                "description": "Custom-designed interactive features to enhance user engagement."
              },
              {
                "name": "Optimized Performance",
                "description": "Fine-tuned for speed and efficiency, with custom caching solutions if needed."
              },
              {
                "name": "Accessibility Compliance",
                "description": "Ensuring the website meets specific accessibility standards and regulations."
              },
              {
                "name": "Custom API Development",
                "description": "Creation of unique APIs for integration with other systems or services."
              }
            ]
          }
        ]
      },
      {
        "id": "3",
        "name": "Software Development",
        "description": "Website development involves creating and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management.",
        "plans": [
          {
            "id": 'SD1',
            "name": "Stock Management System",
            "banner": "/img/services-banner/stock-management.jpg",
            "description": "A comprehensive solution for managing an organization's financial operations and reporting.",
            "features": [
              {
                "name": "Keyword Research",
                "description": "Identifying and targeting the right keywords that potential customers are searching for."
              },
              {
                "name": "On-Page SEO",
                "description": "Optimizing individual web pages, including meta tags, headers, content, and internal links."
              },
              {
                "name": "Off-Page SEO",
                "description": "Building backlinks from other reputable sites to improve domain authority."
              },
              {
                "name": "Technical SEO",
                "description": "Improving site speed, mobile-friendliness, and ensuring a proper site structure."
              },
              {
                "name": "Content Creation",
                "description": "Developing high-quality, relevant content that attracts and engages users."
              },
              {
                "name": "Analytics and Reporting",
                "description": "Monitoring website traffic, rankings, and SEO performance metrics."
              }
            ]
          },
          {
            "id": "SD2",
            "name": "Financial Management System",
            "banner": "/img/services-banner/finance-management.jpg",
            "description": "A comprehensive solution for managing an organization's financial operations and reporting.",
            "features": [
              {
                "name": "Budgeting and Forecasting",
                "description": "Tools for creating and managing budgets, and predicting future financial performance."
              },
              {
                "name": "Expense Tracking",
                "description": "Detailed monitoring and categorization of all business expenses."
              },
              {
                "name": "Financial Reporting",
                "description": "Generation of various financial reports including balance sheets, income statements, and cash flow statements."
              },
              {
                "name": "Invoice Management",
                "description": "Creation, sending, and tracking of invoices to ensure timely payments."
              },
              {
                "name": "Cash Flow Management",
                "description": "Tools for monitoring and optimizing cash inflows and outflows."
              },
              {
                "name": "Multi-currency Support",
                "description": "Ability to handle transactions and reporting in multiple currencies."
              },
              {
                "name": "Tax Management",
                "description": "Calculation and tracking of various taxes applicable to the business."
              },
              {
                "name": "Asset Depreciation",
                "description": "Automated calculation and tracking of asset depreciation over time."
              },
              {
                "name": "Financial Dashboard",
                "description": "Visual representation of key financial metrics and KPIs."
              },
              {
                "name": "Audit Trail",
                "description": "Detailed logging of all financial transactions and changes for audit purposes."
              },
              {
                "name": "Bank Reconciliation",
                "description": "Automated matching of bank statements with internal financial records."
              },
              {
                "name": "Accounts Payable/Receivable",
                "description": "Management of money owed by the company and money owed to the company."
              },
              {
                "name": "Financial Modeling",
                "description": "Tools for creating complex financial models and scenarios."
              },
              {
                "name": "Compliance Reporting",
                "description": "Generation of reports required for regulatory compliance."
              }
            ]
          },

          {
            "id": "SD3",
            "name": "Cash FLow Management System",
            "banner": "/img/services-banner/cash-flow.jpg",
            "description": "A system to handle all aspects of payment processing and reconciliation.",
            "features": [
              {
                "name": "Payment Gateway Integration",
                "description": "Seamless integration with various payment gateways to accept multiple payment methods."
              },
              {
                "name": "Transaction Tracking",
                "description": "Real-time monitoring and recording of all financial transactions."
              },
              {
                "name": "Automated Invoicing",
                "description": "Automatic generation and sending of invoices based on predefined triggers."
              },
              {
                "name": "Payment Reconciliation",
                "description": "Automated matching of payments received against outstanding invoices."
              },
              {
                "name": "Recurring Billing",
                "description": "Setup and management of recurring payment schedules for subscriptions or installments."
              },
              {
                "name": "Fraud Detection",
                "description": "Advanced algorithms to identify and prevent fraudulent transactions."
              },
              {
                "name": "Multi-currency Support",
                "description": "Ability to process payments in various currencies with real-time exchange rate calculations."
              },
              {
                "name": "Payment Analytics",
                "description": "Detailed reporting and analysis of payment trends, success rates, and customer behavior."
              },
              {
                "name": "Refund Processing",
                "description": "Streamlined handling of refunds and chargebacks."
              },
              {
                "name": "Tokenization",
                "description": "Secure storage of sensitive payment information for repeat transactions."
              },
              {
                "name": "Mobile Payments",
                "description": "Support for various mobile payment methods and digital wallets."
              },
              {
                "name": "Split Payments",
                "description": "Ability to divide a single payment among multiple recipients or accounts."
              },
              {
                "name": "Payment Reminders",
                "description": "Automated reminders for upcoming or overdue payments."
              },
              {
                "name": "Compliance Management",
                "description": "Ensuring adherence to payment industry standards and regulations (PCI-DSS, etc.)."
              }
            ]
          },

          {
            "id": "SD4",
            "name": "Asset Management System",
            "banner": "/img/services-banner/asset-management.jpg",
            "description": "A system for tracking and managing an organization's physical assets throughout their lifecycle.",
            "features": [
              {
                "name": "Asset Tracking",
                "description": "Real-time monitoring of asset location, status, and utilization."
              },
              {
                "name": "Maintenance Scheduling",
                "description": "Planning and tracking of regular maintenance activities for assets."
              },
              {
                "name": "Asset Lifecycle Management",
                "description": "Tracking assets from acquisition through disposal, including all associated costs."
              },
              {
                "name": "Depreciation Tracking",
                "description": "Automated calculation and recording of asset depreciation over time."
              },
              {
                "name": "Barcode/RFID Integration",
                "description": "Use of barcode or RFID technology for quick and accurate asset identification."
              },
              {
                "name": "Asset Reservation",
                "description": "System for employees to reserve and check out shared assets."
              },
              {
                "name": "Compliance Management",
                "description": "Ensuring assets meet regulatory requirements and industry standards."
              },
              {
                "name": "Asset Performance Analytics",
                "description": "Reporting and analysis of asset performance, utilization, and ROI."
              },
              {
                "name": "Warranty Tracking",
                "description": "Management of warranty information and expiration dates for assets."
              },
              {
                "name": "Asset Auditing",
                "description": "Tools for conducting regular asset audits and reconciliations."
              },
              {
                "name": "Mobile App Access",
                "description": "Ability to manage and track assets on-the-go via mobile devices."
              },
              {
                "name": "Predictive Maintenance",
                "description": "AI-driven predictions of when assets are likely to need maintenance."
              },
              {
                "name": "Asset Documentation",
                "description": "Central repository for storing and managing asset-related documents."
              },
              {
                "name": "Integration with Accounting",
                "description": "Seamless connection with financial systems for accurate asset valuation and reporting."
              }
            ]
          },
          {
            "id": "SD5",
            "name": "Human Resources Management System",
            "banner": "/img/services-banner/human-resource.jpg",
            "description": "A comprehensive system for managing all aspects of an organization's human resources.",
            "features": [
              {
                "name": "Employee Records",
                "description": "Centralized database for storing and managing all employee information."
              },
              {
                "name": "Payroll Management",
                "description": "Automated calculation and processing of employee salaries, taxes, and deductions."
              },
              {
                "name": "Leave Management",
                "description": "Tracking and approval of employee time off and leave requests."
              },
              {
                "name": "Performance Appraisal",
                "description": "Tools for setting goals, conducting reviews, and tracking employee performance."
              },
              {
                "name": "Recruitment and Onboarding",
                "description": "Management of the entire hiring process from job posting to employee onboarding."
              },
              {
                "name": "Training and Development",
                "description": "Tracking of employee skills and management of training programs."
              },
              {
                "name": "Time and Attendance",
                "description": "Monitoring and management of employee work hours and attendance."
              },
              {
                "name": "Benefits Administration",
                "description": "Management of employee benefits programs and enrollment."
              },
              {
                "name": "Compliance Management",
                "description": "Ensuring adherence to labor laws and regulations."
              },
              {
                "name": "Employee Self-Service Portal",
                "description": "Online platform for employees to access and update their information."
              },
              {
                "name": "Succession Planning",
                "description": "Tools for identifying and developing future leaders within the organization."
              },
              {
                "name": "HR Analytics",
                "description": "Advanced reporting and analytics on various HR metrics and KPIs."
              },
              {
                "name": "Employee Engagement Surveys",
                "description": "Creation, distribution, and analysis of employee satisfaction surveys."
              },
              {
                "name": "Organizational Chart",
                "description": "Visual representation of the company structure and reporting relationships."
              }
            ]
          },
          {
            "id": "SD6",
            "name": "Document Management System",
            "banner": "/img/services-banner/document-management.jpg",
            "description": "A system for storing, organizing, and controlling access to digital documents.",
            "features": [
              {
                "name": "Document Storage",
                "description": "Secure, centralized repository for all digital documents and files."
              },
              {
                "name": "Version Control",
                "description": "Tracking of document revisions and ability to revert to previous versions."
              },
              {
                "name": "Access Control",
                "description": "Granular permissions settings to control who can view, edit, or delete documents."
              },
              {
                "name": "Document Sharing",
                "description": "Secure methods for sharing documents internally and externally."
              },
              {
                "name": "Full-Text Search",
                "description": "Advanced search functionality to quickly find documents based on content."
              },
              {
                "name": "Document Classification",
                "description": "Automated categorization of documents based on content or metadata."
              },
              {
                "name": "Workflow Automation",
                "description": "Creation of automated processes for document review, approval, and routing."
              },
              {
                "name": "Audit Trail",
                "description": "Detailed logging of all document-related activities for compliance and security."
              },
              {
                "name": "OCR Integration",
                "description": "Optical Character Recognition for converting scanned documents into searchable text."
              },
              {
                "name": "Document Retention",
                "description": "Automated enforcement of document retention and deletion policies."
              },
              {
                "name": "Collaboration Tools",
                "description": "Features for real-time document collaboration and commenting."
              },
              {
                "name": "Mobile Access",
                "description": "Ability to access and manage documents via mobile devices."
              },
              {
                "name": "Document Templates",
                "description": "Library of pre-designed templates for common document types."
              },
              {
                "name": "Integration with Office Suite",
                "description": "Seamless integration with popular office productivity software."
              }
            ]
          },

          {
            "id": "SD7",
            "name": "Team Work Management System",
            "banner": "/img/services-banner/team-work.jpg",
            "description": "A system to plan, execute, and monitor projects efficiently.",
            "features": [
              {
                "name": "Task Management",
                "description": "Creation, assignment, and tracking of project tasks and subtasks."
              },
              {
                "name": "Project Planning",
                "description": "Tools for creating project timelines, milestones, and resource allocation."
              },
              {
                "name": "Time Tracking",
                "description": "Logging and reporting of time spent on various project tasks."
              },
              {
                "name": "Collaboration Tools",
                "description": "Features to facilitate team communication and file sharing."
              },
              {
                "name": "Gantt Charts",
                "description": "Visual representation of project schedules and dependencies."
              },
              {
                "name": "Resource Management",
                "description": "Allocation and optimization of human and material resources across projects."
              },
              {
                "name": "Budget Tracking",
                "description": "Monitoring and management of project expenses and overall budget."
              },
              {
                "name": "Risk Management",
                "description": "Identification, assessment, and mitigation of project risks."
              },
              {
                "name": "Reporting and Analytics",
                "description": "Generation of detailed project reports and performance analytics."
              },
              {
                "name": "Agile/Scrum Support",
                "description": "Tools for managing projects using Agile methodologies."
              },
              {
                "name": "Project Portfolio Management",
                "description": "Overview and management of multiple projects across the organization."
              },
              {
                "name": "Client Portal",
                "description": "Secure platform for clients to view project progress and share feedback."
              },
              {
                "name": "Integration with Other Tools",
                "description": "Seamless connection with other business software (CRM, accounting, etc.)."
              },
              {
                "name": "Mobile App",
                "description": "Access to project information and management features on mobile devices."
              }
            ]
          },

          {
            "id": "SD8",
            "name": "Customer Relationalship Management System",
            "banner": "/img/services-banner/crm.jpg",
            "description": "A comprehensive system for capturing, tracking, and nurturing potential customer leads to improve conversion rates.",
            "features": [
              {
                "name": "Lead Tracking",
                "description": "Monitoring of lead interactions and progress through the sales funnel."
              },
              {
                "name": "Lead Scoring",
                "description": "Automated ranking of leads based on their likelihood to convert."
              },
              {
                "name": "Automated Follow-Ups",
                "description": "Scheduled reminders and automated communication with leads."
              },
              {
                "name": "Reporting and Analytics",
                "description": "Insights into lead sources, conversion rates, and overall performance."
              },
              {
                "name": "Lead Capture Forms",
                "description": "Customizable forms to capture lead information from various sources."
              },
              {
                "name": "Email Integration",
                "description": "Seamless connection with email platforms for efficient communication."
              },
              {
                "name": "CRM Integration",
                "description": "Integration with Customer Relationship Management systems for a unified view."
              },
              {
                "name": "Lead Segmentation",
                "description": "Categorization of leads based on various criteria for targeted marketing."
              },
              {
                "name": "Lead Nurturing Workflows",
                "description": "Automated sequences of actions to nurture leads through the sales process."
              },
              {
                "name": "Social Media Integration",
                "description": "Capture and track leads from various social media platforms."
              },
              {
                "name": "Lead Assignment",
                "description": "Automatic or manual assignment of leads to appropriate sales representatives."
              },
              {
                "name": "Lead Activity Timeline",
                "description": "Chronological view of all interactions and touchpoints with each lead."
              },
              {
                "name": "Lead Qualification",
                "description": "Tools to assess and qualify leads based on predefined criteria."
              },
              {
                "name": "Multi-channel Lead Tracking",
                "description": "Ability to track leads across various channels (web, phone, email, etc.)."
              }
            ]
          },

          {
            "id": "SD9",
            "name": "Customized ERP",
            "banner": "/img/services-banner/custom-erp.jpg",
            "description": "Bespoke software solutions tailored to specific business needs and requirements.",
            "features": [
              {
                "name": "Tailored Solutions",
                "description": "Software designed and developed to address unique business challenges."
              },
              {
                "name": "Custom Integrations",
                "description": "Seamless connection with existing systems and third-party applications."
              },
              {
                "name": "Scalable Architecture",
                "description": "Design that allows for future growth and expansion of the software."
              },
              {
                "name": "Dedicated Support",
                "description": "Ongoing maintenance and support tailored to the custom software."
              },
              {
                "name": "User-Centric Design",
                "description": "Interface and functionality designed around specific user needs and preferences."
              },
              {
                "name": "Proprietary Features",
                "description": "Development of unique features that provide competitive advantage."
              },
              {
                "name": "Legacy System Modernization",
                "description": "Updating and integrating older systems with modern technologies."
              },
              {
                "name": "Cloud Migration",
                "description": "Transition of on-premise systems to cloud-based infrastructure."
              },
              {
                "name": "Data Migration",
                "description": "Transfer of existing data to new custom software systems."
              },
              {
                "name": "Security Compliance",
                "description": "Ensuring software meets industry-specific security standards and regulations."
              },
              {
                "name": "Performance Optimization",
                "description": "Fine-tuning of software for optimal speed and efficiency."
              },
              {
                "name": "Custom Reporting",
                "description": "Development of tailored reports and dashboards for business intelligence."
              },
              {
                "name": "API Development",
                "description": "Creation of custom APIs for integration with other systems or third-party services."
              },
              {
                "name": "Automated Testing",
                "description": "Implementation of automated testing processes for quality assurance."
              }
            ]
          }

        ]
      },
    ],
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
    featuredIn: [
      { image: '/img/featured/1.jpg' },
      { image: '/img/featured/2.jpg' },
      { image: '/img/featured/3.jpg' },
      { image: '/img/featured/4.jpg' },
      { image: '/img/featured/5.jpg' },
      { image: '/img/featured/6.jpg' },
      { image: '/img/featured/7.jpg' },
      { image: '/img/featured/8.jpg' },
      { image: '/img/featured/9.jpg' },
      { image: '/img/featured/10.jpg' },
      { image: '/img/featured/11.jpg' },
      { image: '/img/featured/12.jpg' },
      { image: '/img/featured/13.jpg' },
      { image: '/img/featured/14.jpg' },
      { image: '/img/featured/15.jpg' },
      { image: '/img/featured/16.jpg' },
      { image: '/img/featured/17.jpg' },
      { image: '/img/featured/18.jpg' },
      { image: '/img/featured/19.jpg' },
      { image: '/img/featured/20.jpg' },
      { image: '/img/featured/21.jpg' },
      { image: '/img/featured/22.jpg' },
      { image: '/img/featured/23.jpg' },
      { image: '/img/featured/24.jpg' },
      { image: '/img/featured/25.jpg' },
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

  },
  getters: {
    getPricing: state => state.pricing,
    getAutoScrolling: state => state.autoScrolling,
    getFeaturedIn: state => state.featuredIn,
    getCustomers: state => state.customers,
    getFaqs: state => state.faqs,
  },
  mutations: {},
  actions: {},
  modules: {
    about: about,
    business:business
  },
});
