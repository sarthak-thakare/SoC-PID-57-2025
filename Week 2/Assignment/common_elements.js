function common(arr1,arr2){
    const set1=new Set(arr1);
    const set2=new Set(arr2);

    const result=[];
    for(let num of set1){
        if(set2.has(num)){
            result.push(num);
        }
    }
    return result.sort((a,b)=>a-b);
}

const a=[1,2,7,4,6,3,4,8]
const b=[1,6,3,8,8,8]

console.log(common(a,b));
