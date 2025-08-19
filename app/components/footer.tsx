export function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="/" className="link link-primary link-hover">
          Home
        </a>
        <a href="/about" className="link link-hover">
          About
        </a>
        {/* <a className="link link-hover">Contact</a> */}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              role="img"
              aria-label="github"
            >
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.016-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.304-5.467-1.333-5.467-5.933 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921.43.372.813 1.104.813 2.225 0 1.606-.015 2.899-.015 3.293 0 .319.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.628-5.373-12-12-12z" />
            </svg>
          </a>

          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              role="img"
              aria-label="linkedin"
            >
              <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.225 0zM7.082 20.452H3.542V9h3.54v11.452zM5.312 7.509c-1.134 0-2.051-.926-2.051-2.066 0-1.141.917-2.066 2.051-2.066 1.134 0 2.05.925 2.05 2.066 0 1.14-.916 2.066-2.05 2.066zM20.452 20.452h-3.54v-5.602c0-1.336-.027-3.054-1.86-3.054-1.86 0-2.145 1.45-2.145 2.948v5.708h-3.539V9h3.396v1.561h.049c.474-.898 1.632-1.845 3.36-1.845 3.593 0 4.256 2.364 4.256 5.436v6.299z" />
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by CanvasMemo</p>
      </aside>
    </footer>
  );
}
