const api = 'https://api.linkedin.com/v2/';
const apiID = '';//INSIRA O CLIENTID
const apiSecret = '';//INSIRA O CLIENTSECRET
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