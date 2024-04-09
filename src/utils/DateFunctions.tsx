export function getDate(date: any) {
  const m = new Date(date);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${months[m.getMonth()]} ${m.getDate()}`;
}
export function getDay(date: any) {
  const d = new Date(date);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[d.getDay()];
}
export function getMonth(date: any) {
  const y = new Date(date);
  return y.toISOString().slice(5, 7);
}
export function getYear(date: any) {
  const y = new Date(date);
  return y.toISOString().slice(0, 4);
}
export function getIsSameDate(
  date1: number,
  compareMonth: string,
  compareYear: string
) {
  const date_1_month = new Date(date1).getMonth();
  const date_1_year = new Date(date1).getFullYear();
  const month = Number(compareMonth);
  const year = Number(compareYear);
  return date_1_month === month && date_1_year === year;
}
