import styles from "../Styles/Header.module.css"
import { BsSearch,BsPlusCircleFill,BsWhatsapp, BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";



function Header(){
    return <div id={styles.header}>
        <div>
            <IoMenuSharp style={{fontSize:"20px"}}/>
        </div>
        <div>
            <BsSearch/>
            <input type="search" placeholder="Search Transactions"/>
        </div>
        <div>
            <button>
                <BsPlusCircleFill color="red" style={{marginRight:"7px",fontSize:"18px"}}/>
                Add Sale
            </button>
            <button>
                <BsPlusCircleFill color="rgb(0, 170, 255)" style={{marginRight:"7px",fontSize:"18px"}}/>
                Add Purchase
            </button>
            <button>
                <BsPlusCircleFill color="rgb(0, 170, 255)" style={{marginRight:"7px",fontSize:"18px"}}/>
                Add More
            </button>
        </div>
        <div>
            <select name="Add Tools" id="">
                <option value="" disabled selected>Add Tools</option>
                <option value="add sale" >Add Sale</option>
                <option value="add purchase" >Add Purchase</option>
                <option value="add more" >Add more</option>
            </select>
        </div>
        <div>
            <p style={{cursor:"default"}}>
                |
            </p>
            <BsWhatsapp style={{fontSize:"20px",cursor:"pointer"}}/>
            <IoIosSettings style={{fontSize:"25px",cursor:"pointer"}}/>
        </div>
        <div>
            <BsThreeDotsVertical style={{fontSize:"20px"}}/>
        </div>
    </div>
}

export default Header