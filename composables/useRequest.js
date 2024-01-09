import moment from "moment";
import {useToast} from "vue-toastification";

const createRequest = async (base= 'builder', url, method, body = null) => {
    console.log('sdfsdfsdf')
    const config = useRuntimeConfig();
    const { data, pending, error, refresh } = await useFetch(url, {
        baseURL: urlService(base),
        onRequest({ request, options }) {
            options.method = method;
            options.headers = options.headers || {};
            options.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZnVubmVsYnVpbGRlci1hdXRoLXNlcnZpY2UudGVzdC9hcGkvbG9naW4iLCJpYXQiOjE3MDQwMTY1NTEsImV4cCI6MTcwNDA1OTc1MSwibmJmIjoxNzA0MDE2NTUxLCJqdGkiOiJZMm5mUnBwSk5hUFRDdXA2Iiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJzaG9wcyI6WzFdfQ.LFVL-hcyrDPE9nB-2uw1BaSkvGE5-qSpcN0CRaJm_DA`;
            options.headers.accept = 'application/json'
            options.headers['Shop-Id'] = 1

            if (body) {
                options.body = body;
                options.headers.contentType = 'multipart/form-data'
            }
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
        },
        onResponse({ request, response, options }) {
            // if getExpiresIn() expires in less than 30 minutes, refresh token
            if (!(getExpiresIn() && accessToken() && url !== 'refresh_token')) {
                return;
            }
            const now = moment().format()
            const expiresIn = moment(getExpiresIn()).subtract(30, 'minutes').format()
            if (now > expiresIn && now < moment(getExpiresIn())) {
                const authStore = useAuthStore()
                authStore.refreshToken()
            }

        },
        onResponseError({ request, response, options }) {
            const toast = useToast()
            if (response.status === 422) {
                toast.error('Oops, something went wrong!')
            }
            if (response.status === 500) {
                toast.error('Oops, Server Error!')
            }
            if (response.status === 404) {
                toast.error('Oops, Not Found!')
            }
        }
    });

    return { data, pending, error, refresh };
}

export const getData = async (url, baseUrl= 'builder') => {
    return createRequest(baseUrl, url, 'GET');
};

export const postData = async (url, body, baseUrl = 'builder', ) => {
    return createRequest(baseUrl, url, 'POST', body);
};

export const deleteData = async (url, baseUrl= 'builder') => {
    return createRequest(baseUrl ,url, 'DELETE');
};
export const putData = async (url, body, baseUrl = 'builder', ) => {
    return createRequest(baseUrl, url, 'PUT', body);

};
