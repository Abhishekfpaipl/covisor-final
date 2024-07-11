<template>
    <div class="my-3 py-3">
        <div class="container">
            <h1 class="text-center text-capitalize">Services</h1>
            <small>No hidden charges only pay what you see</small>

            <div class="my-3">
                <ul class="nav nav-pills justify-content-center sticky-container" id="pills-tab" role="tablist">
                    <div class="d-flex border p-2 px-3 rounded shadow " style="">
                        <li class="nav-item" role="presentation" v-for="(price, index) in pricing" :key="index">
                            <button class="nav-link text-muted" :class="{ 'active': index === 0 }" :id="'tab-' + index"
                                data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button" role="tab"
                                :aria-controls="'content-' + index" :aria-selected="index === 0">{{ price.name
                                }}</button>
                        </li>
                    </div>
                </ul>
                <div class="tab-content mt-2 pt-4" id="pills-tabContent">
                    <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(price, index) in pricing"
                        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index"
                        tabindex="0">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                                <div class="col" v-for="(plan, index) in price.plans" :key="index">
                                    <div class="card px-3 bg-light rounded-0">

                                        <!-- <div v-if="index === 1" class="position-absolute top-0 start-0 m-2 ms-0"
                                            style="font-size: 12px;">
                                            <span class='text-dark fw-bold bg-warning p-1 px-2 rounded-end-3'>Recommended</span>
                                        </div> -->

                                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                                        <div class="card-body text-center">
                                            <ul v-if="plan.features" class="list-group">
                                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                                    <i class="bi bi-check-circle text-success"></i>
                                                    <span class="px-2">
                                                        {{ feature }}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-footer bg-light p-0 border-top pt-2">
                                            <div class="btn-group w-100 my-2">
                                                <router-link :to="plan.link + price.id"
                                                    class="btn btn-outline-success text-capitalize px-4">
                                                    Know More
                                                </router-link>
                                                <a :href="'https://wa.me/918860012001?text=' + encodeURIComponent('Hello, I want to get your ' + price.name + ' service')"
                                                    class="btn text-capitalize px-4 text-white btn-success">
                                                    <i class="bi bi-whatsapp"></i>
                                                    <span class="ms-2">Enquiry</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceSection",
    data() {
        return {
            // pricing: [
            //     {
            //         id: 2,
            //         name: "Digital Marketing",
            //         description: "This is a basic plan",
            //         plans: [
            //             {
            //                 id: 1,
            //                 name: "Search Engine Optimization",
            //                 features: [
            //                     "Keyword Research",
            //                     "On-Page Optimization",
            //                     "Link Building",
            //                     "SEO Reporting etc."
            //                 ],
            //             },
            //             {
            //                 id: 2,
            //                 name: "Pay-Per-Click Advertising",
            //                 features: [
            //                     "Campaign Setup",
            //                     "Keyword Targeting",
            //                     "Ad Copywriting",
            //                     "Performance Tracking etc."
            //                 ]
            //             },
            //             {
            //                 id: 3,
            //                 name: "Content Marketing",
            //                 features: [
            //                     "Content Strategy",
            //                     "Blog Writing",
            //                     "Guest Posting",
            //                     "Content Distribution etc."
            //                 ]
            //             },
            //             {
            //                 id: 4,
            //                 name: "Social Media Marketing",
            //                 features: [
            //                     "Social Media Strategy",
            //                     "Content Creation",
            //                     "Community Management",
            //                     "Analytics and Reporting etc."
            //                 ]
            //             },
            //             {
            //                 id: 5,
            //                 name: "Email Marketing",
            //                 features: [
            //                     "Email Campaign Setup",
            //                     "Template Design",
            //                     "List Management",
            //                     "Analytics and Reporting etc."
            //                 ]
            //             },
            //             {
            //                 id: 6,
            //                 name: "Influencer Marketing",
            //                 features: [
            //                     "Influencer Identification",
            //                     "Campaign Management",
            //                     "Content Collaboration",
            //                     "Performance Analysis etc."
            //                 ]
            //             },
            //             {
            //                 id: 7,
            //                 name: "Conversion Rate Optimization",
            //                 features: [
            //                     "A/B Testing",
            //                     "User Behavior Analysis",
            //                     "Landing Page Optimization",
            //                     "Conversion Tracking etc."
            //                 ]
            //             },
            //             {
            //                 id: 8,
            //                 name: "Online Reputation Management",
            //                 features: [
            //                     "Brand Monitoring",
            //                     "Review Management",
            //                     "Crisis Management",
            //                     "Reputation Repair etc."
            //                 ]
            //             },
            //             {
            //                 id: 9,
            //                 name: "Mobile Marketing",
            //                 features: [
            //                     "App Marketing",
            //                     "SMS Campaigns",
            //                     "Mobile Advertising",
            //                     "Mobile Analytics etc."
            //                 ]
            //             },
            //             {
            //                 id: 10,
            //                 name: "Customer Relationship Management",
            //                 features: [
            //                     "CRM Software Integration",
            //                     "Lead Management",
            //                     "Customer Segmentation",
            //                     "Sales Automation etc."
            //                 ]
            //             },
            //             {
            //                 id: 11,
            //                 name: "Marketing Automation",
            //                 features: [
            //                     "Automated Campaigns",
            //                     "Lead Nurturing",
            //                     "Email Automation",
            //                     "Performance Analytics etc."
            //                 ]
            //             },
            //             {
            //                 id: 12,
            //                 name: "Custom Digital Marketing",
            //                 features: [
            //                     "Tailored Strategy",
            //                     "Custom Campaigns",
            //                     "Advanced Analytics",
            //                     "Dedicated Support etc."
            //                 ]
            //             }
            //         ]

            //     },
            //     {
            //         id: 3,
            //         name: "Website Development",
            //         description: "This is a basic plan",
            //         plans: [
            //             {
            //                 id: 1,
            //                 name: "Business Website",
            //                 features: [
            //                     "Multiple Page Website",
            //                     "Custom Email Accounts",
            //                     "Custom Domain",
            //                     "Business Analytics Tools etc.",
            //                 ]
            //             },
            //             {
            //                 id: 2,
            //                 name: "E-Commerce Website",
            //                 features: [
            //                     "Product Catalog",
            //                     "Payment Gateway Integration",
            //                     "Inventory Management",
            //                     "Customer Management System etc.",
            //                 ]
            //             },
            //             {
            //                 id: 3,
            //                 name: "Wholesale E-Commerce Website",
            //                 features: [
            //                     "Bulk Order Management",
            //                     "B2B Pricing",
            //                     "Client Login Portal",
            //                     "Advanced Inventory System etc.",
            //                 ]
            //             },
            //             {
            //                 id: 4,
            //                 name: "Blog Website",
            //                 features: [
            //                     "Multiple Authors",
            //                     "SEO Tools",
            //                     "Content Scheduling",
            //                     "Social Media Integration etc.",
            //                 ]
            //             },
            //             {
            //                 id: 5,
            //                 name: "Portfolio Website",
            //                 features: [
            //                     "Project Galleries",
            //                     "Client Testimonials",
            //                     "Contact Form",
            //                     "Responsive Design etc.",
            //                 ]
            //             },
            //             {
            //                 id: 6,
            //                 name: "Membership Website",
            //                 features: [
            //                     "Member Registration",
            //                     "Exclusive Content",
            //                     "Subscription Management",
            //                     "Member Forums etc.",
            //                 ]
            //             },
            //             {
            //                 id: 7,
            //                 name: "Personal Website",
            //                 features: [
            //                     "Personal Blog",
            //                     "Resume/CV Section",
            //                     "Photo Gallery",
            //                     "Social Media Links etc.",
            //                 ]
            //             },
            //             {
            //                 id: 8,
            //                 name: "News Website",
            //                 features: [
            //                     "Breaking News Section",
            //                     "Article Categories",
            //                     "Comment System",
            //                     "Newsletter Signup etc.",
            //                 ]
            //             },
            //             {
            //                 id: 9,
            //                 name: "Custom Website",
            //                 features: [
            //                     "Fully Tailored Design",
            //                     "Custom Functionality",
            //                     "Advanced Security Features",
            //                     "Dedicated Support etc.",
            //                 ]
            //             }
            //         ]
            //     },
            //     {
            //         id: 1,
            //         name: "Software Development",
            //         description: "This is a basic plan",
            //         plans: [
            //             {
            //                 id: 1,
            //                 name: "Stock Management System",
            //                 features: [
            //                     "Inventory Tracking",
            //                     "Order Management",
            //                     "Stock Alerts",
            //                     "Supplier Management etc."
            //                 ]
            //             },
            //             {
            //                 id: 2,
            //                 name: "Financial Management System",
            //                 features: [
            //                     "Budgeting and Forecasting",
            //                     "Expense Tracking",
            //                     "Financial Reporting",
            //                     "Invoice Management etc."
            //                 ]
            //             },
            //             {
            //                 id: 3,
            //                 name: "Payment Management System",
            //                 features: [
            //                     "Payment Gateway Integration",
            //                     "Transaction Tracking",
            //                     "Automated Invoicing",
            //                     "Payment Reconciliation etc."
            //                 ]
            //             },
            //             {
            //                 id: 4,
            //                 name: "Asset Management System",
            //                 features: [
            //                     "Asset Tracking",
            //                     "Maintenance Scheduling",
            //                     "Asset Lifecycle Management",
            //                     "Depreciation Tracking etc."
            //                 ]
            //             },
            //             {
            //                 id: 5,
            //                 name: "Human Resources Management System",
            //                 features: [
            //                     "Employee Records",
            //                     "Payroll Management",
            //                     "Leave Management",
            //                     "Performance Appraisal etc."
            //                 ]
            //             },
            //             {
            //                 id: 6,
            //                 name: "Document Management System",
            //                 features: [
            //                     "Document Storage",
            //                     "Version Control",
            //                     "Access Control",
            //                     "Document Sharing etc."
            //                 ]
            //             },
            //             {
            //                 id: 7,
            //                 name: "Project Management System",
            //                 features: [
            //                     "Task Management",
            //                     "Project Planning",
            //                     "Time Tracking",
            //                     "Collaboration Tools etc."
            //                 ]
            //             },
            //             {
            //                 id: 8,
            //                 name: "Lead Management System",
            //                 features: [
            //                     "Lead Tracking",
            //                     "Lead Scoring",
            //                     "Automated Follow-Ups",
            //                     "Reporting and Analytics etc."
            //                 ]
            //             },
            //             {
            //                 id: 9,
            //                 name: "Custom Software",
            //                 features: [
            //                     "Tailored Solutions",
            //                     "Custom Integrations",
            //                     "Scalable Architecture",
            //                     "Dedicated Support etc."
            //                 ]
            //             }
            //         ]

            //     },


            // ],
        };
    },
    computed: {
        pricing() {
            return this.$store.getters.getPricing
        }
    },
    mounted() {
        this.initTooltips();
    },
    updated() {
        this.initTooltips();
    },
    methods: {
        initTooltips() {
            // Initialize tooltips (assuming using Bootstrap's tooltip)
            const tooltipTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="tooltip"]')
            );
            tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        },
        getDiscount(plan) {
            if (plan.mrp && typeof plan.mrp === 'string') {
                const mrp = parseFloat(plan.mrp.replace(/[^\d.-]/g, ''));
                const price = parseFloat(plan.price.replace(/[^\d.-]/g, ''));
                if (!isNaN(mrp) && !isNaN(price) && mrp > 0) {
                    return ((mrp - price) / mrp * 100).toFixed(0);
                }
            }
            return 0; // Default return if calculation fails
        }

    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    background-color: var(--brand-color) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* transform: scale(1.2); */
}

.sticky-container {
    position: sticky;
    top: 70px;
    z-index: 1000;
    background-color: white;
}


/* .recommended {
    border: 4px solid #efc107; 
    position: relative;
}

.recommended::before {
    content: "Recommended";
    position: absolute;
    top: -20px;
    left: -4px;
    width: 102.5%;
    background: #efc107; 
    color: white;
    padding: 5px 10px;
    font-size: 0.9rem;
    font-weight: bold;
    border-radius: 3px;
} */

/* Add any necessary styling here */
</style>
