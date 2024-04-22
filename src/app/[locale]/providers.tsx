"use client";

import { NextIntlClientProvider } from "next-intl";


function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: Record<string, string>;
    }) {
    const timeZone = 'Europe/Vienna';
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}

export default Providers;