<template>
    <div class="container-fluid p-3  bg-dark" style="background-image: url('/img/level.png')">
        <div class="row">
            <div class="col-12 col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center">
                <img src="/img/fameset.svg" style="width: 100px; max-width: 80%; filter: invert(1)" alt="">
                <span class="text-white mb-0 fs-3">FameSet</span>
            </div>
            <div class="col-12 col-md-8 d-flex justify-content-center align-items-center">
                <p class="mb-0 text-capitalize text-warning fw-bold">" we are honored to be awarded by the FameSet in july 2024, for the best Lead management software company in India<span v-if="service">in {{ service }}</span> <span v-if="category">, in {{ category }}</span> <span v-if="place">in {{ place
                        }}.</span> "
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FameFoot",
    props: ['service', 'category', 'place'],
}
</script>
<style></style>