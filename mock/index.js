let Mock=require('mockjs');
let Random=Mock.Random;

module.exports=()=>{
    let data={
        news:{
            data:[]
        },
        login:{
            status:200,
            token:'ph-token'
        },
        fetchUserInfo:{
            status:200,
            data:{
                name:'phil',
                age:16,
                roles:['base'],
            }
        }
    };
    let images=[1,2,3,4,5,6,7,8,9].map(()=>Random.image('20x20',Random.color(),Random.word(1)));
    for(let i=0;i<100;i++){
        let content=Random.cparagraph(10);
        data.news.status=200
        data.news.data.push({
            id:i,
            title:Random.ctitle(8,20),
            desc:content,
            tag:Random.cword(2,6),
            views:Random.integer(100,5000),
            images:images.slice(0,Random.integer(1,9)),
            createTime:Random.datetime()
        })
    }
    return data
}