

// const text = document.querySelector('.role');
// const nama = 'Web Developer';
// const pisah = nama.split('');

const textElement = document.querySelector('.role');
const texts = ['Web Developer', 'Frontend Developer']; // Teks yang ingin ditampilkan
let currentIndex = 0; // Indeks teks aktif

function tampilkanTeks(teks, kecepatan, callback) {
    let i = 0;
    textElement.textContent = ''; // Kosongkan sebelum menampilkan teks
    const interval = setInterval(() => {
        if (i < teks.length) {
            textElement.textContent += teks[i]; // Tambahkan karakter satu per satu
            i++;
        } else {
            clearInterval(interval); // Hentikan interval setelah selesai
            if (callback) callback(); // Panggil fungsi callback jika ada
        }
    }, kecepatan);
}

function hapusTeks(teks, kecepatan, callback) {
    let i = teks.length;
    const interval = setInterval(() => {
        if (i > 0) {
            textElement.textContent = teks.slice(0, i - 1); // Hapus karakter satu per satu
            i--;
        } else {
            clearInterval(interval); // Hentikan interval setelah selesai
            if (callback) callback(); // Panggil fungsi callback jika ada
        }
    }, kecepatan);
}

function loopTeks() {
    const teksSaatIni = texts[currentIndex];
    tampilkanTeks(teksSaatIni, 100, () => { // Tampilkan teks
        setTimeout(() => {
            hapusTeks(teksSaatIni, 100, () => { // Hapus teks
                currentIndex = (currentIndex + 1) % texts.length; // Ganti ke teks berikutnya
                loopTeks(); // Rekursi untuk melanjutkan ke teks berikutnya
            });
        }, 100); // Tunggu 100 ms sebelum di hapus
    });
}

// Mulai proses looping
loopTeks();





// const animals = ["Cat", "Dog", "Rabbit", "Horse"];

// for (const a of animals) {
//     console.log(a); // Mencetak nama hewan
//     if (a === 'Rabbit') {
//         console.log(`${a} is found!`);
//         break; // Menghentikan iterasi setelah menemukan "Rabbit"
//     }
// }


// const sentence = "Hello World!";
// for(const w of sentence){
//     console.log(w)
// }


// const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5, 6]);
// for(const n of uniqueNumbers){
//     console.log(n);
// }

// const total = [...uniqueNumbers].reduce((sum, num) => sum + num);
// console.log(total)

// const userScores = new Map([
//     ["Alice", 85],
//     ["Bob", 92],
//     ["Charlie", 78],
//     ["Daisy", 90]
// ]);

// const UserScores = [...userScores];
// for( const[na,nu] of UserScores){
//     console.log(na, nu)
// }







