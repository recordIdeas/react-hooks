import { useState } from 'react';
import { Row, Col, Segmented, Checkbox } from 'antd';
import { createTodos } from './utils';
import TodoList from './TodoList';

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState('all');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Row align='middle' justify='space-between' gutter='20'>
        <Col>
          <Segmented
            value={tab}
            style={{
              marginBottom: 8,
            }}
            onChange={setTab}
            options={['all', 'active', 'completed']}
          />
        </Col>
        <Col>
          <Checkbox checked={isDark} onChange={e => setIsDark(e.target.checked)}>
            Dark mode
          </Checkbox>
        </Col>
      </Row>
      <TodoList
        todos={todos}
        tab={tab}
        isDarkTheme={isDark}
      />
    </>
  );
}