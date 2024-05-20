interface HeaderProps {
  active: string;
  theme: "light" | "dark";
  scrollTo: (section: string) => void;
}

interface HeaderButtonProps {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={`text-xl ${isActive && "font-bold"}`}>
      {children}
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ active, theme, scrollTo }) => {
  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 py-4 flex justify-between ${
        theme === "light" ? "text-[#3C3F3C]" : "text-light backdrop-blur-sm"
      }`}
    >
      <HeaderButton
        onClick={() => scrollTo("home")}
        isActive={active === "home"}
      >
        Home
      </HeaderButton>
      <HeaderButton
        onClick={() => scrollTo("about")}
        isActive={active === "about"}
      >
        About
      </HeaderButton>
      <HeaderButton
        onClick={() => scrollTo("gallery")}
        isActive={active === "gallery"}
      >
        Gallery
      </HeaderButton>
    </header>
  );
};
