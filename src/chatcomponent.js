import printer from './printer.png';
import './App.css';
import user1 from './jimmy.jpeg'
import user2 from './gurmeet.jpeg'
import { useState,useEffect,useRef } from 'react';


function ChatComponent() {
    const [chats, setchats] = useState([
        {
            "user":"Viggo",
            "message":"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
            "time":"11:45 AM",
            "day":"Yesterday"
        },
        {
            "user":"John Wick",
            "message":"BExpound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "time":"11:46 AM",
            "day":"Yesterday"
        },
        {
            "user":"Viggo",
            "message":" praising pain was born and I will give you a complete account of the system.",
            "time":"11:47 AM",
            "day":"Yesterday"
        },
        {
            "user":"John Wick",
            "message":"Denouncing pleasure and praising pain was born and I will give you a complete",
            "time":"11:50 AM",
            "day":"Yesterday"
        },
        {
            "user":"Viggo",
            "message":" I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
            "time":"11:55 AM",
            "day":"Yesterday"
        },
        {
            "user":"John Wick",
            "message":"BExpound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
            "time":"11:56 AM",
            "day":"Yesterday"
        },
    ]);
    const [currenttext, setcurrenttext] = useState('');
    // const handletext = () => {
    //     setcurrenttext =
    // }
    const bottomRef = useRef(null);
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
      }, [chats]);
    
    const handletext = () => {
        const date = new Date();
        setchats( arr => [...chats, {"name":"John Wick",
        "message":currenttext,
        "time":date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        "day":"Today"
    },
    ]);
        console.log(chats)
        setcurrenttext ('')
    }
    const handletextenter=(event)=>{
        if (event.charCode === 13 && currenttext != '' && currenttext.replace(/\s/g, '').length) {
            handletext()
        }
    }
    return (
        <div className='shadow-grey border-bottom bg-white rounded '>
            <div  className=' border-bottom p-2'>
            <img src={printer} className='app-logo d-none d-md-inline-block w50px' alt="Chat Box Logo"/>
            Chat Box
            </div>
            <div className='limitheight overflow-auto scrollbar-primary'>
            {chats.map(function(chat, index) {
                if(chat.user == 'Viggo'){
                    return (
                    <div className='px-3 py-2 d-flex justify-content-end' key={index}>
                        <div className='d-inline-block position-relative'>
                        <img src={user1} className='user-image' alt="user 1" />
                        <span className='online-dot'></span>
                        </div>
                        <div className='d-inline-block px-2 text-start'>
                        <p className='chat-text-left'>{chat.message}</p>
                        <p className='text-black-50 date-text mb-2'><i className="fa fa-calendar" aria-hidden="true"></i> {chat.time} | {chat.day}</p>
                        </div>
                    </div>)}
                    else{
                        return(
                    <div className='px-3 py-2 d-flex justify-content-end' key={index}>
                        <div className='d-inline-block px-2 text-start'>
                            <p className='chat-text-right'>{chat.message}</p>
                            <p className='text-black-50 date-text mb-2'><i className="fa fa-calendar" aria-hidden="true"></i> {chat.time} | {chat.day}</p>
                            </div>
                            <div className='d-inline-block position-relative'>
                            <img src={user2} className='user-image' alt="user 1" />
                            <span className='online-dot'></span>
                        </div>
                    </div>)}
            })}
            <span ref={bottomRef}></span>
            </div>
            <div className='py-1 border-top'>
                <div className='form rounded'>
                    <input type="text" value={currenttext} id="new_message" name="new_message" onChange={event => setcurrenttext(event.target.value)} onKeyPress={event => handletextenter (event)} placeholder='Write here and hit enter to send...' />
                    <button className='px-4 text-white rounded d-md-block d-none' onClick={handletext}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatComponent