import AppConstants from '../../common/AppConstants';

function Footer() {
  const currentYear: number = new Date().getUTCFullYear();

  return (
    <div className="absolute bottom-0 border-t-1 border-t-gray-800 min-w-screen p-4 text-xs light:text-gray-500">
      Copyright &copy; {currentYear} {AppConstants.companyName}. All Rights reserved.
    </div>
  );
}

export default Footer;
