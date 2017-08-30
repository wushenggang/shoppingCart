/**
 * Created by wushenggang on 2017/8/29.
 */
new Vue({
    el:'.container',
    data:{
        addressList:[],
        limitNum:3,
        currentIndex:0,
        shippingMethod:1,
        delFlag:false,
        curProduct:''
    },
    computed:{
      filterAddress:function(){
          return this.addressList.slice(0,this.limitNum);
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.getAddressList();
      })
    },
    methods:{
        getAddressList:function(){
            var _this=this;
            this.$http.get('data/address.json').then(function(res){
                _this.addressList=res.data.result;
            })
        },
        setDefault:function(item){
            var _this=this;
            this.addressList.forEach(function(address,index){
                if(address.addressId==item){
                    address.isDefault=true;
                }else{
                    address.isDefault=false;
                }
            })
        },
        delConfirm:function(item){
            this.delFlag=true;
            this.curProduct=item;
        },
        delProduct:function(){
            var index=this.addressList.indexOf(this.curProduct);
            this.addressList.splice(index,1);
            this.delFlag=false;
        }
    }
})