import { useState, useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
    // const [tasks, setTasks] = useState(initialTasks);
    // * 3. 替换掉useState，使用useReducer
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    // * useReducer参数：reducer函数,初始state   返回：一个有状态的值,一个dispatch函数


    // * 1. 将设置状态的逻辑修改成dispatch的一个action
    // * 事件处理函数只通过派发action来指定【发生了什么】
    function handleAddTask(text) {
        // setTasks([
        //     ...tasks,
        //     {
        //         id: nextId++,
        //         text: text,
        //         done: false,
        //     },
        // ]);
        // action 对象
        dispatch({
            type: 'ADD_TASK',
            id: nextId++,
            text: text,
        })
    }

    function handleChangeTask(task) {
        // setTasks(
        //     tasks.map((t) => {
        //         if (t.id === task.id) {
        //             return task;
        //         } else {
        //             return t;
        //         }
        //     })
        // );
        dispatch({
            type: 'CHANGE_TASK',
            task: task,
        })
    }

    function handleDeleteTask(taskId) {
        // setTasks(tasks.filter((t) => t.id !== taskId));
        dispatch({
            type: 'DELETE_TASK',
            id: taskId,
        })
    }



    return (
        <>
            <h1>布拉格的行程安排</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}


// * 由于reducer函数接受 state(tasks) 作为参数，因此可以在【组件外声明它】
// * 2. 编写一个reducer函数  用于放置状态逻辑
// * reducer函数通过响应actions来决定状态如何更新
function tasksReducer(tasks, action) {
    // 给React返回更新后的状态
    switch (action.type) {
        case 'ADD_TASK': {
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }
        case 'CHANGE_TASK': {
            return tasks.map((t) => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'DELETE_TASK': {
            return tasks.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action type');
        }
    }
}

let nextId = 3;
const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false },
];
