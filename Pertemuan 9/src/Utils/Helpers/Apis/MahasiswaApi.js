import axios from "../../../Utils/Helpers/AxiosInstance";

// Ambil semua mahasiswa
export const getAllMahasiswa = () => axios.get("/mahasiswa");

// Ambil 1 mahasiswa
export const getMahasiswa = (id) => axios.get(`/mahasiswa/${id}`);

// Tambah mahasiswa
export const storeMahasiswa = (data) => axios.post("/mahasiswa", data);

// Update mahasiswa
export const updateMahasiswa = (id, data) => axios.put(`/mahasiswa/${id}`, data);

// Hapus mahasiswa
export const deleteMahasiswa = (id) => axios.delete(`/mahasiswa/${id}`);