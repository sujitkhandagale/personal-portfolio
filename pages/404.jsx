import Header from "../components/Header"
import { Link } from 'next/link';


function Custom404() {

    return <>
        <Header />
        <div className="NotFound">
            Not Found
            <br />
          
            <a href={"/"}>Home</a>
        </div>
    </>
}

export default Custom404