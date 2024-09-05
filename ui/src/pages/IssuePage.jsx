import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BrowserProvider, Contract } from 'ethers';
import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";

const IssuePage = () => {
    const provider = new BrowserProvider(window.ethereum);

    async function connectToMetamask() {
        const signer = await provider.getSigner();
        console.log('Address: ', signer.address);
    }

    const [coursename, setCourseName] = useState('Certified Blockchain Associate');
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('A');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const issue = async (e) => {
        e.preventDefault();
        const signer = await provider.getSigner();
        const instance = new Contract(CertModuleCert, abi, signer);
        const txl = await instance.issue(id, name, coursename, grade, date);

        console.log('Transaction Return', txl);
        console.log(`id: ${id}, name: ${name}, course name: ${coursename}, grade: ${grade}, date: ${date}`);
        navigate('/');
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-100 shadow-2xl flex flex-col items-center p-8">
            {/* Header with buttons */}
            

            {/* Connect to Metamask Button */}
            <button 
                className="mt-8 bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out"
                onClick={connectToMetamask}
            >
                Connect to Metamask
            </button>

            {/* Page title */}
            <h2 className="text-4xl font-bold font-serif mt-12 text-gray-800">Certificate Dapp</h2>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 mt-10 max-w-2xl w-full">
                <h3 className="text-2xl font-bold mb-6 font-serif text-gray-700">Issue New Certificate</h3>
                <form onSubmit={issue}>
                    {/* Course Name */}
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Select Course*</label>
                        <select
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            value={coursename}
                            onChange={(e) => setCourseName(e.target.value)}
                        >
                            <option value="Certified Blockchain Associate">Certified Blockchain Associate</option>
                            <option value="Certified Ethereum Developer">Certified Ethereum Developer</option>
                            <option value="Certified Hyperledger Fabric Developer">Certified Hyperledger Fabric Developer</option>
                        </select>
                    </div>

                    {/* Certificate ID */}
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Certificate Id*</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            placeholder="Enter Certificate ID"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>

                    {/* Candidate Name */}
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Candidate Name*</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            placeholder="Enter Candidate Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Grade */}
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Select Grade*</label>
                        <select
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                        >
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                        </select>
                    </div>

                    {/* Issue Date */}
                    <div className="mb-4">
                        <label className="block text-lg font-bold text-gray-700 mb-2">Issue Date*</label>
                        <input
                            type="date"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default IssuePage;


// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { BrowserProvider, Contract } from 'ethers';
// import { abi } from "../scdata/Cert.json"
// import { CertModuleCert } from "../scdata/deployed_addresses.json"

// const IssuePage = () => {

//     const provider = new BrowserProvider(window.ethereum);

//     async function connectToMetamask() {
//         const signer = await provider.getSigner()

//         console.log('Address: ', signer.address);
//     }

//     const [coursename, setCourseName] = useState('Certified Blockchain Associate')
//     const [id, setId] = useState('')
//     const [name, setName] = useState('')
//     const [grade, setGrade] = useState('A')
//     const [date, setDate] = useState('')

//     const navigate = useNavigate()

//     const issue = async (e)=>{
//         e.preventDefault()
    
//         const signer = await provider.getSigner()
//         const instance = new Contract(CertModuleCert, abi, signer)
    
//         const txl = await instance.issue(id, name, coursename, grade, date);
    
//         console.log('Transaction Return', txl)
    
//         console.log(`id: ${id},name: ${name},course name: ${coursename},grade: ${grade},date: ${date}`);

//         navigate('/')
//       }

    

    

    

//     return (
//         <>
//             <div className="flex justify-end">


//                 <Link to="/" className="b"><input type="button" name="Issue" value="Home" className="font-serif mr-2 h-10" /></Link>
//                 <Link to="/issue" className="b"><input type="button" name="home" value="Issue Certificate"
//                     className=" rounded-md text-white mr-4 bg-blue-500 border-none font-serif h-10" /></Link>

//             </div>

//             <button onClick={connectToMetamask}>connect to metamask</button>

//             <h2 className=" text-2xl text-left font-bold font-serif">Certificate Dapp</h2>

//             <div className=" ml-10 mt-12 mr-10  max-w-lg ">
//                 <form className=" ml-10 mt-12 mr-10  max-w-lg " onSubmit={issue}>

//                     <h2 className="text-2xl font-bold font-serif">Issue New Certificate</h2>
//                     <div className="flex flex-col">
//                         <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
//                             for="select">Select
//                             Course*</label>
//                         <select name="course"
//                             className="border-2 border-black h-10"
//                             id='course'
//                             value={coursename}
//                             onChange={(e) => setCourseName(e.target.value)}
//                         >
//                             <option value="Certified Blockchain Associate">Certified Blockchain Associate</option>
//                             <option value="Certified Ethereum Developer">Certified Ethereum Developer</option>
//                             <option value="Certified Hyperledger Fabric Developer">Certified Hyperledger Fabric Developer</option>
//                         </select>
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
//                             for="select">Certificate
//                             Id*</label>
//                         <input type="text" id='certificateId'
//                             name="certificateId"
//                             placeholder="Certificate ID"
//                             className="border-2 border-black h-10"
//                             value={id}
//                             onChange={(e) => setId(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
//                             for="select">Candidate
//                             Name*</label>
//                         <input type="text"
//                             id='candidateName'
//                             name="candidateName"
//                             placeholder="Candidate Name"
//                             className="border-2 border-black h-10"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                         />
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif"
//                             for="select">Select
//                             Grade*</label>
//                         <select id='grade'
//                             name="grade"
//                             className="border-2 border-black h-10"
//                             value={grade}
//                             onChange={(e) => setGrade(e.target.value)}
//                         >
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="C">C</option>
//                         </select>
//                     </div>
//                     <div className="flex flex-col">
//                         <label className="block text-black-700 text-base text-xl pt-4  font-bold mb-2 font-serif" for="select">Issue
//                             Date*</label>
//                         <input type="date"
//                             id="date"
//                             name='date'
//                             className="border-2 border-black h-10"
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <button className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
//                             type='submit'>submit</button>
//                     </div>


//                 </form>
//             </div>


//         </>
//     )
// }

// export default IssuePage