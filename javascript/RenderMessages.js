import { RenderMessageBox } from "./RenderMessageBox.js";

export const RenderMessages = async(usersObject, messagesObject) => {

    for (const userKey in usersObject) {
        const userElement = usersObject[userKey];
        // console.log(userElement)
        
        for (const messageKey in messagesObject) {
            if (!Object.hasOwn(messagesObject, messageKey)) continue;
            
            const messageElement = messagesObject[messageKey];
            // console.log(messageElement)

            if(userElement.id === messageElement.user_id){
                console.log(`${userKey} wrote the message with ID ${messageKey}`)
                RenderMessageBox(userElement, messagesObject.message)
            }
        }
    }
}