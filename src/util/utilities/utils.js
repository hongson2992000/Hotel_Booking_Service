import moment from "moment/moment";

export const checkDate = (date, format) => {
    return moment(date, format).format(format);
}

export const formatPrice = (price, countryCode, currency) => {
    return price.toLocaleString(countryCode, {
        style: 'currency',
        currency: currency,
    })
}