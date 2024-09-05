import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/dA.png'; // Use your logo image
import img2 from '../assets/images/sign.png';
import { Link, useParams } from 'react-router-dom';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const ViewPage = () => {
    const provider = new BrowserProvider(window.ethereum);
    const [certificate, setCertificate] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const search = async (searchid) => {
            const signer = await provider.getSigner();
            const instance = new Contract(CertModuleCert, abi, signer);
            const result = await instance.Certificates(searchid);
            setCertificate({
                name: result[0],
                coursename: result[1],
                grade: result[2],
                date: result[3],
            });
        };
        if (id) {
            search(id);
        }
    }, [id]);

    return (
        <>
            <div className="flex justify-end p-4 bg-gray-200 hover:bg-gray-300">
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

            <div className="max-w-4xl mx-auto my-12 p-8 bg-orange-600 to-teal-100 rounded-lg shadow-lg relative overflow-hidden">
                {/* Background Design */}
                <div className="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-r from-orange-400 via-purple-600 to-teal-400 opacity-80 z-0"></div>

                <div className="relative z-10 p-8 bg-white border-8 border-double border-gray-400">
                    <h3 className="text-center font-serif text-4xl font-bold text-orange-600 mb-4">Kerala Blockchain Academy</h3>
                    
                    <div className="text-center mt-4 mb-8">
                        <p className="font-serif text-xl text-gray-700">This is proudly presented to</p>
                        <p className="font-serif text-4xl font-bold text-teal-600 mt-2">
                            {certificate.name || "Recipient Name"}
                        </p>
                    </div>

                    <div className="text-center mb-8">
                        <p className="font-serif text-xl text-gray-700">for successfully completing</p>
                        <p className="font-serif text-3xl font-bold text-black mt-2">
                            {certificate.coursename || "Course Name"}
                        </p>
                    </div>

                    <div className="text-center mb-8">
                        <p className="font-serif text-xl text-gray-700">with grade</p>
                        <p className="font-serif text-3xl font-bold text-black mt-2">
                            {certificate.grade || "Grade"}
                        </p>
                    </div>

                    <div className="flex justify-between items-center mt-12">
                        <div className="text-center">
                            <p className="font-serif text-xl text-gray-700">Signature</p>
                            <img src={img2} className="w-20 h-auto mx-auto" alt="Sign" />
                        </div>
                        <div className="text-center">
                            <img src={img1} className="w-12 h-auto mx-auto" alt="Seal" />
                        </div>
                        <div className="text-center">
                            <p className="font-serif text-xl text-gray-700">Date</p>
                            <p className="font-serif text-lg text-gray-500">{certificate.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewPage;
