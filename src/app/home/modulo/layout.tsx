import Header from "@/components/header";

export default function ModuloLayout({
  children
}: {
  children: Readonly<{
    children: React.ReactNode;
  }>
}) {

  return (
    <>
      <Header />
      {children}
    </>

  );
}