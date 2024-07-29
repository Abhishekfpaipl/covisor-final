<template> 
      <div class="container">
        <h1 class="text-capitalize text-center">{{title}}</h1>
        <p class="text-center">{{ subtitle }}</p>
        <div class="w-100 d-block">
          <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
            <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                 class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
              <img :src="review.imgr" class="rounded-circle" alt="User Image">
            </div>
          </div>
          <div>
            <div class="text-center">
              <p class="my-1 fw-bold fs-3">{{ selectedReviewData.name }} ({{ selectedReviewData.company }})</p>
              <p class="my-1">{{ selectedReviewData.service }}</p>
              <ReviewRating :rating="selectedReviewData.rating" />
            </div>
            <div class="text d-flex justify-content-center text-center">
              <p class="w-75 fs-4">" {{ getSelectedReviewText }} "</p>
            </div>
          </div>
        </div>
      </div> 
  </template>
  
  <script>
  import ReviewRating from "@/components/ReviewRating.vue";
  
  export default {
    name: "OurCustomers",
    props:{
      title:{
        type: String,
        required: true
      },
      reviews:{
        type: Array,
        required: true
      },
      subtitle:{
        type: String,
        required: true
      }
    },
    components: {
      ReviewRating,
    },
    data() {
      return {
        selectedReview: 0,
        localReviews: [...this.reviews]
      };
    },
    computed: {
      infiniteReviews() {
        const reviews = this.localReviews.slice();
        return reviews.concat(reviews);
      },
      getSelectedReviewText() {
        return this.infiniteReviews[this.selectedReview].text;
      },
      selectedReviewData() {
        return this.infiniteReviews[this.selectedReview];
      },
    },
    mounted() {
      this.localReviews[this.selectedReview].show = true;
      this.scrollToCenter();
    },
    methods: {
      isSelected(clickedReviewId) {
        return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
      },
      showUser(review, reviewIndex) {
        this.selectedReview = reviewIndex % this.localReviews.length;
        this.scrollToCenter();
      },
      scrollToCenter() {
        const slider = this.$refs.slider;
        const selectedElement = slider.children[this.selectedReview];
        const scrollLeft = selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
        slider.scrollLeft = scrollLeft;
      },
    },
  };
  </script>
  
  <style scoped>
  .btn.selectedDiv {
    border: 2px solid var(--brand-color);
  }
  
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
  
  .btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
  }
  
  .btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
  }
  
  #style-4 {
    scroll-behavior: smooth;
    overflow-x: scroll;
  }
  
  #style-4::-webkit-scrollbar {
    display: none;
  }
  
  .hide-scroll {
    overflow-x: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    border-radius: 5px;
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
  }
  </style>
  