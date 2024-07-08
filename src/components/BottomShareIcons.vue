<template>
    <div>
        <div class="whatsapp rounded-circle border d-flex align-items-center justify-content-center bg-success text-white"
            @click="openWhatsapp()" style="width: 37px; height: 37px;">
            <i class="bi bi-whatsapp fs-5"></i>
        </div>

        <div class="phone rounded-circle border d-flex align-items-center justify-content-center bg-primary text-white"
            @click="openDialer()" style="width: 37px; height: 37px;">
            <i class="bi bi-telephone fs-5"></i>
        </div>

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            query: '',
        }
    },
    methods: {
        submitQuery() {
            console.log('Submit Query')
            const data = {
                name: this.name,
                email: this.email,
                query: this.query,
            }
            this.$store.dispatch('submitQuery', data)
        },
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
        openWhatsapp() {
            window.open(`https://wa.me/${918860012001}?text=Hello...`, '_blank');
        }
    }
}
</script>
<style scoped>
.whatsapp {
    z-index: 9;
    position: fixed;
    bottom: 17%;
    left: 10px;
    cursor: pointer;
    padding: 5px !important
}

.phone {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    left: 10px;
    cursor: pointer;
    padding: 5px
}
</style>