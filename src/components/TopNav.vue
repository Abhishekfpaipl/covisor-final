<template>
    <!-- Desktop version -->
    <div class="d-lg-block d-none w-100 position-fixed w-100 top-0 border-bottom "
        style="z-index: 10;"
        :style="{ backgroundColor: containerBackgroundColor }">
        <nav class="navbar navbar-expand-lg py-3">
            <div class="container-fluid d-flex justify-content-center align-items-center">
                <router-link to="/" class="d-flex align-items-center w-25 text-decoration-none">
                    <img src="/img/logo.svg" style="width: 40px;">
                    <span class="ms-2 text-dark">Covisor</span>
                </router-link>

                <div class="w-75">
                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                        <li v-for="(cat, index) in menuCategories" :key="index" @mouseover="setHoveredCategory(index)"
                            @mouseout="clearHoveredCategory" class="category d-inline position-relative">
                            <router-link :to="cat.path" class="title px-2 text-decoration-none text-dark">
                                {{ cat.title }}
                            </router-link>

                            <div class="mega-menu " :style="{ backgroundColor: cat.bgColor }">
                                <div v-if="cat.subCat" class="px-4">
                                    <ul class="d-flex  list-unstyled mega-items flex-wrap py-4">
                                        <li v-for="(subCat, index) in cat.subCat" :key="index"
                                            class="py-2 px-3 text-capitalize">
                                            <router-link :to="subCat.path" class="text-decoration-none ">
                                                <a :href="subCat.path"
                                                    class="sub-title fw-bold text-decoration-none text-dark">{{
                                                        subCat.name }}</a>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <!-- Mobile version -->
    <!-- <div class="d-flex justify-content-between d-lg-none p-2 w-100 bg-light py-3 border-bottom" style="z-index: 8;"> -->
    <div class="container-fluid d-flex justify-content-between d-lg-none p-2 position-fixed top-0 w-100 bg-light py-3 border-bottom"
        style="z-index: 8;">
        <router-link to="/" class="text-decoration-none ">
            <img src="/img/logo.svg" style="height: 40px;">
            <span class="ms-2 text-dark">Covisor</span>
        </router-link>
        <i class="bi bi-list fs-1 text-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"></i>

        <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel" style="">
            <div class="offcanvas-header border-bottom">
                <img src="/img/logo.svg" style="height:40px" alt="">
                <h5 class="offcanvas-title ms-2" id="offcanvasExampleLabel">Covisor</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body ">
                <ul class="nav nav-pills flex-column mb-auto">
                    <router-link :to="link.path" v-for="(link, index) in menuCategories" :key="index"
                        class="nav-item my-1 text-decoration-none border-bottom" >
                        <button @click="selectMenu(index)" data-bs-dismiss="offcanvas"
                            class="btn rounded border-0 w-100 d-flex align-items-center p-0 py-1">
                            <div class="btn-toggle collapsed" data-bs-toggle="collapse"
                                :data-bs-target="'#home-collapse' + index" aria-expanded="false">
                                <div class="d-flex align-items-center">
                                    <span>{{ link.title }}</span>
                                </div>
                            </div>
                        </button>
                        <div class="ms-3 ps-3 collapse show" :id="'home-collapse' + index">
                            <ul class="btn-toggle-nav list-unstyled">
                                <li v-for="(sub, subIndex) in link.subCat" :key="subIndex" class="mt-1">
                                    <button class="btn rounded border-0 w-100 p-0 py-1" @click="handleLinkClick"
                                        data-bs-dismiss="offcanvas">
                                        <router-link :to="sub.path"
                                            class="pt-2 pb-0 d-flex align-items-center text-capitalize text-decoration-none text-dark border-top">
                                            <i class="bi pe-2 fs-5 lh-1 bi-chevron-right"></i>
                                            <span>{{ sub.name }}</span>
                                        </router-link>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </router-link>
                </ul>
                <p class="text-center fs-4 my-4">Reach Us</p>
                <div class="d-flex justify-content-evenly fs-2 w-100">
                    <a href="https://www.instagram.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://in.linkedin.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            hoveredCategoryIndex: -1,
            selectedMenu: null,
            selectedSubMenu: null,
            menuCategories: [
                {
                    id: 2,
                    title: 'Home',
                    path: '/',
                    bgColor: '#F8F9FA',
                },
                {
                    id: 1,
                    title: 'Solutions',
                    path: '',
                    bgColor: '#F8F9FA',
                    subCat: [
                        { name: 'Digital Marketing', path: '/digital-marketing' },
                        { name: 'Website Development', path: '/website-development' },
                        { name: 'Software Development', path: '/software-development' },
                    ],
                },
                {
                    id: 3,
                    title: 'Contact Us',
                    path: '/contact-us',
                    bgColor: '#F8F9FA',
                },
                {
                    id: 4,
                    title: 'About Us',
                    path: '/about-us',
                    bgColor: '#F8F9FA',
                },
            ],
        };
    },
    computed: {
        mainMenu() {
            return this.$store.getters.mainMenu
        },
        containerBackgroundColor() {
            if (this.hoveredCategoryIndex !== -1) {
                return this.menuCategories[this.hoveredCategoryIndex].bgColor;
            }
            return '#F8F9FA';
        },
    },
    methods: {
        toggleMainMenu() {
            this.$store.dispatch('toggleMainMenu');
        },
        setHoveredCategory(index) {
            this.hoveredCategoryIndex = index;
        },
        clearHoveredCategory() {
            this.hoveredCategoryIndex = -1;
        },
        selectMenu(index) {
            this.selectedMenu = index;
        },
        // handleLinkClick() { 
        //     const offcanvasElement = document.querySelector('.offcanvas');
        //     const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
        //     offcanvas.hide();
        // },
    },
}
</script>

<style scoped>
.mega-menu {
    display: none;
    position: fixed;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 3;
    width: 100vw;
}

.category:hover .title {
    color: var(--brand-color) !important;
    border-bottom: 2px solid var(--brand-color) !important;
    font-weight: 600;
}

.sub-title:hover {
    color: var(--brand-color) !important;
    border-bottom: 2px solid var(--brand-color) !important;
    font-weight: 600;
}

.category:hover .mega-menu {
    display: block;
}

.accordion-button:focus {
    box-shadow: none !important
}

.accordion-button:not(.collapsed) {
    background-color: transparent;
    box-shadow: none;
}

.accordion-button::after {
    display: none;
}

.accordion-item .accordion-button {
    background-color: transparent;
}
</style>