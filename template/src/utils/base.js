import env from '../../env'

export const baseURL = process.env.NODE_ENV === 'production' ?
    env.pro.path :
    env.dev.path