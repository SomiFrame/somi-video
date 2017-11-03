module.exports =(options)=>{
    return (req,res,next)=>{
        console.log('crossdomain middle log');
        next();
    }
}
