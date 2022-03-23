//主要程式運作

$(function(){
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24*60*60*1000;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>"+
        `<td>${x+1}</td>`+
        //`<td>${startDate+7*x}</td>`+
        //先將時間轉換成累積毫秒，運算完成後再轉回一般日期時間格式
        `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().toString().substring(5)}</td>`+
        `<td>${topic[x]}</td>`+
        "</tr>");

        if(topic[x]=="國定假日"){
            document.getElementById("courseTable").rows[x+1].style.color = "gray";
        }
    }
});


$(function(){
    $("#bookdate").on("change",function(){
        input = this.value.toString();
        tmp1=input.toString().substring(5,7);
        tmp2=input.toString().substring(8);
        setMonthAndDay(parseInt(tmp1),parseInt(tmp2));
        
        

        let topicCount = topic.length;
        //一秒鐘有1000毫秒
        //每分鐘60秒、每小時60分鐘、每天24小時
        let millisecsPerDay = 24*60*60*1000;
        for(var x=1;x<topicCount;x++){
            document.getElementById("courseTable").rows[x].cells[1].innerHTML=(new Date(startDate.getTime()+7*(x-1)*millisecsPerDay)).toLocaleDateString().toString().substring(5);
           
        }
    });

});