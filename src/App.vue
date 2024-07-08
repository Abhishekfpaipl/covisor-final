<template>
  <TopNav v-if="!hidden" />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar v-if="!hide" />
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage', 'free-trial', 'demo-page', 'sales-demo-one', 'sales-demo-two']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage', 'sales-demo-one', 'sales-demo-two']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --bg-primary: #014c75;
  --bg-secondary: #EB5E28;
  --bg-tertiary: #FEC007;
  --bg-forth: #FBF4F4;
  --brand-color: #021444
}

 


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.smaller {
  font-size: 10px;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.before-enter {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: none !important;
}

.form-control {
  box-shadow: none !important;
}
</style>
