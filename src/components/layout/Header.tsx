import { Link } from "react-router-dom";
import IncubyteLogo from "@/components/icons/incubyte.logo";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <IncubyteLogo />
          </Link>
        </div>
      </div>
    </header>
  );
};
