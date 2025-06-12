export const apiUrl = "http://localhost:8000/api/";
export const fileUrl = "http://localhost:8000/";
export const token = () => {
    const userInfo = localStorage.getItem('userinfo');
    const data = JSON.parse(userInfo);
    return data.token;
}