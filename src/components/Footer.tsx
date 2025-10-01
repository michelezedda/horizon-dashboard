const Footer = () => {
  return (
    <footer className="w-full footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 rounded-b-lg">
      <aside>
        <p>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Horizon Dashboard
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
