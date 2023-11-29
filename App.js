import React, { useState } from 'react';
import './App.css'; // Jika Anda membuat file App.css

function App() {
    // State untuk menyimpan URL gambar atau perintah gambar
    const [inputValue, setInputValue] = useState('');

    // Fungsi untuk menangani perubahan pada input
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // Fungsi untuk menangani analisis gambar
    const handleAnalyzeImage = () => {
        // Kode untuk menangani analisis gambar (akan ditambahkan di latihan berikutnya)
        console.log('Menganalisis gambar:', inputValue);
    };

    // Fungsi untuk menangani pembuatan gambar
    const handleGenerateImage = () => {
        // Kode untuk menangani pembuatan gambar (akan ditambahkan di latihan berikutnya)
        console.log('Membuat gambar:', inputValue);
    };

    return (
        <div className="App">
            <h1>Judul Aplikasi</h1>
            <input
                type="text"
                placeholder="Masukkan URL gambar atau perintah gambar"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAnalyzeImage}>Analisis Gambar</button>
            <button onClick={handleGenerateImage}>Buat Gambar</button>
        </div>
    );
}

export default App;