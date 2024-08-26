import { API_URL, HOST_DOMAIN } from '../../app.config';
export const useCustomFetch = <T>(url: string, options?: any) => {
  return useFetch<T>(url, {
    baseURL: API_URL,
    headers: {
      'tz-offset': '+03:00:00',
      lang: 'en',
    },
    ...options,
    async onResponse({ request, response, options }) {
      console.log('on Response');
    },
    async onResponseError({ request, response, options }) {
      if (response.status === 401) {
        try {

          location.reload();
        } catch (er) {
          console.log(er);
         
        }
      }
    },
    async onRequest({ request, options }) {},
    async onRequestError({ request, options, error }) {
      console.log('SSR REQ ERROR', error);
    },
  });
};
