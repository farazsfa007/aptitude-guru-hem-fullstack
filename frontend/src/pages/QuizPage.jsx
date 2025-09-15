import React, { useEffect, useState } from 'react';
import api from '../api';
import QuestionCard from '../components/QuestionCard';
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    useEffect(()=> {
        async function load() {
        const res = await api.get('/quiz/questions/default-quiz');
        setQuestions(res.data.questions);
        setLoading(false);
        }
        load().catch(console.error);
    },[]);

    const handleSelect = (qId, ans) => {
        setAnswers(prev => ({ ...prev, [qId]: ans }));
    };

    const handleSubmit = async ()=>{
        const ansArr = Object.keys(answers).map(qId => ({ questionId: qId, answer: answers[qId] }));
        const { data } = await api.post('/quiz/submit', { quizId: 'default-quiz', answers: ansArr });
        nav(`/result/${data.resultId}`, { state: { score: data.score, passed: data.passed } });
    };

    if (loading) return <div>Loading...</div>;
    if (!questions.length) return <div>No questions found</div>;

    const q = questions[current];
    const selected = answers[q._id];

    return (
    <div className="p-5 max-w-2xl mx-auto space-y-6">
    <h2 className="text-3xl font-bold text-center p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg">Quiz</h2>
    
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="text-right text-lg font-medium text-gray-600">
        Question {current + 1} of {questions.length}
        </div>
        <QuestionCard q={q} selected={selected} onSelect={(opt) => handleSelect(q._id, opt)} />
    </div>

    <div className="flex justify-between items-center mt-4">
        <button
        onClick={() => setCurrent(c => c - 1)}
        disabled={current === 0}
        className={`
            px-6 py-2 rounded-lg font-semibold
            transition duration-300 ease-in-out
            ${current === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md'
            }
        `}
        >
        Prev
        </button>
        
        {current < questions.length - 1 ? (
        <button
            onClick={() => setCurrent(c => c + 1)}
            className="px-6 py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white shadow-md transition duration-300 ease-in-out"
        >
            Next
        </button>
        ) : (
        <button
            onClick={handleSubmit}
            className="px-6 py-2 rounded-lg font-semibold bg-green-500 hover:bg-green-600 text-white shadow-md transition duration-300 ease-in-out"
        >
            Submit
        </button>
        )}
    </div>
    </div>
    );
}
