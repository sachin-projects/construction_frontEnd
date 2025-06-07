export const apiUrl = "http://localhost:8000/api/";
export const token = () => {
    const userInfo = localStorage.getItem('userinfo');
    const data = JSON.parse(userInfo);
    return data.token;
}