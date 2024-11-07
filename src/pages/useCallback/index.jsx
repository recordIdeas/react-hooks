import { useState } from 'react';
import { Checkbox } from 'antd';
import ProductPage from './ProductPage';

export default function UseHook() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <Checkbox
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
      > Use dark mode</Checkbox>
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        isDarkTheme={isDark}
      />
    </>
  );
}