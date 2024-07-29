<template>
    <div style="padding-top: 66px;">
        <div class="col-12 ">
            <img src="/img/homeBannerDesk.jpg" class="position-relative min-vh-100 d-none d-md-block"
                style="width:100%; height:400px; object-fit:cover;">
            <img src="/img/homeBannerMob.jpg" class="position-relative d-md-none" style="width:100%;object-fit:cover;">
            <div class="position-absolute top-0 w-100 d-flex flex-column justify-content-center align-items-center text-white min-vh-100"
                style="background-color:#0000008c; ">
                <h1 class="text-center text-uppercase">Personalized Business Development Program </h1>
                <h3 class="text-center text-capitalize card p-4 my-4">One to One Consultation <br> for your <br> Step by
                    Step Evolution</h3>
                <p class="mt-3 text-capitalize">Do you want to see your business become scalable, profitable, and
                    on autopilot?<br> and you want implementation in your business and no more trainings now.</p>
            </div>
        </div>


        <div class="my-5">
            <WhatMakesUsDifferent :values="values" title="🚀 TRANSFORM YOURSELF FROM "
                subTitle="BUSY MAN TO BUSINESSMAN" v-observe />
        </div>
        <div class="my-5">
            <PrivateCoaching :coaching="coaching" title="RAISE YOUR STANDARDS OF SUCCESS" subtitle="PRIVATE BUSINESS OWNER COACHING" />
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
            <div class="my-5 py-3" style="background-color: var(--brand-color);">
                <h4 class="container text-center text-white p-2 text-capitalize">After the compelete health Check-Up
                    of your business, we will focus on the things which are </h4>
                <span class="fs-4 p-2 text-uppercase bg-light text-dark">IMPORTANT for Growth</span>
            </div>
        </div>
        <div class="my-5">
            <ServiceComponent />
        </div>
        <div class="my-5">
            <PrivateCoaching :coaching="mission" title="know us" />
        </div>
        <div class="my-5">
            <CertificateSection />
        </div>
        <div class="my-5">
            <HomeTestimonialSection />
        </div>
        <p class="text-center py-3 text-dark mb-0 position-fixed bottom-0 w-100 bg-warning" @click="submit()"><i
                class="bi bi-whatsapp me-3"></i>Enquiry Now</p>
    </div>
</template>
<script>
import HomeTestimonialSection from "@/components/HomeTestimonialSection.vue";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent.vue";
import ServiceComponent from "@/components/ServiceComponent.vue";
import CertificateSection from '@/components/CertificateSection.vue';
import PrivateCoaching from '@/components/PrivateCoaching.vue';
export default {
    components: {
        WhatMakesUsDifferent,
        ServiceComponent,
        CertificateSection,
        PrivateCoaching,
        HomeTestimonialSection,
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
                { title: "Marketing System.", description: "Marketing management Checklist to Get More Customers" },
                { title: "Sales System.", description: "Sales management Checklist to Get More Customers" },
                { title: "Hr & People System.", description: "HR management Checklist to Create a Champion Team" },
                { title: "Order Fulfilment System.", description: "Ordering management Checklist to enhance efficency of order fullfillment " },
                { title: "Operation System.", description: "Operation management Checklist to Deliver Extraordinary Quality Every Time" },
                { title: "Financial System.", description: "Financial management Checklist to Avoid Fund issues" },
                { title: "Monitoring System.", description: "Monitoring management Checklist to Analyze Efficency of System" },
                { title: "Auto-Pilot System.", description: "Autopilot management Checklist to Automate Your Business" },
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
                    icon:'bi bi-bullseye',
                    title: "mission",
                    description: "Make Indian Businesses more successful that grows exponentially and sustainably"
                },
                {
                    icon:'bi bi-eye',
                    title: "vision",
                    description: "Build an enterprise that genuinely serves the nation and creates a positive impact in the world"
                },
                {
                    icon:'bi bi-gem',
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