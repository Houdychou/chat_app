import './userinfos.css'

const Chat = () => {
    return (
        <div className='userInfo'>
            <div className="user">
            <img src="./assets/img/avatar.png" alt="avatar"/>
            <h2>John Doe</h2>
            </div>
            <div className="icons">
                <img src="./assets/img/more.png" alt="see more"/>
                <img src="./assets/img/video.png" alt="video"/>
                <img src="./assets/img/edit.png" alt="edit"/>
            </div>
        </div>
    )
}

export default Chat