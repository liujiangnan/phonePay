

function service(net){

  this.list = async function(ctx,param){  
    return ctx.render("phone-pay/web/list.ejs",{});
  }

  this.search = function(data){
    let items = [];
    for(var i=0;i<15;i++){
      items.push({
        date:new Date().pattern("yyyy-MM-dd"),
        username:'test',
        chargeType:'充金币',
        money:'100元',
        payType:'微信'
      });
    } 
    net.data.items = items; 
  }

}
module.exports = service;