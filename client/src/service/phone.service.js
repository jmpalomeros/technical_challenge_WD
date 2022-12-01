import service from "./config.service";


const getAllPhones = () =>{
    return service.get("/phones")
}

const getPhoneDetails = (phoneId) => {
    return service.get(`/phones/${phoneId}`)
}

export{getAllPhones, 
    getPhoneDetails}