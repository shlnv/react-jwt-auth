export default async function responseInterceptor(response: any): Promise<any> {

    if (response.status === 401) {
        window.sessionStorage.removeItem('token');
    }

    if (response.headers.get('JWT')) {
        window.sessionStorage.setItem('token', response.headers.get('JWT'));
    }

    const data = response.json();
    return data;
}