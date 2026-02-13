import React from 'react';
import { Mail, Instagram, Youtube } from 'lucide-react';

export function Footer() {
    return (
        <footer className="relative z-10 py-12 border-t border-white/5 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="text-center md:text-left space-y-2">
                        <h3 className="font-display text-2xl text-white">FARDAVISION</h3>
                        <p className="font-body text-xs text-gray-500 max-w-xs">
                            Audio Engineering, Music Production, Visuals & Websites.
                            <br />System V6.5 Online.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="https://instagram.com/thebeatfarda" target="_blank" rel="noopener noreferrer"
                            className="text-gray-400 hover:text-void-purple transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-void-purple transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Youtube className="w-5 h-5" />
                        </a>
                        <a href="mailto:info@thebeatfarda.com" className="text-gray-400 hover:text-void-purple transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="font-body text-xs text-gray-600">
                            &copy; 2026 FARDAVISION STUDIOS. <br />
                            All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
