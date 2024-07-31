<template>
    <div class="container">
        <h1 class="my-4 text-center text-capitalize">We are offering softwares</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-2">
            <div class="col" v-for="(service, index) in services" :key="index">
                <router-link :to="'/service-sentence/' + service.name" class="card text-decoration-none">
                    <div class="d-flex justify-content-center align-items-center py-2">
                        <div class="border rounded-circle p-3 px-4">{{ index + 1 }}</div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title text-center text-capitalize">{{ service.name }}</h5>
                        <p class="card-text text-center text-ellipsis">{{ service.description }}</p>
                        <a href="#" class="btn w-100 text-white" style="background-color: var(--brand-color)">More</a>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="my-4 text-center text-capitalize">we are loved by peoples</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div class="col" v-for="(customer, index) in customers" :key="index">
                <router-link :to="'/customer-sentence/' + customer.name" class="card text-decoration-none p-2"
                    :style="{ backgroundColor: customer.color }">
                    <p class="text-center border-bottom py-2 border-dark fs-4"><i class="bi bi-globe"></i></p>
                    <div class="card-body text-center pt-0 ">
                        <p class="card-text text-capitalize my-1 fw-bold">{{ customer.name }}</p>
                        <p class="card-text text-capitalize">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Alias, cupiditate.</p>
                    </div>
                </router-link>
            </div>
        </div>

        <h1 class="my-4 text-center text-capitalize">We are working for Categories</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div class="col" v-for="(category, index) in categories" :key="index">
                <router-link :to="'/category-sentence/' + category.name" class="card text-decoration-none">
                    <p class="text-center card-header fs-4">
                        <img v-if="category.img" :src="category.img" style="width: 30px;" alt="">
                        <i v-else class="bi bi-globe"></i>
                    </p>
                    <div class="card-body text-center">
                        <p class="card-text text-capitalize my-1 fw-bold">{{ category.name }}</p>
                        <p class="card-text text-capitalize my-1">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Alias, quae!</p>
                    </div>
                </router-link>
            </div>
        </div>
        <h1 class="my-4 text-center text-capitalize">our working area</h1>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
            <div class="col" v-for="(place, index) in places" :key="index">
                <router-link :to="'/place-sentence/' + place.name" class="card text-decoration-none">
                    <p class="text-center card-header text-capitalize border-0">{{ place.name }}</p>
                </router-link>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name: "BusinessCard",
    data() {
        return { 
        }
    },
    computed: {
        categories() {
            return this.$store.getters['business/getCategories']
        },
        services() {
            return this.$store.getters['business/getServices']
        },
        places() {
            return this.$store.getters['business/getPlaces']
        },
        customers() {
            return this.$store.getters['business/getCustomers']
        },
    }
}
</script>