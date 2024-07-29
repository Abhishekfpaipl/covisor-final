<template>
    <div class="" style="padding-top: 66px;">
        <div class="col-12">
            <img src="/img/homeBannerDesk.jpg" class="position-relative min-vh-100 d-none d-md-block"
                style="width:100%; height:400px; object-fit:cover;">
            <img src="/img/homeBannerMob.jpg" class="position-relative d-md-none" style="width:100%;object-fit:cover;">
        </div>


        <div class="container mt-5">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(plan, index) in plans" :key="index">
                    <div class="card px-3 bg-light rounded-0">
                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                        <div class="card-body text-center">
                            <ul v-if="plan.features" class="list-group">
                                <li v-for="(feature, featureIndex) in plan.features.slice(0, 4)" :key="featureIndex"
                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <span class="px-2 text-start">
                                        {{ feature.name }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="card-footer bg-light p-0 border-top pt-2">
                            <div class="btn-group w-100 my-2">
                                <router-link :to="`/plan/${plan.id}`"
                                    class="btn btn-outline-success text-capitalize px-4">
                                    Know More
                                </router-link>
                                <button class="btn text-capitalize px-4 text-white btn-success"
                                    @click="submitQuery(price, plan)"> <i class="bi bi-whatsapp"></i>
                                    <span class="ms-2">Enquiry</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid mt-5">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3 py-5"
                style="background-color: var(--bg-forth);">
                <div class="col-12 col-md-6 align-items-center text-center text-md-start">
                    <img src="/img/formwelcome.svg" class="mt-3" style="width: 350px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-3">
                    <h3 class="text-white text-capitalize">{{ formTitle }}</h3>
                    <ContactForm />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue"
export default {
    name: 'PlanDetails',
    components: { ContactForm },
    data() {
        return {
            plans: [
                    {
                        "id": "WB1",
                        "name": "Static Website",
                        "banner": "/img/services-banner/business-web.jpg",
                        "description": "A business website serves as an online presence for a company, providing information about products or services, contact details, and other relevant business information.",
                        "features": [
                            {
                                "name": "Custom Domain Integration",
                                "description": "Your website integrated with the custom domain provided by you, If you don’t have one you can also purchase it from our site at discounted rates."
                            },
                            {
                                "name": "Secure SSL Certificate",
                                "description": "Your website will have the attachment of Secure SSL Certificate, although it’s a chargeable certificate but in this premium plan it will be to you without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Storage",
                                "description": "We are using Advance Sharing Storage for your website, so you can use unlimited images and unlimited content for your website running without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Bandwidth",
                                "description": "We are using Advance Sharing Bandwidth for your website, so your website can handle unlimited user visits without charging any additional cost."
                            },
                            {
                                "name": "Unlimited Pages",
                                "description": "Your website contains unlimited development of pages, apart from 10 Basic Pages like Home Page, Contact Us Page, About Us Page, Categories Page, Products Page, Product Details Page, Legal, Privacy Policy Page, Terms and Conditions Page, but only if they are required at the time of development not later."
                            },
                            {
                                "name": "Customized Designing",
                                "description": "Your website is not based on template, everything will be customizable, as per your taste and requirement."
                            },
                            {
                                "name": "Industry Specific Content",
                                "description": "Your website includes only your industry specific content whether its text created by content writer or images developed by graphic designer."
                            },
                            {
                                "name": "Browser Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any of the browsers, Like Google Chrome Browser, Safari Browser, UC Browser, Opera Browser, Mozilla Browser."
                            },
                            {
                                "name": "Device Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the devices, irrespective of the screen size, whether it is Mobile, Tablet, Laptop, PC, Smart TV etc."
                            },
                            {
                                "name": "Operating System Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the Operating Systems, whether it was the Linux, Microsoft Windows, Apple Mac, Apple IOS, Google Android etc."
                            },
                            {
                                "name": "Social Media Integration",
                                "description": "Your website consisting of all of the social media account you have. Your all-social media handles will integrate with your website, like Facebook, Instagram, Linked-In, YouTube etc."
                            },
                            {
                                "name": "Contacts Integration",
                                "description": "Your website consisting of all of the Contacts you have. Your all- Contacting modes will integrate with your website. Like WhatsApp, Telegram, Call, E-Mail etc."
                            },
                            {
                                "name": "Inquiry Form",
                                "description": "You can choose your inquiry receipts will be delivered up on WhatsApp or Email or you can choose any other option as pe your comfort."
                            },
                            {
                                "name": "Geo Location Integration",
                                "description": "Your business address Geo Location will be integrated upon your site. Whether it was upon Google or any other platforms."
                            },
                        ]
                    },
                    {
                        "id": "WB4",
                        "name": "Responsive Website",
                        "banner": "/img/services-banner/responsive-web.jpg",
                        "features": [
                            {
                                "name": "All Static Website Features",
                                "description": "Inclusive of all the features of static wesbite."
                            },
                            {
                                "name": "Customized CMS Panel",
                                "description": "You will be provided a customized CMS panel (Control Management System) to control your website. Now you can mange all of your website information at you owns with few simple clicks."
                            },
                            {
                                "name": "Unlimited Content Creation",
                                "description": "You can create unlimited content creation like Categories, Sub Categories, Products, Contacts etc."
                            },
                            {
                                "name": "Secured Database",
                                "description": "Your database will be the world’s most secured database that is MySQL, which is often used by the banking management system."
                            },
                            {
                                "name": "Searching and Inquiry of Product",
                                "description": "Your customer can search about your products on your website and can create directly inquiry from your site to your contacting portals."
                            },
                            {
                                "name": "Update / Forget Password",
                                "description": "You can Update or Forget password of your CMS panel at any time, at you finger tips."
                            },
                            {
                                "name": "Responsive Customized CMS Panel",
                                "description": "Your CMS Panel is also efficiently working up on any type of the devices, irrespective of the screen size, whether it is Mobile, Tablet, Laptop, PC, Smart TV etc."
                            },
                            {
                                "name": "Easy User Interface",
                                "description": "Your CMS Panel have the easiest user interface ever, that anybody can manage the website at there own easily and doesn’t require any employee to manage."
                            },
                            {
                                "name": "Unlimited Content Update",
                                "description": "You can Edit, Update, Delete or managed your website content unlimited times, also will update your content by 24/7."
                            },
                            {
                                "name": "FAQ Section",
                                "description": "You can add your business frequently asked questions at the development time."
                            },
                            {
                                "name": "Static Customer Reviews",
                                "description": "You can add your Customer Reviews at your website at the development time."
                            },
                            {
                                "name": "Suggestion / Feedback",
                                "description": "You can manage your Suggestion / Feedback Section with your customers, at seamless times."
                            },
                            {
                                "name": "Support Section",
                                "description": "You can manage your customers query at Support Section at seamless times."
                            },
                            {
                                "name": "Unlimited Blog Post",
                                "description": "You can create unlimited Blog posts content, at seamless times."
                            },
                            {
                                "name": "News Letter Subscription",
                                "description": "Your website user can subscribe your blogs by submitting their email id at your website so that they can instantly receive your blogs at their mail box."
                            },
                            {
                                "name": "Search, Sort, Filter",
                                "description": "Your website user can Search, Sort Filter of your Products or Services so that they can easily get the right one."
                            },
                            {
                                "name": "Descriptive Dynamic Product Detail Page",
                                "description": "Your website user can easily view your Detailed Products or Services in the descriptive mode so that they easily convert in to your customers."
                            },
                            {
                                "name": "Product Attributes Section",
                                "description": "Your website user can easily reach to your products detailed page using your products attributes in search or filter."
                            },
                            {
                                "name": "Product Share Integration",
                                "description": "Your website user can easily Share your Products or Services to their family and friends."
                            },
                            {
                                "name": "SEO Optimization",
                                "description": "Your website content will be auto optimized for search engine, whether it was for Google, Bing etc. So that your target audience can easily reached to your website from searching platforms."
                            },
                        ],
                        "subTitle": "Inclusive of all the features of static wesbite",
                        "subFeatures": [
                            {
                                "name": "Custom Domain Integration",
                                "description": "Your website integrated with the custom domain provided by you, If you don’t have one you can also purchase it from our site at discounted rates."
                            },
                            {
                                "name": "Secure SSL Certificate",
                                "description": "Your website will have the attachment of Secure SSL Certificate, although it’s a chargeable certificate but in this premium plan it will be to you without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Storage",
                                "description": "We are using Advance Sharing Storage for your website, so you can use unlimited images and unlimited content for your website running without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Bandwidth",
                                "description": "We are using Advance Sharing Bandwidth for your website, so your website can handle unlimited user visits without charging any additional cost."
                            },
                            {
                                "name": "Unlimited Pages",
                                "description": "Your website contains unlimited development of pages, apart from 10 Basic Pages like Home Page, Contact Us Page, About Us Page, Categories Page, Products Page, Product Details Page, Legal, Privacy Policy Page, Terms and Conditions Page, but only if they are required at the time of development not later."
                            },
                            {
                                "name": "Customized Designing",
                                "description": "Your website is not based on template, everything will be customizable, as per your taste and requirement."
                            },
                            {
                                "name": "Industry Specific Content",
                                "description": "Your website includes only your industry specific content whether its text created by content writer or images developed by graphic designer."
                            },
                            {
                                "name": "Browser Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any of the browsers, Like Google Chrome Browser, Safari Browser, UC Browser, Opera Browser, Mozilla Browser."
                            },
                            {
                                "name": "Device Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the devices, irrespective of the screen size, whether it is Mobile, Tablet, Laptop, PC, Smart TV etc."
                            },
                            {
                                "name": "Operating System Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the Operating Systems, whether it was the Linux, Microsoft Windows, Apple Mac, Apple IOS, Google Android etc."
                            },
                            {
                                "name": "Social Media Integration",
                                "description": "Your website consisting of all of the social media account you have. Your all-social media handles will integrate with your website, like Facebook, Instagram, Linked-In, YouTube etc."
                            },
                            {
                                "name": "Contacts Integration",
                                "description": "Your website consisting of all of the Contacts you have. Your all- Contacting modes will integrate with your website. Like WhatsApp, Telegram, Call, E-Mail etc."
                            },
                            {
                                "name": "Inquiry Form",
                                "description": "You can choose your inquiry receipts will be delivered up on WhatsApp or Email or you can choose any other option as pe your comfort."
                            },
                            {
                                "name": "Geo Location Integration",
                                "description": "Your business address Geo Location will be integrated upon your site. Whether it was upon Google or any other platforms."
                            },
                        ]
                    },
                    {
                        "id": "WB2",
                        "name": "E-Commerce Website",
                        "banner": "/img/services-banner/ecommerce.jpg",
                        "description": "An e-commerce website allows businesses to sell products or services online, facilitating electronic transactions.",
                        "features": [
                            {
                                "name": "Create and Manage Collections",
                                "description": "Allows users to organize products into custom collections for easier navigation and themed grouping."
                            },
                            {
                                "name": "Create and Manage Categories",
                                "description": "Enables the creation and management of product categories to improve site organization and user experience."
                            },
                            {
                                "name": "Add to Wishlist Integration",
                                "description": "Lets customers save products to a wishlist for future reference or purchase."
                            },
                            {
                                "name": "Multiple Product Images",
                                "description": "Supports uploading and displaying multiple images for each product, giving customers a comprehensive view."
                            },
                            {
                                "name": "Products Hot Label Integration",
                                "description": "Allows marking popular or trending products with a 'Hot' label to attract customer attention."
                            },
                            {
                                "name": "Automated Emails Integration",
                                "description": "Sends automatic emails for various events like order confirmations, shipping updates, and promotional campaigns."
                            },
                            {
                                "name": "Simple Checkout Process",
                                "description": "Streamlines the purchasing process with a user-friendly, efficient checkout flow to reduce cart abandonment."
                            },
                            {
                                "name": "Product Buy Now Integration",
                                "description": "Streamlines the purchasing process with a user-friendly, efficient checkout flow to reduce cart abandonment."
                            },
                            {
                                "name": "FAQ For Products",
                                "description": "Allows the addition of frequently asked questions and answers for each product to provide more information to customers."
                            },
                            {
                                "name": "Discount Coupon Codes",
                                "description": "Supports the creation and application of discount codes for promotional offers and special deals."
                            },
                            {
                                "name": "Payment Gateway Integration",
                                "description": "Incorporates secure payment gateways to facilitate various payment methods for customer transactions."
                            },
                            {
                                "name": "Delivery Partner Integration",
                                "description": "Incorporates secure payment gateways to facilitate various payment methods for customer transactions."
                            },
                            {
                                "name": "Product Like Integration",
                                "description": "Allows users to 'like' or favorite products, helping with personalization and product recommendations."
                            },
                            {
                                "name": "Email & SMS OTP",
                                "description": "Implements one-time password verification via email and SMS for enhanced account security."
                            },
                            {
                                "name": "Push Notifications",
                                "description": "Enables sending push notifications to users' devices for order updates, promotions, and other relevant information."
                            },
                            {
                                "name": "Social Login and Register",
                                "description": "Provides options for users to sign up and log in using their social media accounts for convenience and faster onboarding."
                            }
                        ],
                        "subTitle": "Inclusive of all the features of responsive wesbite",
                        "subFeatures": [
                            {
                                "name": "All Static Website Features",
                                "description": "Inclusive of all the features of static wesbite."
                            },
                            {
                                "name": "Customized CMS Panel",
                                "description": "You will be provided a customized CMS panel (Control Management System) to control your website. Now you can mange all of your website information at you owns with few simple clicks."
                            },
                            {
                                "name": "Unlimited Content Creation",
                                "description": "You can create unlimited content creation like Categories, Sub Categories, Products, Contacts etc."
                            },
                            {
                                "name": "Secured Database",
                                "description": "Your database will be the world’s most secured database that is MySQL, which is often used by the banking management system."
                            },
                            {
                                "name": "Searching and Inquiry of Product",
                                "description": "Your customer can search about your products on your website and can create directly inquiry from your site to your contacting portals."
                            },
                            {
                                "name": "Update / Forget Password",
                                "description": "You can Update or Forget password of your CMS panel at any time, at you finger tips."
                            },
                            {
                                "name": "Responsive Customized CMS Panel",
                                "description": "Your CMS Panel is also efficiently working up on any type of the devices, irrespective of the screen size, whether it is Mobile, Tablet, Laptop, PC, Smart TV etc."
                            },
                            {
                                "name": "Easy User Interface",
                                "description": "Your CMS Panel have the easiest user interface ever, that anybody can manage the website at there own easily and doesn’t require any employee to manage."
                            },
                            {
                                "name": "Unlimited Content Update",
                                "description": "You can Edit, Update, Delete or managed your website content unlimited times, also will update your content by 24/7."
                            },
                            {
                                "name": "FAQ Section",
                                "description": "You can add your business frequently asked questions at the development time."
                            },
                            {
                                "name": "Static Customer Reviews",
                                "description": "You can add your Customer Reviews at your website at the development time."
                            },
                            {
                                "name": "Suggestion / Feedback",
                                "description": "You can manage your Suggestion / Feedback Section with your customers, at seamless times."
                            },
                            {
                                "name": "Support Section",
                                "description": "You can manage your customers query at Support Section at seamless times."
                            },
                            {
                                "name": "Unlimited Blog Post",
                                "description": "You can create unlimited Blog posts content, at seamless times."
                            },
                            {
                                "name": "News Letter Subscription",
                                "description": "Your website user can subscribe your blogs by submitting their email id at your website so that they can instantly receive your blogs at their mail box."
                            },
                            {
                                "name": "Search, Sort, Filter",
                                "description": "Your website user can Search, Sort Filter of your Products or Services so that they can easily get the right one."
                            },
                            {
                                "name": "Descriptive Dynamic Product Detail Page",
                                "description": "Your website user can easily view your Detailed Products or Services in the descriptive mode so that they easily convert in to your customers."
                            },
                            {
                                "name": "Product Attributes Section",
                                "description": "Your website user can easily reach to your products detailed page using your products attributes in search or filter."
                            },
                            {
                                "name": "Product Share Integration",
                                "description": "Your website user can easily Share your Products or Services to their family and friends."
                            },
                            {
                                "name": "SEO Optimization",
                                "description": "Your website content will be auto optimized for search engine, whether it was for Google, Bing etc. So that your target audience can easily reached to your website from searching platforms."
                            },
                            {
                                "name": "Custom Domain Integration",
                                "description": "Your website integrated with the custom domain provided by you, If you don’t have one you can also purchase it from our site at discounted rates."
                            },
                            {
                                "name": "Secure SSL Certificate",
                                "description": "Your website will have the attachment of Secure SSL Certificate, although it’s a chargeable certificate but in this premium plan it will be to you without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Storage",
                                "description": "We are using Advance Sharing Storage for your website, so you can use unlimited images and unlimited content for your website running without charging any additional cost."
                            },
                            {
                                "name": "Advance Shared Bandwidth",
                                "description": "We are using Advance Sharing Bandwidth for your website, so your website can handle unlimited user visits without charging any additional cost."
                            },
                            {
                                "name": "Unlimited Pages",
                                "description": "Your website contains unlimited development of pages, apart from 10 Basic Pages like Home Page, Contact Us Page, About Us Page, Categories Page, Products Page, Product Details Page, Legal, Privacy Policy Page, Terms and Conditions Page, but only if they are required at the time of development not later."
                            },
                            {
                                "name": "Customized Designing",
                                "description": "Your website is not based on template, everything will be customizable, as per your taste and requirement."
                            },
                            {
                                "name": "Industry Specific Content",
                                "description": "Your website includes only your industry specific content whether its text created by content writer or images developed by graphic designer."
                            },
                            {
                                "name": "Browser Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any of the browsers, Like Google Chrome Browser, Safari Browser, UC Browser, Opera Browser, Mozilla Browser."
                            },
                            {
                                "name": "Device Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the devices, irrespective of the screen size, whether it is Mobile, Tablet, Laptop, PC, Smart TV etc."
                            },
                            {
                                "name": "Operating System Compatibility",
                                "description": "Your website is not just a website, it’s a Modernized Webapp that’s why its efficiently working up on any type of the Operating Systems, whether it was the Linux, Microsoft Windows, Apple Mac, Apple IOS, Google Android etc."
                            },
                            {
                                "name": "Social Media Integration",
                                "description": "Your website consisting of all of the social media account you have. Your all-social media handles will integrate with your website, like Facebook, Instagram, Linked-In, YouTube etc."
                            },
                            {
                                "name": "Contacts Integration",
                                "description": "Your website consisting of all of the Contacts you have. Your all- Contacting modes will integrate with your website. Like WhatsApp, Telegram, Call, E-Mail etc."
                            },
                            {
                                "name": "Inquiry Form",
                                "description": "You can choose your inquiry receipts will be delivered up on WhatsApp or Email or you can choose any other option as pe your comfort."
                            },
                            {
                                "name": "Geo Location Integration",
                                "description": "Your business address Geo Location will be integrated upon your site. Whether it was upon Google or any other platforms."
                            },
                        ],
                        "module": [
                            {
                                "title": "Order Management System",
                                "features": [
                                    "Real-time order tracking",
                                    "Automated order processing",
                                    "Integration with inventory management",
                                    "Order history and reporting",
                                    "Multi-channel order management"
                                ]
                            },
                            {
                                "title": "Inventory Management System",
                                "features": [
                                    "Real-time stock level tracking",
                                    "Automated reorder points",
                                    "Barcode scanning for easy updates",
                                    "Multi-location inventory management",
                                    "Integration with suppliers for restocking"
                                ]
                            },
                            {
                                "title": "Customer Management System",
                                "features": [
                                    "Customer profile creation and management",
                                    "Purchase history tracking",
                                    "Communication log",
                                    "Segmentation for targeted marketing",
                                    "Integration with loyalty programs"
                                ]
                            },
                            {
                                "title": "Product Comparisons System",
                                "features": [
                                    "Side-by-side product feature comparison",
                                    "Price comparison across different sellers",
                                    "User-generated comparison lists",
                                    "Automated similarity suggestions",
                                    "Integration with review and rating data"
                                ]
                            },
                            {
                                "title": "Return Management System",
                                "features": [
                                    "Automated return authorization",
                                    "Return tracking and status updates",
                                    "Refund processing integration",
                                    "Return reason analytics",
                                    "Integration with inventory management"
                                ]
                            },
                            {
                                "title": "Delivery Management System",
                                "features": [
                                    "Real-time shipment tracking",
                                    "Multiple carrier integration",
                                    "Delivery route optimization",
                                    "Automated delivery notifications",
                                    "Proof of delivery capture"
                                ]
                            },
                            {
                                "title": "Seamless Recommended Product",
                                "features": [
                                    "Personalized product suggestions",
                                    "Cross-selling and upselling features",
                                    "Machine learning for improved recommendations",
                                    "Integration with browsing and purchase history",
                                    "A/B testing for recommendation effectiveness"
                                ]
                            },
                            {
                                "title": "Products Affiliate Program System",
                                "features": [
                                    "Affiliate registration and management",
                                    "Commission tracking and calculation",
                                    "Promotional material distribution",
                                    "Performance analytics for affiliates",
                                    "Integration with payment systems"
                                ]
                            },
                            {
                                "title": "Multiple Currencies Payments",
                                "features": [
                                    "Real-time currency conversion",
                                    "Support for major global currencies",
                                    "Integration with foreign exchange APIs",
                                    "Multi-currency reporting",
                                    "Currency preference saving for customers"
                                ]
                            },
                            {
                                "title": "Multiple Languages Interface",
                                "features": [
                                    "Support for multiple languages",
                                    "Easy language switching for users",
                                    "Localized content management",
                                    "Automatic language detection",
                                    "Translation management system"
                                ]
                            },
                            {
                                "title": "Product Reviews and Ratings Integration",
                                "features": [
                                    "User-generated reviews and ratings",
                                    "Review moderation tools",
                                    "Rating summary and analytics",
                                    "Integration with product pages",
                                    "Review incentive system"
                                ]
                            },
                            {
                                "title": "Loyalty Program Integration",
                                "features": [
                                    "Point accrual system",
                                    "Reward redemption options",
                                    "Tiered membership levels",
                                    "Integration with customer profiles",
                                    "Loyalty analytics and reporting"
                                ]
                            },
                            {
                                "title": "Abandoned Cart Intimation System",
                                "features": [
                                    "Automated reminder emails",
                                    "Personalized recovery campaigns",
                                    "Cart contents saving",
                                    "Analytics on abandonment reasons",
                                    "Integration with customer management system"
                                ]
                            }
                        ]
                    },
                    {
                        "id": "WB3",
                        "name": "Wholesale E-Commerce Website",
                        "banner": "/img/services-banner/wholesale.jpg",
                        "description": "A wholesale e-commerce website is designed for business-to-business (B2B) transactions, allowing companies to sell products in bulk to other businesses.",
                        "features": [
                            {
                                "name": "Bulk Order Management",
                                "description": "Handling large volume orders efficiently."
                            },
                            {
                                "name": "B2B Pricing",
                                "description": "Implementing tiered pricing structures for wholesale customers."
                            },
                            {
                                "name": "Client Login Portal",
                                "description": "Providing secure access for business clients."
                            },
                            {
                                "name": "Advanced Inventory System",
                                "description": "Managing complex inventory for bulk sales."
                            }
                        ]
                    },

                    {
                        "id": "WB5",
                        "name": "Portfolio Website",
                        "banner": "/img/services-banner/portfolio.jpg",
                        "description": "A portfolio website showcases a person's or company's work, skills, and achievements.",
                        "features": [
                            {
                                "name": "Project Galleries",
                                "description": "Displaying work samples in an organized, visually appealing manner."
                            },
                            {
                                "name": "Client Testimonials",
                                "description": "Featuring feedback from satisfied clients."
                            },
                            {
                                "name": "Contact Form",
                                "description": "Providing an easy way for potential clients to get in touch."
                            },
                            {
                                "name": "Responsive Design",
                                "description": "Ensuring the website looks great on all devices."
                            }
                        ]
                    },
                    {
                        "id": "WB6",
                        "name": "Membership Website",
                        "banner": "/img/services-banner/membership.jpg",
                        "description": "A membership website offers exclusive content or services to registered members, often on a subscription basis.",
                        "features": [
                            {
                                "name": "Member Registration",
                                "description": "Allowing users to sign up for accounts."
                            },
                            {
                                "name": "Exclusive Content",
                                "description": "Providing content only accessible to registered members."
                            },
                            {
                                "name": "Subscription Management",
                                "description": "Handling different levels of membership and payments."
                            },
                            {
                                "name": "Member Forums",
                                "description": "Creating community spaces for members to interact."
                            }
                        ]
                    },

                    {
                        "id": "WB7",
                        "name": "Booking Website",
                        "banner": "/img/services-banner/booking-web.jpg",
                        "description": "A personal website serves as an online representation of an individual, often used for professional networking or personal branding.",
                        "features": [
                            {
                                "name": "Personal Blog",
                                "description": "Sharing thoughts, experiences, or expertise."
                            },
                            {
                                "name": "Resume/CV Section",
                                "description": "Displaying professional qualifications and experience."
                            },
                            {
                                "name": "Photo Gallery",
                                "description": "Showcasing personal or professional photos."
                            },
                            {
                                "name": "Social Media Links",
                                "description": "Connecting visitors to other online profiles."
                            }
                        ]
                    },

                    {
                        "id": "WB8",
                        "name": "News Website",
                        "banner": "/img/services-banner/news-web.jpg",
                        "description": "A news website provides timely information on current events, typically updated frequently throughout the day.",
                        "features": [
                            {
                                "name": "Breaking News Section",
                                "description": "Prominently displayed area for the latest and most important news stories."
                            },
                            {
                                "name": "Article Categories",
                                "description": "Organized sections for different types of news (e.g., politics, sports, technology)."
                            },
                            {
                                "name": "Comment System",
                                "description": "Allows readers to discuss articles and engage with the community."
                            },
                            {
                                "name": "Newsletter Signup",
                                "description": "Option for users to subscribe to regular news updates via email."
                            },
                            {
                                "name": "Live Updates",
                                "description": "Real-time coverage of ongoing events with automatic page refresh."
                            },
                            {
                                "name": "Multimedia Integration",
                                "description": "Incorporation of images, videos, and audio content within articles."
                            },
                            {
                                "name": "Social Media Sharing",
                                "description": "Easy-to-use buttons for sharing articles on various social platforms."
                            },
                            {
                                "name": "Search Functionality",
                                "description": "Robust search engine to find specific articles or topics."
                            },
                            {
                                "name": "Mobile Responsiveness",
                                "description": "Optimized design for seamless viewing on smartphones and tablets."
                            },
                            {
                                "name": "Personalized News Feed",
                                "description": "Customizable news selection based on user preferences and reading history."
                            },
                            {
                                "name": "Author Profiles",
                                "description": "Dedicated pages for journalists with their bio and article archives."
                            },
                            {
                                "name": "Related Articles",
                                "description": "Suggestions for similar or related news stories to keep readers engaged."
                            },
                            {
                                "name": "Weather Widget",
                                "description": "Local and global weather information integrated into the site."
                            },
                            {
                                "name": "Advertising Integration",
                                "description": "Spaces for display ads and sponsored content with tracking capabilities."
                            }
                        ]
                    },
                    {
                        "id": "WB9",
                        "name": "Custom Website",
                        "banner": "/img/services-banner/custom-web.jpg",
                        "description": "A bespoke website solution tailored to meet specific business needs and brand identity.",
                        "features": [
                            {
                                "name": "Fully Tailored Design",
                                "description": "Unique visual design that aligns perfectly with the brand's aesthetics and goals."
                            },
                            {
                                "name": "Custom Functionality",
                                "description": "Development of specific features and tools to meet unique business requirements."
                            },
                            {
                                "name": "Advanced Security Features",
                                "description": "Robust security measures including encryption, firewalls, and regular security audits."
                            },
                            {
                                "name": "Dedicated Support",
                                "description": "Personalized technical assistance and maintenance from a dedicated team."
                            },
                            {
                                "name": "Scalable Architecture",
                                "description": "Flexible system design that can grow and adapt with the business."
                            },
                            {
                                "name": "Custom CMS",
                                "description": "Tailored content management system for easy updates and content control."
                            },
                            {
                                "name": "Integration with Existing Systems",
                                "description": "Seamless connection with current business tools and software."
                            },
                            {
                                "name": "Advanced Analytics",
                                "description": "Custom-built analytics dashboard for detailed insights into website performance."
                            },
                            {
                                "name": "Multi-language Support",
                                "description": "Built-in functionality for multiple language versions of the website."
                            },
                            {
                                "name": "Custom User Roles and Permissions",
                                "description": "Detailed access control tailored to the organization's structure."
                            },
                            {
                                "name": "Unique Interactive Elements",
                                "description": "Custom-designed interactive features to enhance user engagement."
                            },
                            {
                                "name": "Optimized Performance",
                                "description": "Fine-tuned for speed and efficiency, with custom caching solutions if needed."
                            },
                            {
                                "name": "Accessibility Compliance",
                                "description": "Ensuring the website meets specific accessibility standards and regulations."
                            },
                            {
                                "name": "Custom API Development",
                                "description": "Creation of unique APIs for integration with other systems or services."
                            }
                        ]
                    }
                ]
        };
    },
};
</script>

<style scoped></style>
