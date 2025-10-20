"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/avatar.jpg"
              alt="Thomas Roy Chappel"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
            />
            <span className="font-semibold text-base md:text-lg">
              Thomas Roy Chappel
            </span>
          </div>

          <div className="flex items-center md:gap-4 gap-2">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {isHome ? (
                <>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </>
              ) : (
                <Link
                  href="/"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              )}
              <Link
                href="/blog"
                className="text-foreground hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {isHome ? (
                    <>
                      <button
                        onClick={() => scrollToSection("home")}
                        className="text-left text-lg text-foreground hover:text-primary transition-colors"
                      >
                        Home
                      </button>
                      <button
                        onClick={() => scrollToSection("about")}
                        className="text-left text-lg text-foreground hover:text-primary transition-colors"
                      >
                        About
                      </button>
                      <button
                        onClick={() => scrollToSection("projects")}
                        className="text-left text-lg text-foreground hover:text-primary transition-colors"
                      >
                        Projects
                      </button>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="text-left text-lg text-foreground hover:text-primary transition-colors"
                      >
                        Contact
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                  )}
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
