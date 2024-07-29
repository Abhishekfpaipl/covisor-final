<template>
    <div>
        <div class="query border rounded d-flex flex-column" style="background-color:#212529a3 !important" data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <div class="d-flex align-items-center gap-1">
                <!-- <img src="/img/fameset.svg" style="width: 40px; height: 40px;" alt=""> -->
                <span class="text-white">9.5</span>
                <i class="bi bi-star-fill text-warning"></i>
            </div>
            <p class=" mb-0 text-white small fw-bold">Fameset</p>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg ">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <div class="container text-dark bg-white my-3">
                            <div class="row rounded  border mx-1 p-3 text-bg-dark align-items-center">
                                <div class="col-md-3">
                                    <img src="/img/logo.svg" alt="" class="rounded-circle"
                                        style="width: 120px; height: 120px; object-fit: contain;">
                                </div>
                                <div class="col-md-9 text-center text-md-start">
                                    <p class="my-1 fs-2 fw-bold">Mariana Anderson</p>
                                    <p class="d-inline-block text-start my-1 fs-5">Marketing Manager</p>
                                    <div class="d-flex gap-2 my-1 fs-5">
                                        <span>Fameset</span>
                                        <div class="">
                                            <span v-for="(star, index) in stars" :key="index" class="text-warning">
                                                <i v-if="star === 'full'" class="bi bi-star-fill"></i>
                                                <i v-else-if="star === 'half'" class="bi bi-star-half"></i>
                                                <i v-else class="bi bi-star"></i>
                                            </span>
                                        </div>
                                        <span>5 Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container text-dark bg-white mt-4">
                            <div class="row row-cols-4 row-cols-md-4 mx-1 g-1">
                                <div v-for="(item, index) in fav" :key="index" class="col">
                                    <div class="p-2 card shadow"
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
                        <div class="mx-3 pb-3 pt-4">
                            <button class="w-100 btn btn-warning fs-4"><span class="text-capitalize">We'd Love To Have
                                    Your Feedback</span> <i class="bi bi-arrow-right "></i></button>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
                    </div>
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
                    iconClass: 'bi bi-trophy-fill',
                    iconColor: '#BCDFFB',
                    data: 10,
                    label: 'Awards',

                },
                {
                    iconClass: 'bi bi-award-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Rewards'
                },
                {
                    iconClass: 'bi bi-shield-fill-check',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Badges'
                },
                {
                    iconClass: 'bi bi-hand-thumbs-up-fill',
                    iconColor: '#BCDFFB',
                    data: 10,
                    label: 'Likes',

                },
                {
                    iconClass: 'bi bi-megaphone-fill',
                    iconColor: '#FFB2B2',
                    data: 50,
                    label: 'Promoters'
                },
                {
                    iconClass: 'bi bi-heart-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Thankful'
                },
                {
                    iconClass: 'bi bi-chat-dots-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Reviews'
                },
                {
                    iconClass: 'bi bi-people-fill',
                    iconColor: '#C9E7CA',
                    data: 10,
                    label: 'Users'
                },
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
</style>
