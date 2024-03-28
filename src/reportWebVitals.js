<<<<<<< HEAD
const reportWebVitals = (onPerfEntry) => {
=======
const reportWebVitals = onPerfEntry => {
>>>>>>> c425b4cbd6d1cfd5b7d6a448d381cb3beb64247f
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
