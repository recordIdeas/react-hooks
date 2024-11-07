import { useTransition } from 'react';
import { Button } from 'antd';

export default function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return (<b>{children}</b>);
  }

  if (isPending) {
    return (<small><i>{children}</i></small>);
  }

  return (
    <Button onClick={() => {
      startTransition(() => {
        onClick();
      });
    }}>
      {children}
    </Button>
  );
}