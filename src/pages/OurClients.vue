<template>
    <div >
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--brand-color)" v-observe>
            <p class="fs-1">Our Clients</p>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;" v-observe>
            <div class="d-flex gap-3 flex-wrap py-5">
                <div class="" v-for="(client, index) in clients" :key="index">
                    <img :src="client" style="width: 80px; height: 50px; object-fit: contain" class="rounded" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clients: [
                "img/clients/1.png",
                "img/clients/2.png",
                "img/clients/3.png",
                "img/clients/4.png",
                "img/clients/5.jpg",
                "img/clients/6.png",
                "img/clients/7.png",
                "img/clients/8.png",
                "img/clients/9.png",
                "img/clients/10.png",
                "img/clients/11.png",
                "img/clients/12.png",
                "img/clients/13.png",
                "img/clients/14.png",
                "img/clients/15.png",
                "img/clients/16.png",
                "img/clients/17.png",
                "img/clients/18.png",
                "img/clients/19.png",
                "img/clients/20.png",
                "img/clients/21.png",
                "img/clients/22.png",
                "img/clients/23.png",
                "img/clients/24.png",
                "img/clients/25.png",
                "img/clients/26.png",
                "img/clients/27.png",
                "img/clients/28.png",
                "img/clients/29.png",
                "img/clients/30.png",
                "img/clients/31.png",
                "img/clients/32.png",
                "img/clients/33.png",
                "img/clients/34.png",
                "img/clients/35.png",
                "img/clients/36.png",
                "img/clients/37.png",
                "img/clients/38.png",
                "img/clients/39.png",
                "img/clients/40.png",
                "img/clients/41.png",
                "img/clients/42.png",
                "img/clients/43.png",
                "img/clients/44.png",
                "img/clients/45.png",
                "img/clients/46.png",
                "img/clients/47.png",
                "img/clients/48.png",
                "img/clients/49.png",
                "img/clients/50.png",
                "img/clients/51.png",
                "img/clients/52.png",
                "img/clients/53.png",
                "img/clients/54.png",
                "img/clients/55.png",
                "img/clients/56.png",
                "img/clients/57.png",
                "img/clients/58.png",
                "img/clients/59.png",
                "img/clients/60.png",
                "img/clients/61.png",
                "img/clients/62.png",
                "img/clients/63.png",
                "img/clients/64.png",
                "img/clients/65.png",
                "img/clients/66.png",
                "img/clients/67.png",
                "img/clients/68.png",
                "img/clients/69.png",
                "img/clients/70.png",
                "img/clients/71.png",
                "img/clients/72.png",
                "img/clients/73.png",
                "img/clients/74.png",
                "img/clients/75.png",
                "img/clients/76.png",
                "img/clients/77.png",
                "img/clients/78.png",
                "img/clients/79.png",
                "img/clients/80.png",
                "img/clients/81.png",
                "img/clients/82.jpg",
                "img/clients/83.png",
                "img/clients/84.png",
                "img/clients/85.png",
                "img/clients/86.png",
                "img/clients/87.png",
                "img/clients/88.png",
                "img/clients/89.png",
                "img/clients/90.png",
                "img/clients/91.png",
                "img/clients/92.png",
            ]
        }
    }
}
</script>
<style lang="">

</style>