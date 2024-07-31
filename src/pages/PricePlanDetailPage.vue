 
<template>
    <div class="" >
        <!-- <div style="width: 100%;"> -->
        <img :src="plan.banner" class="d-md-block d-none"
            style="width: 100%; height: 400px; object-fit: cover; object-position: center;" alt="">
        <img :src="plan.banner" class="d-md-none" style="width: 100%; object-fit: cover; object-position: center;"
            alt="">
        <!-- </div> -->
        <div class="container">
            <h1 class="text-center my-5 cutout"><span>{{ plan.name }}</span></h1>
            <p v-if="plan.description" class="pb-5">{{ plan.description }}</p>
            <div class="row border my-1" v-for="(feature, index) in plan.features" :key="index">
                <div class="col-12 col-md-4 text-md-start text-center bg-light p-2 fw-bold">{{ feature.name }}</div>
                <div class="col-12 col-md-8 p-2 text-md-start text-center">{{ feature.description }}
                    <a href="#subPara" class="text-dark">
                        <i v-if="plan.subTitle && !index" class="bi bi-arrow-down"></i>
                    </a>
                </div>
            </div>
            <div class="mt-5 py-5" id="subPara" v-if="plan.subTitle">
                <p class=" fs-1">{{ plan.subTitle }}</p>
                <div class="row border my-1" v-for="(feature, index) in plan.subFeatures" :key="index">
                    <div class="col-12 col-md-4 text-md-start text-center bg-light p-2 fw-bold">{{ feature.name }}</div>
                    <div class="col-12 col-md-8 p-2 text-md-start text-center">{{ feature.description }}</div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row row-cols-2 row-cols-4 g-2">
                <div class="col" v-for="(module, index) in plan.module" :key="index">
                    <div class="card px-3 bg-light rounded-0">
                        <div class="py-2 border-bottom fw-bold">{{ module.title }}</div>
                        <div class="card-body text-center">
                            <ul v-if="module.features" class="list-group">
                                <li v-for="(feature, featureIndex) in module.features.slice(0, 4)" :key="featureIndex"
                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <span class="px-2 text-start">
                                        {{ feature }}
                                    </span>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
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
            return this.$store.getters['pricing/getPricing'];
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
