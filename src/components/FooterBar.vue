<template>
    <div class="container-fluid pt-3 border-top border-bottom" style="color: var(--brand-color) !important">
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <router-link to="/">
                    <img :src="img" style="width: 100px;object-fit: contain;">
                </router-link>
                <p class="mb-0 fw-bold fs-2 text-uppercase">covisor</p>
                <p class="mb-0 fs-4 fw-bold text-uppercase">Infotech Pvt Ltd</p>
                <p class="my-0 text-capitalize fs-4">solutions for business</p>

            </div>

            <div class=" col-12 col-md-4 mb-3 text-center">
                <p class="mb-2 fw-bold">Contact Us</p>
                <p class="mb-2">Email : support@covisor.in</p>
                <p class="mb-2">Mob no. : 91 8860012001</p>
                <p class="mb-2">Address : 2nd Floor, Block B1/632, <br> Janakpuri, 110058, Delhi, India</p>
                <div class="d-flex gap-2 justify-content-center align-items-center">
                    <p class="fw-bold mb-0">Follow Us :</p>
                    <!-- <i class="bi bi-twitter-x"></i> -->
                    <a href="https://www.facebook.com/Ayush.Covisor/"
                        class="d-flex align-items-center gap-2 text-decoration-none" style="color: var(--brand-color) !important">
                        <i class="bi bi-facebook"></i>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.linkedin.com/in/mr-ayushgupta/"
                        class="d-flex align-items-center gap-2 text-decoration-none" style="color: var(--brand-color) !important">
                        <i class="bi bi-linkedin"></i>
                        <span>LinkedIn</span>
                    </a>
                    <!-- <i class="bi bi-instagram"></i> -->
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex justify-content-around">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Company</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1 "
                            style="color: var(--brand-color) !important" v-for="(link, index) in company"
                            :key="index">{{ link.name }}</router-link>
                    </div>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <div class="d-flex flex-column">
                        <router-link :to="link.link" class="text-decoration-none my-1"
                            style="color: var(--brand-color) !important" v-for="(link, index) in links" :key="index">{{
                                link.name }}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <FameFoot /> -->
    <div class="bg-light text-center py-3 d-flex align-items-center justify-content-center">
        <p class="text-dark mb-0"> Copyright © 2024 Covisor Infotech Pvt Ltd All rights reserved</p>
    </div>
</template>

<script>
// import FameFoot from '@/components/FameFoot.vue'
export default {
    name: 'FooterBar',
    components: {
        // FameFoot,
    },
    data() {
        return {
            img: '/img/logo.svg',
            company: [
                {
                    id: 4,
                    name: 'Contact Us',
                    link: '/contact-us'
                },
                {
                    id: 42,
                    name: 'About Us',
                    link: '/about-us'
                },
                {
                    id: 3,
                    name: 'Patnership',
                    link: '/reseller-program'
                },
                {
                    id: 9,
                    name: 'Career',
                    link: '/career'
                },
                {
                    id: 3,
                    name: 'Business',
                    link: '/business'
                },
            ],
            links: [
                {
                    id: 13,
                    name: 'Legal Warnings',
                    link: '/legal-warning'
                },
                {
                    id: 1,
                    name: 'Privacy Policies',
                    link: '/privacy-policy'
                },
                {
                    id: 1,
                    name: 'Terms & Conditions',
                    link: '/terms-of-use'
                },
                {
                    id: 1,
                    name: 'Cookies Policies',
                    link: '/cookies'
                },
                {
                    id: 1,
                    name: 'Return Policies',
                    link: '/return-policy'
                },



            ],
        }
    },
}
</script>

<style></style>
