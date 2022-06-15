import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export const signin = query => {
    return request({
        url: '/login/login',
        method: 'post',
        data: query
    });
};
export const weightapi = {
        getallrecord: () => {
            return request({
                url: '/api/weight/record',
                method: 'get'
                    // params: query
            })
        },
        record_page: query => {
            return request({
                url: '/api/weight/record_page',
                method: 'post',
                data: query
            })
        },
    }
    // export const fetchData = query => {
    //     return request({
    //         url: './table.json',
    //         method: 'get',
    //         params: query
    //     });
    // };