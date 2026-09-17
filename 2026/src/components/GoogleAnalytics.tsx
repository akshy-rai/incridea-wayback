import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
    interface Window {
        gtag: (
            command: "config" | "event" | "js",
            targetId: string | Date,
            config?: Record<string, any>
        ) => void;
        dataLayer: any[];
    }
}

const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window.gtag === "function") {
            window.gtag("config", "G-2N2HDG3NTE", {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};

export default GoogleAnalytics;
