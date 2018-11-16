function quickSort(){

            var endarray=[];
            function sort(array){
                if(array.length<=1){
                    endarray[endarray.length++]=array[0];
                    return;
                }
                var left=[],right=[],index=array[0];
                for(var i=1;i<array.length;i++){
                    if(array[i]<=index){
                        left[left.length++]=array[i];
                    }else{
                        right[right.length++]=array[i];
                    }

                }
                var flag=false;
                if(left.length===0){
                    left[0]=array[0];
                    flag=true;
                }
                if(right.length===0){
                    right[0]=array[0];
                    flag=true;
                }
                sort(left);
                if(!flag){
                    endarray[endarray.length++]=index;
                }
                sort(right);


            }
            return{
                getResult:function(array){
                    sort(array);
                    return endarray;
                }



            }
        }
        //test
        var test=[2,3,5,1,2,8,4,7];
        var sort=new quickSort();
        console.log(sort.getResult(test));