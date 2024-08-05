<template>
  <div class="">
    <Banner brandColorOne="#125252" v-observe />
    <!-- <CounterModal />  -->
    <div class="my-5">
      <WhatMakesUsDifferent :values="whatMakesUsDifferent" title="What makes us different ?" v-observe />
    </div>
    <div class="my-5">
      <FreeConsultation v-observe />
    </div>
    <div class="my-5" id="second">
      <PriceSection v-observe />
    </div>
    <div class="">
      <WhyChooseUs v-observe />
    </div>
    <div class="">
      <BookDemo :faqs="faqs" image-src="/img/demo.svg" title="let's book your free consultation" v-observe />
    </div>
    <div class="">
      <AutoScrolling :links="scrolling" imageFilter="invert(1)" textColor="text-white" bgColor="#02539E"
        title="our tech service provider" v-observe />
    </div>
    <div class="">
      <FaqSection :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
        v-observe />
    </div>
    <div class="my-5">
      <TestimonialSection />
    </div>
    <div class="">
      <ImageSection banner="/img/banner1.png" v-observe />
    </div>
    <div class="">
      <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
        :categoryCount="10" place="projects completed" :placeCount="1500" image="/img/smile2.svg"
        title="Here's the Impact we have created" path="/about-us" v-observe />
    </div>
    <div class="">
      <AutoScrolling :links="country" imageFilter="invert(1)" textColor="text-white" textSize="fs-4 pt-3"
        bgColor="#02539E" title="we are currently working in" v-observe />
    </div>


  </div>
</template>

<script>
import Banner from "@/components/BannerSection.vue";
import WhatMakesUsDifferent from "@/components/WhatMakesUsDifferent.vue";
import FreeConsultation from "@/components/FreeConsultation.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
import BookDemo from "@/components/BookDemo.vue";
import PriceSection from "@/components/PriceSection.vue";
import ImageSection from "@/components/ImageSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import FaqSection from "@/components/FaqSection.vue";
import TestimonialSection from "@/components/HomeTestimonialSection.vue";
// import CounterModal from "@/components/CounterModal.vue";
export default {
  components: {
    Banner,
    WhatMakesUsDifferent,
    FreeConsultation,
    AutoScrolling,
    BookDemo,
    PriceSection,
    ImageSection,
    CustomCounter,
    WhyChooseUs,
    FaqSection,
    TestimonialSection,
    // CounterModal,
  },
  computed: {
    scrolling() {
      return this.$store.getters.getAutoScrolling
    },
    country() {
      return this.$store.getters.getCountries
    },
    customers() {
      return this.$store.getters.getCustomers
    },
    whatMakesUsDifferent() {
      return this.$store.getters.getWhatMakesUsDifferent
    }
  },
  head() {
    return {
      title: 'Business Automation, Website Development, Software Development & Digital Marketing Services',
      meta: [
        {
          name: 'description',
          content: 'Discover expert business automation, website development, software development, and digital marketing services. Enhance your business efficiency and online presence with our top-notch solutions.'
        },
        {
          name: 'keywords',
          content: 'business automation, website development, software development, digital marketing, Vue.js, web development, online marketing, business solutions'
        },
        {
          property: 'og:title',
          content: 'Business Automation, Website Development, Software Development & Digital Marketing Services'
        },
        {
          property: 'og:description',
          content: 'Discover expert business automation, website development, software development, and digital marketing services. Enhance your business efficiency and online presence with our top-notch solutions.'
        },
        {
          property: 'og:image',
          content: '/img/logo.svg'
        },
        {
          property: 'og:url',
          content: 'https://www.covisor.in'
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Covisor Infotech",
            "url": "https://www.covisor.in",
            "logo": "/img/logo.svg",
            "sameAs": [
              "https://www.facebook.com/Ayush.Covisor/",
              "https://www.linkedin.com/in/mr-ayushgupta/"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 8860012001",
              "contactType": "Customer Service"
            },
            "description": "Discover expert business automation, website development, software development, and digital marketing services. Enhance your business efficiency and online presence with our top-notch solutions."
          }
        }
      ]
    };
  }
}
</script>