'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Home, CheckCircle, XCircle } from 'lucide-react';

const questions = [
    {
        question: "What is the main characteristic of a Linear Bounded Automata?",
        options: [
            "It has infinite tape",
            "It has tape length proportional to input length",
            "It can only move right",
            "It has no tape"
        ],
        correct: 1,
        explanation: "LBA's tape is bounded by a constant factor of the input length."
    },
    {
        question: "Which language class is recognized by LBAs?",
        options: [
            "Regular Languages",
            "Context-Free Languages",
            "Context-Sensitive Languages",
            "Recursively Enumerable Languages"
        ],
        correct: 2,
        explanation: "LBAs recognize exactly the context-sensitive languages."
    },
    {
        question: "What is the relationship between LBAs and Turing Machines?",
        options: [
            "LBAs are more powerful",
            "They are equivalent",
            "LBAs are a restricted version of TMs",
            "They are incomparable"
        ],
        correct: 2,
        explanation: "LBAs are Turing Machines with bounded tape length."
    },
    {
        question: "Which property is NOT true for LBAs?",
        options: [
            "They can move both left and right",
            "They have infinite tape",
            "They can rewrite symbols",
            "They have a finite control unit"
        ],
        correct: 1,
        explanation: "LBAs have bounded tape, not infinite tape like Turing Machines."
    },
    {
        question: "What is the space complexity of LBA computations?",
        options: [
            "O(1)",
            "O(n)",
            "O(2^n)",
            "O(n!)"
        ],
        correct: 1,
        explanation: "LBAs use linear space relative to input length."
    },
    {
        question: "Which problem is decidable for LBAs but undecidable for Turing Machines?",
        options: [
            "Halting Problem",
            "Emptiness Problem",
            "Equivalence Problem",
            "None of these"
        ],
        correct: 3,
        explanation: "These problems remain undecidable even for LBAs."
    },
    {
        question: "What happens if an LBA tries to move beyond its bounded tape?",
        options: [
            "It crashes",
            "The computation halts",
            "The tape expands",
            "It continues from the other end"
        ],
        correct: 1,
        explanation: "LBAs must halt if they attempt to exceed their tape bounds."
    },
    {
        question: "Which of these is accepted by an LBA?",
        options: [
            "anbncndn",
            "a^n where n is prime",
            "wcw where w is any string",
            "All of these"
        ],
        correct: 3,
        explanation: "LBAs can accept all these languages as they are context-sensitive."
    },
    {
        question: "What is the closure property of LBA languages under intersection?",
        options: [
            "Not closed",
            "Closed only for regular languages",
            "Closed",
            "Depends on the languages"
        ],
        correct: 2,
        explanation: "Languages accepted by LBAs are closed under intersection."
    },
    {
        question: "How does LBA tape length relate to input length?",
        options: [
            "Equal to input length",
            "At most k times input length",
            "Logarithmic to input length",
            "Exponential to input length"
        ],
        correct: 1,
        explanation: "LBA tape length is bounded by a constant factor k times the input length."
    }
];

export default function LBAQuiz() {
    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [revealed, setRevealed] = useState(new Array(questions.length).fill(false));

    const handleAnswer = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);

        const newRevealed = [...revealed];
        newRevealed[questionIndex] = true;
        setRevealed(newRevealed);
    };

    const getScore = () => {
        return answers.reduce((score, answer, index) =>
            answer === questions[index].correct ? score + 1 : score, 0
        );
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
            <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-purple-900">LBA Quiz</h1>
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-800"
                    >
                        <Home className="h-5 w-5" />
                        Home
                    </Link>
                </div>

                <div className="space-y-8">
                    {questions.map((q, qIndex) => (
                        <div
                            key={qIndex}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <h3 className="text-xl font-semibold mb-4">{qIndex + 1}. {q.question}</h3>
                            <div className="space-y-3">
                                {q.options.map((option, oIndex) => (
                                    <button
                                        key={oIndex}
                                        onClick={() => handleAnswer(qIndex, oIndex)}
                                        disabled={revealed[qIndex]}
                                        className={`w-full text-left p-3 rounded-lg border transition-colors
                      ${revealed[qIndex]
                                                ? oIndex === q.correct
                                                    ? 'bg-green-100 border-green-500 text-green-800'
                                                    : answers[qIndex] === oIndex
                                                        ? 'bg-red-100 border-red-500 text-red-800'
                                                        : 'bg-gray-50 border-gray-200'
                                                : 'hover:bg-gray-50 border-gray-200'
                                            }
                    `}
                                    >
                                        <div className="flex items-center gap-2">
                                            {revealed[qIndex] && oIndex === q.correct && (
                                                <CheckCircle className="h-5 w-5 text-green-600" />
                                            )}
                                            {revealed[qIndex] && answers[qIndex] === oIndex && oIndex !== q.correct && (
                                                <XCircle className="h-5 w-5 text-red-600" />
                                            )}
                                            {option}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            {revealed[qIndex] && (
                                <div className="mt-4 text-gray-600 bg-gray-50 p-4 rounded-lg">
                                    <strong>Explanation:</strong> {q.explanation}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Your Score</h2>
                    <p className="text-lg">
                        You got <span className="font-bold text-purple-600">{getScore()}</span> out of {questions.length} questions correct!
                    </p>
                </div>
            </div>
        </div>
    );
}