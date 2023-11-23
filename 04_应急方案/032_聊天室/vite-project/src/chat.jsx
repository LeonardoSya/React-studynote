export function createUnencryptedConnection(roomId) {
    // 实际的实现将会连接到服务器
    return {
        connect() {
            console.log('✅ 建立连接 "' + roomId + '... (未加密)');
        },
        disconnect() {
            console.log('❌ 断开连接 "' + roomId + '" room (未加密)');
        }
    };
}

export function createEncryptedConnection(roomId) {
    // 实际的实现将会连接到服务器
    return {
        connect() {
            console.log('✅ 🔐 建立连接 "' + roomId + '... (加密)');
        },
        disconnect() {
            console.log('❌ 🔐 断开连接 "' + roomId + '" room (加密)');
        }
    };
}

export function sendMessage(message) {
    console.log('🔵 You sent: ' + message);

}