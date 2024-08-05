<template>
    <div >
        <ConsultationBanner />

        <div class="my-5">
            <PrivateCoaching :coaching="coaching" title="RAISE YOUR STANDARDS OF SUCCESS"
                subtitle="PRIVATE BUSINESS OWNER COACHING" />
        </div>
        <div class="my-5">
            <div class="my-5 py-5" style="background-color: var(--brand-color);font-size: 45px !important;">
                <p class="container text-center text-white p-2 text-capitalize"> "transform yourself from busy man to businessman "</p>
            </div>
        </div>
        <div class="my-5">
            <h3 class="text-center text-uppercase">Find out the clear steps for your business growth</h3>
            <h1 class="mb-0 text-uppercase text-center">complete health checkup of your business</h1>
            <div class="container mt-4">
                <div v-for="(link, index) in test" :key="index"
                    class="d-md-flex text-center justify-content-start align-items-center my-3 border p-2">
                    <div class="d-flex">
                        <i class="bi bi-check-square-fill me-2"></i>
                        <p class="mb-0 text-start text-capitalize">{{ link.title }}</p>
                        <i class="bi bi-arrow-right mx-md-3"></i>
                    </div>
                    <p class="mb-0 text-start text-capitalize">{{ link.description }}</p>
                </div>
            </div>
            <div class="my-5 py-5" style="background-color: var(--brand-color);">
                <h4 class="container text-center text-white p-2 text-capitalize">After the compelete health Check-Up
                    of your business, we will focus on the things which are </h4>
                <span class="fs-4 p-2 text-uppercase bg-light text-dark">IMPORTANT for Growth</span>
            </div>
        </div>
        <div class="my-5">
            <ServiceComponent />
        </div>
        <div class="my-5">
            <PrivateCoaching :coaching="mission" title=" " />
        </div> 
        <p class="text-center py-3 text-dark mb-0 position-fixed bottom-0 w-100 bg-warning" @click="submit()">
            <i class="bi bi-whatsapp me-3 fs-5"></i> <span class="fs-5">Enquiry Now</span>
        </p>
    </div>
</template>
<script> 
import ServiceComponent from "@/components/ServiceComponent.vue"; 
import PrivateCoaching from '@/components/PrivateCoaching.vue';
import ConsultationBanner from "@/components/ConsultationBanner.vue"; 
export default {
    components: {
        ServiceComponent, 
        PrivateCoaching, 
        ConsultationBanner, 
    },
    data() {
        return {
            links: [
                "How to start your digital journey.",
                "How to grow your business online.",
                "How to compete online with big giants.",
            ],
            name: '',
            note: '',
            values: [
                {
                    icon: 'bi bi-stopwatch-fill',
                    title: '4 HOURS POWERFUL CLASSES    ',
                    description: 'We have developed a robust and scalable software solution that meets your business needs.'
                },
                {
                    icon: 'bi bi-key-fill',
                    title: 'Access to Future Sessions    ',
                    description: 'We have developed a robust and scalable software solution that meets your business needs.'
                },
                {
                    icon: 'bi bi-book-fill',
                    title: '4 EBOoks on business for free',
                    description: 'We have developed a robust and scalable software solution that meets your business needs.'
                },
                {
                    icon: 'bi bi-people',
                    title: 'LIFETIME ACCESS TO VIP COMMUNITY',
                    description: 'We have developed a robust and scalable software solution that meets your business needs.'
                },
            ],
            test: [
                { "title": "Sales System", "description": "Techniques and processes to streamline sales operations, boost conversions, and maximize revenue growth." },
                { "title": "PR System", "description": "Strategies to manage public relations, enhance brand reputation, and consistently deliver exceptional quality to customers." },
                { "title": "HR System", "description": "Best practices for recruiting, training, and managing a top-performing team that aligns with your business goals." },
                { "title": "Work System", "description": "Frameworks and techniques to enhance team productivity, collaboration, and overall work effectiveness." },
                { "title": "Stock System", "description": "Efficient inventory management solutions to optimize stock levels, reduce waste, and ensure timely fulfillment." },
                { "title": "Marketing System", "description": "Comprehensive strategies and tools to attract and retain customers, ensuring your marketing efforts are effective and targeted." },
                { "title": "Financial System", "description": "Guidelines for robust financial planning, budgeting, and management to prevent cash flow issues and ensure financial stability." },
                { "title": "Ecommerce System", "description": "Strategies for building and managing a successful ecommerce platform, focusing on customer experience and business reliability." },
                { "title": "Monitoring System", "description": "Tools and methods to assess and track the performance of your business systems, ensuring operational efficiency." },
                { "title": "Auto-Pilot System", "description": "Automation solutions to streamline business processes, reduce manual workload, and increase efficiency." },
            ],
            coaching: [
                {
                    title: "CLARITY",
                    description: "Identify your unique vision and goals to create a customised strategy blueprint designed for you, your team and your business."
                },
                {
                    title: "STRATEGY",
                    description: "Embody the psychology of the top 1% to achieve exponential productivity and create breakthroughs in sales, leadership and culture."
                },
                {
                    title: "EXECUTION",
                    description: "Maximise your potential and grow exponentially with dedicated support and consistent guidance from your coach at each step of the way."
                },
            ],
            mission: [
                {
                    icon: 'bi bi-bullseye',
                    title: "mission",
                    description: "Make Indian Businesses more successful that grows exponentially and sustainably"
                },
                {
                    icon: 'bi bi-eye',
                    title: "vision",
                    description: "Build an enterprise that genuinely serves the nation and creates a positive impact in the world"
                },
                {
                    icon: 'bi bi-gem',
                    title: "value",
                    description: "Find your true north. Master your craft and set the standards for world-class"
                },
            ],
        }
    },
    methods: {
        submitQuery() {
            if (this.name != '' && this.note != '') {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name} i would like to book my 30 mins free consultation. Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "";
                this.note = "";
            }
        },
        submit() {

            const phoneNumber = '918860012001'; // Replace with your WhatsApp number
            const message = `Hello, I would like to enquire one to one busines coaching program.`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

        }
    }
}
</script>