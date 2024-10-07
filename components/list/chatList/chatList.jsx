import { useState } from "react"
import './chatlist.css'

const Chat = () => {
    const [addMode,setAddMode] = useState(false);
    return (
        <div className='chatlist'>
            <div className="search">
                <div className="searchBar">
                    <img src="./assets/img/search.png" alt="search"/>
                    <input type="text" placeholder="search" />
                </div>
                <img src={addMode ? "./assets/img/minus.png" : "./assets/img/plus.png"} alt="jsp" className="add" onClick={() => setAddMode(prev => !prev)}/>
            </div>
            <div className="item">
                <img src="./assets/img/avatar.png" alt="avatar"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./assets/img/avatar.png" alt="avatar"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./assets/img/avatar.png" alt="avatar"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./assets/img/avatar.png" alt="avatar"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello</p>
                </div>
            </div>
            
        </div>
    )
}

export default Chat