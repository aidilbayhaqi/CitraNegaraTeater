import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-register">
      <div className="w-full max-w-md p-8 space-y-8 border bg-transparent backdrop-blur-lg rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Pendaftaran Berhasil</h1>
        <p className="text-center text-white">
          SELAMAT BERGABUNG DI CITTER. SENANG BERTEMU DENGAN KAMU!!!
        </p>
        <p className="text-center text-white mt-3">
          Silahkan screenshoot page ini dan kirimkan ke instagram{" "}
          <a href="">@CITTER (Citra Negara Teater)</a>
        </p>
      </div>
    </div>
  );
}

export default page