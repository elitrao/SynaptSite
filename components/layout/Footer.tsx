import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { contactConfig, navigation } from "@/data/landing";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div className="site-footer__brand">
          <a className="brand" href="#top" aria-label="Synapt, на главную">
            <Image
              className="brand__logo brand__logo--footer"
              src="/assets/brand/synapt-logo-white.svg"
              alt=""
              width={128}
              height={53}
            />
          </a>
          <p>Проектируем и запускаем цифровые продукты под ключ.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Навигация в подвале">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__contact">
          <span>Связаться</span>
          {contactConfig.recipientIsPlaceholder ? (
            <p>Контакт будет добавлен перед публикацией</p>
          ) : (
            <a href={`mailto:${contactConfig.recipientEmail}`}>
              {contactConfig.recipientEmail}
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.7} />
            </a>
          )}
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <span>© {new Date().getFullYear()} Synapt</span>
        <Link href={contactConfig.privacyPath}>Политика конфиденциальности</Link>
      </div>
    </footer>
  );
}
