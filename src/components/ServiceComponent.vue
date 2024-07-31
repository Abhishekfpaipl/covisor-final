<template>
    <div>
        <div class="container">
            <h1 class="text-center mb-4">Here is What I Wanna Give You...</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(plan, index) in plans" :key="index">
                    <div class="card px-3 bg-light rounded-0" style="min-height: 585px;">
                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                        <div class="card-body text-center">
                            <ul v-if="plan.features" class="list-group">
                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <span class="px-2 text-start">
                                        {{ feature.name }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div v-if="plan.buttonText" class="card-footer bg-light">
                            <a :href="plan.link" class="btn btn-light border text-dark text-capitalize w-100" style="">
                                <img v-if="plan.logo" :src="plan.logo" style="width:30px; height: 30px; object-fit: contain;" alt="">
                                <i v-else class="bi bi-sliders mx-2"></i>
                                <span class="text-uppercase">{{ plan.buttonText }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            plans: [
                {
                    "id": 1,
                    "name": "Autopilot System",
                    "price": 100,
                    "features": [
                        { "name": "How Your Business Can Run Without You" },
                        { "name": "Importance Of Business Automation" },
                        { "name": "System To Run Your Business On Autopilot" },
                        { "name": "Tools & Techniques For Automation" },
                        { "name": "How To Set Business Goals" },
                        { "name": "How to Supercharge Your Productivity" },
                        { "name": "Workflow Automation Tools" },
                        { "name": "Setting Up Automated Processes" },
                        { "name": "Automated Customer Service Systems" },
                        { "name": "Integrating AI for Automation" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 2,
                    "name": "HR System",
                    "price": 200,
                    "features": [
                        { "name": "How to Get The Right Team" },
                        { "name": "How To Set KRA's & KPI's" },
                        { "name": "How To Build A High-Performance Culture" },
                        { "name": "Importance of Employee On-Boarding System" },
                        { "name": "How To Measure Performance & Give Reward" },
                        { "name": "How to Breed Innovation At Workplace" },
                        { "name": "Conflict Resolution Strategies" },
                        { "name": "Employee Retention Techniques" },
                        { "name": "Developing Training Programs" },
                        { "name": "Implementing Employee Feedback Systems" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 3,
                    "name": "Sales System",
                    "price": 300,
                    "features": [
                        { "name": "How To Sell More, Faster & Confidently" },
                        { "name": "Lead Generation & Conversion System" },
                        { "name": "How To Make Your Prospect Decide Quickly" },
                        { "name": "Building a Sales Pipeline" },
                        { "name": "Negotiation Techniques" },
                        { "name": "How To Create A Sales Funnel" },
                        { "name": "Using CRM Systems" },
                        { "name": "Effective Follow-Up Strategies" },
                        { "name": "Sales Team Management" },
                        { "name": "Cross-Selling and Up-Selling Techniques" }
                    ],
                    "buttonText":"saleswik",
                    "link":"https://www.saleswik.in",
                    "logo":"img/saleswik.svg",
                },
                {
                    "id": 4,
                    "name": "Finance System",
                    "price": 300,
                    "features": [
                        { "name": "How To Read Financial Statements" },
                        { "name": "Managing Cash Flow Effectively" },
                        { "name": "Releasing Working Capital Easily" },
                        { "name": "5 Crucial Ratios To Review" },
                        { "name": "Securing Finance From Institutions" },
                        { "name": "Assessing Deal Profitability" },
                        { "name": "Budgeting and Forecasting" },
                        { "name": "Tax Planning Strategies" },
                        { "name": "Investment Analysis" },
                        { "name": "Debt Management Techniques" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 5,
                    "name": "Marketing System",
                    "price": 300,
                    "features": [
                        { "name": "Developing a Marketing Strategy" },
                        { "name": "Target Audience Analysis" },
                        { "name": "Creating Effective Campaigns" },
                        { "name": "SEO & SEM Best Practices" },
                        { "name": "Social Media Marketing" },
                        { "name": "Email Marketing Strategies" },
                        { "name": "Content Marketing" },
                        { "name": "Brand Positioning" },
                        { "name": "Analyzing Marketing Metrics" },
                        { "name": "Optimizing Marketing Budget" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 6,
                    "name": "PR System",
                    "price": 300,
                    "features": [
                        { "name": "Building a Positive Brand Image" },
                        { "name": "Crisis Management Strategies" },
                        { "name": "Media Relations Management" },
                        { "name": "Creating Press Releases" },
                        { "name": "Organizing Press Conferences" },
                        { "name": "Social Media Presence Management" },
                        { "name": "Influencer Engagement" },
                        { "name": "Community Relations" },
                        { "name": "Reputation Management" },
                        { "name": "Measuring PR Campaign Success" }
                    ],
                    "buttonText":"Fameset",
                    "link":"https://www.fameset.com",
                    "logo":"img/fameset.svg",
                },
                {
                    "id": 7,
                    "name": "Stock System",
                    "price": 300,
                    "features": [
                        { "name": "Inventory Management Best Practices" },
                        { "name": "Optimizing Stock Levels" },
                        { "name": "Reducing Inventory Costs" },
                        { "name": "Implementing Just-In-Time (JIT) Inventory" },
                        { "name": "Warehouse Management Systems" },
                        { "name": "Supplier Relationship Management" },
                        { "name": "Demand Forecasting" },
                        { "name": "Stock Auditing Techniques" },
                        { "name": "Handling Overstock and Understock" },
                        { "name": "Improving Order Fulfillment" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 8,
                    "name": "Monitoring System",
                    "price": 300,
                    "features": [
                        { "name": "Performance Monitoring Tools" },
                        { "name": "Setting Key Performance Indicators (KPIs)" },
                        { "name": "Real-Time Data Analysis" },
                        { "name": "Reporting and Analytics" },
                        { "name": "Tracking Business Metrics" },
                        { "name": "Employee Performance Tracking" },
                        { "name": "Process Efficiency Analysis" },
                        { "name": "Customer Satisfaction Monitoring" },
                        { "name": "Using Dashboards for Monitoring" },
                        { "name": "Identifying Areas for Improvement" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                },
                {
                    "id": 9,
                    "name": "Work System",
                    "price": 300,
                    "features": [
                        { "name": "Task Management Tools" },
                        { "name": "Project Management Techniques" },
                        { "name": "Time Management Strategies" },
                        { "name": "Collaborative Workspaces" },
                        { "name": "Workload Balancing" },
                        { "name": "Effective Communication Channels" },
                        { "name": "Setting Work Priorities" },
                        { "name": "Conflict Resolution in Teams" },
                        { "name": "Motivating Team Members" },
                        { "name": "Tracking Team Performance" }
                    ],
                    "buttonText":"workwity",
                    "link":"https://www.workwity.com",
                    "logo":"img/workwity.svg",
                },
                {
                    "id": 10,
                    "name": "Ecommerce System",
                    "price": 300,
                    "features": [
                        { "name": "Setting Up an Ecommerce Platform" },
                        { "name": "Product Listing Optimization" },
                        { "name": "User Experience (UX) Design" },
                        { "name": "Online Payment Systems" },
                        { "name": "SEO for Ecommerce" },
                        { "name": "Managing Online Inventory" },
                        { "name": "Customer Service and Support" },
                        { "name": "Digital Marketing Strategies" },
                        { "name": "Analyzing Ecommerce Metrics" },
                        { "name": "Ensuring Website Security" }
                    ],
                    "buttonText":"custom solutions",
                    "link":"",
                    "logo":"",
                }
            ]


            // {
            //     id: 5,
            //     name: 'QnA Session',
            //     price: 300,
            //     features: [
            //         { name: 'Ask Your Questions.' },
            //         { name: "Clear All Your Doubts." },
            //         { name: 'Get Networking Opportunity.' },
            //         { name: 'Get Community Acces.' },
            //     ],
            // },
        }
    }
}
</script>
<style lang="">

</style>