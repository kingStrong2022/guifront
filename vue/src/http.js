import axios from 'axios'
const http = axios.create({
    timeout: 60000,
    baseURL:process.env.VUE_APP_APISERVE,
    headers: { 
			'X-Requested-With': 'XMLHttpRequest',
			'Authorization':'sdsdsdsdsdds'
		}
})
http.interceptors.response.use(res => {
    return res.data
})
export default http