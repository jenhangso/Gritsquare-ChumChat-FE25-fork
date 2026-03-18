export const RenderMessageBox = (sender, message) => {
    const ChatContainer = document.querySelector(".chat-container");

    const ChatBox = document.createElement("div");
    ChatBox.className = "chat-box"

    const ChatButtonDelete = document.createElement('button')
    ChatButtonDelete.innerText = 'X'
    ChatButtonDelete.classList = 'close-button'

    const ChatboxImg = document.createElement('img')
    ChatboxImg.className = 'header-picture'

    const ChatBoxSender = document.createElement("h2");
    ChatBoxSender.textContent = sender;
    ChatBoxSender.className = 'header-picture'

    const ChatBoxMessage = document.createElement("p");
    ChatBoxMessage.textContent = message;
    ChatBoxMessage.className = 'comments-chat'

    const TimeStamp = document.createElement("p");
    TimeStamp.classList = 'timestamp'
    TimeStamp.textContent = new Date();

    const ChatReply = document.createElement('p')
    ChatReply.innerHTML = 'Reply'


    const comments = document.createElement('textarea')
    comments.placeholder = 'Reply...'
    comments.classList = 'actions'

    ChatBox.append(ChatBoxSender, ChatBoxMessage, ChatButtonDelete, TimeStamp, ChatReply, comments);
    ChatContainer.appendChild(ChatBox);
}