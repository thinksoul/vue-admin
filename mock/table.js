import Mock from 'mockjs'

const data = Mock.mock({
    'items|30': [{
        id: '@id',
        title: '@sentence(10, 20)',
        'status|1': ['published', 'draft', 'deleted'],
        author: 'name',
        createTime: '@datetime',
        pageviews: '@integer(300, 5000)'
      }]
})

export default {
    getArray: () => {
      return {
        status: 200,
        code:200,
        data: data,
      };
    }
}