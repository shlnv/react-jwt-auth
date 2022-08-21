export default async function request(url: string, body: any = {}, options: any = {}): Promise<any> {
    options.headers = {'Content-Type': "application/json", ...options.headers};
    if (window.sessionStorage.getItem('token')) {
        options.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
    }
    const res: any = await fetch(url, {body: body ? JSON.stringify(body) : undefined, ...options});
    return res;
}