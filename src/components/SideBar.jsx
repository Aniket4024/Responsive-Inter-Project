import styles from "../Styles/SideBar.module.css"
import marketPlace from "../Images/MarketPlace.png"
import whatsapp from "../Images/whatsapp.png"
import { MdOutlineKeyboardArrowRight,MdAnalytics } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { BiSolidBank } from "react-icons/bi";
import { AiFillShop } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { FaUsers,FaShapes,FaHome,FaPlus,FaAngleDown,FaShoppingCart,FaWallet } from "react-icons/fa";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import { useState } from "react";



function SideBar(){

    const [state,setState] = useState(true)

    return <div id={styles.sideBar} >
        <div id={styles.SBI}>
            <img src={marketPlace} alt="marketPlace" />
            <h3>Machinery</h3>
            <MdOutlineKeyboardArrowRight style={{fontSize:"30px",cursor:"pointer"}}/>
        </div>
        <div id={styles.message}>
            <div>
                <img src={whatsapp} alt="whatsapp" />
            </div>
            <div>
                <h5>Your Personal Messenger</h5>
                <p>
                    Integrate WhatsApp to automate transaction messaging.
                </p>
            </div>
            <div>
                <IoMdClose style={{fontSize:"18px",fontWeight:"600",cursor:"pointer"}}/>
            </div>
        </div>
        <div id={styles.menu} style={{height:state?"535px":"380px"}}>
            <div>
                <FaHome/> 
                <div>
                    Home
                </div>
            </div>
            <div>
                <FaUsers/>
                <div>
                    Parties
                </div>
                <FaPlus/>
            </div>
            <div>
                <FaShapes/>
                <div>
                    Items
                </div>
                <FaPlus/>
            </div>
            <div>
                <MdAnalytics style={{fontSize:"18px"}}/>
                <div>
                    Sale
                </div>
                <FaAngleDown />
            </div>
            <div>
                <FaShoppingCart/>
                <div>
                    Purchase
                </div>
                <FaAngleDown />
            </div>
            <div>
                <FaWallet/>
                <div>
                    Expenses
                </div>
            </div>
            <Accordion onClick={()=>{setState(prev=>!prev)}} defaultIndex={[0]} allowMultiple style={{display:"block",width:"100%",margin:"-10px 0px"}}>
                <AccordionItem style={{width:"100%"}}>
                    <h2>
                    <AccordionButton style={{backgroundColor:"transparent",border:"0px",color:"white",cursor:"pointer"}}>
                        <BiSolidBank style={{fontSize:"18px",margin:"0px 6px"}}/>
                        {/* <Box as="span" flex='1' textAlign='left' fontSize={14} fontWeight={600} >
                            Cash & Bank
                        </Box> */}
                        <div style={{width:"75%", textAlign: "start",fontWeight:"600",marginLeft:"7px",marginBottom:"-6px",fontSize:"14px"}}>
                            Cash & Bank
                        </div>
                        <AccordionIcon  style={{fontSize:"20px",fontWeight:"600"}}/>
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <div id={styles.acordian}>
                            <div>
                                <div>
                                    Bank Accounts
                                </div>
                                <FaPlus/>
                            </div>
                            <div>
                                <div>
                                    Cash In Hand
                                </div>
                                <FaPlus/>
                            </div>
                            <div>
                                <div>
                                    Cheques
                                </div>
                            </div>
                            <div>
                                <div>
                                    Loan Accounts
                                </div>
                                <FaPlus/>
                            </div>
                        </div>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <div id={styles.maska} style={{marginTop:state?"165px":"5px"}}>
                <AiFillShop/>
                <div>
                    My Online Store
                </div>
            </div>
            <div>
                <TbReportSearch/>
                <div>
                    Reports
                </div>
            </div>
        </div>
    </div>
}

export default SideBar