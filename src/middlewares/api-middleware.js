import instance from '../axios/axios';

const apiMiddleware = (store) => (next) => (action) => {
    if (!(action.meta && action.meta.api)) {
        return next(action);
    }

    let { method, url, data, params } = action.meta.api;

    const promise = new Promise((resolve, reject) => {
        instance({
            method: method,
            url: url,
            data: data,
            params: params
        }).then((response) => {
            action.response = response;
            next(action);
            return resolve();
        }).catch((error) => {
           action.error = error;
           next(action);
           return reject(); 
        })

    })

    return promise;
};

export default apiMiddleware;