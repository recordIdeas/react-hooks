import { useMemo } from 'react';
import { ConfigProvider, theme, Card } from 'antd';
import { filterTodos } from './utils';

export default function TodoList({ todos, isDarkTheme, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);

  return (
    <ConfigProvider theme={{ algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Card title={<b>Note: <code>filterTodos</code> is artificially slowed down!</b>}>
          {visibleTodos.map(todo =>
            <p key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</p>
          )}
      </Card>
    </ConfigProvider>
  );
}