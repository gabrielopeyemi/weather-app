export const getDays = (days?: string): any => { 
    let today = new Date();
    let endDays = new Date(today.getTime() + parseInt(days ? days : '3')*24*60*60*1000);
    return `${convertDate(today)}/${convertDate(endDays)}`;
}
const convertDate = (day: Date): string => {
    return day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate();
}