import { useState, useRef } from 'react';
import { Button } from 'antd';
import Tooltip from './Tooltip';

export default function ButtonWithTooltip({ tooltipContent, ...rest }) {
  const [targetRect, setTargetRect] = useState(null);
  const buttonRef = useRef(null);
  return (
    <>
      <Button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          const rect = buttonRef.current.getBoundingClientRect();
          setTargetRect({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          });
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      />
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>
          {tooltipContent}
        </Tooltip>
      )
    }
    </>
  );
}