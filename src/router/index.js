import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [
  {
    path: "/",
    name: "home-page",
    component: () => import("@/pages/home-page.vue")
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("@/pages/about-us.vue")
  },
  {
    path: "/business",
    name: "business-page",
    component: () => import("@/pages/business-page.vue")
  },
  {
    path: "/career",
    name: "career-page",
    component: () => import("@/pages/career-page.vue")
  },
  {
    path: "/category-sentence/:id",
    name: "category-sentence",
    component: () => import("@/pages/category-sentence.vue")
  },
  {
    path: "/customer-sentence/:id",
    name: "customer-sentence",
    component: () => import("@/pages/customer-sentence.vue")
  },
  {
    path: "/place-sentence/:id",
    name: "place-sentence",
    component: () => import("@/pages/place-sentence.vue")
  },
  {
    path: "/service-sentence/:id",
    name: "service-sentence",
    component: () => import("@/pages/service-sentence.vue")
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/pages/contact-us.vue")
  },
  {
    path: "/faqs",
    name: "faqs-page",
    component: () => import("@/pages/faqs-page.vue")
  },
  {
    path: "/free-trial",
    name: "free-trial",
    component: () => import("@/pages/free-trial.vue")
  },
  {
    path: "/legal-warning",
    name: "legal-warning",
    component: () => import("@/pages/legal-warning.vue")
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/privacy-policy.vue")
  },
  {
    path: "/reseller-program",
    name: "reseller-program",
    component: () => import("@/pages/reseller-program.vue")
  }, 
  {
    path: "/service/:slug",
    name: "service-page",
    component: () => import("@/pages/service-page.vue")
  },
  {
    path: "/terms-of-use",
    name: "term-of-use",
    component: () => import("@/pages/term-of-use.vue")
  },
  {
    path: "/plan/:priceId/:planId",
    name: "PricePlanDetailPage",
    component: () => import('@/pages/PricePlanDetailPage.vue')
  },
  // {
  //   path: "/clients",
  //   name: "OurClients",
  //   component: () => import('@/pages/OurClients.vue')
  // },
  {
    path: "/digital-marketing",
    name: "DigitalMarketingPage",
    component: () => import('@/pages/DigitalMarketingPage.vue')
  },
  {
    path: "/website-development",
    name: "WebsiteDevelopmentPage",
    component: () => import('@/pages/WebsiteDevelopmentPage.vue')
  },
  {
    path: "/software-development",
    name: "SoftwareDevelopmentPage",
    component: () => import('@/pages/SoftwareDevelopmentPage.vue')
  },
  {
    path: "/free-consultation",
    name: "free-consultation",
    component: () => import('@/pages/free-consultation.vue')
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
