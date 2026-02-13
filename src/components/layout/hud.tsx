import React from 'react';

export function Hud() {
    return (
        <>
            {/* Top Left */}
            <div className="fixed top-6 left-6 z-50 pointer-events-none hidden lg:block">
                <div className="flex flex-col space-y-1">
                    <div className="text-[10px] items-center font-display tracking-[0.3em] text-white/40 flex space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse-fast"></span>
                        <span>SYSTEM_V6.5_UPGRADE</span>
                    </div>
                    <div className="text-[10px] font-body tracking-[0.2em] text-white/20 uppercase pl-4">Lead Probe: Active</div>
                </div>
            </div>

            {/* Top Right */}
            <div className="fixed top-6 right-6 z-50 pointer-events-none hidden lg:block text-right">
                <div className="text-[10px] font-display tracking-[0.3em] text-white/40 uppercase mb-1">FardaVision // Global</div>
                <div className="text-[9px] font-body tracking-[0.1em] text-white/20 flex items-center justify-end space-x-2">
                    <span>Uptime: 99.9%</span>
                    <div className="flex space-x-0.5">
                        <div className="w-[2px] h-3 bg-white/10"></div>
                        <div className="w-[2px] h-3 bg-purple-500"></div>
                        <div className="w-[2px] h-3 bg-white/10"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Left */}
            <div className="fixed bottom-6 left-6 z-50 pointer-events-none hidden lg:block">
                <div className="text-[9px] font-body tracking-[0.2em] text-white/20 uppercase max-w-[200px] leading-relaxed">
                    Data Transmission Encrypted.
                    All Vision Prototypes Subject to System Review.
                    © 2026 FARDAVISION STUDIOS.
                </div>
            </div>
        </>
    );
}
