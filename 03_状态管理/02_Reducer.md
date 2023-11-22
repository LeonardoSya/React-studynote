<!--
 * @Author: LeonardoSya 2246866774@qq.com
 * @Date: 2023-11-22 10:04:55
 * @LastEditors: LeonardoSya 2246866774@qq.com
 * @LastEditTime: 2023-11-22 17:39:55
 * @FilePath: \React\03_状态管理\02_Reducer.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

1. 将设置状态的逻辑修改成dispatch的一个action
```js
function handleDeleteTask(taskId) {
    dispatch(
        // action对象
        {
            type:'delete',
            id:taskId,
        }
    )
}
```
2. 编写一个reducer函数
```js
function taskReducer(tasks, action) {
    // 给React返回更新后的状态
    switch(action.type) {
        case 'adder': {
            return ....
        }
        case 'changed': {
            return ....
        }
        case 'deleted': {
            return ....
        }
        default: {
            throw Error('未知action: ' + action.type)
        }
    }
}
```

3. 在组件中使用reducer
```js
import {useReducer} from 'react';
// const [tasks, setTasks] = useState(initialTasks);
const [tasks, dispatch]=useReducer(tasksReducer, initialTasks);
```