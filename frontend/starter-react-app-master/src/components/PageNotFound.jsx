import {useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate=useNavigate();

    const handleClick = () => {
        console.log("1");
        if(localStorage.getItem("Pid"))
            navigate("/patient/dashboard");
        else if(localStorage.getItem("Hid"))
            navigate("/hospital/dashboard");
        else if(localStorage.getItem("Did"))
            navigate("/doctor/dashboard");
        else if(localStorage.getItem("Adminid"))
            navigate("/admin/dashboard");
        else{
            console.log("here");
            navigate("/");
        }
            
    }
    return (
        <div>
            <div>
                <h4>Page does not exist. Please check url.</h4>.
            </div>
            <div>
                <button onClick={()=>handleClick()}>Go to home</button>
            </div>
            {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <YOUR_FRONT_CCOMPONENT>
            This is the front of the card.
            <button onClick={()=>handleClick2()}>Click to flip</button>
            </YOUR_FRONT_CCOMPONENT>

            <YOUR_BACK_COMPONENT>
            This is the back of the card.
            <button onClick={()=>handleClick2()}>Click to flip</button>
            </YOUR_BACK_COMPONENT>
      </ReactCardFlip> */}
        </div>
    )
}
export default PageNotFound;