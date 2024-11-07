import { memo, useState } from 'react';
import { Form, Input, Button } from 'antd';

const ShippingForm = memo(function ShippingForm({ onSubmit1 }) {
  const [count, setCount] = useState(1);

  console.log('[ARTIFICIALLY SLOW] Rendering <ShippingForm />');
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  function handleSubmit(values) {
    const orderDetails = {
      ...values,
      count
    };
    onSubmit1(orderDetails);
  }

  return (
    <Form onFinish={handleSubmit}>
      <p><b>Note: <code>ShippingForm</code> is artificially slowed down!</b></p>

      <p>
      Number of items:
        <Button type="button" onClick={() => setCount(count - 1)}>–</Button>
        {count}
        <Button type="button" onClick={() => setCount(count + 1)}>+</Button>
      </p>

      <Form.Item label="Street" name="street">
        <Input />
      </Form.Item>

      <Form.Item label="City" name="city">
        <Input />
      </Form.Item>

      <Form.Item label="Postal code" name="zipCode">
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
});

export default ShippingForm;