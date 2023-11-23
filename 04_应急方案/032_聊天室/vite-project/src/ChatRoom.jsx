import { useState, useEffect } from 'react'
import { createEncryptedConnection, createUnencryptedConnection, sendMessage } from './chat';


export default function ChatRoom({ roomId, isEncrypted }) {
    const [message, setMessage] = useState('');
    const serverUrl = 'https://localhost:1234'

    useEffect(() => {
        // 因为 createEncryptedConnection 和 createUnencryptedConnection 都是在组件外声明的，它们不是响应式的，因此不需要作为依赖项
        const createConnection = isEncrypted ? createEncryptedConnection : createUnencryptedConnection;
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, isEncrypted]);

    function handleSendClick() {
        sendMessage(message);
        setMessage('');
    }
    return (
        <>
            <h2>这里是{roomId}聊天室</h2>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button onClick={handleSendClick}>send</button>
        </>
    )
}