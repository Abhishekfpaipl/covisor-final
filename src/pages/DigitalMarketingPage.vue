<template>
    <div>
        <div class="my-5">
            <FormBanner :service="'Digital Marketing'" :category="category" :place="place" text="we are offering"
                v-observe />
        </div>

        <div class="container my-5">
            <h1 class="text-center py-4">Digital Marketing Pricing</h1>
            <div class="table-responsive pb-4">
                <table class="table table-bordered table-light table-striped" style="width: 100%;">
                    <thead class="border-bottom">
                        <tr>
                            <th class="text-start">Features <p class="mb-0 small">List</p>
                            </th>
                            <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                <p class="mb-0">{{ plan.title }}</p>
                                <p class="mb-0 ">
                                    <small class="smaller ">₹</small>
                                    <small class="smaller">{{ plan.price }}</small>
                                    <small class="smaller fw-normal">/-</small>
                                </p>
                                <p class="mb-0">
                                    <small class="fw-light text-decoration-line-through text-dark smaller">{{ plan.mrp
                                        }}</small>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                            <th class="pb-1 text-start">
                                <span class="fw-normal smaller">{{ feature.name }}</span>
                            </th>
                            <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                <i v-if="plan.features[index].included"
                                    class="bi bi-check2 fs-5 text-success smaller"></i>
                                <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                    class="fw-normal">Basic</i>
                                <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="my-5">
            <LeadManagement :values="features" :title="'Factors, you will love'" v-observe />
        </div>
        <div class="my-5">
            <SalesFunnel :values="values" v-observe />
        </div>

        <div class="my-5">
            <AutoScrolling v-observe />
        </div>
        <div class="my-5">
            <Service v-observe />
        </div>
        <div class="my-5">
            <TempCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="my-5">
            <Faq :faqs="faqs" v-observe />
        </div>
        <div class="my-5">
            <Counter service="Digital Marketing" :serviceCount="2000" category="India" :categoryCount="1500"
                place="All over the world" :placeCount="5000" image="/img/smile.svg" title="our happy customers"
                v-observe />
        </div>
        <div class="">
            <WhyChooseUs v-observe />
        </div>
    </div>
</template>

<script>
import LeadManagement from '@/components/services/LeadManagement.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import TempCustomers from "@/components/TempCustomers.vue";
import Faq from '@/components/FaqSection.vue';
import FormBanner from '@/components/FormBanner.vue';
import Counter from '@/components/CustomCounter.vue';
import AutoScrolling from '@/components/services/AutoScrolling.vue';
import SalesFunnel from "@/components/SalesFunnel.vue";

export default {
    name: "DigitalMarketingPage",
    components: {
        LeadManagement,
        WhyChooseUs,
        FormBanner,
        TempCustomers,
        Faq,
        Counter,
        AutoScrolling,
        SalesFunnel,
    },
    data() {
        return {
            services: '',
            category: '',
            place: '',
            plans: [
                {
                    id: 1,
                    title: "Lite",
                    description: "Info Website",
                    price: '4,999',
                    mrp: '10,000',
                    features: [
                        { id: 1, name: "Search Engine Optimization", included: true },
                        { id: 2, name: "Pay-Per-Click Advertising", included: true },
                        { id: 3, name: "Content Marketing", included: true },
                        { id: 4, name: "Social Media Marketing", included: true },
                        { id: 5, name: "Email Marketing", included: true },
                        { id: 6, name: "Influencer Marketing", included: true },
                        { id: 7, name: "Conversion Rate Optimization", included: false },
                        { id: 8, name: "Analytics and Reporting", included: false },
                        { id: 9, name: "Online Reputation Management", included: false },
                        { id: 10, name: "Mobile Marketing", included: false },
                        { id: 11, name: "Customer Relationship Management", included: false },
                        { id: 12, name: "Marketing Automation", included: false },
                    ],
                },
                {
                    id: 2,
                    title: "Plus",
                    description: "Business Website",
                    price: '14,999',
                    mrp: '30,000',
                    features: [
                        { id: 1, name: "Search Engine Optimization", included: true },
                        { id: 2, name: "Pay-Per-Click Advertising", included: true },
                        { id: 3, name: "Content Marketing", included: true },
                        { id: 4, name: "Social Media Marketing", included: true },
                        { id: 5, name: "Email Marketing", included: true },
                        { id: 6, name: "Influencer Marketing", included: true },
                        { id: 7, name: "Conversion Rate Optimization", included: true },
                        { id: 8, name: "Analytics and Reporting", included: true },
                        { id: 9, name: "Online Reputation Management", included: false },
                        { id: 10, name: "Mobile Marketing", included: false },
                        { id: 11, name: "Customer Relationship Management", included: false },
                        { id: 12, name: "Marketing Automation", included: false },
                    ],
                },
                {
                    id: 3,
                    title: "Elite",
                    description: "Catalog Website",
                    price: '29,999',
                    mrp: '60,000',
                    features: [
                        { id: 1, name: "Search Engine Optimization", included: true },
                        { id: 2, name: "Pay-Per-Click Advertising", included: true },
                        { id: 3, name: "Content Marketing", included: true },
                        { id: 4, name: "Social Media Marketing", included: true },
                        { id: 5, name: "Email Marketing", included: true },
                        { id: 6, name: "Influencer Marketing", included: true },
                        { id: 7, name: "Conversion Rate Optimization", included: true },
                        { id: 8, name: "Analytics and Reporting", included: true },
                        { id: 9, name: "Online Reputation Management", included: true },
                        { id: 10, name: "Mobile Marketing", included: true },
                        { id: 11, name: "Customer Relationship Management", included: true },
                        { id: 12, name: "Marketing Automation", included: true },
                    ],
                },
                {
                    id: 3,
                    title: "Pro",
                    description: "Catalog Website",
                    price: '29,999',
                    mrp: '60,000',
                    features: [
                        { id: 1, name: "Search Engine Optimization", included: true },
                        { id: 2, name: "Pay-Per-Click Advertising", included: true },
                        { id: 3, name: "Content Marketing", included: true },
                        { id: 4, name: "Social Media Marketing", included: true },
                        { id: 5, name: "Email Marketing", included: true },
                        { id: 6, name: "Influencer Marketing", included: true },
                        { id: 7, name: "Conversion Rate Optimization", included: true },
                        { id: 8, name: "Analytics and Reporting", included: true },
                        { id: 9, name: "Online Reputation Management", included: true },
                        { id: 10, name: "Mobile Marketing", included: true },
                        { id: 11, name: "Customer Relationship Management", included: true },
                        { id: 12, name: "Marketing Automation", included: true },
                    ],
                },
            ],
            features: [
                {
                    icon: 'bi-shield-check',
                    title: "Integrity properties",
                    description: "Demonstrating transparency and honesty in all our commitments and actions, ensuring trust and reliability in every interaction.",
                },
                {
                    icon: 'bi-star',
                    title: "Excellence",
                    description: "Going beyond expectations by understanding your needs deeply and meticulously crafting solutions that surpass ordinary standards.",
                },
                {
                    icon: 'bi-people',
                    title: "Teamwork",
                    description: "Leveraging collective strengths to provide you with adaptable and superior solutions, fostering a collaborative environment where every voice contributes meaningfully."
                },
                {
                    icon: 'bi-shield-lock',
                    title: "Privacy and safety",
                    description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
                },
                {
                    icon: 'bi-graph-up',
                    title: "Quality services",
                    description: "Crafting bespoke web designs that drive impactful user experiences and convey a distinct brand message, led by experienced designers from concept to execution.",
                },
                {
                    icon: 'bi-palette',
                    title: "Creativity",
                    description: "Solving challenges innovatively, refusing to settle for ordinary solutions, and creating bespoke strategies that not only solve problems but also distinguish your business.",
                },
                {
                    icon: 'bi-calendar-check ',
                    title: "Dependability",
                    description: "Consistently delivering on promises, meeting deadlines with proactive communication, and treating your business's success as our own commitment.",
                },
                {
                    icon: 'bi-emoji-laughing',
                    title: "Fun",
                    description: "Cultivating a positive and enjoyable workplace environment, fostering creativity, exceptional client service, and the well-being of our team members through humor and camaraderie.",
                },
                {
                    icon: 'bi-hand-thumbs-up ',
                    title: "Helping Hand",
                    description: "Fostering a supportive and positive workplace environment."
                },
                {
                    icon: 'bi-gem',
                    title: "World Class Quality",
                    description: "Delivering exceptional quality in all our services."
                },
                {
                    icon: 'bi-tags',
                    title: "Competitive Pricing",
                    description: "Offering the best prices without compromising on quality."
                },
                {
                    icon: 'bi-lightning ',
                    title: "Incredibly Fast Delivery",
                    description: "Ensuring quick and efficient delivery for our clients."
                }
            ],
            questions: [
                {
                    id: 1,
                    question: "Why is digital marketing important for my business?",
                    answer: " Exploring the benefits of digital marketing in terms of reaching a larger audience, increasing brand visibility, and driving sales or leads."
                },
                {
                    id: 2,
                    question: "How do I determine which digital marketing strategies are best for my business?",
                    answer: "Assessing which channels and tactics align with business goals, target audience, budget, and industry."
                },
                {
                    id: 3,
                    question: "How much should I budget for digital marketing?",
                    answer: "Understanding typical costs associated with different digital marketing strategies and determining a budget that fits the business's resources and goals."
                },
                {
                    id: 4,
                    question: "How long does it take to see results from digital marketing efforts?",
                    answer: "Managing expectations regarding the timeline for seeing measurable outcomes such as increased website traffic, leads, or conversions."
                },
                {
                    id: 5,
                    question: "What metrics should I track to measure the success of my digital marketing campaigns?",
                    answer: "Identifying key performance indicators (KPIs) such as website traffic, conversion rates, ROI, cost per acquisition (CPA), and engagement metrics."
                },
                {
                    id: 6,
                    question: "How do I build an online presence and brand identity through digital marketing?",
                    answer: "Strategies for creating consistent branding across digital channels, building relationships with customers, and maintaining a positive online reputation."
                },
                {
                    id: 7,
                    question: "How can digital marketing help with customer retention and loyalty?",
                    answer: "Exploring tactics such as personalized email campaigns, social media engagement, loyalty programs, and customer feedback strategies."
                },
                {
                    id: 8,
                    question: "What are the ethical considerations in digital marketing, and how can I ensure compliance?",
                    answer: "Understanding privacy regulations (like GDPR or CCPA), ethical practices in data collection and usage, and maintaining transparency with customers."
                },
            ],
            customers: [
                {
                    id: 1,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ],
            values: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Business & Competitors Analysis",
                    color: '#e76365',
                    description: "Buy targeted advertising on Facebook and Instagram or Google and start driving high- quality traffic to your Saleswik landing pages.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Development of Strategies ",
                    color: "#f5925e",
                    description: "Select a high-converting Saleswik landing page which is more optimized for your business goals. ",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "Validation of Required Digital Places ",
                    color: "#f8a42a",
                    description: "Get more conversions by capturing the contact details of the visitors, visiting your Saleswik landing page.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Optimization of Digital Presence",
                    color: "#f8d452",
                    description: "Set up campaigns to nurture your leads and build relationships and turn your expertise into a commodity",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Run Content Creation Program",
                    color: "#fbd453",
                    description: "From your sales page and order form templates in seconds to sell your products and services online.",
                },
                {
                    id: 6,
                    icon: 'bi-whatsapp fs-4',
                    title: "Run Reputation Management Program",
                    color: "#c9d825",
                    description: "Increase your revenue and promote limited-time offers immediately after a customer's purchase.",
                },
                {
                    id: 7,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Provide Lead Management System",
                    color: "#5ccd5f",
                    description: "Connect to Payment Gateway without leaving the app. Sell your products and services right on your Saleswik landing page.",
                },
                {
                    id: 8,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Successfully Achievement of Goals",
                    color: "#5ccd5f",
                    description: "Connect to Payment Gateway without leaving the app. Sell your products and services right on your Saleswik landing page.",
                },
            ],
            faqs: [
                {
                    id: 622,
                    name: "SEO",
                    plans: [
                        {
                            question: " What is SEO and why is it important?",
                            answer: " SEO stands for Search Engine Optimization. It's the process of improving your website so it ranks higher in search engine results. This is important because higher rankings mean more people will see and visit your website."
                        },
                        {
                            question: "How long does it take to see results from SEO?",
                            answer: " SEO is a long-term strategy. It can take several months to see significant improvements, but the results are worth it because they can lead to steady and sustainable traffic growth."
                        },
                        {
                            question: "What are keywords and why do they matter?",
                            answer: "Keywords are words or phrases people type into search engines when looking for information. They matter because using the right keywords on your website helps search engines understand what your site is about, which can improve your ranking."
                        },
                        {
                            question: "Can I do SEO myself, or do I need to hire an expert?",
                            answer: "You can definitely start learning and applying basic SEO techniques yourself. However, hiring an expert can be beneficial because they have experience and can help you achieve better results faster."
                        },
                        {
                            question: "Is SEO a one-time effort?",
                            answer: "No, SEO is an ongoing process. Search engines frequently update their algorithms, and your competitors are always working to improve their rankings, so you need to continually work on your SEO to maintain and improve your ranking."
                        }
                    ]
                },
                {
                    name: "Pay-Per-Click",
                    plans: [
                        {
                            question: "What is PPC advertising?",
                            answer: " PPC stands for Pay-Per-Click. It's a type of online advertising where you pay each time someone clicks on your ad. This is a way to buy visits to your site rather than earning them organically."
                        },
                        {
                            question: "How does PPC advertising work?",
                            answer: "You create ads and bid on keywords related to your business. When someone searches for those keywords, your ad might appear. If they click on your ad, you pay a small fee to the search engine."
                        },
                        {
                            question: "Is PPC expensive?",
                            answer: "It can be, but it depends on your budget and the competitiveness of your keywords. The good thing is you can control your costs by setting a daily budget and maximum bid limits."
                        },
                        {
                            question: "How do I know if my PPC campaign is successful?",
                            answer: "You can measure success by tracking metrics like the number of clicks, the click-through rate (CTR), conversions (actions you want users to take), and the return on investment (ROI)."
                        },
                        {
                            question: "Can PPC help my business if I have a small budget?",
                            answer: "Yes, PPC can be effective even with a small budget. You can start with a small amount, test different ads, and gradually increase your budget as you see what works best."
                        },
                    ]
                },
                {
                    name: "Content Marketing",
                    plans: [
                        {
                            question: "What is content marketing?",
                            answer: " Content marketing is creating and sharing valuable content to attract and engage your target audience. This can include blog posts, videos, infographics, social media posts, and more."
                        },
                        {
                            question: "Why is content marketing important?",
                            answer: "It's important because it helps build trust with your audience, improves your website’s SEO, and can generate leads and sales by providing valuable information that attracts and engages potential customers."
                        },
                        {
                            question: "How often should I post new content?",
                            answer: "It depends on your audience and resources, but consistency is key. Many businesses aim to post at least once a week. The important thing is to maintain a regular schedule that you can sustain."
                        },
                        {
                            question: "What types of content should I create?",
                            answer: "You should create content that addresses the needs and interests of your audience. This could include how-to guides, industry news, product updates, customer stories, and more."
                        },
                        {
                            question: "How do I measure the success of my content marketing?",
                            answer: " Success can be measured using metrics like website traffic, engagement (likes, shares, comments), lead generation, and conversion rates. Tools like Google Analytics can help track these metrics."
                        },
                    ]
                },
                {
                    name: "Social Media Marketing",
                    plans: [
                        {
                            question: "What is social media marketing?",
                            answer: "Social media marketing involves using platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your business, engage with your audience, and drive traffic to your website."
                        },
                        {
                            question: "Why is social media marketing important?",
                            answer: "It's important because it helps you reach a large audience, engage with customers, build brand loyalty, and increase sales through direct communication and targeted advertising."
                        },
                        {
                            question: "How do I choose the right social media platforms for my business?",
                            answer: "Choose platforms where your target audience spends the most time. For example, if you’re targeting young people, Instagram and TikTok might be best. For professionals, LinkedIn is a good choice."
                        },
                        {
                            question: "How often should I post on social media?",
                            answer: "The frequency can vary, but a general rule is to post consistently. For example, posting once a day on platforms like Instagram and Facebook, and a few times a day on Twitter."
                        },
                        {
                            question: "Can social media marketing help small businesses?",
                            answer: "Yes, social media marketing is especially beneficial for small businesses because it’s cost-effective and allows for targeted advertising to reach potential customers in your area."
                        },
                    ]
                },
                {
                    name: "Email Marketing",
                    plans: [
                        {
                            question: "What is email marketing?",
                            answer: "Email marketing involves sending promotional messages or newsletters to a list of subscribers. It's a way to stay in touch with customers, provide updates, and encourage them to make purchases."
                        },
                        {
                            question: "Why is email marketing important?",
                            answer: "It’s important because it helps you maintain a direct line of communication with your customers, build relationships, and drive sales with targeted messages."
                        },
                        {
                            question: "How do I build an email list?",
                            answer: "You can build an email list by offering something valuable in exchange for email addresses, like a discount, e-book, or access to exclusive content, and promoting this offer on your website and social media."
                        },
                        {
                            question: "How often should I send emails to my subscribers?",
                            answer: " It depends on your business and audience, but a common practice is to send newsletters weekly or bi-weekly, and special promotions as needed. Be careful not to send too many emails to avoid annoying your subscribers."
                        },
                        {
                            question: "What should I include in my email campaigns?",
                            answer: " Include valuable content such as updates, promotions, tips, and personalized messages. Make sure your emails are visually appealing and have a clear call to action."
                        },
                    ]
                },
                {
                    name: "Influencer  Marketing",
                    plans: [
                        {
                            question: "What is influencer marketing?",
                            answer: " Influencer marketing involves partnering with influencers – people with a large and engaged following on social media – to promote your products or services."
                        },
                        {
                            question: "Why is influencer marketing effective?",
                            answer: "It’s effective because influencers have built trust with their followers. Their recommendations can lead to increased brand awareness and sales."
                        },
                        {
                            question: "How do I find the right influencers for my brand?",
                            answer: "Look for influencers whose followers match your target audience. Check their engagement rates and see if their values align with your brand."
                        },
                        {
                            question: "Is influencer marketing expensive?",
                            answer: " It can be, but there are influencers at different levels (micro, macro, and mega) with varying price points. Micro-influencers often charge less and can still deliver great results."
                        },
                        {
                            question: "How do I measure the success of an influencer marketing campaign?",
                            answer: "Measure success by tracking metrics like engagement (likes, comments, shares), reach, website traffic from influencer posts, and sales generated through unique discount codes or affiliate links."
                        },
                    ]
                },
                {
                    name: "Conversion Rate Optimization (CRO)",
                    plans: [
                        {
                            question: "What is conversion rate optimization (CRO)?",
                            answer: "CRO is the process of improving your website to increase the percentage of visitors who complete a desired action, such as making a purchase or signing up for a newsletter"
                        },
                        {
                            question: "Why is CRO important?",
                            answer: "It’s important because it helps you get more value from your existing traffic. By optimizing your site, you can increase sales and leads without having to spend more on advertising."
                        },
                        {
                            question: "How can I improve my website's conversion rate?",
                            answer: " You can improve your conversion rate by making your site user-friendly, having clear calls to action, improving page load times, and testing different elements like headlines and images to see what works best."
                        },
                        {
                            question: "What tools can I use for CRO?",
                            answer: "Tools like Google Analytics, Hotjar, and Optimizely can help you analyze user behavior, run A/B tests, and track the performance of different site elements."
                        },
                        {
                            question: "How do I know if my CRO efforts are working?",
                            answer: "Monitor your conversion rate over time and see if it improves. Track specific metrics related to your goals, like the number of purchases or sign-ups, and use A/B testing to compare different strategies."
                        },
                    ]
                },
                {
                    name: "Analytics and Reporting",
                    plans: [
                        {
                            question: "What is web analytics?",
                            answer: "Web analytics involves collecting, analyzing, and reporting data about website traffic and user behavior. This helps you understand how people interact with your site and how to improve it."
                        },
                        {
                            question: "Why are analytics important for my business?",
                            answer: "Analytics are important because they provide insights into your audience's behavior, showing what works and what doesn’t. This information helps you make data-driven decisions to improve your website and marketing strategies."
                        },
                        {
                            question: "What are some common web analytics tools?",
                            answer: "Common tools include Google Analytics, Adobe Analytics, and Matomo. These tools help you track metrics like page views, bounce rates, and conversion rates."
                        },
                        {
                            question: "How do I set up web analytics for my site?",
                            answer: "Most analytics tools require you to add a small piece of code to your website. This code tracks visitor activity and sends the data to your analytics account for you to review."
                        },
                        {
                            question: "What metrics should I focus on?",
                            answer: "Focus on metrics that align with your business goals, such as conversion rate, average session duration, bounce rate, and traffic sources. These metrics can help you understand user behavior and improve your site’s performance."
                        },
                    ]
                },
                {
                    name: "Online Reputation Management (ORM)",
                    plans: [
                        {
                            question: "What is online reputation management (ORM)?",
                            answer: "ORM involves monitoring and managing your business's online presence. This includes addressing negative reviews, promoting positive content, and ensuring your brand is represented well online.    "
                        },
                        {
                            question: "Why is ORM important?",
                            answer: "It's important because your online reputation can significantly impact customer trust and business success. Positive reviews can attract customers, while negative ones can drive them away."
                        },
                        {
                            question: "How can I improve my online reputation?",
                            answer: "Improve your online reputation by encouraging satisfied customers to leave positive reviews, responding professionally to negative feedback, and actively engaging with your audience on social media and review sites."
                        },
                        {
                            question: "What tools can help with ORM?",
                            answer: "Tools like Google Alerts, Reputation.com, and Hootsuite can help you monitor mentions of your brand, track reviews, and manage your social media presence."
                        },
                        {
                            question: "How do I handle negative reviews?",
                            answer: "Handle negative reviews by responding promptly and professionally. Acknowledge the issue, apologize if necessary, and offer to resolve the problem offline. This shows potential customers that you care about their experience."
                        },
                    ]
                },
                {
                    name: "Mobile  Marketing",
                    plans: [
                        {
                            question: "What is mobile marketing?",
                            answer: "Mobile marketing involves reaching customers through their mobile devices, such as smartphones and tablets. This can include mobile-friendly websites, apps, SMS marketing, and mobile ads."
                        },
                        {
                            question: "Why is mobile marketing important?",
                            answer: " It’s important because more people are using mobile devices to browse the internet and make purchases. A strong mobile marketing strategy ensures you reach this audience effectively."
                        },
                        {
                            question: "How can I make my website mobile-friendly?",
                            answer: "Make your website mobile-friendly by using a responsive design that adjusts to different screen sizes, ensuring fast load times, and making navigation easy on smaller screens."
                        },
                        {
                            question: "What are some effective mobile marketing strategies?",
                            answer: "Effective strategies include SMS marketing, mobile ads, in-app advertising, and optimizing your website and emails for mobile devices."
                        },
                        {
                            question: "How do I track the success of my mobile marketing efforts?",
                            answer: " Track success by monitoring metrics like mobile traffic, conversion rates from mobile users, click-through rates on mobile ads, and engagement with mobile content."
                        },
                    ]
                },
                {
                    name: "Customer Relationship Management (CRM)",
                    plans: [
                        {
                            question: "What is CRM?",
                            answer: "CRM stands for Customer Relationship Management. It involves using tools and strategies to manage interactions with current and potential customers, with the goal of improving relationships and driving sales."
                        },
                        {
                            question: "Why is CRM important?",
                            answer: "CRM is important because it helps businesses understand their customers' needs and preferences, allowing for personalized communication, better customer service, and increased customer loyalty."
                        },
                        {
                            question: "What are some popular CRM tools?",
                            answer: " Popular CRM tools include Salesforce, HubSpot, Zoho CRM, and Microsoft Dynamics. These tools help you manage customer information, track interactions, and automate sales processes."
                        },
                        {
                            question: "How can CRM improve my business?",
                            answer: " CRM can improve your business by providing insights into customer behavior, streamlining communication, and helping you identify and target your most valuable customers."
                        },
                        {
                            question: "Is CRM only for large businesses?",
                            answer: "No, CRM is beneficial for businesses of all sizes. Small businesses can use CRM to manage customer relationships efficiently and grow their customer base."
                        },
                    ]
                },
                {
                    name: "Marketing Automation",
                    plans: [
                        {
                            question: "What is marketing automation?",
                            answer: " Marketing automation involves using software to automate repetitive marketing tasks, such as email campaigns, social media posts, and ad management. This helps streamline processes and improve efficiency."
                        },
                        {
                            question: "Why is marketing automation important?",
                            answer: "It’s important because it saves time, ensures consistency, and allows you to deliver personalized messages at scale. This can lead to better engagement and higher conversion rates."
                        },
                        {
                            question: "What are some common marketing automation tools?",
                            answer: "Common tools include HubSpot, Marketo, Mailchimp, and ActiveCampaign. These tools help you automate and manage various marketing tasks."
                        },
                        {
                            question: "How can I use marketing automation effectively?",
                            answer: "Use it effectively by setting up automated email sequences, segmenting your audience for targeted messages, and using analytics to track and optimize your campaigns."
                        },
                        {
                            question: "Can small businesses benefit from marketing automation?",
                            answer: "Yes, small businesses can benefit greatly from marketing automation. It allows them to compete with larger companies by automating tasks and focusing on personalized marketing efforts."
                        },
                    ]
                },
            ]
        }
    },
    computed: {
        price() {
            let priceId = this.$route.params.priceId;
            return this.$store.getters.getPrice(priceId);
        },
    },
    created() {
        // Log the route params to debug
        console.log('Route params:', this.$route.params);

        // Extract the route parameter by the correct name
        const routeParam = this.$route.params.title; // Use 'slug' if that is the parameter name

        // Check if routeParam is defined
        if (routeParam) {
            this.extractParams(routeParam);
        } else {
            console.error('Route parameter is undefined');
        }
    },
    methods: {
        extractParams(paramString) {
            // Split the string based on ' in ' keyword and then further parse it
            let parts = paramString.split('-in-');
            if (parts.length >= 2) {
                this.services = parts[0].replace(/-/g, ' ');
                this.category = parts[1].replace(/-/g, ' ');

                // Check if there is a third part for the place
                if (parts.length > 2) {
                    this.place = parts.slice(2).join(' ').replace(/-/g, ' ');
                }
            }
        }
    }
}
</script>
<style lang="">

</style>
