import "@tamagui/core/reset.css";
import "../app.css";

import { Suspense } from "react";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
import Head from "next/head";
import { SizableText, TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";

if (process.env.NODE_ENV === "production") {
  require("../../public/tamagui.css");
}

function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title></title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />

      <TamaguiProvider config={config} defaultTheme="light">
        <ToastProvider>
          <Suspense fallback={<SizableText>Loading...</SizableText>}>
            {getLayout(<Component {...pageProps} />)}
            <ToastViewport left={0} right={0} top={0} />
          </Suspense>
        </ToastProvider>
      </TamaguiProvider>
    </>
  );
}

export default App;
