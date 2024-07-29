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
            plans:  [
                    {
                        "id": "DM1",
                        "name": "Search Engine Optimization",
                        "description": "SEO is the process of optimizing a website to improve its visibility on search engines like Google. The goal is to increase organic (non-paid) traffic by achieving higher rankings on search engine results pages (SERPs).",
                        "banner": "/img/services-banner/seo.jpg",
                        "features": [
                            {
                                "name": "Keyword Research",
                                "description": "Identifying and targeting the right keywords that potential customers are searching for."
                            },
                            {
                                "name": "On-Page SEO",
                                "description": "Optimizing individual web pages, including meta tags, headers, content, and internal links."
                            },
                            {
                                "name": "Off-Page SEO",
                                "description": "Building backlinks from other reputable sites to improve domain authority."
                            },
                            {
                                "name": "Technical SEO",
                                "description": "Improving site speed, mobile-friendliness, and ensuring a proper site structure."
                            },
                            {
                                "name": "Content Creation",
                                "description": "Developing high-quality, relevant content that attracts and engages users."
                            },
                            {
                                "name": "Analytics and Reporting",
                                "description": "Monitoring website traffic, rankings, and SEO performance metrics."
                            }
                        ]
                    },
                    {
                        "id": "DM2",
                        "name": "Pay-Per-Click Advertising",
                        "description": "PPC is a model of online advertising where advertisers pay a fee each time their ad is clicked. It's a way of buying visits to your site, rather than attempting to 'earn' those visits organically.",
                        "banner": "/img/services-banner/ppc.jpg",
                        "features": [
                            {
                                "name": "Campaign Setup",
                                "description": "Creating and structuring ad campaigns for optimal performance."
                            },
                            {
                                "name": "Keyword Targeting",
                                "description": "Selecting and bidding on relevant keywords to trigger ad displays."
                            },
                            {
                                "name": "Ad Copywriting",
                                "description": "Crafting compelling ad text to attract clicks and conversions."
                            },
                            {
                                "name": "Performance Tracking",
                                "description": "Monitoring and analyzing ad performance to optimize campaigns."
                            }
                        ]
                    },
                    {
                        "id": "DM3",
                        "name": "Content Marketing",
                        "description": "Content marketing focuses on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience and drive profitable customer action.",
                        "banner": "/img/services-banner/content-marketing.jpg",
                        "features": [
                            {
                                "name": "Content Strategy",
                                "description": "Developing a comprehensive plan for content creation and distribution."
                            },
                            {
                                "name": "Blog Writing",
                                "description": "Creating informative and engaging blog posts to attract and educate readers."
                            },
                            {
                                "name": "Guest Posting",
                                "description": "Writing articles for other websites to increase brand exposure and build backlinks."
                            },
                            {
                                "name": "Content Distribution",
                                "description": "Sharing content across various platforms to maximize reach and engagement."
                            }
                        ]
                    },
                    {
                        "id": "DM7",
                        "name": "Social Media Optimization",
                        "banner": "/img/services-banner/social-media-opt.jpg",
                        "description": "CRO is the systematic process of increasing the percentage of website visitors who take a desired action — be it filling out a form, becoming customers, or otherwise.",
                        "features": [
                            {
                                "name": "A/B Testing",
                                "description": "Comparing two versions of a webpage to see which performs better."
                            },
                            {
                                "name": "User Behavior Analysis",
                                "description": "Studying how users interact with your website."
                            },
                            {
                                "name": "Landing Page Optimization",
                                "description": "Improving landing pages to increase conversions."
                            },
                            {
                                "name": "Conversion Tracking",
                                "description": "Monitoring and analyzing user actions that lead to conversions."
                            }
                        ]
                    },
                    {
                        "id": "DM4",
                        "name": "Social Media Marketing",
                        "banner": "/img/services-banner/social-media.jpg",
                        "description": "Social media marketing uses social media platforms to connect with your audience, build your brand, increase sales, and drive website traffic.",
                        "features": [
                            {
                                "name": "Social Media Strategy",
                                "description": "Developing a tailored approach for each social platform."
                            },
                            {
                                "name": "Content Creation",
                                "description": "Producing engaging posts, images, and videos for social media."
                            },
                            {
                                "name": "Community Management",
                                "description": "Interacting with followers and managing online communities."
                            },
                            {
                                "name": "Analytics and Reporting",
                                "description": "Tracking social media performance and ROI."
                            }
                        ]
                    },

                    {
                        "id": "DM5",
                        "name": "Email Marketing",
                        "banner": "/img/services-banner/email-marketing.jpg",
                        "description": "Email marketing involves sending commercial messages to a group of people via email, typically to develop relationships, generate leads, or drive sales.",
                        "features": [
                            {
                                "name": "Email Campaign Setup",
                                "description": "Creating and configuring email marketing campaigns."
                            },
                            {
                                "name": "Template Design",
                                "description": "Designing visually appealing and responsive email templates."
                            },
                            {
                                "name": "List Management",
                                "description": "Organizing and segmenting email subscriber lists."
                            },
                            {
                                "name": "Analytics and Reporting",
                                "description": "Tracking open rates, click-through rates, and other key metrics."
                            }
                        ]
                    },
                    {
                        "id": "DM6",
                        "name": "Influencer Marketing",
                        "banner": "/img/services-banner/influencer-marketing.jpg",
                        "description": "Influencer marketing leverages individuals with a dedicated social following to drive a brand's message to the larger market.",
                        "features": [
                            {
                                "name": "Influencer Identification",
                                "description": "Finding and vetting suitable influencers for your brand."
                            },
                            {
                                "name": "Campaign Management",
                                "description": "Overseeing influencer collaborations and campaigns."
                            },
                            {
                                "name": "Content Collaboration",
                                "description": "Working with influencers to create authentic, branded content."
                            },
                            {
                                "name": "Performance Analysis",
                                "description": "Measuring the impact and ROI of influencer campaigns."
                            }
                        ]
                    },

                    {
                        "id": "DM8",
                        "name": "Online Reputation Management",
                        "banner": "/img/services-banner/online-reputation.jpg",
                        "description": "Online reputation management involves monitoring, addressing, and influencing your business's digital reputation and credibility.",
                        "features": [
                            {
                                "name": "Brand Monitoring",
                                "description": "Tracking mentions of your brand across the internet."
                            },
                            {
                                "name": "Review Management",
                                "description": "Responding to and managing online reviews."
                            },
                            {
                                "name": "Crisis Management",
                                "description": "Handling and mitigating online PR crises."
                            },
                            {
                                "name": "Reputation Repair",
                                "description": "Implementing strategies to improve negative online reputations."
                            }
                        ]
                    },
                    {
                        "id": "DM9",
                        "name": "Mobile Marketing",
                        "banner": "/img/services-banner/mobile-marketing.jpg",
                        "description": "Mobile marketing is a multi-channel, digital marketing strategy aimed at reaching a target audience on their smartphones, tablets, and other mobile devices.",
                        "features": [
                            {
                                "name": "App Marketing",
                                "description": "Promoting mobile applications to increase downloads and usage."
                            },
                            {
                                "name": "SMS Campaigns",
                                "description": "Sending promotional messages via text to opted-in customers."
                            },
                            {
                                "name": "Mobile Advertising",
                                "description": "Creating and managing ads specifically for mobile devices."
                            },
                            {
                                "name": "Mobile Analytics",
                                "description": "Tracking and analyzing mobile user behavior and campaign performance."
                            }
                        ]
                    },
                    {
                        "id": "DM10",
                        "name": "Bulk Whatsapp",
                        "banner": "/img/services-banner/bulk-whatsapp.jpg",
                        "description": "Bulk WhatsApp marketing involves sending messages to a large number of WhatsApp users for promotional or informational purposes.",
                        "features": [
                            {
                                "name": "CRM Software Integration",
                                "description": "Connecting WhatsApp marketing with customer relationship management systems."
                            },
                            {
                                "name": "Lead Management",
                                "description": "Organizing and nurturing leads through WhatsApp."
                            },
                            {
                                "name": "Customer Segmentation",
                                "description": "Grouping customers for targeted messaging."
                            },
                            {
                                "name": "Sales Automation",
                                "description": "Automating sales processes through WhatsApp."
                            }
                        ]
                    },
                    {
                        "id": "DM11",
                        "name": "Bulk Messages",
                        "banner": "/img/services-banner/bulk-messages.jpg",
                        "description": "Bulk messaging involves sending a large number of SMS or other types of messages to a group of recipients simultaneously.",
                        "features": [
                            {
                                "name": "Automated Campaigns",
                                "description": "Setting up message campaigns that run automatically."
                            },
                            {
                                "name": "Lead Nurturing",
                                "description": "Using bulk messages to guide leads through the sales funnel."
                            },
                            {
                                "name": "Email Automation",
                                "description": "Automating email sequences for various customer interactions."
                            },
                            {
                                "name": "Performance Analytics",
                                "description": "Analyzing the effectiveness of bulk messaging campaigns."
                            }
                        ]
                    },
                    {
                        "id": "DM12",
                        "name": "Custom Digital Marketing",
                        "banner": "/img/services-banner/digital-marketing.jpg",
                        "description": "Custom digital marketing provides tailored strategies and solutions to meet specific business needs and goals.",
                        "features": [
                            {
                                "name": "Tailored Strategy",
                                "description": "Developing a unique digital marketing plan for your business."
                            },
                            {
                                "name": "Custom Campaigns",
                                "description": "Creating specialized campaigns across various digital channels."
                            },
                            {
                                "name": "Advanced Analytics",
                                "description": "Providing in-depth analysis and insights on marketing performance."
                            },
                            {
                                "name": "Dedicated Support",
                                "description": "Offering personalized assistance and consultation."
                            }
                        ]
                    }
                ]
        };
    },
};
</script>

<style scoped></style>
