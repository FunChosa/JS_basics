import moment from "moment";

export const getTodayDateFormat = (date) => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}