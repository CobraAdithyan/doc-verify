import React from 'react';
import DocumentUpload from './components/DocumentUpload';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-gov-blue text-white p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold">Document Verification Portal</h1>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <DocumentUpload />
      </main>

      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;