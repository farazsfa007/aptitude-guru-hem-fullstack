import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "https://aptitude-guru-hem-backend-iux0p51nb-farazs-projects-4be1dbf1.vercel.app/api";

const instance = axios.create({
  baseURL: API_BASE
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
