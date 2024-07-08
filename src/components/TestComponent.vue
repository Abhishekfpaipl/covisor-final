<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col position-relative flex-wrap d-flex align-items-center justify-content-center pt-5"
                v-for="(test, index) in tests" :key="index">
                <div class="card">
                    <div class="image">
                        <img href="#" :src="test.image" alt="Card image">
                    </div>
                    <div class="content">
                        <h3>{{ test.title }}</h3>
                        <p class="text-ellipsis2">{{ test.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imageSrc: 'https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg',
            tests: [
                {
                    image: 'https://img.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_2175-1809.jpg?w=740',
                    title: "Website Development",
                    description: "https://www.freepik.com/premium-vector/ui-ux-programmer-flat-design-vector-illustration-business-information-team-sharing-ideas-with-designer-coding-interface-software-app-development_20986097.htm#fromView=search&page=2&position=29&uuid=3a324ee3-8e9c-4e4a-9fed-3b9443d57291"
                },
                {
                    image: 'https://img.freepik.com/free-vector/app-development-concept-design_23-2148670525.jpg?t=st=1719995008~exp=1719998608~hmac=19e8a06dd32e1962945be0ca586d1f2c9b725fde45e7a863c966703802bdb976&w=740',
                    title: "Software Development ",
                    description: "https://www.freepik.com/free-vector/app-development-concept-design_10115990.htm#fromView=search&page=2&position=48&uuid=3a324ee3-8e9c-4e4a-9fed-3b9443d57291"
                },
                {
                    image: 'https://img.freepik.com/free-vector/circular-influencer-marketing-vector_23-2147698406.jpg?t=st=1719994620~exp=1719998220~hmac=b288a55bab315d40852d883990a43f29e7aebce9b59cff9014fa767f6fd0bf16&w=740',
                    title: "Digital Marketing",
                    description: "https://www.freepik.com/free-vector/circular-influencer-marketing-vector_1364819.htm#fromView=search&page=1&position=18&uuid=6fa0702f-11c4-4ef2-828e-49bb34fa1cbc"
                },
            ]
        };
    }
};
</script>

<style scoped>
.card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    border-radius: 15px;
}

.card:hover {
    height: 320px;
}

.image {
    position: relative;
    width: 260px;
    min-height: 260px;
    top: -40%;
    left: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.image img {
    max-width: 100%;
    border-radius: 15px;
}

.content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
}
</style>