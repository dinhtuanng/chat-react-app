import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
    return(

        <ChatEngine
            height="100vh"
            projectID="6f86a2bd-42fd-4407-9e54-370d905ac894"
            userName="Tuan"
            userSecret="123123"
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;
