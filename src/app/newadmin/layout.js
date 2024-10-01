"use client";

const Layout = ({ children } ) => {
  return (
    <div>
      <main className="bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default Layout;
