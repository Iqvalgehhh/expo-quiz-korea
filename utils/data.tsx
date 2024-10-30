// Category.ts
class Category {
    id: string;
    title: string;
    color: string;

    constructor(id: string, title: string, color: string) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}



export const CATEGORIES: Category[] = [
    new Category("c1", "Day 1", "#f5428d"),
    new Category("c2", "Day 2", "#47fced"),
    new Category("c3", "Day 3", "#ffc7ff"),
    new Category("c4", "Day 4", "#f5d142"),
    new Category("c5", "Day 5", "#b9ffb0"),
    new Category("c6", "Day 6", "#41d95d"),
    new Category("c7", "Day 7", "#9eecff"),
    new Category("c8", "Day 8", "#368dff"),
    new Category("c9", "Day 9", "#f5a442"),
    new Category("c10", "Day 10", "#f54242"),
];

interface QuizData {
    question: string;
    answer: string;
}

export const quizDats: QuizData[] = [
    {
        question: "What is the capital of India?",
        answer: "Delhi",
    },
    {
        question: "Largest animal in the world?",
        answer: "Blue whale",
    },
    {
        question: "Test",
        answer: "Blue whale",
    },
    {
        question: "Largest animal in the world?",
        answer: "Blue whale",
    },
];
