
import { useSelector } from "react-redux";



function Display() {
const datahandler=useSelector((s) => s.ApiReducer)


console.log(datahandler)

return(
    <div>
    <table>
    <thead>helloo</thead>
        <tbody>
       
        {datahandler?datahandler.drinks.map((s,i) =>  {
            return(
                <tr>
             <td>{s.idDrink}</td>
             <td>hello</td>
             <td>bye</td>
             
            
             
            
                </tr>
                
            )
        }):null}
        </tbody>
    </table>
       
    </div>
)
}
export default Display