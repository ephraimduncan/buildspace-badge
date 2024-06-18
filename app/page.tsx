import { BuildspaceLogo } from "./buildspace-logo";
import { SelectHouse } from "./select-house";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans gap-4 items-center justify-center bg-black text-white">
      <BuildspaceLogo size={80} />

      <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">nights & weekends badge</h1>
      <SelectHouse />
    </main>
  );
}
