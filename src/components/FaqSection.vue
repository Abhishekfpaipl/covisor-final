<template>
    <div class="my-3 py-3">
        <div class="container">
            <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
                <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                    <li class="nav-item border rounded" role="presentation" v-for="(price, index) in faqs" :key="index">
                        <button class="nav-link" style="white-space: nowrap"
                            :class="{ 'active': index === activeTabIndex }" :id="'tab-' + index" data-bs-toggle="pill"
                            :data-bs-target="'#content-' + index" type="button" role="tab"
                            :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                            @click="activeTabIndex = index">{{ price.name
                            }}</button>
                    </li>
                </div>
            </ul>

            <div class="tab-content" id="pills-tabContent">
                <div class="d-flex align-items-center shadow p-2 mb-3">
                    <input type="search" placeholder="Search for questions?" v-model="searchTerm"
                        class="form-control border-0" ref="searchInput" @keyup.enter="search">
                    <div>
                        <i class="bi bi-search" @click="search"></i>
                    </div>
                </div>
                <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                    v-for="(price, index) in faqs" :key="index" :id="'content-' + index" role="tabpanel"
                    :aria-labelledby="'tab-' + index" tabindex="0">
                    <div class="row">
                        <div class="col-12" v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item my-2 border-0">
                                    <h2 class="accordion-header border">
                                        <button class="accordion-button collapsed bg-light border-start border-4"
                                            type="button" data-bs-toggle="collapse"
                                            :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                            :aria-controls="'flush-collapseOne' + index"
                                            style="border-color: var(--brand-color) !important;">
                                            <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                        </button>
                                    </h2>
                                    <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse border-0"
                                        data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body text-start">{{ faq.answer }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "PriceSection",
    data() {
        return {
            searchTerm: '',
            activeTabIndex: 0
        };
    },
    computed: {
        faqs() {
            return this.$store.getters.getFaqs
        }
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    background-color: var(--brand-color) !important;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}
</style>
