export function getDay(mon: any) {
    const str = new Date(mon).toDateString();
    return str.substring(0, str.indexOf(' '))
}
export function getDate(mon: any) {
    const str = new Date(mon).toDateString();
    return str.substring(str.indexOf(' '), str.length - 4)
}