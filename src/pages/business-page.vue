<template>
    <div>
        <div class="my-5">
            <FormBanner />
        </div>
        <div class="">
            <BusinessCard />
        </div>
    </div>
</template>
<script>
import FormBanner from '@/components/FormBanner.vue';
import BusinessCard from "@/components/BusinessCard.vue";
export default {
    name: "BusinessPage",
    components: {
        FormBanner,
        BusinessCard,
    }
}
</script>
<style lang="">

</style>