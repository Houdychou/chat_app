import './list.css'
import UserInfo from "./user_infos/userInfos"
import ChatList from "./chatList/chatList"

const List = () => {
    return (
        <div className='list'>
            <UserInfo/>
            <ChatList/>
        </div>
    )
}

export default List