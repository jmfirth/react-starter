import moment from 'moment'


export const DATE_FORMAT = 'YYYY-MM-DD'
export const LONG_DATE_FORMAT = 'MMMM D, YYYY'
export const DATE_TIME_FORMAT = 'MMM D, YYYY h:mm A'
export const numberFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})


/**
 * Currency formatter
 */
export const currencyFormatter = string => {
  return numberFormatter.format(string)
}


/**
 * Date formatter
 */
export const dateFormatter = date => {
  return moment(date).format(DATE_FORMAT)
}


/**
 * Long date formatter
 */
export const longDateFormatter = date => {
  return moment(date).format(LONG_DATE_FORMAT)
}


/**
 * Date time formatter
 */
export const dateTimeFormatter = date => {
  return moment(date).format(DATE_TIME_FORMAT)
}
