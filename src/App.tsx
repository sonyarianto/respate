import { LineShadowText } from "@/components/ui/line-shadow-text";

export default function App() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          <LineShadowText className="italic" shadowColor={"black"}>
            respate
          </LineShadowText>
        </h1>
      </div>
    </>
  );
}
