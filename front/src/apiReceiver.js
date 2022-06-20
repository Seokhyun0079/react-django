import axios from "axios";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
axios.defaults.withCredentials = true
const csrftoken = getCookie('csrftoken');
const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRFToken': csrftoken,
}
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
export async function post(url, param) {
    const result = axios.post(url, param, { headers })

    return result
}

export async function get(url, param) {
    try {
        const result = await axios.get(url, param)
        return result
    } catch (e) {
        console.dir(e)
        if (e.response.status === 401) {
            window.location.href = '/login'
        }
    }
}