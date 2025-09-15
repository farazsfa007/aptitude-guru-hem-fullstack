import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CertificateButton from '../components/CertificateButton';

export default function ResultPage(){
    const { resultId } = useParams();
    const location = useLocation();
    const [result, setResult] = useState(null);

    useEffect(() => {
        async function fetchResult() {
        if (location.state) {
            setResult({ score: location.state.score, passed: location.state.passed });
        } else {
            setResult({ score: 'Unknown', passed: false });
        }
        }
        fetchResult();
    }, [location, resultId]);

    if (!result) return <div>Loading...</div>;

    return (
        <div className="p-6 mt-20 max-w-sm mx-auto bg-gray-200 rounded-xl shadow-md space-y-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Result</h2>
        <p className="text-xl font-semibold text-gray-700">
            Score: <span className="text-blue-600">{result.score}%</span>
        </p>
        <p className={`text-xl font-semibold ${result.passed ? 'text-green-600' : 'text-red-600'}`}>
            Status: {result.passed ? 'Passed' : 'Failed'}
        </p>
        
        <CertificateButton resultId={resultId} />
    </div>
    );
}
