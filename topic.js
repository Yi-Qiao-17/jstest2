// 存放資料

var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "17日"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
}
//setMonthAndDay(5,6);

var dateControl =  document.querySelector("bookdate");


function changeDate(){
    input = document.getElementById("bookdate").value;
    tmp1=input.toString().substring(5,7);
    tmp2=input.toString().substring(8);
    setMonthAndDay(parseInt(tmp1),parseInt(tmp2));
}
changeDate();
