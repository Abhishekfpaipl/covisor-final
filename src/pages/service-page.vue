<template>
    <div>
        <div class="my-5">
            <FormBanner brandColorOne="#125252" :text="text" :customer="customer" :service="service"
                :category="category" :place="place" v-observe />
        </div>
        <div class="my-5">
            <ServicesLeadManagement :values="leads" title="What makes us different ?" v-observe />
        </div>
        <div class="mt-5">
            <WhyChooseUs :description="whychooseUs" title="why choose us" image="/img/whychooseUs.svg" v-observe />
        </div>
        <div class="">
            <AutoScrolling :links="autoScrolling" v-observe />
        </div>
        <div class="my-5">
            <TempCustomers :reviews="customers" title="our customers" v-observe />
        </div>
        <div class="my-5">
            <CustomCounter :service="service" :serviceCount="2000" :category="category" :categoryCount="1500"
                :place="place" :placeCount="5000" image="/img/smile.svg" title="our happy customers" v-observe />
        </div>
    </div>
</template>
<script>
import FormBanner from "@/components/FormBanner.vue";
import ServicesLeadManagement from "@/components/services/LeadManagement.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import AutoScrolling from "@/components/services/AutoScrolling.vue";
import TempCustomers from "@/components/TempCustomers.vue";
import CustomCounter from "@/components/CustomCounter.vue";

export default {
    name: "ServicePage",
    components: {
        FormBanner,
        ServicesLeadManagement,
        WhyChooseUs,
        AutoScrolling,
        TempCustomers,
        CustomCounter,
    },
    data() {
        return {
            text: '',
            service: '',
            customer: '',
            category: '',
            place: '',
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
            ],
            leads: [
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
            faqs: [
                {
                    question: "What does a CRM system do ?",
                    answer: "At its core, the CRM system is designed to manage communications with customers and align all stakeholders involved in interactions with them. However, CRM systems have evolved to perform complex tasks like automating processes, setting up workflows, tracking all conversations and using all the sales and marketing data to derive meaningful reports."
                },
                {
                    question: "Why is CRM important for marketers?",
                    answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                },
                {
                    question: "What is CRM software used for?",
                    answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                },
                {
                    question: "Why is CRM important in sales?",
                    answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                },
                {
                    question: "How much does a CRM system cost?",
                    answer: "Depending on the features, the cost of a CRM system may start from $10-$25 per user per month. CRM companies also offer custom plans for specific features."
                },
                {
                    question: " Can i make whatsApp communication from Covisor CRM?",
                    answer: "Yes, you can do trasactional whatsapp messaging through Covisor CRM. You can also select automated messages and send to the buyers."
                },
                {
                    question: "Is Covisor CRM gives alert of timely followups?",
                    answer: "Yes, It gives peding follow-up alerts on dashboard Covisor and sms so that you should not miss any followup"
                },
                {
                    question: "Can I sync my call log leads to Covisor CRM?",
                    answer: "Yes, you can sync all your calls in Covisor CRM and convert them into leads."
                },
                {
                    question: "Is my data secured at Covisor CRM?",
                    answer: "Yes, your data is completely safe, and important credentails are encripted."
                },
                {
                    question: "Can i sync leads form my website to Covisor?",
                    answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
                },
                {
                    question: "Can i manage my accounts at Covisor CRM?",
                    answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
                },
            ], 
            whychooseUs: [
                {
                    title: 'Ensure Zero Lead Leakage',
                    icon: 'bi-headset'
                },
                {
                    title: 'No Missing Follow - ups',
                    icon: 'bi-thumbs-up'
                },
                {
                    title: "Increase 80 % Additional Sales",
                    icon: 'bi-currency-ruppee'
                },
                {
                    title: "Cost effective",
                    icon: 'bi-journal'
                },
                {
                    title: "Secured Plateform",
                    icon: 'bi-stars'
                },
                {
                    title: "Free support",
                    icon: 'bi-stars'
                },
                {
                    title: "Modern Interface",
                    icon: 'bi-stars'
                },
                {
                    title: "Easy Setup & Fast Adoption",
                    icon: 'bi-stars'
                },
            ],
        }
    },
    computed: {
        autoScrolling() {
            return this.$store.getters.getAutoScrolling
        },
        customers() {
            return this.$store.getters.getCustomers
        }
    },
    mounted() {
        this.extractKeywordsFromRoute();
    },
    methods: {
        extractKeywordsFromRoute() {
            const routeParam = this.$route.params.slug;
            const parts = routeParam.split('-');

            this.text = 'we are offering';
            this.service = parts.slice(3, parts.indexOf('to')).join(' ');
            this.customer = parts.slice(parts.indexOf('to') + 1, parts.indexOf('from')).join(' ');
            this.category = parts.slice(parts.indexOf('from') + 1, parts.indexOf('in')).join(' ');
            this.place = parts.slice(parts.indexOf('in') + 1).join(' ');
        },
    },
}
</script>
<style lang="">

</style>