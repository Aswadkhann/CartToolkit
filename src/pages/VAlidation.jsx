import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submittedData, setSubmittedData] = useState([]);

  const handleDeleteClick = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setSubmittedData((prevData) => {
          const newData = [...prevData];
          newData.splice(index, 1);
          return newData;
        });
        Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
      }
    });
  };

  const onSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    reset(); // Reset the form state after successful submission
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Form Validation Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
          </label>
          <input
            id="fullName"
            className="border border-gray-300 p-2"
            {...register('fullName', { required: 'Full Name is required' })}
          />
          {errors.fullName && (
            <p className="text-red-500 mt-2">{errors.fullName.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            id="email"
            className="border border-gray-300 p-2"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-2">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2">
            Phone Number:
          </label>
          <input
            id="phone"
            className="border border-gray-300 p-2"
            {...register('phone', {
              required: 'Phone Number is required',
            })}
          />
          {errors.phone && (
            <p className="text-red-500 mt-2">{errors.phone.message}</p>
          )}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>

      {submittedData.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Submitted Data</h2>
          <table className="border-collapse border border-gray-500">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Full Name</th>
                <th className="border border-gray-500 p-2">Email</th>
                <th className="border border-gray-500 p-2">Phone Number</th>
                <th className="border border-gray-500 p-2"></th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-500 p-2">{data.fullName}</td>
                  <td className="border border-gray-500 p-2">{data.email}</td>
                  <td className="border border-gray-500 p-2">{data.phone}</td>
                  <td className="border border-gray-500 p-2 bg-red-400">
                    <button
                      className="text-red-500"
                      onClick={() => handleDeleteClick(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Validation;
