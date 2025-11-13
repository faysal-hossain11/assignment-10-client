import React from 'react';
import Header from '../components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
  const location = useLocation();
  const path = location.pathname;

  // Paths where layout (Header/Footer) should be hidden
  const noLayoutRoutes = ['/404', '/not-found', '/*' ];

  // Check if current path matches a route that should hide layout
  const hideLayout = noLayoutRoutes.includes(path);

  return (
    <div>
      {!hideLayout && <Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Root;



// import React from 'react';
// import Header from '../components/Header';
// import { Outlet, useLocation } from 'react-router';
// import Footer from '../components/Footer';

// const Root = () => {
//   const location = useLocation();

//   // Check if the current path doesn't match any known route
//   const hideLayout =
//     location.pathname === '/404' || location.pathname === '/not-found' || !['/', '/login', '/register', '/my-listings', '/add-listing', '/pets-supplies', '/pets-supplies/:id', '/my-orders'].includes(location.pathname);

//   return (
//     <div>
//       {!hideLayout && <Header />}
//       <Outlet />
//       {!hideLayout && <Footer />}
//     </div>
//   );
// };

// export default Root;
