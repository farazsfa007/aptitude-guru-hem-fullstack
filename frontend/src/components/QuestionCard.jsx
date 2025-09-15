import React from 'react';

function QuestionCard({ q, selected, onSelect }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{q.questionText}</h3>
      <ul className="space-y-3">
        {q.options.map((opt, idx) => (
          <li
            key={idx}
            className={`
              p-3 rounded-md cursor-pointer
              transition-colors duration-200
              ${selected === opt ? 'bg-blue-100 border-blue-500 border-2 text-blue-800' : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'}
            `}
            onClick={() => onSelect(opt)}
          >
            <label className="flex items-center space-x-3 w-full cursor-pointer">
              <input
                type="radio"
                name={q._id}
                checked={selected === opt}
                onChange={() => onSelect(opt)}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-base text-gray-700">{opt}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionCard;