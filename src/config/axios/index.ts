import axiosInstance from "./axiosInstance";
import { ToastOptions, toast } from "react-toastify";

export interface IData {
  [key: string]: any;
}

export interface ApiResponse<T = IData> {
  status: boolean;
  message: string;
  data: T;
  error?: any;
}

const api = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.get<T>(endpoint);
      return {
        status: true,
        message: "Request successful",
        data: response.data,
      };
    } catch (error) {
      return handleError<T>(error);
    }
  },

  async post<T>(endpoint: string, payload: any): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.post<T>(endpoint, payload);
      return {
        status: true,
        message: "Request successful",
        data: response.data,
      };
    } catch (error) {
      return handleError<T>(error);
    }
  },

  async patch<T>(endpoint: string, payload: any): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.patch<T>(endpoint, payload);
      return {
        status: true,
        message: "Request successful",
        data: response.data,
      };
    } catch (error) {
      return handleError<T>(error);
    }
  },

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await axiosInstance.delete<T>(endpoint);
      return {
        status: true,
        message: "Request successful",
        data: response.data,
      };
    } catch (error) {
      return handleError<T>(error);
    }
  },
};

const handleError = <T>(error: any): ApiResponse<T> => {
  const errorMessage = error?.response?.data?.message || "An error occurred";

  customToast(errorMessage);

  return {
    status: false,
    message: errorMessage,
    data: {} as T,
    error,
  };
};

export default api;

// Position for the error toast for back-end errors
const customToast = (message: string) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: {
      margin: "0 auto",
      textAlign: "center",
    },
  };

  toast.error(message, options);
};
