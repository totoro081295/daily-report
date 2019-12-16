import axios from 'axios'

const instance = axios.create({
	timeout: 30000
})
export default (_, inject) => {
	instance.interceptors.request.use(
		(config) => {
	// 		const path = location.pathname
	// 		const requestURL = config.url
	// 		const regexp = new RegExp(shopAPIURL!)
	// 		const requestAPI = requestURL!.match(regexp)
	// 		if (path !== ('/' || '/forgot-password') && requestAPI !== null) {
	// 			const account = _auth.getAccount()
	// 			const token = _auth.getCookieToken()
	// 			if ((!token.accessToken && !token.refreshToken) || !account) {
	// 				store.commit('accounts/resetState')
	// 				_auth.resetCookie()
	// 				_auth.clearStorage()
	// 				return redirect('/')
	// 			} else if (!token.accessToken && token.refreshToken) {
	// 				const res = firebase.auth().onAuthStateChanged((user) => {
	// 					try {
	// 						const accessToken = user!.getIdToken()
	// 						const token = {
	// 							accessToken,
	// 							refreshToken: user!.refreshToken
	// 						}
	// 						_auth.setCookie(token)
	// 						store.commit('account/setToken', token)
	// 						store.commit('accounts/setHeader')
	// 						store.commit('accounts/setClaim')
	// 						config.headers.Authorization = `Bearer ${token.accessToken}`
	// 					} catch {
	// 						store.commit('accounts/resetState')
	// 						_auth.resetCookie()
	// 						_auth.clearStorage()
	// 						return redirect('/')
	// 					}
	// 				})
	// 				return res
	// 			}
	// 		}
			return config
		},
		error => Promise.reject(error)
	)
	// instance.interceptors.response.use(
	// 	(response => response),
	// 	(error => {
	// 		if (error.response.status === 401) {
	// 			store.commit('accounts/resetState')
	// 			_auth.resetCookie()
	// 			_auth.clearStorage()
	// 			redirect('/')
	// 		}
	// 		return Promise.reject(error)
	// 	})
	// )
	inject('axios', instance)
}
