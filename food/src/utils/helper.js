export   const GetObjData =  (obj, key)=>{
    var value = null;
    
    Object.keys(obj).some(  function(k){
            if(k ==key){
                value = obj[k];
                return true;
            }
            if(obj[k]&& typeof obj[k]==='object')
            {
                console.log("obj")
                console.log(obj[k])
                 
            
                value =  GetObjData(obj[k], key);
                return value !== undefined;
            }
            if(obj[k]&& typeof obj[k]==='array')
            {
                console.log("arr")
                value =  GetObjData(obj[k], key);
                return value !== undefined;
            }
    });
  

    return value;


}