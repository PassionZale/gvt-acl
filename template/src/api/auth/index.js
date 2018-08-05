import ajax from '../../utils/ajax'


export function login(data = {}) {
    return ajax({
        method: 'post',
        url: '/auth/login',
        data
    })
}