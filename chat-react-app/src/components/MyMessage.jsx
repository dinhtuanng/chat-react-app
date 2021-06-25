const MyMessage = ({message})=>{
    if(message?.attachments?.lenght > 0){
        return(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float: 'right'}}
            />
        )
    }

    return(
        <div className="message">
            MyMessage
        </div>
    );
}

export default MyMessage;