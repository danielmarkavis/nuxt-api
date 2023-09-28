import type { UseFetchOptions } from 'nuxt/app'
import { notify } from 'notiwind'

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {

  let headers: any = {
    Accept: "application/json",
    // referer: "http://localhost:3000"
    referer: "http://web.local:3000"
  }

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['cookie'])
    }
  }

  function success(message) {
    navigateTo('/admin').then(() => {
      notify({
        group: "messages",
        title: "Success",
        type: 'success',
        text: message
      }, 3000);
    });
  }

  function error(message) {
    notify({
      group: "messages",
      title: "Error",
      type: 'error',
      text: message
    }, 3000);
  }


  return useFetch("http://web.local" + path, {
  // return useFetch("http://localhost" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    }
  })
  //     .then((response) => {
  //   if (response.ok) {
  //     return response.json()
  //   }
  //   return Promise.reject(response)
  // }).then(() => {
  //   success("The article was created!");
  // }).catch((response) => {
  //   error("An error occurred " + response.status);
  // });


}