import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * @param endpoint 
 * @param config 
 * @returns 
 */
const get = <ResponseType>(
  endpoint: string,
  config?: AxiosRequestConfig | undefined,
): Promise<ResponseType> => axios.get(endpoint, { ...config })
    .then((response: AxiosResponse<ResponseType>) => response.data)
    .catch((error:  Error | AxiosError) => {
      throw error;
    });

export { get };