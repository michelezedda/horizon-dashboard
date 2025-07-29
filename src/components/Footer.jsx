const Footer = ({ login, theme }) => {
  return (
    <footer
      className={`theme-mode footer sm:footer-horizontal footer-center text-base-content p-4 ${
        login ? "rounded-t-2xl" : "rounded-2xl"
      } shadow-lg`}
      data-theme={theme}
    >
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
