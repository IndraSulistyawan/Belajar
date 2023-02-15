class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
  }



const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(isOffline){
                reject(new NetworkError("Gagal mendapatkan data dari internet"))
            }resolve({ name: "Jhon", age: 18 } )
        }, 500)
    })
}

const gettingUserName= async() =>{
    try{
        const user = await fetchingUserFromInternet(false)
        return user.name
    }catch(error){
        return error.message
    }
}

gettingUserName().then((value) => console.log(value))

