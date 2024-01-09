import { useToast } from "vue-toastification";
import moment from 'moment';

export const randomString = (length = 32) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

export const urlService = (type = 'builder') => {
    const config = useRuntimeConfig();
    switch (type) {
        case 'builder':
            return config.public.baseURL
        // case 'auth':
        //     return config.public.authServiceURL
        // case 'auth-front':
        //     return config.public.authServiceFrontendURL
        // case 'seller':
        //     return config.public.builderServiceURL
        // case 'order':
        //     return config.public.orderServiceURL
        default:
            return config.public.baseURL
    }
}

export const successToast = (txt = 'success') => {
    const toast = useToast()
    toast.success(txt)
}
export const deleteToast = (txt = 'danger') => {
    const toast = useToast()
    toast.error(txt)
}
export const excelDownloader = async (url, fileType) => {
    const { data, pending, error, refresh } = await getData(url)
    if (error && error._value) {
        toast.error(error.value.message);
    } else {
        const url = window.URL.createObjectURL(new Blob([data.value]))
        const link = document.createElement('a')

        link.href = url
        const filename = 'exported-data'

        if (fileType === 'csv') {
            link.setAttribute('download', filename + '.csv')
        } else {
            link.setAttribute('download', filename + '.xlsx')
        }
        document.body.appendChild(link)
        link.click()
    }
};
export const timeFormat = (time, format = 'YYYY-MM-DD') => {
    return moment(time).format(format)
}
export const formatDateTime = (dateTime) => {
    return dateTime ? new Date(dateTime) : '';
}

export const textTruncate = (str, length = null, ending = null) => {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str && str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};
export const truncate = (data, value, indicate = "...") => {
    if (data.length > value) return data.slice(0, value) + indicate;
    else return data;
};