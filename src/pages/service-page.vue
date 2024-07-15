<template>
    <div>
        <div class="my-5">
            <FormBanner brandColorOne="#125252" :text="text" :customer="customer" :service="service"
                :category="category" :place="place" v-observe />
        </div>
        <div class="my-5">
            <whatMakesUsDifferent :values="whatMakesUsDifferent" title="What makes us different ?" v-observe />
        </div>
        <div class="mt-5">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <AutoScrolling :links="autoScrolling" imageFilter="invert(1)" textColor="text-white" bgColor="#02539E"
                v-observe />
        </div>
        <div class="my-5">
            <OurCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="">
            <CustomCounter :service="service" :serviceCount="2000" :category="category" :categoryCount="1500"
                :place="place" :placeCount="5000" image="/img/smile.svg" title="our happy customers" path="/"
                v-observe />
        </div>
    </div>
</template>
<script>
import FormBanner from "@/components/FormBanner.vue";
import whatMakesUsDifferent from "@/components/WhatMakesUsDifferent.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
import OurCustomers from "@/components/OurCustomers.vue";
import CustomCounter from "@/components/CustomCounter.vue";

export default {
    name: "ServicePage",
    components: {
        FormBanner,
        whatMakesUsDifferent,
        WhyChooseUs,
        AutoScrolling,
        OurCustomers,
        CustomCounter,
    },
    data() {
        return {
            text: '',
            service: '',
            customer: '',
            category: '',
            place: '',
        }
    },
    computed: {
        autoScrolling() {
            return this.$store.getters.getAutoScrolling
        },
        customers() {
            return this.$store.getters.getCustomers
        },
        whatMakesUsDifferent() {
            return this.$store.getters.getWhatMakesUsDifferent
        }
    },
    mounted() {
        this.extractKeywordsFromRoute();
    },
    methods: {
        extractKeywordsFromRoute() {
            const routeParam = this.$route.params.slug;
            const parts = routeParam.split('-');

            this.text = 'we are offering';
            this.service = parts.slice(3, parts.indexOf('to')).join(' ');
            this.customer = parts.slice(parts.indexOf('to') + 1, parts.indexOf('from')).join(' ');
            this.category = parts.slice(parts.indexOf('from') + 1, parts.indexOf('in')).join(' ');
            this.place = parts.slice(parts.indexOf('in') + 1).join(' ');
        },
    },
}
</script>
<style lang="">

</style>