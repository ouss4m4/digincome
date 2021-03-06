import React from "react"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script type="text/javascript">
      var subscribersSiteId=`927cba08-e8f0-48b4-989a-96000c1dfb84`;
    </script>,
    <script
      type="text/javascript"
      src="https://cdn.subscribers.com/assets/subscribers.js"
    ></script>,
  ])
}
