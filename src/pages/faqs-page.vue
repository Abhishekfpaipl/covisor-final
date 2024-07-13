<template>
    <div style="padding-top: 66px;">
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--brand-color);">
            <h1 class="text-center mb-4">Frequently Asked Questions</h1>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;">
            <FaqSection  />
        </div>
    </div>
</template>
<script>
import FaqSection from '@/components/FaqSection.vue';
export default {
    name: 'FaqPage',
    components: {
        FaqSection,
    },
}
</script>