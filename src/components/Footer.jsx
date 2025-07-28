const Footer = () => {
  return (
    <footer className="footer mt-6 sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 rounded-b-2xl">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Horizon
          Dashboard
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
