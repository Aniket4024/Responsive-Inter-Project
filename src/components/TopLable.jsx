import styles from "../Styles/TopLable.module.css"
import logo from "../Images/logo.png"
import { FaArrowRotateRight } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { VscChromeRestore,VscChromeMinimize } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";





function TopLable (){

    return <div id={styles.TopLable}>
        <div id={styles.TLI}>
            <img src={logo} alt="logo" />
            <h5>Company</h5>
            <h5>Help</h5>
            <h5>Shortcuts</h5>
            <FaArrowRotateRight style={{fontSize:"13px"}}/>
        </div>
        <hr id={styles.HR}/>
        <div id={styles.TLII}>
            <h5>Customer Support :</h5>
            <BsTelephone/>
            <p>(+91)9333 911 911</p> |
            <BsWhatsapp style={{color:"green"}}/>
            <p>(+91)6366827420</p>
        </div>
        <div id={styles.TLIII}>
            <VscChromeMinimize/>
            <VscChromeRestore/>
            <IoMdClose/>
        </div>
    </div>
}

export default TopLable