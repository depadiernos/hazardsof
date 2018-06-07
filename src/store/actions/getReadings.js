import jsonp from 'jsonp';
import moment from 'moment';

const date = new Date();
const DATE = moment(date).format('YYYYMMDD');
let API_URL = `https://universalis.com/USA/${DATE}/jsonpmass.js`

export const SET_READINGS = 'SET_READINGS';

export default () => {
  let readings = {}
  jsonp(`${API_URL}`, (error, data) => {
    readings = {
      date: `${moment(date).format('MMMM Do YYYY')}`,
      day: data.day,
      reading1_source: data.Mass_R1.source,
      reading1_text: data.Mass_R1.text,
      ...((data.Mass_R2)?{
        reading2_source: data.Mass_R2.source,
        reading2_text: data.Mass_R2.text
      }:{}),
      psalm_source: data.Mass_Ps.source,
      psalm_text: data.Mass_Ps.text,
      gospel_source: data.Mass_G.source,
      gospel_text: data.Mass_G.text
      }
    }
  )
  return readings
}
