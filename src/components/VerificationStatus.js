import React from 'react';
import ApplyNowButton from './ApplyNowButton';

const VerificationStatus = ({ status }) => {
  if (!status) return null;

  return (
    <div className="ml-2">
      {status === 'verified' ? (
        <span className="text-green-600 font-semibold">Verified ✓</span>
      ) : (
        <div className="flex items-center">
          <span className="text-red-600 font-semibold mr-2">Expired</span>
          <ApplyNowButton />
        </div>
      )}
    </div>
  );
};

export default VerificationStatus;