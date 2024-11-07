import { createContext, useContext, useState } from 'react';
import { Space, ConfigProvider, theme, Card, Form, Input, Checkbox, Button } from 'antd';

const CurrentUserContext = createContext(null);
const ThemeContext = createContext(null);

export default function useContextHook() {
  const [theme, setTheme] = useState(false);

  return (
    <MyProviders theme={theme}>
      <Checkbox
        checked={theme}
        onChange={(e) => {
          setTheme(e.target.checked)
        }}
      > Use dark mode</Checkbox>
      <WelcomePanel />
    </MyProviders>
  )
}

function MyProviders({ children, theme }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

function WelcomePanel() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Panel title="welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  )
}

function Panel({ title, children }) {
  const isDarkTheme = useContext(ThemeContext);

  return (
    <ConfigProvider theme={{ algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Card title={<h2>{title}</h2>}>
      {children}
      </Card>
    </ConfigProvider>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);

  return <p>You logged in as {currentUser.name}.</p>;
}

function LoginForm() {
  const theme = useContext(ThemeContext);
  const classname = 'button-' + theme;

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const canLogin = firstName.trim() !== '' && lastName.trim() !== '';

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Form>
      <Form.Item
        label="First name"
        name="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Space>
        <Button
          className={classname}
          disabled={!canLogin}
          onClick={
            () => {setCurrentUser({ name: firstName + ' ' + lastName })}
          }>login in</Button>
        {!canLogin && <i>Fill in both fields.</i>}
      </Space>
    </Form>
  );
}