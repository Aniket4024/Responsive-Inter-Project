import styles from "../Styles/Dashboard.module.css"
import { FcAlarmClock, FcContacts, FcSms } from "react-icons/fc";
import { MdKeyboardArrowRight,MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowUpShort,BsTelephone,BsThreeDotsVertical } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { FiCreditCard, FiMail } from "react-icons/fi";
import { LiaHomeSolid } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";




function Dashboard(){
    return <div id={styles.dashboard}>
        <div>
            <div id={styles.impParties}>
                <div>
                    <FcContacts style={{fontSize:"25px"}}/>
                </div>
                <div>
                    <h4>Import Parties</h4>
                    <p>Use contacts from your Phone or Gmail to create parties.</p>
                </div>
                <div>
                    <MdKeyboardArrowRight color="blue" style={{fontSize:"20px"}}/>
                </div>
            </div>
            <div id={styles.srBtn}>
                <div>
                    <AiOutlineSearch style={{marginTop:"-3px"}}/>
                </div>
                <div>
                    <button>+ Add Party</button>
                    <div>
                        <MdKeyboardArrowDown color="white"/>
                    </div>
                </div>
            </div>
            <div id={styles.tableBox}>
                <table>
                    <tr>
                        <th><BsArrowUpShort fontSize={"20px"} style={{marginBottom:"-3px"}}/> Party <BiFilterAlt color="red" style={{marginLeft:"20px",marginRight:"30px"}}/></th>
                        <th>Amount</th>
                    </tr>
                    <tr id={styles.even}>
                        <td>KPS Sanhaula</td>
                        <td>2,360.00</td>
                        <td><BsThreeDotsVertical/></td>
                    </tr>
                    <tr id={styles.selected}>
                        <td>RTMNU</td>
                        <td>8,28,809.89</td>
                        <td><BsThreeDotsVertical/></td>
                    </tr>
                    <tr id={styles.even}>
                        <td>KGF Antra</td>
                        <td>3,860.08</td>
                        <td><BsThreeDotsVertical/></td>
                    </tr>
                    <tr id={styles.odd}>
                        <td>VMV Soluarions</td>
                        <td>9,86,780.04</td>
                        <td><BsThreeDotsVertical/></td>
                    </tr>
                    <tr id={styles.even}>
                        <td>SAM Tech</td>
                        <td>2,68,890.08</td>
                        <td><BsThreeDotsVertical/></td>
                    </tr>
                </table>

            </div>
        </div>
        <div>
            <div>
                <div>
                    <h3 >RTMNU</h3>
                    <label htmlFor="">
                        <BsTelephone/>Phone : <p>8936738201</p>
                    </label>
                    <label htmlFor="">
                        <FiMail/>Email : <p style={{color:"rgb(0, 183, 255)"}}>Add Email ID</p>
                    </label>
                    <label htmlFor="">
                        <FiCreditCard/>No Credit Limit Set : <p style={{color:"rgb(0, 183, 255)"}}>₹ Set Credit Limit</p>
                    </label>
                </div>
                <div>
                    <div>
                        <FcSms/>
                        <FaWhatsapp color="green"/>
                        <FcAlarmClock/>
                    </div>
                    <div>
                        <label htmlFor="">
                            <LiaHomeSolid/>Address : <p>Sanhaula</p>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="">
                        <IoNewspaperOutline/>GSTIN : <p style={{color:"rgb(0, 183, 255)"}}>Add GSTIN</p>
                        </label>
                    </div>

                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
}

export default Dashboard;