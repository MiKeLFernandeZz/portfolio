import { useRef, useState } from "react";

export const CardSpotlightBorder = ({ children }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <>
            <div className="relative w-fit inline-block mx-3">
                <div
                    onMouseMove={handleMouseMove}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    // autoComplete="off"
                    // placeholder="Enter your email address"
                    // type="email"
                    // name="email"
                    className="bg-neutral-950 w-fit cursor-default rounded-md border border-slate-800 p-5 transition-colors duration-500"
                >
                    {children}
                </div>
                <div
                    ref={divRef}
                    // disabled
                    style={{
                        border: "2px solid rgb(91 192 190)",
                        opacity,
                        // WebkitMaskImage: `radial-gradient(30% 40px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                        WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, black 25%, transparent 70%)`,
                        // borderRadius: "50%", // Add this line
                    }}
                    aria-hidden="true"
                    className="border-[rgb(91 192 190)] pointer-events-none absolute left-0 top-0 z-10 w-full h-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
                />
            </div>
        </>
    );
};
