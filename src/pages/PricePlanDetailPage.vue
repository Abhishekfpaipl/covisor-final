<!-- src/components/PlanDetails.vue -->
<template>
    <div class="" style="padding-top: 66px;">
        <!-- <div style="width: 100%;"> -->
        <img :src="plan.banner" class="d-md-block d-none"
            style="width: 100%; height: 400px; object-fit: cover; object-position: center;" alt="">
        <img :src="plan.banner" class="d-md-none" style="width: 100%; object-fit: cover; object-position: center;"
            alt="">
        <!-- </div> -->
        <div class="container">
            <h1 class="text-center my-5 cutout"><span>{{ plan.name }}</span></h1>
            <p class="pb-5">{{ plan.description }}</p>
            <div class="row border my-1" v-for="(feature, index) in plan.features" :key="index">
                <div class="col-12 col-md-4 text-md-start text-center bg-light p-2">{{ feature.name }}</div>
                <div class="col-12 col-md-8 p-2 text-md-start text-center">{{ feature.description }}</div>
            </div>

        </div>
        <div class="container-fluid">

            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5"
                style="background-color: var(--bg-forth);">
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
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'PlanDetails',
    components: { ContactForm },
    data() {
        return {
            plan: {}
        };
    },
    computed: {
        pricing() {
            return this.$store.getters.getPricing;
        }
    },
    mounted() {
        const priceId = this.$route.params.priceId;
        const planId = this.$route.params.planId;
        this.plan = this.pricing.find(price => price.id === priceId)
            .plans.find(plan => plan.id === planId);
    }
};
</script>

<style scoped></style>
