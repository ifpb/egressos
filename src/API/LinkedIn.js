const api = 'https://api.linkedin.com/v2/';
const apiID = '78688bd9eyqk72';
const apiSecret = 'fIs4cQk6mWbDgWsH';
const headers = {
    'Accept' : 'application/json'
}

export async function getInfo(user) {
    user = user.split("/")
    await fetch (`${api}people/${user[4]}`, headers).
            then(res => res.json()).
            then( data => {return data.response})
}

export async function getPicture(user){

}