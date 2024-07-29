<template>
    <div class="" style="padding-top: 66px;">
        <div class="col-12">
            <img src="/img/homeBannerDesk.jpg" class="position-relative min-vh-100 d-none d-md-block"
                style="width:100%; height:400px; object-fit:cover;">
            <img src="/img/homeBannerMob.jpg" class="position-relative d-md-none" style="width:100%;object-fit:cover;">
        </div>


        <div class="container mt-5">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(plan, index) in plans" :key="index">
                    <div class="card px-3 bg-light rounded-0">
                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                        <div class="card-body text-center">
                            <ul v-if="plan.features" class="list-group">
                                <li v-for="(feature, featureIndex) in plan.features.slice(0, 4)" :key="featureIndex"
                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <span class="px-2 text-start">
                                        {{ feature.name }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer bg-light p-0 border-top pt-2">
                            <div class="btn-group w-100 my-2">
                                <router-link :to="`/plan/${plan.id}`"
                                    class="btn btn-outline-success text-capitalize px-4">
                                    Know More
                                </router-link>
                                <button class="btn text-capitalize px-4 text-white btn-success"
                                    @click="submitQuery(price, plan)"> <i class="bi bi-whatsapp"></i>
                                    <span class="ms-2">Enquiry</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5"
                style="background-color: var(--bg-forth);">
                <div class="col-12 col-md-6 align-items-center text-center text-md-start">
                    <img src="/img/formwelcome.svg" class="mt-3" style="width: 350px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-3">
                    <h3 class="text-white text-capitalize">{{ formTitle }}</h3>
                    <ContactForm />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'PlanDetails',
    components: { ContactForm },
    data() {
        return {
            plans: [
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
        };
    },
};
</script>

<style scoped></style>
