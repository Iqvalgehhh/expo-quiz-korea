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
    new Category("c1", "Day1", "#f5428d"),
    new Category("c2", "Day2", "#f54242"),
    new Category("c3", "Day3", "#f5a442"),
    new Category("c4", "Day4", "#f5d142"),
    new Category("c5", "Day5", "#368dff"),
    new Category("c6", "Day6", "#41d95d"),
    new Category("c7", "Day7", "#9eecff"),
    new Category("c8", "Day8", "#b9ffb0"),
    new Category("c9", "Day9", "#ffc7ff"),
    new Category("c10", "Day10", "#47fced"),
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
