export const getToken = () => localStorage.getItem('auth_token')
export const setToken = (val: string) => localStorage.setItem('auth_token', val)
export const removeToken = () => localStorage.removeItem('auth_token')

export const getUserInfo = () => localStorage.getItem('user_info')
export const setUserInfo = (val: string) => localStorage.setItem('user_info', val)
export const removeUserInfo = () => localStorage.removeItem('user_info')
