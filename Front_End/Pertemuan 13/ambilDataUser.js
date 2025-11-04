// // ambilDataUser.js
// export function ambilDataUser() {
//   const endpoint = "https://reqres.in/api/users";

//   console.log("Mengambil data user menggunakan Promise Chaining...");

//   fetch(endpoint)
//     .then((response) => {
//       return response.json();
//     })
//     .then((result) => {
//       console.log("Data berhasil diterima:");
      
//       const users = result.data;
      
//       users.forEach(user => {
//         const { first_name, last_name } = user;
//         console.log(`- ${first_name} ${last_name}`);
//       });
//     });
// }


// ambilDataUser.js
export async function ambilDataUser() {
  const endpoint = "https://reqres.in/api/users";

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    const users = result.data;

    console.log("Data user berhasil diterima (Async/Await):");

    users.forEach(user => {
      const { first_name, last_name } = user;
      console.log(`Nama Lengkap: ${first_name} ${last_name}`);
    });

  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

//Pertanyaan
//Apa perbedaan pendekatan Promise chaining dengan async/await?
//Promise chaining adalah pendekatan asynchronous yang menggunakan metode .then() dan .catch() untuk menangani hasil dan error, namun jika rantai proses terlalu panjang, kode menjadi sulit dibaca.
//async/await membuat penulisan kode asynchronous lebih sederhana dan menyerupai kode synchronous,menggunakan try...catch.async/await