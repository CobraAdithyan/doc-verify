import React, { useState } from 'react';
import VerificationStatus from './VerificationStatus';
import LoadingSpinner from './LoadingSpinner';

const documents = [
  "Aadhar Card",
  "Birth Certificate",
  "Income Certificate",
  "Caste Certificate",
  "PAN if applicable",
  "Bank Passbook"
];

const DocumentUpload = () => {
  const [selectedDoc, setSelectedDoc] = useState('');
  const [file, setFile] = useState(null);
  const [verifying, setVerifying] = useState({});
  const [status, setStatus] = useState({});

  const handleVerify = (doc) => {
    setVerifying(prev => ({ ...prev, [doc]: true }));
    
    // Simulate verification process
    setTimeout(() => {
      setVerifying(prev => ({ ...prev, [doc]: false }));
      setStatus(prev => ({ 
        ...prev, 
        [doc]: Math.random() > 0.5 ? 'verified' : 'expired' 
      }));
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4">
        {documents.map((doc) => (
          <div key={doc} className="document-container">
            <h3 className="text-lg font-semibold mb-2">{doc}</h3>
            <select
              className="w-full mb-2 rounded border-gray-300"
              onChange={(e) => setSelectedDoc(e.target.value)}
            >
              <option value="">Select document type</option>
              <option value={doc}>{doc}</option>
            </select>
            
            <input
              type="file"
              accept=".pdf,.jpeg,.jpg"
              className="w-full mb-2"
              onChange={(e) => setFile(e.target.files[0])}
            />

            <div className="flex justify-between items-center">
              <button
                className="verify-button"
                onClick={() => handleVerify(doc)}
                disabled={verifying[doc]}
              >
                {verifying[doc] ? <LoadingSpinner /> : 'Verify'}
              </button>

              <VerificationStatus status={status[doc]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;