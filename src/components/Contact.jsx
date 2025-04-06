import React, { useEffect, useMemo, useState } from "react";
import { BiCross } from "react-icons/bi";
import {
  FiCalendar,
  FiCheck,
  FiCrosshair,
  FiInfo,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ImCancelCircle } from "react-icons/im";

const Contact = ({ service }) => {
  let [error, setError] = useState({
    name: "",
    phone: "",
    selectedServices: "",
    date: null,
    error: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [selectedServices, setSelectedServices] = useState(service);

  useEffect(() => {
    setSelectedServices(service);
  }, [service]);

  const validateForm = () => {
    if (!name) {
      error.name = "Please enter Name";
      error.error = true;
      setIsSubmitting(true);
    }
    if (!phone || phone.length !== 10) {
      error.phone = "Please enter Number";
      error.error = true;
      setIsSubmitting(true);
    }
    if (!date) {
      error.date = "Please select Date";
      error.error = true;
      setIsSubmitting(true);
    }
    if (!selectedServices.length) {
      error.selectedServices = "Please Select Services";
      error.error = true;
      setIsSubmitting(true);
    }
    if (name && phone.length === 10 && selectedServices.length && date) {
      setIsSubmitting(false);
      error = {
        name: "",
        phone: "",
        selectedServices: "",
        date: null,
        error: false,
      };
    }
    return error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setError(validationErrors);
    if (error.error) {
      return;
    } else {
      const message = `Booking Details \nName :${name} \nPhone : ${phone} \nDate : ${date} \nSelected Services: ${selectedServices.map(
        (v) => v
      )}`;
      setTimeout(() => {
        window.open(`https://wa.me/+918447127239?text=${message}`, `_blank`);
        setName("");
        setDate("");
        setPhone("");
        setSelectedServices([]);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      }, 1000);
    }
  };
  const toggleServices = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };
  const services = [
    "Glow Basics",
    "Radiant Touch",
    "Shimmer Bliss",
    "Golden Glow-Up",
    "Luxe Refinement",
    "Glamorous Diva",
    "Elite Elegance",
    "The ultimate Package",
  ];
  return (
    <>
      <div id="contact" className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-rose-800">
          Book Your Beauty Session
        </h1>
        <p className="text-yellow-600 text-lg sm:text-xl font-medium">
          Let us create a perfect beauty experience
        </p>
      </div>
      <div className="flex justify-center items-center  flex-col md:flex-row gap-8">
        <div className=" mx-auto px-4 ms:px-6 lg:px-8">
          <form
            className="bg-white w-[100%]  rounded-3xl shadow-lg p-6 sm:p-8 border border-2 border-yellow-600 "
            onSubmit={handleSubmit}
            target="_blank"
          >
            <div className="gap-4 space-y-4 ">
              {/* Name */}
              <div className="flex items-center border border-2 border-yellow-400  rounded-md p-2 font-semibold">
                <FiUser className="text-yellow-500 mr-2" />
                <input
                  type="text"
                  value={name}
                  className="flex-grow outline-none "
                  placeholder="Name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setError({ ...error, name: "" });
                    setIsSubmitting(false);
                  }}
                  autoFocus
                />
                {error.name && (
                  <p className="text-red-400 text-sm mt-1 ml-1 flex items-center gap-1">
                    <FiInfo className="inline" />
                    {error.name}
                  </p>
                )}
              </div>
              {/* phone */}
              <div className="flex items-center border border-2 border-yellow-400  rounded-md p-2 font-semibold">
                <FiPhone className="text-yellow-500 mr-2" />
                <input
                  type="text"
                  value={phone}
                  className="flex-grow outline-none "
                  placeholder="Phone Number"
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                    setError({ ...error, phone: "" });
                    setIsSubmitting(false);
                  }}
                />
                {error.phone && (
                  <p className="text-red-400 text-sm mt-1 ml-1 flex items-center gap-1">
                    <FiInfo className="inline" />
                    {error.phone}
                  </p>
                )}
              </div>
              {/* service */}
              <div className="md:col-span-2">
                <label className="block text-yellow-700 text-lg font-medium mb-3 sm:mb-4">
                  Select Services
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center bg-yellow-100 rounded-full px-4 py-2 text-sm text-yellow-700 font-medium transition-all hover:bg-yellow-200"
                    >
                      <span>{service}</span>
                      <ImCancelCircle
                        className="text-lg ml-2 text-red-900 cursor-pointer"
                        onClick={() => toggleServices(service)}
                      />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => {
                        toggleServices(service);
                        setError({ ...error, selectedServices: "" });
                        setIsSubmitting(false);
                      }}
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                        selectedServices.includes(service)
                          ? "bg-yellow-500 text-white shadow-lg"
                          : "bg-white-50 hover:bg-yellow-100 border border-2 border-yellow-600 "
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${
                          selectedServices.includes(service)
                            ? "bg-white text-yellow-500"
                            : "bg-yellow-200 text-transparent"
                        }`}
                      >
                        <FiCheck className="w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm font-medium">
                        {service}
                      </span>
                    </div>
                  ))}
                  {error.selectedServices && (
                    <p className="text-red-400 text-sm mt-1 ml-1 flex items-center gap-1">
                      <FiInfo className="inline" />
                      {error.selectedServices}
                    </p>
                  )}
                </div>
              </div>
              {/* date */}
              <div className="flex items-center border border-2 border-yellow-400  rounded-md pl-2 font-semibold">
                <FiCalendar className="text-yellow-500 mr-2" />
                <DatePicker
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    setError({ ...error, date: "" });
                    setIsSubmitting(false);
                  }}
                  dateFormat={"dd/MM/yyyy"}
                  className="flex-grow outline-none p-2"
                  minDate={new Date()}
                  placeholderText="Select Booking Date"
                />
                {error.date && (
                  <p className="text-red-400 text-sm mt-1 ml-1 flex items-center gap-1">
                    <FiInfo className="inline" />
                    {error.date}
                  </p>
                )}
              </div>
              {isSubmitting && (
                <button className="disabled" disabled>
                  Send Message on Whatsapp
                </button>
              )}
              {!isSubmitting && (
                <button type="submit">Send Message on Whatsapp</button>
              )}
            </div>
          </form>
        </div>
        <div className="w-[80%] space-y-4 ">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl">Vasundhara Branch</h1>
            <iframe
              src="https://maps.google.com/maps?q=28%C2%B039%2745.0%22N+77%C2%B023%2704.8%22E&output=embed"
              className="w-[100%] md:w-[80%] h-[260px] "
            ></iframe>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl">Raj nagar</h1>
            <iframe
              src="https://maps.google.com/maps?q=28%C2%B039%2745.0%22N+77%C2%B023%2704.8%22E&output=embed"
              className="w-[100%] md:w-[80%] h-[260px] "
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
