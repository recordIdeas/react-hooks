import { useCallback } from 'react';
import { ConfigProvider, theme, Card } from 'antd';
import ShippingForm from './ShippingForm';

export default function ProductPage({ productId, referrer, isDarkTheme }) {
  const handleSubmit1 = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);

  return (
    <ConfigProvider theme={{ algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Card>
        <ShippingForm onSubmit1={handleSubmit1} />
      </Card>
    </ConfigProvider>
  );
}

function post(url, data) {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}