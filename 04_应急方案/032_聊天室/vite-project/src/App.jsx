import { useState } from 'react'
import './App.css'
import ChatRoom from './ChatRoom';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpened(!isOpened)}>{isOpened ? '退出' : '进入'}聊天室</button>
      <hr />
      {isOpened &&

        <section>
          <label>
            选择聊天室:{' '}
            <select
              value={roomId}
              onChange={e => setRoomId(e.target.value)}
            >
              <option value="general">所有</option>
              <option value="traval">旅游</option>
              <option value="music">音乐</option>
            </select>
          </label>
          <label>
            <input
              type='checkbox'
              checked={isEncrypted}
              onChange={e => setIsEncrypted(e.target.checked)}
            />
            匿名上网
          </label>
          <hr />
          <ChatRoom
            roomId={roomId}
            isEncrypted={isEncrypted}
          />
        </section>

      }


    </>
  );
}

