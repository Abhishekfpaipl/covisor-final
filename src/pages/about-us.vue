<template>
    <div style="padding-top: 66px;">
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--brand-color)" v-observe>
            <p class="fs-1">About Us</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <SuccessStory :tests="tests" v-observe />
            <div class="my-5">
                <InfoSection :techTeam="techTeam" :marketingTeam="marketingTeam" :managementTeam="managementTeam"
                    v-observe />
            </div>
            <div class="my-3">
                <AutoScrollingFeatured :links=featured v-observe />
            </div>
        </div>
    </div>
</template>
<script>
import SuccessStory from "@/components/SuccessStory.vue";
import InfoSection from "@/components/InfoSection.vue";
import AutoScrollingFeatured from "@/components/AutoScrollingFeatured.vue";
export default {
    name: "AboutUs",
    components: {
        SuccessStory,
        InfoSection,
        AutoScrollingFeatured,
    },
    data() {
        return {
            tests: [
                {
                    image: 'img/about/ayush.jpg',
                    title: "Ayush Gupta",
                    post:"CEO"
                },
            ]
        }
    },
    computed: {
        featured() {
            return this.$store.getters.getFeaturedIn
        },
        techTeam() {
            return this.$store.getters['about/getTechTeam']
        },
        marketingTeam() {
            return this.$store.getters['about/getMarketingTeam']
        },
        managementTeam() {
            return this.$store.getters['about/getManagementTeam']
        },
    }
}
</script>