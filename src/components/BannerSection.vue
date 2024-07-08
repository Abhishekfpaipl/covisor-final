<template lang="">
    <div>
        <div class="container-fluid" style="color:var(--brand-color)">
            <div class="row py-md-5">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div class="" style="width:1000px; max-width:100%">
                        <img src="img/sales-banner.svg" class="w-100" >
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center"> 
                        <div class="text-md-start text-center  mt-3 mt-md-0"> 
                            <p class="fs-1 fw-bold m-0 text-capitalize">Solutions for business</p>
                        </div>
                        <AutoTypeDeleteText :texts="services" :typingSpeed="150" :deleteSpeed="50" :delay="500" />
                        <h3 class="mt-3">Streamline .</h3>
                         <div class="mt-3 text-center text-md-start"> 
                            <p class="my-1"><i class="bi bi-check2-square me-2"></i>How to start your digital journey.</p>
                            <p class="my-1"><i class="bi bi-check2-square me-2"></i> How to grow your business online.</p>
                            <p class="my-1"><i class="bi bi-check2-square me-2"></i> How to compete online with big giants.</p> 
                        </div> 
                        <RouterLink to="/free-trial">
                            <div class="btn my-4 fs-5 fw-bold text-white text-capitalize" style="background-color:var(--brand-color)">
                                free consultation
                            </div>
                        </RouterLink>
                        <a href="#second"><i class="bi bi-chevron-down fs-1" style="color:var(--brand-color)" ></i></a> 
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import AutoTypeDeleteText from "@/components/AutoTypeDeleteText.vue"
export default {
    name: 'BannerComp',
    components: {
        AutoTypeDeleteText,
    },
    data() {
        return {
            services: [
                // 'Graphic designing',
                // 'B2B ecommerce development',
                // 'B2C ecommerce development',
                'Digital Marketing',
                'Website Development',
                'Software Development',
            ],
            // show: false,
        }
    }
}
</script>
<style lang="">

</style>