import React, { useState } from 'react';
import api from '../api';

export default function CertificateButton({ resultId }) {
  const [loading, setLoading] = useState(false);

  const download = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/cert/download/${resultId}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
      const a = document.createElement('a');
      a.href = url;
      a.download = `certificate_${resultId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      alert('Failed to download certificate.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={download}
      disabled={loading}
      className={`
        w-full
        px-4 py-2
        rounded-md
        font-semibold
        text-white
        transition duration-300 ease-in-out
        ${loading 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        }
      `}
    >
      {loading ? 'Preparing...' : 'Download Certificate'}
    </button>
  );
}