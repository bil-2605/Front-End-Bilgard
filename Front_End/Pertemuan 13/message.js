// messages.js
import { helloWorld } from "./helloWorld.js";

async function messages() {
  console.log("Memanggil fungsi helloWorld");
  const msg = await helloWorld(); 
  console.log(msg); 
}

messages(); 

//Pertanyaan:
//Mengapa kita perlu menambahkan await di dalam messages?
//await digunakan untuk memberitahu program agar berhenti dan menunggu sampai Promise dari fungsi helloWorld() selesai. 
// Tanpa await, kita hanya akan mendapatkan objek Promise, bukan hasil "Hello World!"

//Apa yang terjadi jika await dihapus?
//Jika await dihapus, variabel msg akan berisi objek Promise yang sedang dalam proses (pending), bukan hasil akhir. 
// Program tidak akan menunggu selama 2 detik, dan console.log(msg) akan langsung menampilkan Promise pending.

//Mengapa kita perlu menggunakan export dan import di sini?
//Kita menggunakan export dan import untuk memisahkan code ke dalam file yang berbeda. export digunakan pada file helloWorld.js agar fungsinya bisa digunakan di luar.
//import digunakan pada file messages.js untuk mengambil fungsi yang sudah di export