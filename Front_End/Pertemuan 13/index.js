// index.js

import { ambilDataUser } from './ambilDataUser.js';

// Menjalankan function untuk mengambil data
ambilDataUser();

//Pertanyaan:
//Mengapa kita butuh .json() setelah fetch()?
//Jika API gagal merespons, bagaimana cara menambahkan error handling?

//Kita membutuhkan .json() setelah fetch() karena data respons dari server masih berupa objek mentah dan harus diubah menjadi format JSON agar bisa digunakan. 
//Jika API gagal merespons, error handling dapat ditambahkan dengan .catch() pada Promise chaining atau menggunakan try...catch saat memakai async/await.


