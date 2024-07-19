const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 fixed-bottom">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-white text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"></svg>
        </a>
        <span className="mb-3 mb-md-0 text-white">© 2024 Harsh Rajput</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a 
            href="https://www.linkedin.com/in/harsh-rajput-57951821b/" 
            className="text-white" 
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="linkedin.png" 
              alt="LinkedIn" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
        </li>
        <li className="ms-3">
          <a 
            href="https://github.com/hrajput0322" 
            className="text-white" 
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="github.png" 
              alt="GitHub" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
        </li>
        <li className="ms-3 me-3">
          <a 
            href="https://leetcode.com/hrajput0322" 
            className="text-white" 
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="leetcode.png" 
              alt="LeetCode" 
              style={{ width: '24px', height: '24px' }} 
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
