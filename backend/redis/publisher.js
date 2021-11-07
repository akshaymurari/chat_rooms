const redis = require('redis');

module.exports.publisher = null;

module.exports.connect = () => {
        
        const publisher = redis.createClient({
                host: process.env.redis_host,
                port: 6379
        });

        // implementing cache based on least recently used eviction algorithum
        
        // CONFIG SET maxmemory-policy volatile-lru

        module.exports.publisher=publisher;
        
        publisher.config("SET","maxmemory-policy","volatile-lru",function(err,reply){
            if(err){
                console.log('Redis lru cache error: '+ err); 
            }
        });
        
        let reconnectTime = null;
        
        const TimeOutError = () => {
            reconnectTime = setTimeout(()=>{
                // throw new Error('Redis connection failed');
            },10000);
        }

        
        publisher.on("connect",function(){
            console.log("REDIS connected");
            clearTimeout(reconnectTime);
        });
        
        publisher.on('error', function(err){ 
            console.log('Redis error: '+ err); 
            TimeOutError();
        });
        
        publisher.on('end', () => {
            console.log('REDIS disconnected');
            TimeOutError();
        });
        publisher.on('reconnecting', () => {
            console.log('REDIS reconnecting');
            clearTimeout(reconnectTime);
        });
        
}
