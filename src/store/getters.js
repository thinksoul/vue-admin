const getters = {
    name:state=>state.user.name,
    roles:state=>state.user.roles,
    routes:state=>state.permission.routes
}

export default getters