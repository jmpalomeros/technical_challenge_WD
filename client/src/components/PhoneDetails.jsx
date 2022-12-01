import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getPhoneDetails} from "../service/phone.service"

function PhoneDetails() {
  const [details, setDetails] = useState (null)
  const [isFetching, setIsFetching] = useState(true)
  const {id} = useParams()

  useEffect (()=> {
    getDetails()
  }, [])

 const  getDetails = async () => {
    try{
      const response = await getPhoneDetails(id)
      setDetails(response.data)
      console.log(response.data)
      setIsFetching(false)
      
    }catch(err){
      console.log(err)
    }
  }

  if(isFetching === true){
    return (<h4>loading</h4>)
  }

  return (
    <div>PhoneDetails
    <h3>{details.name}</h3>
    <p>{details.manufacturer}</p>
    <p>{details.description}</p>
    <p>{details.price}</p>
    <p>{details.processor}</p>
    <p>{details.color}</p>
    <p>{details.imageFileName}</p>
    
    
    </div>

    
  )
}

export default PhoneDetails