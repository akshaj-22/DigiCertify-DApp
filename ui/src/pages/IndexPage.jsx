import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../assets/images/dA.png';
import { BrowserProvider } from 'ethers';


const IndexPage = () => {
    const [certificateId, setCertificateId] = useState('');
    const navigate = useNavigate();

    const provider = new BrowserProvider(window.ethereum);

    async function connectToMetamask() {
        const signer = await provider.getSigner();
        console.log('Address: ', signer.address);
    }

    const search = (e) => {
        e.preventDefault();
        if (certificateId.trim()) {
            navigate(`/view/${certificateId}`);
        }
    };

    return (
        <>
        <div className="flex justify-end p-4 bg-gradient-to-br from-blue-50 to-teal-100">
                <Link to="/">
                    <button className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
                        Home
                    </button>
                </Link>
                <Link to="/issue">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Issue Certificate
                    </button>
                </Link>
            </div>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 flex flex-col items-center justify-center">
            
            <div className="text-center ">
            <button 
                className="mb-8 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
                onClick={connectToMetamask}
            >
                Connect to Metamask
            </button>

                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">DigiCertify</h1>
                
                <img src={img1} alt="Certificate DApp" className="w-64 h-auto mx-auto mt-6 mb-10 rounded-lg shadow-lg" />
                
                <form onSubmit={search} className="mt-6">
                    <input 
                        type="text" 
                        id='certificateId' 
                        name="certificateId" 
                        required 
                        placeholder="Enter Certificate Id to view" 
                        className="border-2 p-3 border-sky-400 rounded-lg focus:outline-none focus:border-teal-500 transition duration-300 ease-in-out w-80 text-lg"
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                    />
                    <button 
                        type="submit" 
                        className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg w-24 ml-3 p-3 text-lg font-bold transition duration-300 ease-in-out"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default IndexPage;


