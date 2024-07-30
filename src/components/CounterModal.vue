<template>
    <div>
        <div class="query border rounded d-flex flex-column p-1" style="background-color:#212529a3 !important"
            data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="d-flex align-items-center gap-1">
                <img src="/img/fameset.svg" style="width: 35px; height: 35px;" alt="">
                <span class="text-white fs-5">9.5</span>
                <!-- <i class="bi bi-star-fill text-warning"></i> -->
            </div>
            <p class=" mb-0 text-white small fw-bold">Fameset</p>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg ">
                <div class="modal-content position-relative">
                    <div class="modal-body p-0">
                        <div class="container my-2">
                            <div class="row rounded  border mx-1 p-md-3 p-1 text-bg-light align-items-center">
                                <div class="col-md-2">
                                    <img src="/img/logo.svg" alt="" class="rounded-circle"
                                        style="width: 120px; height: 120px; object-fit: contain;">
                                </div>
                                <div class="col-md-9 text-center text-md-start">
                                    <p class="my-0 fs-3">Covisor Infotech Pvt Ltd</p>
                                    <p class="d-inline-block text-start my-0 fs-5">Solutions for business</p>
                                    <div
                                        class="d-flex flex-column justify-content-center justify-content-md-start flex-md-row align-items-center my-1 fs-5">
                                        <div class="d-flex align-items-center gap-2">
                                            <img src="/img/fameset.svg"
                                                style="width:50px; height: 50px; object-fit: cover;" alt="">
                                            <span class="fs-3">9.5</span>
                                            <span class="text-secondary fs-3">/ 10</span>
                                        </div>
                                        <span class="fs-3">Fameset Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container text-dark bg-white mt-2 mt-md-4">
                            <div class="row row-cols-2 row-cols-md-2 mx-1 g-2">
                                <div v-for="(item, index) in fav" :key="index" class="col">
                                    <div class="p-md-2 p-1 card shadow"
                                        style="background-color: #FFF5DD !important;border-color: #FFCE56 !important;">
                                        <div class="d-md-flex justify-content-between align-items-center border-bottom pb-2"
                                            style="border-color: #FFCE56 !important;">
                                            <i :class="item.iconClass" class="text-dark fs-5"></i>
                                            <p class="fw-bold smaller mb-0">{{ item.label }}</p>
                                        </div>
                                        <p class="fw-bold fs-1 mb-0 d-flex justify-content-center align-items-center">
                                            <AutoCounter :data="item.data" />&nbsp;+
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mx-3 pb-3 pt-md-4 pt-2">
                            <a href="https://www.fameset.com"
                                class="w-100 btn btn-dark text-warning fs-4 btn-hover"><span
                                    class="text-capitalize">We'd Love To Have
                                    Your Feedback</span> <i class="bi bi-arrow-right "></i></a>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 text-bg-danger  px-2 p-1 end-0"
                        data-bs-dismiss="modal" style="top: -3%">
                        <i class="bi bi-x fs-5"></i>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AutoCounter from "@/components/AutoCounter.vue"
export default {
    components: {
        AutoCounter
    },
    data() {
        return {
            fav: [
                {
                    iconClass: 'bi bi-hand-thumbs-up-fill',
                    iconColor: '#BCDFFB',
                    data: 10,
                    label: 'Likes',

                },
                {
                    iconClass: 'bi bi-heart-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Hearts'
                },
                {
                    iconClass: 'bi bi-megaphone-fill',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Promoters'
                },
                {
                    iconClass: 'bi bi-chat-dots-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Reviews'
                },
                // {
                //     iconClass: 'bi bi-trophy-fill',
                //     iconColor: '#BCDFFB',
                //     data: 10,
                //     label: 'Awards',

                // },
                // {
                //     iconClass: 'bi bi-award-fill',
                //     iconColor: '#C9E7CA',
                //     data: 10,
                //     label: 'Rewards'
                // },
                // {
                //     iconClass: 'bi bi-shield-fill-check',
                //     iconColor: '#FFB2B2',
                //     data: 50,
                //     label: 'Badges'
                // },


                // {
                //     iconClass: 'bi bi-people-fill',
                //     iconColor: '#C9E7CA',
                //     data: 10,
                //     label: 'Users'
                // },
            ],
            rating: 4.5,
        };
    },
    computed: {
        stars() {
            const fullStars = Math.floor(this.rating);
            const halfStar = this.rating % 1 !== 0;
            return Array.from({ length: 5 }, (_, index) => {
                if (index < fullStars) {
                    return 'full';
                } else if (index === fullStars && halfStar) {
                    return 'half';
                } else {
                    return 'empty';
                }
            });
        }
    }
};
</script>

<style scoped>
.query {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    left: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.btn-hover:hover {
    background-color: #ffc107 !important;
    color: #000 !important;
}
</style>
