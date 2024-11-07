import { useState } from 'react';
import { Space , Input, Button } from 'antd';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  return (
    <Space direction="horizontal">
      <Input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button disabled={!text.trim()} onClick={() => onAddTask(text.trim())}>Add</Button>
    </Space>
  );
}