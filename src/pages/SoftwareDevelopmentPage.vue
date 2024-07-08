<template>
    <div>
        <div class="my-5">
            <FormBanner :service="'Software Development'" :category="category" :place="place" text="we are offering"
                v-observe />
        </div>
        <div class="my-5">
            <div class="container">
                <h1 class="text-center py-4">Software Development Pricing</h1>
                <div class="table-responsive pb-4">
                    <table class="table table-bordered table-light table-striped" style="width: 100%;">
                        <thead class="border-bottom">
                            <tr>
                                <th class="text-start">Features <p class="mb-0 small">List</p>
                                </th>
                                <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                    <p class="mb-0">{{ plan.title }}</p>
                                    <p class="mb-0 ">
                                        <small class="smaller ">₹</small>
                                        <small class="smaller">{{ plan.price }}</small>
                                        <small class="smaller fw-normal">/-</small>
                                    </p>
                                    <p class="mb-0">
                                        <small class="fw-light text-decoration-line-through text-dark smaller">{{
                                            plan.mrp
                                        }}</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal smaller">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.features[index].included"
                                        class="bi bi-check2 fs-5 text-success smaller"></i>
                                    <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                        class="fw-normal">Basic</i>
                                    <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="my-5">
            <LeadManagement :values="features" title="What makes us different ?" v-observe />
        </div>
       
        <div class="my-5">
            <SalesFunnel :values="values" v-observe />
        </div>
        <div class="my-5">
            <AutoScrolling v-observe />
        </div>
        <div class="my-5">
            <TempCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="my-5">
            <Faq :faqs="faqs" v-observe />
        </div>
        <div class="my-5">
            <Counter :service="'Software Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
                :place="'All over the world'" :placeCount="5000" image="/img/smile.svg" title="our happy customers" v-observe />
        </div>
        <div class="my-5">
            <WhyChooseUs v-observe />
        </div>

    </div>
</template>

<script>
import LeadManagement from '@/components/services/LeadManagement.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import TempCustomers from "@/components/TempCustomers.vue";
import Faq from '@/components/FaqSection.vue';
import FormBanner from '@/components/FormBanner.vue';
import Counter from '@/components/CustomCounter.vue';
import AutoScrolling from '@/components/services/AutoScrolling.vue';
import SalesFunnel from "@/components/SalesFunnel.vue";

export default {
    name: "SoftwareDevelopment",
    components: {
        LeadManagement,
        WhyChooseUs,
        FormBanner,
        TempCustomers,
        Faq,
        Counter,
        AutoScrolling,
        SalesFunnel,
    },
    data() {
        return {
            services: '',
            category: '',
            place: '',
            features: [
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
            questions: [
                {
                    id: 1,
                    question: "Why do I need custom software?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!."
                },
                {
                    id: 2,
                    question: "How long will it take to develop the software?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "How much will it cost?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "Will the software be easy to use?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "What are the steps involved in software development?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 6,
                    question: "How will you handle my data and ensure privacy?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
            ],
            customers: [
                {
                    id: 1,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ],
            values: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Business & Competitors Analysis",
                    color: '#e76365',
                    description: "Buy targeted advertising on Facebook and Instagram or Google and start driving high- quality traffic to your Saleswik landing pages.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Development of Strategies ",
                    color: "#f5925e",
                    description: "Select a high-converting Saleswik landing page which is more optimized for your business goals. ",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "Validation of Required Digital Places ",
                    color: "#f8a42a",
                    description: "Get more conversions by capturing the contact details of the visitors, visiting your Saleswik landing page.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Optimization of Digital Presence",
                    color: "#f8d452",
                    description: "Set up campaigns to nurture your leads and build relationships and turn your expertise into a commodity",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Run Content Creation Program",
                    color: "#fbd453",
                    description: "From your sales page and order form templates in seconds to sell your products and services online.",
                },
                {
                    id: 6,
                    icon: 'bi-whatsapp fs-4',
                    title: "Run Reputation Management Program",
                    color: "#c9d825",
                    description: "Increase your revenue and promote limited-time offers immediately after a customer's purchase.",
                },
                {
                    id: 7,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Provide Lead Management System",
                    color: "#5ccd5f",
                    description: "Connect to Payment Gateway without leaving the app. Sell your products and services right on your Saleswik landing page.",
                },
                {
                    id: 8,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Successfully Achievement of Goals",
                    color: "#5ccd5f",
                    description: "Connect to Payment Gateway without leaving the app. Sell your products and services right on your Saleswik landing page.",
                },
            ],
            plans: [
                {
                    id: 1,
                    title: "Lite",
                    description: "Info Website",
                    price: '999',
                    mrp: '2,000',
                    features: [
                        { id: 1, name: "Stock Management System", included: true },
                        { id: 2, name: "Financial Management System", included: true },
                        { id: 3, name: "Payment Management System", included: true },
                        { id: 4, name: "Asset Management System", included: true },
                        { id: 5, name: "Human Resources Management System", included: true },
                        { id: 6, name: "Document Management System", included: true },
                        { id: 7, name: "Project Management System", included: false },
                        { id: 8, name: "Lead Management System", included: false },

                    ],
                },
                {
                    id: 2,
                    title: "Plus",
                    description: "Business Website",
                    price: '1,499',
                    mrp: '3,000',
                    features: [
                        { id: 1, name: "Stock Management System", included: true },
                        { id: 2, name: "Financial Management System", included: true },
                        { id: 3, name: "Payment Management System", included: true },
                        { id: 4, name: "Asset Management System", included: true },
                        { id: 5, name: "Human Resources Management System", included: true },
                        { id: 6, name: "Document Management System", included: true },
                        { id: 7, name: "Project Management System", included: true },
                        { id: 8, name: "Lead Management System", included: true },

                    ],
                },
                {
                    id: 3,
                    title: "Elite",
                    description: "Catalog Website",
                    price: '2,499',
                    mrp: '5,000',
                    features: [
                        { id: 1, name: "Stock Management System", included: true },
                        { id: 2, name: "Financial Management System", included: true },
                        { id: 3, name: "Payment Management System", included: true },
                        { id: 4, name: "Asset Management System", included: true },
                        { id: 5, name: "Human Resources Management System", included: true },
                        { id: 6, name: "Document Management System", included: true },
                        { id: 7, name: "Project Management System", included: true },
                        { id: 8, name: "Lead Management System", included: true },

                    ],
                },
                {
                    id: 3,
                    title: "Pro",
                    description: "Catalog Website",
                    price: '2,499',
                    mrp: '5,000',
                    features: [
                        { id: 1, name: "Stock Management System", included: true },
                        { id: 2, name: "Financial Management System", included: true },
                        { id: 3, name: "Payment Management System", included: true },
                        { id: 4, name: "Asset Management System", included: true },
                        { id: 5, name: "Human Resources Management System", included: true },
                        { id: 6, name: "Document Management System", included: true },
                        { id: 7, name: "Project Management System", included: true },
                        { id: 8, name: "Lead Management System", included: true },

                    ],
                },
            ],
            faqs: [
    {
        name: "Stock Management System",
        plans: [
            { question: "What is a stock management system?", answer: "A stock management system is a tool that helps businesses keep track of their inventory. It monitors stock levels, orders, sales, and deliveries to ensure you always have the right amount of stock on hand." },
            { question: "Why is stock management important?", answer: "It’s important because it helps prevent overstocking or running out of products. Good stock management ensures that you can meet customer demand without holding too much inventory." },
            { question: "Can a stock management system help reduce costs?", answer: "Yes, by optimizing inventory levels, a stock management system can reduce storage costs and minimize losses from unsold goods or spoilage." },
            { question: "How does a stock management system work?", answer: "It works by tracking inventory through barcodes, RFID tags, or manual entry. The system updates stock levels in real-time as products are sold or received." },
            { question: "Is a stock management system suitable for small businesses?", answer: "Yes, even small businesses can benefit from a stock management system. It helps streamline operations and ensures efficient inventory control." }
        ]
    },
    {
        name: "Financial Management System",
        plans: [
            { question: "What is a financial management system?", answer: "A financial management system is software that helps businesses manage their financial activities, such as budgeting, accounting, invoicing, and reporting." },
            { question: "Why is a financial management system important?", answer: "It’s important because it provides accurate financial data, helps in making informed decisions, and ensures compliance with financial regulations." },
            { question: "What features should I look for in a financial management system?", answer: "Look for features like automated bookkeeping, expense tracking, budgeting tools, financial reporting, and integration with other business systems." },
            { question: "Can a financial management system help with tax preparation?", answer: "Yes, it can simplify tax preparation by keeping accurate financial records, generating necessary reports, and ensuring compliance with tax laws." },
            { question: "Is it difficult to implement a financial management system?", answer: "Implementation can vary depending on the complexity of your business, but many systems offer user-friendly interfaces and support to make the process easier." }
        ]
    },
    {
        name: "Payment Management System",
        plans: [
            { question: "What is a payment management system?", answer: "A payment management system is a tool that handles the processing of payments from customers, including credit card transactions, electronic transfers, and other payment methods." },
            { question: "Why is a payment management system important?", answer: "It’s important because it ensures secure, fast, and accurate processing of payments, which improves customer satisfaction and cash flow." },
            { question: "How does a payment management system work?", answer: "It works by integrating with your sales system to process payments, verify transactions, and manage payment records." },
            { question: "Can a payment management system prevent fraud?", answer: "Yes, many systems include security features like encryption and fraud detection to protect against unauthorized transactions." },
            { question: "Is a payment management system suitable for online businesses?", answer: "Absolutely, it’s essential for online businesses to provide a smooth and secure payment experience for their customers." }
        ]
    },
    {
        name: "Asset Management System",
        plans: [
            { question: "What is an asset management system?", answer: "An asset management system helps businesses track and manage their physical and digital assets, such as equipment, vehicles, software, and buildings." },
            { question: "Why is asset management important?", answer: "It’s important because it ensures that all assets are accounted for, properly maintained, and utilized efficiently, which helps in reducing costs and improving productivity." },
            { question: "How does an asset management system work?", answer: "It tracks assets through unique identifiers like barcodes or RFID tags, records their location, condition, and maintenance history, and provides reports for better decision-making." },
            { question: "Can an asset management system help with asset depreciation?", answer: "Yes, it can automatically calculate depreciation, helping you keep accurate financial records and make informed budgeting decisions." },
            { question: "Is an asset management system useful for small businesses?", answer: "Yes, it helps small businesses maximize the value of their assets and ensure they are properly maintained and utilized." }
        ]
    },
    {
        name: "Human Resources Management System (HRMS)",
        plans: [
            { question: "What is a Human Resources Management System (HRMS)?", answer: "An HRMS is software that helps manage employee information and HR tasks, such as payroll, benefits, recruitment, and performance evaluations." },
            { question: "Why is an HRMS important?", answer: "It’s important because it streamlines HR processes, reduces administrative workload, and helps ensure compliance with labor laws." },
            { question: "What features should I look for in an HRMS?", answer: "Look for features like employee database management, payroll processing, benefits administration, time and attendance tracking, and performance management." },
            { question: "Can an HRMS improve employee satisfaction?", answer: "Yes, by providing easy access to information and self-service options for tasks like updating personal details and checking pay stubs, it can improve employee satisfaction." },
            { question: "Is an HRMS suitable for small businesses?", answer: "Yes, an HRMS can help small businesses manage HR tasks efficiently and provide a better experience for their employees." }
        ]
    },
    {
        name: "Document Management System (DMS)",
        plans: [
            { question: "What is a document management system (DMS)?", answer: "A DMS is software that helps businesses store, organize, and manage digital documents. It provides a central repository for easy access and retrieval of documents." },
            { question: "Why is a DMS important?", answer: "It’s important because it improves document organization, enhances collaboration, ensures compliance with document retention policies, and increases security." },
            { question: "How does a DMS work?", answer: "It works by digitizing documents, storing them in a centralized location, and providing tools for categorization, search, and retrieval." },
            { question: "Can a DMS improve collaboration?", answer: "Yes, it allows multiple users to access, edit, and share documents simultaneously, improving collaboration and productivity." },
            { question: "Is a DMS suitable for small businesses?", answer: "Yes, it helps small businesses reduce paper clutter, improve document security, and streamline workflows." }
        ]
    },
    {
        name: "Project Management System",
        plans: [
            { question: "What is a project management system?", answer: "A project management system is a tool that helps plan, organize, and manage project tasks and resources. It ensures projects are completed on time and within budget." },
            { question: "Why is a project management system important?", answer: "It’s important because it provides structure to project workflows, improves communication, and helps track progress and deadlines." },
            { question: "What features should I look for in a project management system?", answer: "Look for features like task assignment, progress tracking, deadline management, resource allocation, and collaboration tools." },
            { question: "Can a project management system help with remote work?", answer: "Yes, it facilitates remote work by providing a centralized platform for team communication, task management, and document sharing." },
            { question: "Is a project management system useful for small businesses?", answer: "Yes, it helps small businesses manage projects efficiently, keep track of tasks, and ensure all team members are on the same page." }
        ]
    },
    {
        name: "Lead Management System",
        plans: [
            { question: "What is a lead management system?", answer: "A lead management system helps businesses track and manage potential customers (leads) from initial contact through conversion to a customer." },
            { question: "Why is a lead management system important?", answer: "It’s important because it ensures that no potential customer falls through the cracks, helps prioritize leads, and improves the efficiency of the sales process." },
            { question: "How does a lead management system work?", answer: "It works by capturing lead information, tracking interactions, and providing tools to follow up and nurture leads through the sales funnel." },
            { question: "Can a lead management system improve sales?", answer: "Yes, by organizing and prioritizing leads, it helps sales teams focus on the most promising opportunities and close more deals." },
            { question: "Is a lead management system suitable for small businesses?", answer: "Yes, it helps small businesses manage leads more effectively and improve their chances of converting leads into customers." }
        ]
    }
]

        }
    },
    created() {
        // Log the route params to debug
        console.log('Route params:', this.$route.params);

        // Extract the route parameter by the correct name
        const routeParam = this.$route.params.title; // Use 'slug' if that is the parameter name

        // Check if routeParam is defined
        if (routeParam) {
            this.extractParams(routeParam);
        } else {
            console.error('Route parameter is undefined');
        }
    },
    methods: {
        extractParams(paramString) {
            // Split the string based on ' in ' keyword and then further parse it
            let parts = paramString.split('-in-');
            if (parts.length >= 2) {
                this.services = parts[0].replace(/-/g, ' ');
                this.category = parts[1].replace(/-/g, ' ');

                // Check if there is a third part for the place
                if (parts.length > 2) {
                    this.place = parts.slice(2).join(' ').replace(/-/g, ' ');
                }
            }
        }
    }
}
</script>
<style lang="">

</style>
