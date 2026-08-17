import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="page-container relative h-full flex flex-auto flex-col">
      <div className="h-full">
        <div className="container mx-auto flex flex-col flex-auto items-center justify-center min-w-0 h-full align-middle py-16">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
