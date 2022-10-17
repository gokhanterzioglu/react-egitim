import { axiosInstance } from "./axiosInstance";

export const dataServices = {
    getCustomers: async (url) => {
        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
                throw err
            })
        return responseData;
    },

    getCustomerById: async (url, id) => {
        let responseData = {};
        await axiosInstance.get(url + '/' + id)
            .then(res => {
                responseData = res.data;
            });
        return responseData;
    },

    addCustomer: async (url, data) => {
        let responseData = {};

        await axiosInstance.post(url, data)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
                throw err
            })
        return responseData;
    },

    updateCustomer: async (url, data, id) => {
        let responseData = {};

        await axiosInstance.put(url + '/' + id, data)
            .then(res => {
                responseData = res.data;
            })
            .catch((err) => {
                console.log('Error', err);
                throw err
            })
        return responseData;
    },

    deleteCustomer: async (url, id) => {
        await axiosInstance.delete(url + '/' + id)
            .then(res => res.data)
            .catch((err) => {
                console.log('Error', err);
                throw err
            })
    }
}