const Footer = () => {
  // All right reserved
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 sticky bottom-0">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved.
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
