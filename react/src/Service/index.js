import axios from 'axios';

const ServerConfig = {
    API_SERVER: 'https://www.baidu.com'
}

const isAbsouluteLink = (link) => {
    return link.startsWith('https://') || link.startsWith('http://');
}

// 混合请求其他参数
const mixExtraData = (data = {}) => {
    return {
        ...data,
    }
}

const CreateLogger = (prefix, mode, ...logs) => {
    let log = console.log;
    if(mode === 'error') log = console.error;
    logs.forEach(v => log(prefix, v));
}

const CreateSuccessLogger = (options, result) => {
    const {method = 'POST', url = '', data = {}} = options;
    CreateLogger('[request-info]', 'log',  method, url, data);
    CreateLogger('[request-success]', 'error', result);
}

const CreateErrorLogger = (options, err) => {
    const {method = 'POST', url = '', data = {}} = options;
    CreateLogger('[request-info]', 'log', method, url, data);
    CreateLogger('[request-error]', 'error', err);
}


const request = async (options = {}) => {
    const {method = 'POST', url = '', data = {}} = options;
    const requestUrl = isAbsouluteLink(url) ? url : ServerConfig.ApiServer + url;

    const LogOptions = {
        method, 
        url: requestUrl, 
        data
    }

    try {
        const result = await axios({
            url: requestUrl,
            method,
            data: mixExtraData(data),
            //设置超时时间
            timeout: 5000,
            withCredentials: true
        })

        if(!result || !result.data) {
            CreateErrorLogger(LogOptions, result);
            return [new Error('未知错误！')];
        }

        CreateSuccessLogger(LogOptions, result.data)
        return [null, result.data];

    } catch (error) {
        CreateErrorLogger(LogOptions, error);
        return [error];
    }

}

export const PostApi = (url = '', data = {}) => {
    return request({
        url,
        data,
        method: 'POST'
    })
}

export const GetApi = (url = '', data = {}) => {
    return request({
        url,
        data,
        method: 'GET'
    })
}

