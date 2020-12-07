function getTokenPayload(){
    const token = localStorage.getItem('app-token')
    const jwt = token.split(".")

    const payload = jwt[1]
    const token_data = atob(payload)

    return ( JSON.parse(token_data) )
}


function getTypeUser(){
    const payload = getTokenPayload()

    return payload.type
}
function getUserId(){
    const payload = getTokenPayload()

    return payload.id
}

module.exports = { 
    getTokenPayload,
    getTypeUser,
    getUserId 
}