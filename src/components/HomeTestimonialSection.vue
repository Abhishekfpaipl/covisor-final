<template>
    <div class="my-5 text-dark">
        <h1 class="text-capitalize text-center">Hear From Our Clients</h1>
        <p class="text-center mb-0">More than 1000 business owners dubbled their business or more you can grow your
            business too</p>
        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class=" smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class=" smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index" style="min-height: 170px;">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class=" smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class=" smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index" style="min-height: 170px;">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class=" smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class=" smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index" style="min-height: 170px;">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class=" smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class=" smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index" style="min-height: 170px;">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class="smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index" style="min-height: 170px;">
                        <div class="card-container position-relative rounded p-2" style="background-color: #f0f8ff;">
                            <div class="card px-2">
                                <div
                                    class="card-header px-1 bg-white d-flex flex-column justify-content-center align-items-center">
                                    <div class="rounded-circle border border-dark border-2 overflow-hidden p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" class="rounded-circle" alt="Profile"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                    <p class="smaller mb-0 mt-2 text-ellipsis1">{{ card.name }}</p>
                                </div>
                                <div class="card-body p-0" style="max-width: 250px;">
                                    <p class="text-emphasis-danger smaller mb-0 text-ellipsis1">{{ card.title }}</p>
                                    <p class="smaller mb-0 text-ellipsis1">{{ card.tax }} </p>
                                    <p class="fw-bold text-info smaller mb-0 text-ellipsis1">{{ card.time }}</p>
                                    <p class="smaller mb-0 mt-0 text-ellipsis5 p-2">{{ card.review }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "AutoScrolling",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            cards: [
                {
                    "image": "/img/customers/1.jpeg",
                    "name": "Kusum Malik",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The digital marketing strategies provided by this team have significantly increased our online presence and engagement. Their expertise in SEO and social media marketing is exceptional!"
                },
                {
                    "image": "/img/customers/2.jpeg",
                    "name": "Payal Sharma",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The custom software development solutions delivered by this company have streamlined our operations. Their understanding of our business needs and the quality of the software is truly impressive."
                },
                {
                    "image": "/img/customers/3.jpeg",
                    "name": "Sumit Rawat",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Their website development services transformed our online platform into a user-friendly and visually appealing site. The project was completed on time, and the team's attention to detail was outstanding."
                },
                {
                    "image": "/img/customers/4.jpeg",
                    "name": "Abhishek Kumar",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Thanks to their comprehensive digital marketing strategies, we've seen a remarkable increase in website traffic and customer inquiries. The team's dedication and creativity are commendable."
                },
                {
                    "image": "/img/customers/5.jpeg",
                    "name": "Rajat Yadav",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The software development team provided us with innovative solutions that have greatly enhanced our business processes. Their professional approach and technical expertise are top-notch."
                },
            ],
            secondCard: [
                {
                    "image": "/img/customers/6.jpeg",
                    "name": "Vaishali Gupta",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The digital marketing strategies provided by this team have significantly increased our online presence and engagement. Their expertise in SEO and social media marketing is exceptional!"
                },
                {
                    "image": "/img/customers/7.jpeg",
                    "name": "Yogesh Sharma",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The custom software development solutions delivered by this company have streamlined our operations. Their understanding of our business needs and the quality of the software is truly impressive."
                },
                {
                    "image": "/img/customers/8.jpeg",
                    "name": "Sahil Gupta",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Their website development services transformed our online platform into a user-friendly and visually appealing site. The project was completed on time, and the team's attention to detail was outstanding."
                },
                {
                    "image": "/img/customers/9.jpeg",
                    "name": "Sikander Khan",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Thanks to their comprehensive digital marketing strategies, we've seen a remarkable increase in website traffic and customer inquiries. The team's dedication and creativity are commendable."
                },
                {
                    "image": "/img/customers/10.jpeg",
                    "name": "Nandini Singh",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The software development team provided us with innovative solutions that have greatly enhanced our business processes. Their professional approach and technical expertise are top-notch."
                },
            ],
            thirdCard: [
                {
                    "image": "/img/customers/11.jpeg",
                    "name": "Mathivanan R",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The digital marketing strategies provided by this team have significantly increased our online presence and engagement. Their expertise in SEO and social media marketing is exceptional!"
                },
                {
                    "image": "/img/customers/12.jpeg",
                    "name": "Muhammad Junaid",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The custom software development solutions delivered by this company have streamlined our operations. Their understanding of our business needs and the quality of the software is truly impressive."
                },
                {
                    "image": "/img/customers/13.jpeg",
                    "name": "Kirti Shahi",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Their website development services transformed our online platform into a user-friendly and visually appealing site. The project was completed on time, and the team's attention to detail was outstanding."
                },
                {
                    "image": "/img/customers/14.jpeg",
                    "name": "Pratham Jindal",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "Thanks to their comprehensive digital marketing strategies, we've seen a remarkable increase in website traffic and customer inquiries. The team's dedication and creativity are commendable."
                },
                {
                    "image": "/img/customers/15.jpeg",
                    "name": "Atif Gul",
                    "subtitle": "Director at RBB Buildcon Pvt. Ltd.",
                    "review": "The software development team provided us with innovative solutions that have greatly enhanced our business processes. Their professional approach and technical expertise are top-notch."
                },
            ],

        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>

<style scoped>
.card {
    min-height: 170px !important;
} 
.card-body {
    padding: 20px;
    text-align: center;
}
   
.card-container {
    min-width: 15rem !important;
}

/* Quotation marks */
.card-container::before {
    content: '“';
    position: absolute;
    font-size: 2em;
    /* color: #4ecdc4; */
    color: black;
    font-family: sans-serif;
}

.card-container::after {
    content: '”';
    position: absolute;
    font-size: 2em;
    color: black;
    font-family: sans-serif;
}

.card-container::before {
    top: 0;
    left: -5px;
}

.card-container::after {
    bottom: -20px;
    right: -5px;
}
</style>