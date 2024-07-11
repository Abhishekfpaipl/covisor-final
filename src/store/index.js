import { createStore } from "vuex";

export default createStore({
  state: {
    pricing: [
      {
        id: 2,
        name: "Digital Marketing",
        description: "This is a basic plan",
        plans: [
          {
            id: 1,
            name: "Search Engine Optimization",
            features: [
              "Keyword Research",
              "On-Page Optimization",
              "Link Building",
              "SEO Reporting etc."
            ],
          },
          {
            id: 2,
            name: "Pay-Per-Click Advertising",
            features: [
              "Campaign Setup",
              "Keyword Targeting",
              "Ad Copywriting",
              "Performance Tracking etc."
            ]
          },
          {
            id: 3,
            name: "Content Marketing",
            features: [
              "Content Strategy",
              "Blog Writing",
              "Guest Posting",
              "Content Distribution etc."
            ]
          },
          {
            id: 4,
            name: "Social Media Marketing",
            features: [
              "Social Media Strategy",
              "Content Creation",
              "Community Management",
              "Analytics and Reporting etc."
            ]
          },
          {
            id: 5,
            name: "Email Marketing",
            features: [
              "Email Campaign Setup",
              "Template Design",
              "List Management",
              "Analytics and Reporting etc."
            ]
          },
          {
            id: 6,
            name: "Influencer Marketing",
            features: [
              "Influencer Identification",
              "Campaign Management",
              "Content Collaboration",
              "Performance Analysis etc."
            ]
          },
          {
            id: 7,
            name: "Conversion Rate Optimization",
            features: [
              "A/B Testing",
              "User Behavior Analysis",
              "Landing Page Optimization",
              "Conversion Tracking etc."
            ]
          },
          {
            id: 8,
            name: "Online Reputation Management",
            features: [
              "Brand Monitoring",
              "Review Management",
              "Crisis Management",
              "Reputation Repair etc."
            ]
          },
          {
            id: 9,
            name: "Mobile Marketing",
            features: [
              "App Marketing",
              "SMS Campaigns",
              "Mobile Advertising",
              "Mobile Analytics etc."
            ]
          },
          {
            id: 10,
            name: "Customer Relationship Management",
            features: [
              "CRM Software Integration",
              "Lead Management",
              "Customer Segmentation",
              "Sales Automation etc."
            ]
          },
          {
            id: 11,
            name: "Marketing Automation",
            features: [
              "Automated Campaigns",
              "Lead Nurturing",
              "Email Automation",
              "Performance Analytics etc."
            ]
          },
          {
            id: 12,
            name: "Custom Digital Marketing",
            features: [
              "Tailored Strategy",
              "Custom Campaigns",
              "Advanced Analytics",
              "Dedicated Support etc."
            ]
          }
        ]

      },
      {
        id: 3,
        name: "Website Development",
        description: "This is a basic plan",
        plans: [
          {
            id: 1,
            name: "Business Website",
            features: [
              "Multiple Page Website",
              "Custom Email Accounts",
              "Custom Domain",
              "Business Analytics Tools etc.",
            ]
          },
          {
            id: 2,
            name: "E-Commerce Website",
            features: [
              "Product Catalog",
              "Payment Gateway Integration",
              "Inventory Management",
              "Customer Management System etc.",
            ]
          },
          {
            id: 3,
            name: "Wholesale E-Commerce Website",
            features: [
              "Bulk Order Management",
              "B2B Pricing",
              "Client Login Portal",
              "Advanced Inventory System etc.",
            ]
          },
          {
            id: 4,
            name: "Blog Website",
            features: [
              "Multiple Authors",
              "SEO Tools",
              "Content Scheduling",
              "Social Media Integration etc.",
            ]
          },
          {
            id: 5,
            name: "Portfolio Website",
            features: [
              "Project Galleries",
              "Client Testimonials",
              "Contact Form",
              "Responsive Design etc.",
            ]
          },
          {
            id: 6,
            name: "Membership Website",
            features: [
              "Member Registration",
              "Exclusive Content",
              "Subscription Management",
              "Member Forums etc.",
            ]
          },
          {
            id: 7,
            name: "Personal Website",
            features: [
              "Personal Blog",
              "Resume/CV Section",
              "Photo Gallery",
              "Social Media Links etc.",
            ]
          },
          {
            id: 8,
            name: "News Website",
            features: [
              "Breaking News Section",
              "Article Categories",
              "Comment System",
              "Newsletter Signup etc.",
            ]
          },
          {
            id: 9,
            name: "Custom Website",
            features: [
              "Fully Tailored Design",
              "Custom Functionality",
              "Advanced Security Features",
              "Dedicated Support etc.",
            ]
          }
        ]
      },
      {
        id: 1,
        name: "Software Development",
        description: "This is a basic plan",
        plans: [
          {
            id: 1,
            name: "Stock Management System",
            features: [
              "Inventory Tracking",
              "Order Management",
              "Stock Alerts",
              "Supplier Management etc."
            ]
          },
          {
            id: 2,
            name: "Financial Management System",
            features: [
              "Budgeting and Forecasting",
              "Expense Tracking",
              "Financial Reporting",
              "Invoice Management etc."
            ]
          },
          {
            id: 3,
            name: "Payment Management System",
            features: [
              "Payment Gateway Integration",
              "Transaction Tracking",
              "Automated Invoicing",
              "Payment Reconciliation etc."
            ]
          },
          {
            id: 4,
            name: "Asset Management System",
            features: [
              "Asset Tracking",
              "Maintenance Scheduling",
              "Asset Lifecycle Management",
              "Depreciation Tracking etc."
            ]
          },
          {
            id: 5,
            name: "Human Resources Management System",
            features: [
              "Employee Records",
              "Payroll Management",
              "Leave Management",
              "Performance Appraisal etc."
            ]
          },
          {
            id: 6,
            name: "Document Management System",
            features: [
              "Document Storage",
              "Version Control",
              "Access Control",
              "Document Sharing etc."
            ]
          },
          {
            id: 7,
            name: "Project Management System",
            features: [
              "Task Management",
              "Project Planning",
              "Time Tracking",
              "Collaboration Tools etc."
            ]
          },
          {
            id: 8,
            name: "Lead Management System",
            features: [
              "Lead Tracking",
              "Lead Scoring",
              "Automated Follow-Ups",
              "Reporting and Analytics etc."
            ]
          },
          {
            id: 9,
            name: "Custom Software",
            features: [
              "Tailored Solutions",
              "Custom Integrations",
              "Scalable Architecture",
              "Dedicated Support etc."
            ]
          }
        ]

      },


    ],
  },
  getters: {
    getPricing: state => state.pricing
  },
  mutations: {},
  actions: {},
  modules: {},
});
