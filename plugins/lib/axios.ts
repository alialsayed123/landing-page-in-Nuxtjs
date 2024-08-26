import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { HOST_DOMAIN } from '../../app.config';

const axiosIns = axios.create({
  baseURL: `${HOST_DOMAIN}/`,
});

export { axiosIns };
