function temp(){
    throw new Error("Something is wrong\n");
}
try{
    temp()
}
catch(err){
    console.error("Error Occured: ",err.message );
}