function getTokenPayload(token){
    const jwt = token.split(".")

    const payload = jwt[1]
    const token_data = atob(payload)

    return ( JSON.parse(token_data) )
}


function getTypeUser(token){
    const payload = getTokenPayload(token)

    return payload.type
}
function getUserId(token){
    const payload = getTokenPayload(token)

    return payload.id
}

module.exports = { 
    getTokenPayload,
    getTypeUser,
    getUserId 
}