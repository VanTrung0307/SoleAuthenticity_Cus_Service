import React, { useEffect } from 'react';

interface ChatBoxProps {
  widgetId: string;
}

const ChatBox = ({ widgetId }: ChatBoxProps) => {
  useEffect(() => {
    const tawk = document.createElement("script");
    tawk.id = 'tawk.to';
    tawk.async = true;
    tawk.src = 'https://embed.tawk.to/' + widgetId + '/default';
    const s = document.getElementsByTagName('script')[0];
    s.parentNode?.insertBefore(tawk, s);
  }, [widgetId]);

  return (
    <div></div>
  );
};

export default ChatBox;
