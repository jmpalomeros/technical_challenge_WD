
import {useState, useEffect} from "react"
import {getAllPhones} from "../service/phone.service"
import {Link} from "react-router-dom"

function PhoneList() {

    const [phoneList, setphoneList] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(()=>{
        getPhonesData()
    }, [])

    const getPhonesData = async () =>{
        try{
            const response = await getAllPhones();
            console.log(response)
            setphoneList(response.data)
            setIsFetching(false)
            

        }catch(err){
            console.log(err)
            }
    }

    if (isFetching === true){
        return <h4>loading</h4>
    }

  return (
    <div>
    
    <h3>PhoneList</h3>

        <div>
            {phoneList.map((eachElement)=>{
                return(
                    <div>
                    <Link to={`phones/${eachElement.id}`}>{eachElement.name}</Link>
                  
                   </div>
                )
            })}
        </div>
    
    
    
    </div>
  )
}

export default PhoneList