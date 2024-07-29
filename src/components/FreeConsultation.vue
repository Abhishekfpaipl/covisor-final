<template>
    <div class="my-5 py-3" style="background-color: var(--brand-color);">
        <div class="container">
            <h1 class="text-white mb-0 text-capitalize text-center">Do you want to <br> Grow your business on autopilot
                mode</h1>
            <p class="text-center mb-3 text-white">Get a hand holding guidance to upgrade from a busy man to
                businessman. Get a complete health check-up for the 7 important business areas</p>
            <div class="row d-flex align-items-start rounded-md-5 rounded-0 p-md-5 p-3 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start"> 
                    <img src="/img/consultation.svg" style="min-width: 200px" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-0">
                    <div class="mt-4">
                        <div v-for="(link, index) in test" :key="index" class="d-flex text-center text-white my-3">
                            <i class="bi bi-check-square-fill me-2"></i>
                            <p class="mb-0 text-start text-capitalize">{{ link }}</p>
                        </div>
                    </div>
                    <router-link to="/free-consultation" class="btn btn-dark">Book Now</router-link>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'RequestDemo',
    components: {
    },
    data() {
        return {
            title: "Why Choose Us",
            test: [
                "Marketing System.",
                "Sales System.",
                "Auto-Pilot System.",
                "Hr & People System.",
                "Order/Service Fulfilment System.",
                "Financial system.",
                "Monitoring system.",
            ],
            name: "",
            note: "",
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
        }
    }
}
</script>
<style scoped></style>