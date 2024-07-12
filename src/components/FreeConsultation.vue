<template>
    <div class="my-5 py-3" style="background-color: var(--brand-color);">
        <div class="container">
            <div class="row d-flex align-items-start rounded-md-5 rounded-0 p-md-5 p-3 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <h1 class="text-white mb-3 text-capitalize">Book free consultation</h1>
                    <div class="mt-4">
                        <div v-for="(link, index) in test" :key="index" class="d-flex text-center text-white my-3">
                            <i class="bi bi-check-square-fill me-2"></i>
                            <p class="mb-0 text-start">{{ link }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-0">
                    <form @submit.prevent="submitQuery()" class="mt-4 row g-3 needs-validation">
                        <div class="w-100 form-floating mt-0">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note" required></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Describe your requirements</label>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-dark text-capitalize">booking
                                confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RequestDemo',
    data() {
        return {
            title: "Why Choose Us",
            test: [
                "We will get to know first your exact requirements.",
                "Explian you how we can help you to grow your business.",
                "Q&A session with our technical expert.",
                "In-depth explanation of pricing and features.",
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