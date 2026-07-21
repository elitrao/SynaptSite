"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { headerNavigation } from "@/data/landing";

const focusableSelector =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0.01 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
      focusableSelector,
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className="site-header"
        data-scrolled={isScrolled ? "true" : "false"}
      >
        <div className="site-container site-header__inner">
          <Link className="brand" href="/" aria-label="Synapt, на главную">
            <Image
              className="brand__logo"
              src="/assets/brand/synapt-logo-white.svg"
              alt=""
              width={108}
              height={45}
              priority
            />
          </Link>

          <nav className="site-header__nav" aria-label="Основная навигация">
            {headerNavigation.map((item) =>
              item.href ? (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span key={item.label} aria-disabled="true">
                  {item.label}
                </span>
              ),
            )}
          </nav>

          <Link className="button button--compact site-header__cta" href="/#contact">
            Оставить заявку
            <Send aria-hidden="true" size={16} strokeWidth={1.8} />
          </Link>

          <button
            ref={menuButtonRef}
            className="icon-button site-header__menu"
            type="button"
            aria-label="Открыть меню"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(true)}
          >
            <Menu aria-hidden="true" size={22} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-navigation"
            ref={drawerRef}
            className="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Мобильная навигация"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <div className="mobile-drawer__top">
              <Link className="brand" href="/" onClick={closeMenu}>
                <Image
                  className="brand__logo"
                  src="/assets/brand/synapt-logo-white.svg"
                  alt=""
                  width={108}
                  height={45}
                />
              </Link>
              <button
                className="icon-button"
                type="button"
                aria-label="Закрыть меню"
                onClick={closeMenu}
              >
                <X aria-hidden="true" size={24} strokeWidth={1.7} />
              </button>
            </div>

            <nav className="mobile-drawer__nav" aria-label="Мобильное меню">
              {headerNavigation.map((item) =>
                item.href ? (
                  <Link key={item.label} href={item.href} onClick={closeMenu}>
                    {item.label}
                    <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.7} />
                  </Link>
                ) : (
                  <span key={item.label} aria-disabled="true">
                    {item.label}
                  </span>
                ),
              )}
            </nav>

            <Link className="button mobile-drawer__cta" href="/#contact" onClick={closeMenu}>
              Оставить заявку
              <Send aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
