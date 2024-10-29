const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
