import localFont from "next/font/local";

export const neueMachina = localFont({
    src: [
        {
            path: "./NeueMachina-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./NeueMachina-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./NeueMachina-Ultrabold.otf",
            weight: "800",
            style: "normal",
        },
    ],
    variable: "--font-neue-machina",
    display: "swap",
});
