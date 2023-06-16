import React, { useState } from "react";

const Admission = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data or perform any other action
      console.log("Form submitted:", formData.name,formData.email,formData.password,formData.phone);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validate name field
    if (!data.name) {
      errors.name = "Name is required";
    }

    // Validate email field
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.phone) {
      errors.phone = "Phone is required";
    } else if (data.phone.length !== 11) {
      errors.phone = "Invalid Phone Number";
    }

    // Validate password field
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Validate confirmPassword field
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Use a regular expression or any other method to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="  h-screen py-8 px-4 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-4xl py-8 text-center">Form Validation Example</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium pr-10 ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field border border-black"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium pr-10">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field border border-black"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium pr-9">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field border border-black"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium pr-5">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-field border border-black"
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="input-field border border-black"
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 py-3 w-full text-center text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admission;
