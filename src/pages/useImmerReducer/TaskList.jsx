import { useState } from 'react';
import { List, Space, Input, Checkbox, Button } from 'antd';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <List
      dataSource={tasks}
      bordered={true}
      renderItem={task=>(
        <List.Item>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </List.Item>
      )}
     />
  )
}

function Task({ task, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent = isEditing ? (
    <>
      <Input
        value={task.text}
        onChange={e => onChangeTask({
          ...task,
          text: e.target.value
        })} />
      <Button onClick={() => setIsEditing(false)}>
        Save
      </Button>
    </>
  ) : (
    <>
      {task.text}
      <Button onClick={() => setIsEditing(true)}>
        Edit
      </Button>
    </>
  );

  return (
    <Space direction="horizontal">
      <Checkbox
        checked={task.done}
        onChange={e => onChangeTask({
          ...task,
          done: e.target.checked
        })} />
      {taskContent}
      <Button onClick={() => onDeleteTask(task.id)}>
        Delete
      </Button>
    </Space>
  );
}
