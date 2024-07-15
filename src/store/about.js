export default {
    namespaced: true,
    state: {
        techTeam: [
            {
                name: "Piyush Gupta",
                post: "CTO",
                value: "Leads the company's technology strategy, oversees software development and IT infrastructure, and ensures the organization stays at the forefront of technological innovation."
            },
            {
                name: "Santosh Kumar",
                post: "Backend Developer",
                value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
            },
            {
                name: "Satpal Rawat",
                post: "Backend Developer",
                value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
            },
            {
                name: "Vivek Kumar",
                post: "Backend Developer",
                value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
            },
            {
                name: "Jatin Bhardwaj",
                post: "Backend Developer",
                value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
            },
            {
                name: "Abhishek Negi",
                post: "Frontend Developer",
                value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
            },
            {
                name: "Nikhil Garg",
                post: "Frontend Developer",
                value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
            },
            {
                name: "Harmanpreet Singh",
                post: "Frontend Developer",
                value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
            },
            {
                name: "Shivam Sharma",
                post: "Frontend Developer",
                value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
            },
        ],
        marketingTeam: [
            {
                name: "Aman Sharma",
                post: "Chief Marketing Officer",
                value: "Develops and oversees the overall marketing strategy, aligns marketing initiatives with company goals, and leads the marketing team."
            },
            {
                name: "Bhawna Rawat",
                post: "Digital Marketing Specialist",
                value: "Implements and manages online marketing campaigns, analyzes digital traffic, and optimizes online presence to enhance engagement and conversions."
            },
            {
                name: "Garima Bhardwaj",
                post: "Content Marketing Manager",
                value: "Creates and manages content strategy across all platforms. Oversees the creation of blogs, whitepapers, case studies, and other marketing materials."
            },
            {
                name: "Manjesh Kumar Singh",
                post: "Brand Manager",
                value: "Develops and maintains the company's brand identity. Ensures brand consistency across all marketing channels and initiatives."
            },
        ],
        managementTeam: [
            {
                name: "Anusha Tyagi",
                post: "Manger",
                value: "Provides overall leadership and strategic direction for the company. Makes high-level decisions and is responsible for the company's success."
            },
            {
                name: "Kaushubh Sharma",
                post: "Accounts Manager",
                value: "Manages the company's financial operations, including budgeting, financial planning, and reporting. Ensures financial health and compliance."
            },
            {
                name: "Swati Srivastava",
                post: "HR Manager",
                value: "Oversees day-to-day operations, ensures efficient processes, and manages resource allocation across departments."
            },
            {
                name: "Saurabh Singh",
                post: "Admin Manager",
                value: "Leads the technology strategy, oversees software development and IT infrastructure, and ensures the company stays at the forefront of technological innovation."
            },
        ],
    },
    getters: {
        getTechTeam: state => state.techTeam,
        getMarketingTeam: state => state.marketingTeam,
        getManagementTeam: state => state.managementTeam,
    },
    mutations: {},
    actions: {},
}