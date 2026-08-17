import Header from "@/components/menu/Header";
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app-layout-stacked-side flex flex-auto flex-col p-25">
      <div className="flex flex-auto min-w-0">
        <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
          <header className="header shadow dark:shadow-2xl">
            <Header />
          </header>
          <div className="h-full flex flex-auto flex-col">
            <div className="h-full flex flex-auto flex-col justify-between">
              <main className="h-full">{children}</main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
