import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen font-inter justify-between w-full">
      {children}
      <div className="auth-asset">

<div>
  <Image src="/icons/auth-image.svg" width={500} height={500} alt="logo"/>
</div>

      </div>
    </main>
  );
}
