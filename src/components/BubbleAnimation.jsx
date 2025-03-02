// In your main layout component
const Layout = ({ children }) => {
    return (
      <>
        {/* Background decorative elements */}
        <div className="gradient-overlay"></div>
        <div className="bg-dots">
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
          <div className="bg-dot"></div>
        </div>
        
        {/* Your main content */}
        <main>
          {children}
        </main>
      </>
    );
  };
  
  export default Layout;