/**
 * Created by wushenggang on 2017/8/27.
 */
var vm=new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[],
        checkAllFlag:false,
        delFlag:false,
        curProduct:''
    },
    filters:{
    formatMoney:function (value){
        return "¥ "+value.toFixed(2);
    }
    },
    mounted:function(){
        this.cartView();
    },
    methods:{
        cartView:function(){
            this.$http.get("data/cartData.json").then(res=>{
                this.productList=res.body.result.list;
            })
        },
        changeQuantity:function(product,way){
            if(way>0){
                product.productQuantity++;
            }else{
                product.productQuantity--;
                if(product.productQuantity<1){
                    product.productQuantity=1;
                }
            }
            this.calcTotalMoney(product);
        },
        checked:function(item){
            if(typeof item.checked=='undefined'){
                //Vue.set(item,'checked',true);
                this.$set(item,'checked',true);
            }else{
                item.checked=!item.checked;
            }
            this.calcTotalMoney(item);
        },
        checkAll:function(flag){
            this.checkAllFlag=flag;
            if(this.checkAllFlag==true){
                var _this=this;
                this.productList.forEach(function(item,index){
                    if(typeof item.checked=='undefined'){
                        //Vue.set(item,'checked',true);
                        _this.$set(item,'checked',true);
                        _this.calcTotalMoney(item)
                    }else{
                        item.checked=true;
                        _this.calcTotalMoney(item);
                    }
                })
            }else{
                        this.productList.forEach(function(item,index){
                            if (item.checked=true){
                                item.checked=!item.checked;
                                this.calcTotalMoney(item);
                            }
                        }.bind(this))
            }
        },
        calcTotalMoney:function(item){
            this.totalMoney=0;
            var _this=this;
            this.productList.forEach(function(item,index){
                if(item.checked){
                    _this.totalMoney+=item.productPrice*item.productQuantity;
                }
            })
        },
        delConfirm:function(item){
            this.delFlag=true;
            this.curProduct=item;
        },
        delProduct:function(){
            var index=this.productList.indexOf(this.curProduct);
            this.productList.splice(index,1);
            this.delFlag=false;
            this.productList.forEach(function(item,index){
                this.calcTotalMoney(item)
            }.bind(this));
        }
    }

})
