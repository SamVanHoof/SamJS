import fetch from 'isomorphic-fetch';

class Network {
    static getToken() {
        return localStorage.get('session');
    }

    static isFormData(body) {
        return body instanceof FormData;
    }

    static basicHeaders(extraHeaders, formData = false) {
        const headers = {};
        const token = this.getToken();

        if (!formData) {
            headers['content-type'] = 'application/json';
        }

        if (token && token !== 'undefined') {
            headers.authorization = `Bearer ${token}`;
        }

        return { ...headers, ...extraHeaders };
    }

    static errorHandler(err) {
        if (err.errors && Array.isArray(err.errors)) {
            throw {
                errors: err.errors,
                meta: JSON.stringify(err),
            };
        } else {
            throw {
                errors: [{ code: '0', status: 500, title: 'Unknown error' }],
                meta: JSON.stringify(err),
            };
        }
    }

    static async get(route, extraHeaders = {}) {
        try {
            const headers = this.basicHeaders(extraHeaders);
            const result = await fetch(`${process.env.REACT_APP_API_HOST}${route}`, { method: 'GET', headers });
            const jsonResult = await result.json();

            if (result.ok) {
                return jsonResult;
            }
            // Something wrong, so throw the result and let the catch handle the error stuff
            throw jsonResult;
        } catch (err) {
            this.errorHandler(err);
        }
    }

    static async put(route, body = {}, extraHeaders = {}) {
        try {
            const isFormData = this.isFormData(body);
            const headers = this.basicHeaders(extraHeaders, isFormData);
            const result = await fetch(`${process.env.REACT_APP_API_HOST}${route}`, { method: 'PUT', headers, body: isFormData ? body : JSON.stringify(body) });
            const jsonResult = await result.json();

            if (result.ok) {
                return jsonResult;
            }
            // Something wrong, so throw the result and let the catch handle the error stuff
            throw jsonResult;
        } catch (err) {
            this.errorHandler(err);
        }
    }

    static async post(route, body = {}, extraHeaders = {}) {
        try {
            const isFormData = this.isFormData(body);
            const headers = this.basicHeaders(extraHeaders, isFormData);
            const result = await fetch(`${process.env.REACT_APP_API_HOST}${route}`, { method: 'POST', headers, body: isFormData ? body : JSON.stringify(body) });
            const jsonResult = await result.json();

            if (result.ok) {
                return jsonResult || true;
            }
            // Something wrong, so throw the result and let the catch handle the error stuff
            throw jsonResult;
        } catch (err) {
            this.errorHandler(err);
        }
    }

    static async delete(route) {
        try {
            const headers = this.basicHeaders();
            const result = await fetch(`${process.env.REACT_APP_API_HOST}${route}`, { method: 'DELETE', headers });
            // Status code 204 -> successfull delete
            if (result.status === 204 || result.status === 200) {
                return true;
            }
            // Something wrong, so throw the result and let the catch handle the error stuff
            const jsonResult = await result.json();
            throw jsonResult;
        } catch (err) {
            this.errorHandler(err);
        }
    }
}

export default Network;
