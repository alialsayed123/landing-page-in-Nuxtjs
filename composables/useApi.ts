import { defu } from 'defu';
import type { UseFetchOptions } from 'nuxt/app';
import { useToast } from 'vue-toastification';
import { Options } from 'object-to-formdata';
import { SweetAlertOptions } from 'sweetalert2';
import { AxiosRequestConfig, AxiosError } from 'axios';
import { axiosIns } from '../plugins/lib/axios';
type paramsType = { [param: string]: string };
let defaultSerializerOptions: Options | boolean = {
  indices: true,
  dotsForObjectNotation: true,
  noFilesWithArrayNotation: true,
};
type NotificationsType = {
  error?: string | boolean;
  comfirm?: SweetAlertOptions | boolean;
  success?: string | boolean;
};
const defaultGetNotification: NotificationsType = {
  comfirm: false,
  success: false,
  error: true,
};
export const useApi = () => {
  const toast = useToast();
  const accessToken = useCookie('accessToken');
  const handleErrorMessage = (
    { response }: AxiosError | any,
    notifications: string | boolean
  ) => {
    console.log('inside error handler');

    if (typeof notifications == 'boolean' && response) {
      console.log('Error Handler Catch', response);
      if (response.data) {
        for (const key in response.data) {
          if (typeof response.data[key] === 'string') {
            toast.error(response.data[key].split(' ').slice(0, 20).join(' '));
          }
        }

        if (response.data.errors) {
          for (const key in response.data.errors) {
            if (
              Object.prototype.hasOwnProperty.call(response.data.errors, key)
            ) {
              const errorType = response.data.errors[key];
              if (typeof errorType == 'object' && Array.isArray(errorType)) {
                errorType.forEach((msg) => {
                  toast.error(msg);
                });
              }
            }
          }
        }
      } else if (response.message) toast.error(response.message);
      else if (response.statusText) toast.error(response.statusText);
      else toast.error('Server Error');
    } else if (typeof notifications == 'string') {
      toast.error(notifications);
    }
  };
  const GET = async <T>(
    url: string,
    params?: paramsType,
    config?: AxiosRequestConfig,
    notifications: NotificationsType = defaultGetNotification
  ) => {
    try {
      const response = await axiosIns.get<T>(url, {
        params,
        ...config,
        headers: {
          lang: localStorage.getItem('lang'),
        },
      });
      return { ...response, data: response.data as T };
    } catch (error) {
      if (notifications.error) handleErrorMessage(error, notifications.error);
      throw error;
    }
  };
  return { GET };
};
