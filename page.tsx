"use client";
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaCode } from "react-icons/fa";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [showMotivationBox, setShowMotivationBox] = useState(false);

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" />, desc: "HTML adalah bahasa markup untuk membuat struktur halaman web. Kita bisa membuat heading, paragraf, tabel, daftar, gambar, dan elemen lain. HTML adalah fondasi utama sebelum belajar CSS atau JavaScript." },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" />, desc: "CSS digunakan untuk menata tampilan halaman web, mulai dari warna, font, layout, hingga animasi. Dengan CSS, website terlihat lebih menarik, rapi, dan responsif." },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" />, desc: "JavaScript adalah bahasa pemrograman untuk membuat website interaktif. Bisa membuat tombol klik, validasi form, animasi, dan banyak fitur dinamis lainnya." },
    { name: "React", icon: <FaReact size={50} className="text-cyan-400" />, desc: "React adalah library JavaScript untuk membangun UI interaktif. Dengan React, kita bisa membuat komponen yang reusable, aplikasi web modern, dan mudah mengelola state." },
    { name: "GitHub", icon: <FaGithub size={50} className="text-gray-800" />, desc: "GitHub adalah platform untuk menyimpan, mengelola, dan berbagi kode. Bisa digunakan untuk version control dan kolaborasi tim." },
    { name: "VS Code", icon: <FaCode size={50} className="text-purple-600" />, desc: "VS Code adalah code editor populer dengan banyak extension, debugging, dan fitur smart untuk produktivitas coding yang tinggi." },
  ];

  return (
    <main className="w-full flex flex-col items-center gap-0">

      {/* PORTFOLIO */}
      <section className="w-full flex flex-col items-center justify-center bg-pink-100 py-10">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-10 tracking-wide">🌸 BIODATAKUU 🌸</h1>
        <div className="flex flex-col md:flex-row gap-8 w-5/6 max-w-5xl">
          <div className="bg-gradient-to-br from-purple-200 via-white to-purple-100 shadow-2xl rounded-3xl p-6 flex-1 hover:scale-105 transition-transform">
            <img src="/woppss.jpg" alt="Foto Profil" className="rounded-full mx-auto border-4 border-pink-400 shadow-lg w-36 h-36 object-cover"/>
            <h2 className="text-3xl font-bold mt-4 text-pink-600 text-center">🌸 ALENNOOO NAA 🌸</h2>
            <div className="mt-4 space-y-2 text-left text-gray-700 text-base font-medium">
              <p>🌸 Nama: ALENA ALENN</p>
              <p>🏫 Sekolah: SMK NEGRI 8 MALANG</p>
              <p>⚓ Jurusan: RPL</p>
              <p>📚 Kelas: XI RPL A</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 via-white to-purple-200 shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">☘ Sosial Mediaku ☘</h2>
            <a href="tel:+6282245225047" className="w-full bg-pink-300 text-white rounded-xl p-3 flex items-center justify-center gap-2 font-semibold hover:bg-pink-400">📞 +62 822-4522-5047</a>
            <a href="https://www.instagram.com/alena_leaaa" target="_blank" rel="noopener noreferrer" className="w-full bg-pink-300 text-white rounded-xl p-3 flex items-center justify-center gap-2 font-semibold hover:bg-pink-400">📸 Instagram</a>
            <a href="https://www.tiktok.com/@alnaptri18" target="_blank" rel="noopener noreferrer" className="w-full bg-pink-300 text-white rounded-xl p-3 flex items-center justify-center gap-2 font-semibold hover:bg-pink-400">🎵 TikTok</a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="w-full flex flex-col items-center justify-center gap-8 bg-purple-100 py-10">
        <h2 className="text-3xl font-extrabold text-purple-700 mb-4">My Skills ✨</h2>
        <div className="w-5/6 max-w-5xl overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSkill(skill.name)}
                className="flex-shrink-0 w-52 p-4 rounded-3xl shadow-2xl flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-white to-purple-300 cursor-pointer transition-transform hover:scale-110 hover:rotate-3"
              >
                <div className="mb-2">{skill.icon}</div>
                <p className="mt-2 text-purple-800 font-semibold text-base">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        {selectedSkill && (
          <div className="mt-6 max-w-xl bg-gray-200 rounded-3xl p-6 shadow-2xl text-center">
            {skills.find(skill => skill.name === selectedSkill)?.desc}
          </div>
        )}
      </section>

      {/* ROBOTIC */}
      <section className="w-full flex flex-col items-center justify-center bg-blue-50 px-6 py-10">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center">Ekskul Robotic 🤖</h2>

        {/* GRID FOTO + KETERANGAN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* Panel */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden hover:shadow-xl transition">
            <img src="/panel.jpg" alt="Panel" className="w-full h-[200px] object-cover"/>
            <div className="p-4 text-center">
              <p className="text-blue-900 text-base">
                <b>Panel:</b> Papan kontrol robot berisi tombol, saklar, dan indikator
                untuk mengendalikan robot secara langsung. Membantu memahami rangkaian
                listrik & logika pengendalian.
              </p>
            </div>
          </div>

          {/* Trainer PLC */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden hover:shadow-xl transition">
            <img src="/gtau.jpg" alt="Trainer PLC" className="w-full h-[200px] object-cover"/>
            <div className="p-4 text-center">
              <p className="text-blue-900 text-base">
                <b>Trainer PLC:</b> Alat latihan pemrograman PLC untuk mengendalikan
                robot/mesin industri. Melatih logika, sensor, & kontrol otomatisasi.
              </p>
            </div>
          </div>

          {/* Robot Baru */}
          <div className="bg-white rounded-2xl shadow-lg border border-blue-200 overflow-hidden hover:shadow-xl transition">
            <img src="/uji.jpg" alt="Robot Baru" className="w-full h-[200px] object-cover"/>
            <div className="p-4 text-center">
              <p className="text-blue-900 text-base">
                <b>Robot Mobile Uji Coba:</b> Robot pintar yang mengikuti garis menggunakan sensor.  
                Melatih logika pemrograman, sensorik, dan strategi algoritma.
              </p>
            </div>
          </div>
        </div>

        {/* TOMBOL INFO */}
        <RobotInfo />
      </section>

      {/* CONTACT */}
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-green-300 py-10">
        <h2 className="text-3xl font-extrabold text-green-800 mb-8 text-center">Contact Me 📬</h2>
        
        <button onClick={() => setShowMotivationBox(!showMotivationBox)} className="mb-6 bg-green-400 text-white py-3 px-8 rounded-xl hover:bg-green-500 shadow-lg transition-transform hover:scale-105">
          Klik ini plisss
        </button>
        
        {showMotivationBox && (
          <div className="bg-green-200 p-4 rounded-xl shadow-lg text-center mb-6 max-w-md">
            🌸 Semangatt yaa gaiissss buat belajar pweb nyaaaa! SEMANGAT TERUS DEMI MASA DEPANN! 🌸
          </div>
        )}
        
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md flex flex-col gap-4 items-center">
          <div className="flex gap-2 mb-2">
            <span>👽🧚🏼‍♂🐸🐛🐢🐍🦎🦖🦕🍏🥬📞☎📟📗🖍📚✂</span>
          </div>

          <form className="flex flex-col gap-3 w-full">
            <input type="text" placeholder="Nama" className="border p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"/>
            <input type="email" placeholder="Email" className="border p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"/>
            <textarea placeholder="Pesan" className="border p-3 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition" rows={4}/>
            <button type="submit" className="bg-green-400 text-white py-3 rounded-xl hover:bg-green-500 shadow-lg transition-transform hover:scale-105">Kirim</button>
          </form>
        </div>
      </section>
    </main>
  );
}

// ROBOTIC INFO (animasi tanpa framer-motion)
function RobotInfo() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="mt-6 flex flex-col items-center gap-4 max-w-xl text-center">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-600 transition-transform hover:scale-105"
      >
        ROBOTIC TUH APASIHH GAISS???
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showInfo ? "max-h-96 opacity-100 mt-2 p-6" : "max-h-0 opacity-0 p-0"
        } bg-white rounded-2xl shadow-xl border border-blue-200`}
      >
        <p className="text-blue-900 text-base leading-relaxed">
          Robotic adalah ilmu dan teknologi untuk merancang, membuat, dan
          mengendalikan robot. Di ekskul ini kita belajar pemrograman,
          elektronika, sensor, serta kreativitas membangun robot. Ekskul ini
          juga melatih <b>problem solving</b>, kerja sama tim, dan inovasi.
        </p>
      </div>
    </div>
  );
}
