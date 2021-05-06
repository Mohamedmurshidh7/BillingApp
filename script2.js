function my()
{    
   var j;
   var c=0;
    var txt=document.getElementById("txt");
    for(i=0;i<(db.length);i++)
    {
       if (db[i].ssid==parseInt(txt.value,10))
       {
          j=i;
          c=1;
          break;
       }       
    }
    if(c==0)
       {
          alert("Not found");
       }
    document.getElementById("t1").innerHTML+="<tr><td>"+db[j].ssid+"</td><td>"+db[j].item+"</td>"+"<td>"+db[j].price+"</td>"+"<td>"+db[j].quantity+
    "<p>   </p><button onclick='dec(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-left'></i></button><button onclick='inc(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-right'></i></button>"+"</td>"+"<td class='tot'>"+db[i].total()+"</td></tr>";
    document.getElementById("sm").innerHTML=sum(document.getElementsByClassName("tot"));
    return;
   
}
function sum(tot)
{
   var sum=0;
   for(j=0;j<tot.length;j++)
   {
      sum+=parseInt(tot[j].innerHTML,10);
   }
   return sum;
}
function inc(obj)
{
    index=parseInt(document.getElementById("t1").rows[obj.parentNode.parentNode.rowIndex].cells[0].innerHTML,10);
    index-=1;
    db[index].quantity+=1;
    var x = document.getElementsByTagName("tr");
    x[obj.parentNode.parentNode.rowIndex].innerHTML="<tr><td>"+db[index].ssid+"</td><td>"+db[index].item+"</td>"+"<td>"+db[index].price+"</td>"+"<td>"+db[index].quantity+
    "<p>   </p><button onclick='dec(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-left'></i></button><button onclick='inc(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-right'></i></button>"+"</td>"+"<td class='tot'>"+db[index].total()+"</td></tr>";
    document.getElementById("sm").innerHTML=sum(document.getElementsByClassName("tot"));
    
    //alert(obj.parentNode.parentNode.rowIndex);
   return;

}
function dec(obj)
{
    index=parseInt(document.getElementById("t1").rows[obj.parentNode.parentNode.rowIndex].cells[0].innerHTML,10);
    index-=1;
    db[index].quantity-=1;
    var x = document.getElementsByTagName("tr");
    x[obj.parentNode.parentNode.rowIndex].innerHTML="<tr><td>"+db[index].ssid+"</td><td>"+db[index].item+"</td>"+"<td>"+db[index].price+"</td>"+"<td>"+db[index].quantity+
    "<p>   </p><button onclick='dec(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-left'></i></button><button onclick='inc(this)' class='btn' style='font-size:24px'><i class='fa fa-angle-double-right'></i></button>"+"</td>"+"<td class='tot'>"+db[index].total()+"</td></tr>"; //alert(obj.parentNode.parentNode.rowIndex);
    document.getElementById("sm").innerHTML=sum(document.getElementsByClassName("tot"));
    
    return;
   
   }
i=0;
var db=[{ssid:1,item:"shirt",price:1500,quantity:1,total:function()
{
   return this.price*this.quantity}
},{ssid:2,item:"T-shirt",price:500,quantity:1,total:function()
{
   return this.price*this.quantity}
},{ssid:3,item:"pant",price:1000,quantity:1,total:function()
{
   return this.price*this.quantity}
},{ssid:4,item:"chudidhar",price:750,quantity:1,total:function()
{
   return this.price*this.quantity}
},{ssid:5,item:"material",price:2000,quantity:1,total:function()
{
   return this.price*this.quantity}
}];