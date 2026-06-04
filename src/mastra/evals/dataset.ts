type EvalItem = {
    question: string
    expectedAnswer: string
}

export const evalDataset: EvalItem[] = [
    {
        question: "Where does Franco currently work?",
        expectedAnswer:
            "Franco works at Crombie as a Software Engineer & AI, full-time on-site in Santa Fe, Argentina since January 2026.",
    },
    {
        question: "What is Franco studying?",
        expectedAnswer:
            "Franco is studying AI Engineering (Ingeniería en Inteligencia Artificial) at Universidad Nacional del Litoral (UNL) in Santa Fe, Argentina. It's a 5-year public university degree. He also continuously self-teaches new technologies by building real projects with them.",
    },
    {
        question: "How does Franco learn new technologies?",
        expectedAnswer:
            "Franco's approach is to pick a technology, build something real with it, and ship it publicly. For example, he learned LangChain and LangGraph by building Lens, and learned AWS Bedrock and RAG by applying them in production at Crombie.",
    },
    {
        question: "What frontend technologies does Franco work with?",
        expectedAnswer:
            "Franco is proficient with React, Next.js, Astro, Tailwind CSS, and TypeScript. He has used React in production at Crombie and across 25+ freelance projects, and Next.js in Swear, Freelanceo, and client work.",
    },
    {
        question: "What are Franco's hobbies and interests outside of work?",
        expectedAnswer:
            "Franco enjoys coffee as a daily ritual, plays chess regularly, is into music, and has gamed since childhood. He also builds side projects as both a hobby and professional development, and is drawn to minimalist design and aesthetics.",
    },
]
