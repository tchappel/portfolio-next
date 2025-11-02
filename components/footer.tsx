import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-end space-y-4">
          <div className="text-right">
            <p className="font-semibold text-lg">Thomas Roy Chappel</p>
            <p className="text-sm text-muted-foreground">
              Crafting beautiful web experiences
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/tchappel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-roy-chappel-iv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Thomas Roy Chappel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
