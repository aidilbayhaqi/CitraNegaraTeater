"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {ChatIcon} from '@heroicons/react/outline'

export default function Home() {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [no_whatsapp, setNo_whatsapp] = useState("");
  const [sosial_media, setSosial_media] = useState("");
  const [alasan, setAlasan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby3rv49SUEOb4iSjyW0fm0BipMCyw2JPmvHPuIWuxmh2jHghSPRyypuDwFgQVDMH4Ed/exec";
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("kelas", kelas);
    formData.append("no_whatsapp", no_whatsapp);
    formData.append("sosial_media", sosial_media);
    formData.append("alasan", alasan);
    

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log("Success!", result);
      setNama("");
      setKelas("");
      setNo_whatsapp("");
      setSosial_media("");
      setAlasan("");
      setLoading(false);

      router.push('/success')

    } catch (error) {
      console.error("Error!", error.message);
       setError("Terjadi kesalahan saat mengirim data. Silakan daftarkan diri mu ke instagram @CITTER.");
       setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-register ">
      <div className="w-full max-w-md p-8 space-y-8 border bg-transparent backdrop-blur-lg rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Form Registrasi</h1>
        <form onSubmit={handleSubmit} className="space-y-6 text-black">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nama:
            </label>
            <input
              type="text"
              id="name"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="kelas"
              className="block text-sm font-medium text-white"
            >
              Kelas:
            </label>
            <input
              type="text"
              id="kelas"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="no_whatsapp"
              className="block text-sm font-medium text-white"
            >
              No Whatsapp:
            </label>
            <input
              type="text"
              id="no_whatsapp"
              value={no_whatsapp}
              onChange={(e) => setNo_whatsapp(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="sosial_media"
              className="block text-sm font-medium text-white"
            >
              Sosial Media:
            </label>
            <input
              type="text"
              id="sosial_media"
              value={sosial_media}
              onChange={(e) => setSosial_media(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="alasan"
              className="block text-sm font-medium text-white"
            >
              Alasan:
            </label>
            <textarea
              id="alasan"
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              className="block w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "Submit"}
          </button>
        </form>
      </div>
      <button className="fixed bottom-0 right-0 p-5">
        <a href="https://wa.me/6289504322572">
          <ChatIcon className="inline-block w-20 h-20 ml-2 text-white" />
        </a>
      </button>
    </div>
  );
}
