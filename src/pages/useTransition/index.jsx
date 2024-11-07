import { useState } from 'react';
import { Space } from 'antd';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostsTab';
import ContactTab from './ContactTab';

export default function UseHook() {
  const [tab, setTab] = useState('about');
  return (
    <>
      <Space>
        <TabButton
          isActive={tab === 'about'}
          onClick={() => setTab('about')}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === 'posts'}
          onClick={() => setTab('posts')}
        >
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === 'contact'}
          onClick={() => setTab('contact')}
        >
          Contact
        </TabButton>
      </Space>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  );
}