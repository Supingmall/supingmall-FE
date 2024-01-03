import { getItem, removeItem, setItem } from "@/utils/localStorage";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = getItem<string>("Token");

    if (token) {
      config.headers = config.headers || {};
      config.headers.Token = token;
    }

    return config;
  }
);

client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const headers = response.headers;
    const token = headers["token"];
    if (token) {
      setItem("Token", token);
    }
    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    const handelSignOut = () => {
      window.location.href = "/logout";
    };
    if (error.response?.status === 406) {
      handelSignOut();
    }
    return error;
  }
);

export interface ErrorResponse {
  code: string;
  errorMessage: string;
}
