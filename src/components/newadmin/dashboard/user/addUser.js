// components/Modal.js
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send to backend or state management)
        console.log(formData);
        onClose(); // Close modal after saving
    };

    if (!isOpen) return null; // Return nothing if modal is closed

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-4">Create New Users</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex flex-row w-full justify-between">
                        <label className="block text-gray-500">Name*:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='name'
                            className="w-[70%]  px-3 py-2 border rounded-xl"
                        />
                    </div>
                    <div className="mb-4 flex flex-row w-full justify-between">
                        <label className="block text-gray-500">Mobile No*:</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder='mobile number'
                            required
                            className="w-[70%] px-3 py-2 border rounded-xl"
                        />
                    </div>
                    <div className="mb-4 flex flex-row w-full justify-between">
                        <label className="block text-gray-500">Email Address*:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='email'
                            required
                            className="w-[70%] px-3 py-2 border rounded-xl"
                        />
                    </div>
                    <div className="mb-4 flex flex-row w-full justify-between">
                        <label className="block text-gray-500">Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Optional'
                            className="w-[70%] px-3 py-2 border rounded-xl"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 mr-2 text-gray-700 border round"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
