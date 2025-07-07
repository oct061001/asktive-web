import React, { useState, useEffect } from "react";
import "./Contact.css";
import asktiveLogo from "../assets/asktive_logo.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        if (value.trim() === "") return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email format";
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  useEffect(() => {
    const noErrors = Object.values(errors).every((msg) => !msg);
    const allFieldsFilled = Object.values(formData).every(
      (val) => val.trim() !== ""
    );
    setIsFormValid(noErrors && allFieldsFilled);
  }, [errors, formData]);

  const openModal = () => {
    setShowModal(true);
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setShowModal(false), 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      openModal();
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        closeModal();
      }, 5000);
    }
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>
          <img src={asktiveLogo} alt="asktive-logo" className="asktive-logo" />
        </h1>
        <h1>Reach out to our agents.</h1>
      </header>

      <section className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            className="primary-button"
          >
            Send Message
          </button>
        </form>

        {showModal && (
          <div
            className={`asktive-modal-overlay ${
              isModalVisible ? "show" : "hide"
            }`}
          >
            <div className="asktive-modal">
              <h2>Thank You!</h2>
              <p>
                Your message has been sent.
                <br />
                We'll get back to you soon.
              </p>
              <button onClick={closeModal} className="primary-button">
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
