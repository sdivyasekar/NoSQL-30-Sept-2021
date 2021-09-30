const redis=require('redis');
const client=redis.createClient();
client.hmset("status","south","Tamil","North","Hindi","Others","English");
client.hgetall("status",function(err,result)
{
    console.log(result);
});
/*client.del(['frameworks_list','Hello','priya'], function(err, reply) {
    console.log(reply); 
  });
  client.set('status', 'logged_in');
  client.expire('status', 100);*/  
client.exists('status',function(err,result)
{
    if(result==1)
    {
        console.log("Exist");
    }
    else
    {
        console.log("Not exist");
    }
});