import * as React from "react";
import { Alert } from "@snailycad/ui";
import Link from "next/link";

export function DemoDetector() {
  const [isDemo, setIsDemo] = React.useState(false);

  React.useEffect(() => {
    const isDemo = window.location.hostname === "demo.snailycad.org";

    setIsDemo(isDemo);
  }, []);

  if (!isDemo) return null;

  return (
    <Alert className="max-w-md mb-5" type="warning" title="How to use this demo">
      <p>
        This demo is a fully functional version of KCDOJRP. You can use this demo to test out
        KCDOJRP before you decide to install and use it for your own community.
        <br />
        To use this demo, please create a new account. This will give you access to 99% of the
        features of KCDOJRP
      </p>
    </Alert>
  );
}
