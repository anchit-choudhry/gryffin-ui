import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { useTheme } from "@heroui/use-theme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

function TopNavigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const menuItems: Array<string> = [
    "Dashboard",
    "Profile",
    "Activity",
    "Analytics",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex items-left">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        {theme === "dark" && (
          <NavbarItem>
            <SunIcon
              className={`border-1 p-1.25 rounded-xl size-10 dark:text-gray-700`}
              onClick={() => setTheme("light")}
            />
          </NavbarItem>
        )}
        {theme === "light" && (
          <NavbarItem>
            <MoonIcon
              className={`border-1 p-1.25 rounded-xl size-10 light:text-gray-400`}
              onClick={() => setTheme("dark")}
            />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === menuItems.length - 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default TopNavigation;
