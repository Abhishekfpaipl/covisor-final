<template>
    <div class="container">
        <h1 class="fw-bold text-center">Pricing</h1>
        <p class=" small text-center">No extra or hidden charges, only pay what you see</p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-lg-3">
            <div class="col card border-0 bg-none" v-for="(pack, index) in packs" :key="index">
                <div class="card-body bg-white p-0 pb-4 shadow mx-2">
                    <div class="brand-primary bg-light rounded text-center">
                        <p class="border-bottom fs-4 fw-bold p-2 mb-0 text-capitalize">
                            {{ pack.title }}
                        </p>
                        <p class="mb-0 py-2 align-middle bg-light text-dark">
                            <span class="fs-2 fw-bolder">₹ {{ pack.price }}</span>
                            <span class="fw-light">/user/month build annualy</span>
                        </p>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <p class="fw-light bg-dark  d-inline-block px-4 rounded-3">
                            <span class="text-decoration-line-through text-white">{{ pack.mrp }}</span>
                            <span class="text-white"> ({{ getDiscount(pack) }}% discount)</span>
                        </p>
                    </div>

                    <div class="d-flex justify-content-center">
                        <ul class="list-unstyled text-start">
                            <li class="fw-light" v-for="(feature, featureIndex) in pack.features" :key="featureIndex">
                                <i class="bi bi-check2 pe-2"></i>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <div class=" d-flex px-2 align-items-center justify-content-center">
                        <router-link to="" class="btn border rounded-0 btn-light text-capitalize px-4">
                            Free Trial
                        </router-link>
                        <div class="btn text-capitalize px-4 text-white rounded-0" style="background-color: var(--bg-primary)">
                            <!-- <i class="bi bi-whatsapp"></i> -->
                            <span class="ms-2">Get Start</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StarterPacks",
    data() {
        return {
            packs: [
                {
                    slug: "professional",
                    title: "professional",
                    link: "/professional",
                    price: "499",
                    mrp: "₹ 5,000",
                    features: [
                        "One Page Website",
                        "Single Email Account",
                        "Shared Domain",
                        "Shared Storage",
                    ],
                },
                {
                    slug: "enterprise",
                    title: "enterprise",
                    link: "/enterprise",
                    price: "999",
                    mrp: "₹ 10,000",
                    features: [
                        "Ecommerce Website",
                        "Advance Admin Panel",
                        "Unlimited Page Website",
                        "Google Analytics",
                        "Domain & Hosting"
                    ],
                },
            ]
        }
    },
    methods: {
        getDiscount(pack) {
            const mrp = parseFloat(pack.mrp.replace(/[^\d.-]/g, ''));
            const price = parseFloat(pack.price.replace(/[^\d.-]/g, ''));
            return ((mrp - price) / mrp * 100).toFixed(0);
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>
