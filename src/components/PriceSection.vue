<template>
    <div class="my-3 py-3">
        <div class="container">
            <h1 class="text-center text-capitalize">Services</h1>
            <small>No hidden charges only pay what you see</small>

            <div class="my-3">
                <ul class="nav nav-pills justify-content-center sticky-container" id="pills-tab" role="tablist">
                    <div class="d-flex border p-2 px-3 rounded shadow " style="">
                        <li class="nav-item" role="presentation" v-for="(price, index) in pricing" :key="index">
                            <button class="nav-link text-muted" :class="{ 'active': index === 0 }" :id="'tab-' + index"
                                data-bs-toggle="pill" :data-bs-target="'#content-' + index" type="button" role="tab"
                                :aria-controls="'content-' + index" :aria-selected="index === 0">{{ price.name
                                }}</button>
                        </li>
                    </div>
                </ul>
                <div class="tab-content mt-2 pt-4" id="pills-tabContent">
                    <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(price, index) in pricing"
                        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index"
                        tabindex="0">
                        <div class="container">
                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                                <div class="col" v-for="(plan, index) in price.plans" :key="index">
                                    <div class="card px-3 bg-light rounded-0">
                                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                                        <div class="card-body text-center">
                                            <ul v-if="plan.features" class="list-group">
                                                <li v-for="(feature, featureIndex) in plan.features.slice(0, 4)"
                                                    :key="featureIndex"
                                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                                    <i class="bi bi-check-circle text-success"></i>
                                                    <span class="px-2 text-start">
                                                        {{ feature.name }}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-footer bg-light p-0 border-top pt-2">
                                            <div class="btn-group w-100 my-2">
                                                <router-link :to="`/plan/${price.id}/${plan.id}`"
                                                    class="btn btn-outline-success text-capitalize px-4">
                                                    Know More
                                                </router-link>
                                                <button class="btn text-capitalize px-4 text-white btn-success"
                                                    @click="submitQuery(price, plan)"> <i class="bi bi-whatsapp"></i>
                                                    <span class="ms-2">Enquiry</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceSection",
    data() {
        return {
        };
    },
    computed: {
        pricing() {
            return this.$store.getters['pricing/getPricing']
        }
    },
    // mounted() {
    //     this.initTooltips();
    // },
    // updated() {
    //     this.initTooltips();
    // },
    methods: {
        // initTooltips() {
        //     // Initialize tooltips (assuming using Bootstrap's tooltip)
        //     const tooltipTriggerList = [].slice.call(
        //         document.querySelectorAll('[data-bs-toggle="tooltip"]')
        //     );
        //     tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        //         new window.bootstrap.Tooltip(tooltipTriggerEl);
        //     });
        // },
        // getDiscount(plan) {
        //     if (plan.mrp && typeof plan.mrp === 'string') {
        //         const mrp = parseFloat(plan.mrp.replace(/[^\d.-]/g, ''));
        //         const price = parseFloat(plan.price.replace(/[^\d.-]/g, ''));
        //         if (!isNaN(mrp) && !isNaN(price) && mrp > 0) {
        //             return ((mrp - price) / mrp * 100).toFixed(0);
        //         }
        //     }
        //     return 0;
        // },
        submitQuery(price, plan) {
            const phoneNumber = '918860012001'; // Replace with your WhatsApp number
            const message = `Hello, I want to get your ${price.name} (${plan.name}) service.`;
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    background-color: var(--brand-color) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    /* transform: scale(1.2); */
}

.sticky-container {
    position: sticky;
    top: 70px;
    z-index: 1000;
    background-color: white;
}
</style>
