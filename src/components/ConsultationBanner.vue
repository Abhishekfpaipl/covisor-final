<template>
    <div>
        <div class="col-12 position-relative">
            <img src="/img/homeBannerDesk.jpg" class="d-none d-md-block min-vh-100"
                style="width:100%; height:400px; object-fit:cover;" />
            <img src="/img/homeBannerMob.jpg" class="d-md-none" style="width:100%; object-fit:cover;" />
            <div class="overlay text-white">
                <h1 class="text-center text-uppercase">Personalized Business Development Program</h1>
                <h3 class="text-center text-capitalize card p-4 my-4">One to One Consultation <br> for your <br> Step by
                    Step Evolution</h3>
                <p class="mt-3 text-capitalize">Do you want to see your business become scalable, profitable, and on
                    autopilot?<br> and you want implementation in your business and no more trainings now.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComp',
}
</script>

<style scoped>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    /* Black with opacity */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>