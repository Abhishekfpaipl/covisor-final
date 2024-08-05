<template>
    <div >
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--brand-color)" v-observe>
            <p class="fs-1">About Us</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <SuccessStory :tests="tests" v-observe />
            <div class="my-5">
                <InfoSection :techTeam="techTeam" :marketingTeam="marketingTeam" :managementTeam="managementTeam"
                    v-observe />
            </div>
        </div>
        <div class="">
            <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
                :categoryCount="10" place="projects completed" :placeCount="4000" image="/img/smile2.svg"
                title="know about us" path="/" v-observe />
        </div>
        <div class="my-5">
            <PrivateCoaching :coaching="mission" title=" " />
        </div>
    </div>
</template>
<script>
import SuccessStory from "@/components/SuccessStory.vue";
import InfoSection from "@/components/InfoSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import PrivateCoaching from "@/components/PrivateCoaching.vue";
export default {
    name: "AboutUs",
    components: {
        SuccessStory,
        InfoSection,
        CustomCounter,
        PrivateCoaching,
    },
    data() {
        return {
            mission: [
                {
                    icon: 'bi bi-bullseye',
                    title: "mission",
                    description: "Make Indian Businesses more successful that grows exponentially and sustainably"
                },
                {
                    icon: 'bi bi-eye',
                    title: "vision",
                    description: "Build an enterprise that genuinely serves the nation and creates a positive impact in the world"
                },
                {
                    icon: 'bi bi-gem',
                    title: "value",
                    description: "Find your true north. Master your craft and set the standards for world-class"
                },
            ],
        }
    },
    computed: {
        techTeam() {
            return this.$store.getters['about/getTechTeam']
        },
        marketingTeam() {
            return this.$store.getters['about/getMarketingTeam']
        },
        managementTeam() {
            return this.$store.getters['about/getManagementTeam']
        },
    },

}
</script>