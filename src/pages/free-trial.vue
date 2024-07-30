<template>
    <div >
        <div class="container mb-5 pb-5">
            <div class="row">
                <div class="col-12 col-md-6 py-3 text-center px-4 px-md-2">
                    <h1 class="mt-3 text-capitalize">book your free consultation</h1>
                    <p class="fs-5 text-capitalize">and learn how to, start your digital journey, grow your business
                        digitally, compete online with big giants.</p>
                    <ContactForm />
                    <!-- <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation">
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note" style="height: 100px;"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-dark text-capitalize">booking
                                confirm</button>
                        </div>
                    </form> -->
                </div>
                <div class="col-12 col-md-6 p-3">
                    <img src="/img/free-trial.svg" class="" style="width:250px; object-fit: contain;" alt="">
                    <p class="text-center mt-4 text-capitalize">in this 30 minutes free consultation you will get </p>
                    <div class="d-flex gap-2 justify-content-start justify-content-md-center align-items-center"
                        v-for="(link, index) in links" :key="index">
                        <i class="bi bi-check text-success fs-4"></i>
                        <p class="my-1 text-start">{{ link }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center py-4 text-white mb-0 position-fixed bottom-0 w-100" @click="openDialer()"
            style="background-color: var(--brand-color);">Questions? Talk to an
            expert: 91 8860012001</p>
    </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {
        ContactForm
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
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
    }
}
</script>