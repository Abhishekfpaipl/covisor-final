<template>
    <div>
        <div class="container">
            <h1 class="text-center mb-4">Here is What I Wanna Give You...</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                <div class="col" v-for="(plan, index) in plans" :key="index">
                    <div class="card px-3 bg-light rounded-0" style="min-height: 500px;">
                        <div class="py-2 border-bottom fw-bold">{{ plan.name }}</div>
                        <div class="card-body text-center">
                            <ul v-if="plan.features" class="list-group">
                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                    class="px-0 d-flex list-group-item text-capitalize bg-light border-0">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <span class="px-2 text-start">
                                        {{ feature.name }}
                                    </span>
                                </li>
                            </ul>
                        </div> 
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
            plans: [
                {
                    id: 1,
                    name: 'Entrepreneurship Freedom Blueprint',
                    price: 100,
                    features: [
                        { name: 'How Your Business Can Run Without You.' },
                        { name: 'Importance Of Business Automation.' },
                        { name: 'System To Run Your Business On Autopilot.' },
                        { name: 'Tools & Techniques For Automation' },
                        { name: 'How To Set Business Goals.' },
                        { name: 'How to Supercharge Your Productivity.' },
                    ]
                },
                {
                    id: 2,
                    name: 'Team Building Blueprint',
                    price: 200,
                    features: [
                        { name: 'How to Get The Right Team.' },
                        { name: "How To Set KRA's & KPI's." },
                        { name: 'How To Build A High-Performance Culture.' },
                        { name: 'Importance of Employee On-Boarding System.' },
                        { name: 'How To Measure Performance & Give Reward.' },
                        { name: 'How to Breed Innovation At Workplace.' },
                        { name: 'How To Harness Skill,, Navigate Conflicts & Encourage Collaboration In The Team.' },
                    ]
                },
                {
                    id: 3,
                    name: 'Sales Growth Blueprint',
                    price: 300,
                    features: [
                        { name: 'How To Sell More, Faster & Confidently.' },
                        { name: "Lead Generation & Conversion System." },
                        { name: 'How To Make Your Prospect Decide Quickly.' },
                        { name: 'Importance of Employee On-Boarding System.' },
                        { name: 'Negotiation Technique That Brings a "YES".' },
                        { name: 'How To Create A Sales Funnel.' },
                        { name: 'Marketing, Sales & Branding All Explained.' },
                    ],
                },
                {
                    id: 4,
                    name: 'Finance Mastery Blueprint',
                    price: 300,
                    features: [
                        { name: 'How To Read Financial Statements.' },
                        { name: "How To Manage Cashflow." },
                        { name: 'How To Release Working Capital Easily.' },
                        { name: '5 Crucial Ratios That You Must Review.' },
                        { name: 'Finance Security From Financial Institutions.' },
                        { name: 'How To Assess The Profitability of A Deal.' },
                    ],
                },
                {
                    id: 5,
                    name: 'QnA Session',
                    price: 300,
                    features: [
                        { name: 'Ask Your Questions.' },
                        { name: "Clear All Your Doubts." },
                        { name: 'Get Networking Opportunity.' },
                        { name: 'Get Community Acces.' },
                    ],
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>