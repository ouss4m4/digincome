import React from "react"

export const onRenderBody = (
  { setPostBodyComponents, setHeadComponents },
  pluginOptions
) => {
  /* setHeadComponents([
    <script
      key={`adsbygoogle`}
      data-ad-client="ca-pub-8301208799278846"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>,
  ]) */
  setPostBodyComponents([
    <script key={`subscribersSiteId`} type="text/javascript">
      var subscribersSiteId=`927cba08-e8f0-48b4-989a-96000c1dfb84`;
    </script>,
    <script
      key={`cdn.subscribers`}
      type="text/javascript"
      src="https://cdn.subscribers.com/assets/subscribers.js"
    ></script>,
  ])
}
