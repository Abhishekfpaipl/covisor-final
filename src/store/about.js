export default {
    namespaced: true,
    state: {
        techTeam: [
            {
                name: "Piyush Gupta",
                post: "CTO",
                value: "Leads the technology strategy, oversees software development and IT infrastructure, and ensures the company stays at the forefront of technological innovation."
            },
            {
                name: "Santosh Kumar",
                post: "Backend Developer",
                value: "A backend developer works on the server-side of web applications, focusing on the logic, database interactions, and overall functionality that powers the application. They use languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Backend developers ensure data is processed efficiently, the application performs well, and security measures are in place to protect user data and system integrity."
            },
            {
                name: "Abhishek Negi",
                post: "Frontend Developer",
                value: "A frontend developer focuses on creating the user-facing parts of websites and applications. They work with HTML, CSS, and JavaScript to build responsive and interactive interfaces. Their goal is to ensure a smooth and engaging user experience across various devices and browsers. Frontend developers often work with design teams to implement visual elements and user interface components."
            },
            {
                name: "Nikhil Garg",
                post: "Frontend Developer",
                value: "A frontend developer focuses on creating the user-facing parts of websites and applications. They work with HTML, CSS, and JavaScript to build responsive and interactive interfaces. Their goal is to ensure a smooth and engaging user experience across various devices and browsers. Frontend developers often work with design teams to implement visual elements and user interface components."
            },
        ],
        marketingTeam: [
            {
                name: "Aman Sharma",
                post: "Chief Marketing Officer",
                value: " Develops and oversees the overall marketing strategy, aligns marketing initiatives with company goals, and leads the marketing team."
            },
            {
                name: "Bhawna Rawat",
                post: "Digital Marketing Specialist",
                value: " Develops and oversees the overall marketing strategy, aligns marketing initiatives with company goals, and leads the marketing team."
            },
            {
                name: "Garima Bhardwaj",
                post: "Content Marketing Manager",
                value: " Creates and manages content strategy across all platforms. Oversees the creation of blogs, whitepapers, case studies, and other marketing materials."
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
                value: "Oversees day-to-day operations, ensures efficient processes, and manages resource allocation across departments."
            },
            {
                name: "Swati Srivastava",
                post: "HR Manager",
                value: "Leads the technology strategy, oversees software development and IT infrastructure, and ensures the company stays at the forefront of technological innovation."
            },
            {
                name: "Saurabh Singh",
                post: "Admin Manager",
                value: " Manages the company's financial operations, including budgeting, financial planning, and reporting. Ensures financial health and compliance."
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