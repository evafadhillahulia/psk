let mahasiswaList = [
    {
        ID: 1,
        NIM: "A11.2022.14283",
        Nama: "Eva Fadhillah Ulia",
        Fakultas: "Ilmu Komputer",
        Programstudi: "Teknik Informatika",
        IPS: 3.75,
        Semester: 6,
        Status: true,
        Matkul: [{ matkulId: "MK001", tugas: 85, uts: 75, uas: 90 }]
    },
    {
        ID: 2,
        NIM: "A11.2022.12346",
        Nama: "Dewi Ayu",
        Fakultas: "Ilmu Komputer",
        Programstudi: "Sistem Informasi",
        IPS: 3.6,
        Semester: 6,
        Status: true,
        Matkul: [{ matkulId: "MK002", tugas: 80, uts: 78, uas: 85 }]
    },
    {
        ID: 3,
        NIM: "A11.2022.12347",
        Nama: "Rizky Pratama",
        Fakultas: "Ilmu Komputer",
        Programstudi: "Teknik Informatika",
        IPS: 3.8,
        Semester: 6,
        Status: false,
        Matkul: [{ matkulId: "MK003", tugas: 90, uts: 88, uas: 92 }]
    }
];

const mataKuliahList = {
    mataKuliah: [
        { kode: "MK001", nama: "Pemrograman Web" },
        { kode: "MK002", nama: "Sistem Basis Data" },
        { kode: "MK003", nama: "Jaringan Komputer" }
    ]
};

// Soal No.1 Menampilkan Semua Data Mahasiswa (show())
const show = () => {
    mahasiswaList.forEach((mhs) => {
        console.log(`NIM: ${mhs.NIM}, Nama: ${mhs.Nama}, Status: ${mhs.Status ? "Aktif" : "Tidak Aktif"}`);
        console.log("Mata Kuliah:");
        mhs.Matkul.forEach((mk) => {
            const matkulName = mataKuliahList.mataKuliah.find((m) => m.kode === mk.matkulId)?.nama || "Mata Kuliah Tidak Diketahui";
            console.log(`- ${matkulName}: Tugas ${mk.tugas}, UTS ${mk.uts}, UAS ${mk.uas}`);
        });
        console.log("---------------------------------------------------");
    });
};

// Panggil fungsi untuk menampilkan data
show();

// Soal No.2 Menambahkan Data Mahasiswa (add())
const add = (mahasiswa) => {
    mahasiswaList.push(mahasiswa);
};

// Menambahkan mahasiswa baru
add({
    ID: 4,
    NIM: "A11.2022.13348",
    Nama: "Hello Banana",
    Fakultas: "Ilmu Komputer",
    Programstudi: "Teknik Informatika",
    IPS: 3.8,
    Semester: 6,
    Status: false,
    Matkul: [{ matkulId: "MK003", tugas: 90, uts: 88, uas: 92 }]
});

// Menampilkan hasil
console.log(mahasiswaList);

// Soal No.3 Mengupdate Mahasiswa (update())
const update = (nim, dataBaru) => {
    mahasiswaList = mahasiswaList.map((mhs) =>
        mhs.NIM === nim ? { ...mhs, ...dataBaru } : mhs
    );
};

update("A11.2022.14283", { Status: false });

// Menampilkan hasil setelah update
console.log(mahasiswaList);

// Soal No.4 Menghapus Mahasiswa (deleteById())
const deleteById = (NIM) => {
    mahasiswaList = mahasiswaList.filter((mhs) => mhs.NIM !==  NIM);
};

deleteById("A11.2022.12347");

// Menampilkan hasil setelah deleteById
console.log(mahasiswaList);

// Soal No. 5 Menghitung Total Nilai (totalNilai())
// Soal No. 5 Menghitung Total Nilai (totalNilai())
const totalNilai = (NIM) => {
    const mahasiswa = mahasiswaList.find((m) => m.NIM === NIM);
    if (!mahasiswa) return "Mahasiswa tidak ditemukan";
    
    return mahasiswa.Matkul.map((mk) => {
        const total = mk.tugas + mk.uts + mk.uas;
        return { matkulId: mk.matkulId, total };
    });
};

// Menampilkan hasil perhitungan total nilai
console.log(totalNilai("A11.2022.14283"));


// Soal No. 6 Mengelompokkan Mahasiswa Berdasarkan Kategori Nilai (kategoriNilai())
const kategoriNilai = (nilai) => {  
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 65) return "C";
    if (nilai >= 50) return "D";
    return "E";
  };
  
  // **Contoh Output**
  console.log(kategoriNilai(88));  // Output: A
  console.log(kategoriNilai(78));  // Output: B
  


