
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border py-4 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2025 FiscalEye AI Watch. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-fiscal-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-fiscal-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-fiscal-600 transition-colors">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
