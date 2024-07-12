<template>
    <div class="" style="background-color: var(--brand-color);">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5">
                <h5 class="text-white text-uppercase my-1 text-center">{{ text }}</h5>
                <div class="text-center">
                    <h5 class="text-white text-uppercase text-wrap my-1">
                        <span v-if="service">{{ service }}</span> <br>
                    </h5>
                    <p class="text-center text-capitalize fs-5 my-1">
                        <span v-if="customer" class="bg-warning p-2 pe-0">&nbsp;for&nbsp; {{ customer }}</span>
                        <span v-if="category" class="bg-warning text-capitalize p-2 ps-0">&nbsp;from&nbsp; {{ category
                            }}</span>
                    </p>
                    <p class="text-white text-center text-capitalize fs-5 my-1">
                        <span v-if="place" class="text-uppercase">&nbsp;in&nbsp;{{ place }}</span>
                    </p>
                </div>
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
import ContactForm from '@/components/ContactForm.vue';

export default {
    name: 'FormBanner',
    components: {
        ContactForm,
    },
    props: {
        service: {
            type: String,
        },
        category: {
            type: String,
        },
        place: {
            type: String,
        },
        text: {
            type: String,
        },
        formTitle: {
            type: String,
            default: "Request a demo"
        },
        customer: {
            type: String,

        }
    },
    data() {
        return {
            name: "",
            email: "",
            number: "",
            businessName: "",
            note: "",
            title: this.$route.params.name
        }
    }
}
</script>
