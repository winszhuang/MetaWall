const TOKEN_KEY = 'accessToken'

export const useLocalStorage = () => {
  const getToken = () => {
    if (process.client) {
      return localStorage.getItem(TOKEN_KEY)
    }

    return ''
  }

  const setToken = (token: string) => {
    if (process.client) {
      return localStorage.setItem(TOKEN_KEY, token)
    }

    return ''
  }

  const clearToken = () => {
    if (process.client) {
      localStorage.setItem(TOKEN_KEY, '')
    }
  }
  return {
    getToken,
    setToken,
    clearToken
  }
}
