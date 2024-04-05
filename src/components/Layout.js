import Header from "./header";
const Layout = ({ children }) => { // Ajout de { children } en tant que prop
  return (
    <div>
       <Header />
      <div className='container'>
        {children} {/* Utilisation de la prop children */}
      </div>
    </div>
  );
};

export default Layout;
