<template>
    <div class="containerr d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background: rgba(248, 249, 250, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center">
                <img src="/img/logo.svg" style="height: 40px;">
                <span class="mb-0 fw-bold fs-2 text-uppercase"
                    style="color:var(--brand-color) !important">covisor</span>
            </router-link>
        </div>
        <i class="bi bi-list fs-2" :class="{ 'hide-on-scroll': hideOnScroll }" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
    </div>
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
                    class="nav-item my-1 text-decoration-none border-bottom">
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
                <a href="https://www.instagram.com/" class="text-decoration-none" style="color: var(--primary-color)">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" class="text-decoration-none" style="color: var(--primary-color)">
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
</template>

<script>
export default {
    data() {
        return {
            selectedMenu: null,
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
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        selectMenu(index) {
            this.selectedMenu = index;
        },
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;

            if (scrollPercentage >= 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else if (scrollPercentage >= 3) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    },
}
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: transparent;
    padding: 10px;
    z-index: 10;
    transition: background-color 0.3s ease-in-out;
}
</style>
