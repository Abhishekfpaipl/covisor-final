<template>
    <div class="container my-5">
        <h1 class="text-capitalize text-center">Testimonials</h1>
        <div class="w-100 d-block">
            <div class="w-100 overflow-auto d-flex align-items-center justify-content-center overflow-x-hidden" ref="slider">
                <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                    class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                    <img :src="review.img" class="rounded-circle" alt="User Image">
                </div>
            </div>
            <div>
                <div class="card position-relative" style="min-width: 18rem;">
                    <div class="card-body p-0">
                        <div class="d-flex justify-content-between align-items-center bg-light border-bottom p-2">
                            <span class="">
                                <span>Fameset </span>
                                <i class="bi bi-star-fill text-warning small me-2"></i>
                                <span class="">{{ getSelectedReviewText.user_rating }}</span>
                            </span>
                            <span class="">
                                <span class="">{{ getSelectedReviewText.date }}</span>
                            </span>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center my-3">
                            <h5 class="lh-1 text-start">{{ getSelectedReviewText.name }}</h5>
                            <div class="d-flex gap-2 overflow-x-scroll" id="scroll">
                                <img :src="image" style="width: 20px; height: 20px; object-fit: contain;"
                                    v-for="image in images" :key="image.id" alt="">
                            </div>
                        </div>
                        <div class="p-2">
                            <p class="text-ellipsis7"><span class="fw-bold">"</span> {{ getSelectedReviewText.value }}
                                <span class="fw-bold">"</span>
                            </p>
                        </div>
                    </div>
                    <div class="card-footer p-0">
                        <div class="d-flex p-2 overflow-x-scroll mt-3" id="scroll">
                            <div class="" style="min-width: 100px;" v-for="(skill, index) in skills" :key="index">
                                <p class="smaller">Out of 10</p>
                                <div class="skill-circle">
                                    <div class="circle-wrap" :style="getCircleStyle(skill.score)">
                                        <div class="inside-circle fs-5">{{ skill.score }}</div>
                                    </div>
                                </div>
                                <p class="text-center mt-2 smaller">{{ skill.name }}</p>
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
    name: 'InfoSection',
    data() {
        return {
            reviews: [
                {
                    id: 1,
                    show: false,
                    img: '/img/customers/1.jpeg',
                    name: 'Kusum',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor transformed our online presence. Their SEO strategies improved our search engine rankings significantly, and their social media campaigns have driven unprecedented traffic to our website. The team is knowledgeable, responsive, and a pleasure to work with. Highly recommend their services!"
                },
                {
                    id: 2,
                    show: false,
                    img: '/img/customers/2.jpeg',
                    name: 'Payal',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor provided us with effective PPC campaigns and valuable insights into our audience's behavior. Their email marketing strategies also helped us retain customers and increase sales. There was a slight delay in the initial setup, but their results made it worth the wait."
                },
                {
                    id: 3,
                    show: false,
                    img: '/img/customers/3.jpeg',
                    name: 'Sumit',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor offered a comprehensive digital marketing plan, including content marketing and influencer partnerships. While the strategies were innovative, the execution was sometimes inconsistent. Customer support was responsive, but project management could be improved."
                },
                {
                    id: 4,
                    show: false,
                    img: '/img/customers/4.jpeg',
                    name: 'Abhishek',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor delivered a robust and scalable software solution tailored to our business needs. Their agile development process kept us involved at every stage, and the final product exceeded our expectations. The team’s expertise and attention to detail were exceptional."
                },
                {
                    id: 5,
                    show: false,
                    img: '/img/customers/5.jpeg',
                    name: 'Rajat',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "We collaborated with Covisor for a custom application development project. Their technical skills are top-notch, and they implemented features that enhanced our operational efficiency. However, there were occasional communication lapses that delayed progress. Overall, a solid choice for software development."
                },
                {
                    id: 6,
                    show: false,
                    img: '/img/customers/6.jpeg',
                    name: 'Jayshree',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor developed our company's internal software. While the final product met our requirements, the development process faced several delays. The team was knowledgeable but could improve on meeting deadlines and providing clearer updates. The end result was satisfactory."
                },
                {
                    id: 7,
                    show: false,
                    img: '/img/customers/7.jpeg',
                    name: 'Lokesh',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor created a stunning and user-friendly website for our business. Their design aesthetics are impeccable, and the site performs flawlessly across all devices. They were receptive to our ideas and made the entire process smooth and enjoyable. Highly recommend!"
                },
                {
                    id: 8,
                    show: false,
                    img: '/img/customers/8.jpeg',
                    name: 'Bhasker',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor revamped our outdated website, giving it a modern look and improved functionality. The team was professional and skilled, delivering a site that aligns with our brand. There were minor hiccups during the integration phase, but they were resolved promptly. Overall, a positive experience."
                },
                {
                    id: 9,
                    show: false,
                    img: '/img/customers/9.jpeg',
                    name: 'Vivek',
                    "rating": 5, "user_rating": 8.5, "date": "27.06.2024",
                    post: "Frontend Developer",
                    value: "Covisor Web Solutions built our new e-commerce site. The design and user interface are excellent, but the project took longer than expected to complete. Communication could have been better, with more frequent updates. Despite the delays, the final website is performing well and attracting more customers."
                },
            ],
            skills: [
                { name: 'Total', score: 9 },
                { name: 'Regularity', score: 9 },
                { name: 'Accuracy', score: 8 },
                { name: 'Performance', score: 7 },
                { name: 'Punctuality', score: 6 },
                { name: 'Health', score: 5 },
                { name: 'Trustful', score: 4 },
                { name: 'Efficiency', score: 4 },
            ],
            expandedReviews: [],
            images: [
                "/img/customers/1.jpeg",
                "/img/customers/2.jpeg",
                "/img/customers/3.jpeg",
                "/img/customers/4.jpeg",
                "/img/customers/5.jpeg",
                "/img/customers/6.jpeg",
                "/img/customers/7.jpeg",
                "/img/customers/8.jpeg",
            ],
            selectedReview: 0,
        }
    },
    computed: {
        infiniteReviews() {
            return this.reviews;
        },
        getSelectedReviewText() {
            return this.infiniteReviews[this.selectedReview];
        },
    },
    mounted() {
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, reviewIndex) {
            this.selectedReview = reviewIndex % this.reviews.length;
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft = selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 2;
            slider.scrollLeft = scrollLeft;
        },
        getCircleStyle(score) {
            const percentage = (score / 10) * 100;
            return {
                background: `conic-gradient(#ffc107 0deg ${percentage * 3.6}deg, #e6e2e7 ${percentage * 3.6}deg 360deg)`
            };
        },
    },
}
</script>

<style scoped>
#scroll::-webkit-scrollbar {
    display: none;
}

.bi-chevron-down {
    transition: transform 0.3s ease;
}

.rating-text {
    height: 50px;
    overflow: hidden;
}

.rating-text.expanded {
    height: auto;
}

.skill-circle {
    width: 45px;
    height: 45px;
    margin: 0 auto;
    position: relative;
}

.circle-wrap {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.inside-circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* font-weight: 700;  */
}

.btn.selectedDiv {
    border: 2px solid var(--brand-color);
}

img {
    width: 80px;
    height: 80px;
    object-fit: cover;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}
</style>