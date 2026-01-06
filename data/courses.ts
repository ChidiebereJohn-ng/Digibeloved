export interface CourseModule {
    title: string;
    duration?: string;
    items: string[];
}

export interface Course {
    id: string;
    title: string;
    price: string;
    originalPrice: string;
    description: string;
    shortDescription: string;
    category: "Business" | "Research" | "Creative" | "Technical" | "Specialized";
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    image: string;
    curriculum: CourseModule[];
    features: string[];
    copy: {
        headline: string;
        subheadline: string;
        audience: string[];
        painPoints: string[];
        solution: string;
        guarantee: string;
    }
}

export const courses: Course[] = [
    {
        id: "ai-research-data",
        title: "Applied AI for Research & Data Analysis",
        price: "₦10,000",
        originalPrice: "₦150,000",
        shortDescription: "Master Google's AI tools (Gemini, NotebookLM) to speed up literature reviews and analyze data without coding.",
        description: "Quickly learn how Artificial Intelligence can boost your research and data analysis. This focused training shows business professionals, academics, researchers, and analysts how to practically use Google's AI tools.",
        category: "Research",
        level: "Beginner",
        duration: "Self-Paced / Workshop",
        image: "https://picsum.photos/seed/research-ai/800/600",
        curriculum: [
            {
                title: "Module 1: Review of Tools",
                items: [
                    "Gemini & Gemini Canvas",
                    "NotebookLM for document management",
                    "Google AI Studio & Google Colab",
                    "Case study analysis of successful research projects"
                ]
            },
            {
                title: "Module 2: Mastering Prompt Engineering",
                items: [
                    "Mastering Prompt Engineering for Research",
                    "Evaluating Prompts (Chapters 1-3)",
                    "building Questionnaire Prompts",
                    "How to Build Custom Prompts for specific tasks"
                ]
            },
            {
                title: "Module 3: AI for Writing Research Reports",
                items: [
                    "Drafting Chapters 1-5 using AI assistance",
                    "General Rules of Thumb for AI writing",
                    "Hands-on tutorial: Analyzing datasets with pre-trained models"
                ]
            },
            {
                title: "Module 4: Data Analysis 101",
                items: [
                    "Introduction to Data Analysis domains",
                    "Excel and Google Sheets integration",
                    "Data Analysis on Google AI Studio & Data Science Agents",
                    "Best Practices and Ethics in AI Data Analysis"
                ]
            },
            {
                title: "Module 5: Project & Portfolio",
                items: [
                    "Solving unique problems with Applied AI",
                    "Building a personal portfolio using all Google tools",
                    "Certification project submission"
                ]
            },
            {
                title: "Module 6: Monetization",
                items: [
                    "Job Search strategies",
                    "Provision of Services using your new skills",
                    "Presentation Skills using AI tools",
                    "Bypassing AI detection tools (Ethical use)"
                ]
            }
        ],
        features: [
            "The 'One-Click' Summary for 50+ PDFs",
            "No-Code Data Analysis with Gemini",
            "Grounding techniques for factual accuracy",
            "Official Certification of Completion"
        ],
        copy: {
            headline: "Stop Reading PDF Files One By One. It Is A Waste Of Your Time.",
            subheadline: "Learn How To Use A New 'Google Secret' To Read 50 Papers In Minutes And Analyze Data Without Coding.",
            audience: [
                "Business Professionals",
                "Academicians & Researchers",
                "Data Analysts",
                "Students drowning in endless files"
            ],
            painPoints: [
                "You are drowning in files. You have too many PDF papers to read.",
                "You are scared of 'Data' because you don't know how to code.",
                "You are running out of time and your deadline is coming fast."
            ],
            solution: "We show you how to use Google’s New AI Tools (Gemini and NotebookLM) to do your hard work for you. This is not a boring class. This is a simple system.",
            guarantee: "If you do not cut your work time in HALF... we will give you your money back."
        }
    }
];
