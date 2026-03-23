import { auth, reference, db, messagesRef, repliesRef } from "../firebase.js";
import { push, set, onValue, remove, ref, get } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const messageForm = document.querySelector(".send-message");

messageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(messageForm);
    const message = formData.get("message");

    sendMessage(message)
})

const sendMessage = async(text) => {

    const user = await auth.currentUser;

    if (!user) return alert("Log in first!");

    const newMsg = push(messagesRef);
    const messageData = {
        message: text,
        message_id: newMsg.key,
        user_id: user.uid,
        timestamp: Date.now()
    }

    set(newMsg, messageData);
}