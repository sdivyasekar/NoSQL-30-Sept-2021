const redis=require('redis');
const client=redis.createClient();
client.on('connect',function()
{
    console.log("Connected");
});
client.set('hi','hello',function(err,result)
{
    console.log(result);
});
client.get('hi',function(err,result)
{
    console.log(result);
});
client.hmset("Languages","south","Tamil","North","Hindi","Others","English");
client.hgetall("Languages",function(err,result)
{
    console.log(result);
})
client.rpush("syst","birds","Flying","framework","node",function(err,result)
{
    console.log(result);
})
client.lrange("syst",0,-1,function(err,result)
{
    console.log(result);
});
client.sadd(['sett_fun','React','Angular','Java','javascript','nodejs','javascript'],function(err,result)
{
   console.log(result);
});
client.smembers('sett_fun',function(err,result)
{
    console.log(result);
});

//increament and decreament
client.set("Working",5,function()
{
    client.incr("Working",function(err,result)
    {
        console.log(result);
    })
})
client.set("Work",5,function()
{
    client.decrby("Work",4,function(err,result)
    {
        console.log(result);
    })
})