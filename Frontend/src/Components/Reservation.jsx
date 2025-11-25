import React, { useState } from "react";
import {
  FaBirthdayCake,
  FaUsers,
  FaHeart,
  FaUserShield,
  FaUserFriends,
  FaTimes,
} from "react-icons/fa";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    type: "Family",
    occasion: "Birthday",
  });

  const [success, setSuccess] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [occasionOpen, setOccasionOpen] = useState(false);

  const reservationTypes = [
    { label: "Family", icon: <FaUsers /> },
    { label: "Friends", icon: <FaUserFriends /> },
    { label: "Couple", icon: <FaHeart /> },
    { label: "Private", icon: <FaUserShield /> },
  ];

  const occasions = [
    { label: "Birthday", icon: <FaBirthdayCake /> },
    { label: "Anniversary", icon: <FaHeart /> },
    { label: "Other", icon: null },
  ];

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const handleGuest = (type) => {
    setForm((prev) => ({
      ...prev,
      guests:
        type === "inc"
          ? prev.guests + 1
          : prev.guests > 1
          ? prev.guests - 1
          : 1,
    }));
  };

  const handleTimeChange = (e) => {
    const time24 = e.target.value;
    const [hours, minutes] = time24.split(":");
    const h = parseInt(hours);
    const suffix = h >= 12 ? "PM" : "AM";
    const hour12 = ((h + 11) % 12) + 1;
    setForm({
      ...form,
      time: `${hour12}:${minutes} ${suffix}`,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log("Reservation Data:", form);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: 1,
      type: "Family",
      occasion: "Birthday",
    });

    // Auto hide flash after 3 seconds
    setTimeout(() => setSuccess(false), 10000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center max-md:mt-28 mt-10 px-4 relative">
      {/* Success Flash Popup */}
      {success && (
        <div className="absolute top-10 right-5 bg-green-500/95 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <span className="text-lg font-semibold">🎉 Reservation Successful!</span>
          <button
            onClick={() => setSuccess(false)}
            className="text-white hover:text-gray-200 transition text-xl"
          >
            <FaTimes />
          </button>
        </div>
      )}

      <div className="p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-3xl text-white bg-gradient-to-br from-[rgb(45,52,75)] via-[#2b3448] to-[#0f172a]">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center tracking-tight">
          Reserve a Table at <span className="text-cyan-400">Dishora</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full Name"
            required
            className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            required
            className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone"
            required
            className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="date"
            name="date"
            min={getTomorrowDate()}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          <input
            type="time"
            name="time"
            onChange={handleTimeChange}
            required
            className="p-4 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Guest Counter */}
          <div className="flex items-center justify-between bg-white rounded-xl p-2 text-black">
            <span className="font-semibold px-2">Guests:</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => handleGuest("dec")}
                className="bg-blue-500 hover:bg-cyan-500 text-white px-3 py-1 rounded-full font-bold transition"
              >
                -
              </button>
              <span className="w-6 text-center">{form.guests}</span>
              <button
                type="button"
                onClick={() => handleGuest("inc")}
                className="bg-blue-500 hover:bg-cyan-500 text-white px-3 py-1 rounded-full font-bold transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Type Dropdown */}
          <div
            className="relative cursor-pointer"
            onClick={() => setTypeOpen(!typeOpen)}
          >
            <div className="p-4 rounded-xl bg-white text-black flex items-center justify-between">
              <span className="flex items-center gap-2">
                {reservationTypes.find((t) => t.label === form.type)?.icon}
                {form.type}
              </span>
              <span className="text-gray-500">▼</span>
            </div>
            {typeOpen && (
              <ul className="absolute left-0 right-0 mt-1 bg-white text-black rounded-xl shadow-lg overflow-hidden z-10">
                {reservationTypes.map((t) => (
                  <li
                    key={t.label}
                    onClick={() => {
                      setForm({ ...form, type: t.label });
                      setTypeOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-blue-500 hover:text-white flex items-center gap-2 transition cursor-pointer"
                  >
                    {t.icon} {t.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Occasion Dropdown */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOccasionOpen(!occasionOpen)}
          >
            <div className="p-4 rounded-xl bg-white text-black flex items-center justify-between">
              <span className="flex items-center gap-2">
                {occasions.find((o) => o.label === form.occasion)?.icon}
                {form.occasion}
              </span>
              <span className="text-gray-500">▼</span>
            </div>
            {occasionOpen && (
              <ul className="absolute left-0 right-0 mt-1 bg-white text-black rounded-xl shadow-lg overflow-hidden z-10">
                {occasions.map((o) => (
                  <li
                    key={o.label}
                    onClick={() => {
                      setForm({ ...form, occasion: o.label });
                      setOccasionOpen(false);
                    }}
                    className="px-4 py-3 hover:bg-blue-500 hover:text-white flex items-center gap-2 transition cursor-pointer"
                  >
                    {o.icon} {o.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-500 hover:bg-blue-700 transition py-4 rounded-2xl text-xl font-semibold text-white shadow-lg transform hover:scale-105"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
}
