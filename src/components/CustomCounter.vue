<template>
    <div class="container-fluid">
        <div class="row py-4">
            <div v-if="image" class="col-12 col-md-4">
                <img :src="image" style="width: 450px; max-width: 80%" alt="">
            </div>
            <div :class="{ 'col-12': !image, 'col-12 col-md-8': image }">
                <div class="row mt-4">
                    <div class="d-flex flex-column justify-content-center mb-4">
                        <h1 class=" text-center text-capitalize">{{title}}</h1>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                                <AutoCounter :data="serviceCount"> </AutoCounter>&nbsp;+
                            </p>
                            <p class="mt-0 text-capitalize">{{ service }}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                                <AutoCounter :data="categoryCount"> </AutoCounter>&nbsp;+
                            </p>
                            <p class="mt-0 text-capitalize">{{ category }}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                                <AutoCounter :data="placeCount"> </AutoCounter>&nbsp;+
                            </p>
                            <p class="mt-0 text-capitalize">{{ place }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CustomCounter',
    components: {
        AutoCounter
    },
    props: {
        service: { type: String, },
        category: { type: String, },
        place: { type: String, },
        serviceCount: { type: Number, },
        placeCount: { type: Number, },
        categoryCount: { type: Number, },
        image: { type: String, },
        title: { type: String, }
    },

}
</script>