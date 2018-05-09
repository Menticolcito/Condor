//Api URL 
const URL = "https://api.cebroker.com/v1/cerenewaltransactions/GetLogsRecordData?startdate=[:date1]&enddate=[:date2]&state=[:state]"

//create today date format
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0' + dd
} 
if(mm < 10) {
    mm = '0' + mm
} 

today = mm + '/' + dd + '/' + yyyy;

//Export api response
export default function getLogs(state) {
  const url = URL.replace(':date1', today).replace(':date2', today).replace(':state', state)
  return fetch(url)
  	.then(res => res.json())
}