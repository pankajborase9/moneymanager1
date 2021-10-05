import Dropdown from './Dropdown';
import Button from 'react-bootstrap/Button';
import Example from './Modal';





function Firstpage() {


const money=()=>{
 <>
   {<Example/>}

</>

}
    return (<>
       <Dropdown/>&nbsp;&nbsp;<br/>
         <Button variant="primary" onClick={money}>ADD</Button> </> );
}

export default Firstpage;