export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-7xl mx-auto p-4 md:p-8">{children}</div>;
}
