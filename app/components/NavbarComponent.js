"use client";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import navbar_style from "../styles/Navbar.module.css";

export default function NavbarComponent() {
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 100;

            if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollTo = (id) => {
        if (typeof document === "undefined") return;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Navbar
            className={`${navbar_style.navbar} ${isHidden ? navbar_style.hidden : ""}`}
        >
            <NavbarContent className={navbar_style.navbarContent}>
                <NavbarItem
                    className={navbar_style.navbarItem}
                    onClick={() => handleScrollTo("home")}
                    as="button"
                >
                    Home
                </NavbarItem>
                <NavbarItem
                    className={navbar_style.navbarItem}
                    onClick={() => handleScrollTo("learning")}
                    as="button"
                >
                    Learning
                </NavbarItem>
                <NavbarItem
                    className={navbar_style.navbarItem}
                    onClick={() => handleScrollTo("projects")}
                    as="button"
                >
                    Projects
                </NavbarItem>
                <NavbarItem
                    className={navbar_style.navbarItem}
                    onClick={() => handleScrollTo("contactus")}
                    as="button"
                >
                    Contact Us
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
