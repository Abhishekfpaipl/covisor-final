<template>
    <div class="my-5 py-3" style="background-color: var(--brand-color);">
        <div class="container">
            <h1 class="text-white mb-3 text-capitalize text-center"> make your business <br> scalable, profitable, and
                on
                autopilot </h1>
            <span class="fs-5 text-center mb-3 text-dark p-2 text-capitalize bg-light">no more
                trainings now, its time to implement in your business</span>
            <div class="row d-flex align-items-center rounded-md-5 rounded-0 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <img src="/img/consultation.svg" style="width: 450px; max-width: 100%" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-0">
                    <div class="">
                        <p class="text-white text-capitalize text-center mb-0"> Get a complete health check-up for the
                            important business areas and</p>
                        <p class="text-white text-capitalize text-center fw-bold">Get a hand holding guidance with one
                            to one sessions. </p>
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="">
                                <div v-for="(link, index) in test.slice(0, 5)" :key="index"
                                    class="d-flex text-center text-white my-3">
                                    <i class="bi bi-check-square-fill me-2"></i>
                                    <p class="mb-0 text-start text-capitalize">{{ link }}</p>
                                </div>
                            </div>
                            <div class="">
                                <div v-for="(link, index) in test.slice(5)" :key="index"
                                    class="d-flex text-center text-white my-3">
                                    <i class="bi bi-check-square-fill me-2"></i>
                                    <p class="mb-0 text-start text-capitalize">{{ link }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link to="/free-consultation" class="btn btn-warning text-capitalize fw-bold">Let's upgrade
                        from a busy man to businessman <i class="bi bi-arrow-right ms-2 fs-5"></i></router-link>
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
                "Sales System.",
                "PR  System.",
                "HR System.",
                "work System.",
                "Stock System.",
                "Marketing System.",
                "Financial system.",
                "ecommerce System.",
                "Monitoring system.",
                "Auto-Pilot System.",
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