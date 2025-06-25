import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center sm:text-left">
          Welcome to the Hyundai Project
        </h1>
        <p className="text-lg text-center sm:text-left">
          This project showcases the latest advancements in automotive technology.
        </p>
        <Image
          src="/hyundai-logo.png"
          alt="Hyundai Logo"
          width={200}
          height={100}
          className="rounded-lg shadow-lg"
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
