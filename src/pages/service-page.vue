<template>
    <div>
        <div class=" ">
            <FormBanner brandColorOne="#125252" :text="text" :customer="customer" :service="service"
                :category="category" :place="place" v-observe />
        </div>
        <div class="my-5">
            <whatMakesUsDifferent :values="whatMakesUsDifferent" title="What makes us different ?" v-observe />
        </div>
        <div class="my-5">
            <ServiceNameSection :title=service v-observe />
        </div>
        <div class="mt-5">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <BookDemo :faqs="faqs" image-src="/img/demo.svg" title="let's book your free appointment" v-observe />
        </div>
        <div class="">
            <AutoScrolling :links="autoScrolling" imageFilter="invert(1)" textColor="text-white" bgColor="#02539E"
                title="our tech service providers" v-observe />
        </div>
        <div class="">
            <FaqSection :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
                v-observe />
        </div>
        <div class="my-5">
            <HomeTestimonialSection v-observe />
        </div>
        <div class="">
            <ImageSection banner="/img/banner1.png" v-observe />
        </div>
        <div class="">
            <CustomCounter :service="service" :serviceCount="300" :category="category" :categoryCount="50"
                :place="place" :placeCount="500" image="/img/smile.svg" title="our happy customers" path="/"
                v-observe />
        </div>
        <div class="">
            <AutoScrolling :links="country" imageFilter="invert(1)" textColor="text-white" textSize="fs-4 pt-3"
                bgColor="#02539E" title="we are currently working in" v-observe />
        </div>
    </div>
</template>
<script>
import FormBanner from "@/components/FormBanner.vue";
import whatMakesUsDifferent from "@/components/WhatMakesUsDifferent.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import HomeTestimonialSection from "@/components/HomeTestimonialSection.vue";
import ImageSection from "@/components/ImageSection.vue";
import FaqSection from "@/components/FaqSection.vue";
import BookDemo from "@/components/BookDemo.vue";
import ServiceNameSection from "@/components/ServiceNameSection.vue";

export default {
    name: "ServicePage",
    components: {
        FormBanner,
        whatMakesUsDifferent,
        WhyChooseUs,
        AutoScrolling,
        CustomCounter,
        HomeTestimonialSection,
        ImageSection,
        BookDemo,
        FaqSection,
        ServiceNameSection,
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
        },
        country() {
            return this.$store.getters.getCountries
        },
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