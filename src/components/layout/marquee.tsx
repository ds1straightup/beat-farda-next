import React from 'react';

export function Marquee() {
    return (
        <div className="w-full py-8 border-y border-white/5 overflow-hidden whitespace-nowrap relative bg-black">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
            <div className="inline-block animate-marquee uppercase text-[10px] md:text-sm font-display tracking-[0.4em] text-white/30">
                {[
                    "GRM DAILY", "BBC 1XTRA", "WHITE YARDIE", "BOUNTY KILLER",
                    "CARNS HILL", "BBC THREE", "MYSKINUK", "GRACE FOODS",
                    "GRM DAILY", "BBC 1XTRA", "WHITE YARDIE", "BOUNTY KILLER",
                    "CARNS HILL", "BBC THREE", "MYSKINUK", "GRACE FOODS"
                ].map((client, i) => (
                    <span key={i} className="mx-8">{client}</span>
                ))}
            </div>
        </div>
    );
}
