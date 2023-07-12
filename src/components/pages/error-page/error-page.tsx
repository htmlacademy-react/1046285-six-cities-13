const errorPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
} as const;

const errorLinkStyle ={
  color: '#4481c3',
  textDecoration: 'underline',
} as const;

const ErrorPage = () => (
  <main className="error-page" style={errorPageStyle}>
    <h1 className="error-page__title">404. Page not found</h1>
    <br />
    <p className="error-page__text">
      <a className="error-page__link" href="#" style={errorLinkStyle}>
        main page
      </a>
    </p>
  </main>
);

export {ErrorPage}
