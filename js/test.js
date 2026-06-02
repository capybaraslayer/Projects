function filter_list(l) {
    for(let i= l.length-1;i>=0;i--){
        if(typeof l[i]=='string'){
            l.splice(i,1);
        }
    }
    return l;
}
console.log(filter_list([2,1,3,1,'a','x']))