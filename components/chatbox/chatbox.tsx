import React, { useEffect } from 'react';

interface CustomWindow extends Window {
  fbAsyncInit?: () => void;
  FB?: {
    init: (params: { xfbml: boolean; version: string }) => void;
  };
}

interface ChatBoxProps {
  page_id: string;
}

const ChatBox = ({ page_id }: ChatBoxProps) => {
  useEffect(() => {
    const customWindow: CustomWindow = window;
    customWindow.fbAsyncInit = function () {
      customWindow.FB?.init({
        xfbml: true,
        version: 'v12.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      if (fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <div className="fb-customerchat" data-page_id={page_id} />
  );
};

export default ChatBox;
