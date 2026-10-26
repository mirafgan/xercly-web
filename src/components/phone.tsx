import {
  Wifi,
  Signal,
  BatteryFull,
  CircleUserRound,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  BusFront,
  Coffee,
  House,
  ChartNoAxesColumnIncreasing,
  Wallet,
  Plus,
  ArrowLeftRight,
} from "lucide-react";
import styles from "./home.module.css";
export function Phone({ label }: { label: string }) {
  return (
    <div className={styles.phone} role="img" aria-label={label}>
      <div className={styles.phoneScreen} aria-hidden="true">
        <div className={styles.statusBar}>
          <span>9:41</span>
          <i />
          <div>
            <Signal size={12} />
            <Wifi size={13} />
            <BatteryFull size={16} />
          </div>
        </div>
        <div className={styles.phoneHeading}>
          <strong>İcmal</strong>
          <CircleUserRound size={19} />
        </div>
        <div className={styles.phoneGreeting}>Salam. Günün aydın olsun.</div>
        <div className={styles.phoneMonth}>
          <ChevronLeft size={14} />
          <span>Oktyabr 2026</span>
          <ChevronRight size={14} />
        </div>
        <div className={styles.phoneSpend}>
          <span>Bu ay xərclənib</span>
          <strong>
            1 248,50 <small>₼</small>
          </strong>
          <p>Qeydə alınmış xalis xərc · AZN</p>
        </div>
        <div className={styles.phoneToday}>
          <div>
            <span>Bu gün xərclənib</span>
            <strong>63,30 ₼</strong>
          </div>
          <div>
            <span>Bu gün qeydə alınıb</span>
            <strong>3 əməliyyat</strong>
          </div>
        </div>
        <div className={styles.phoneBudget}>
          <div>
            <strong>Aylıq büdcə</strong>
            <span>62% istifadə edilib</span>
          </div>
          <div className={styles.budgetTrack}>
            <i />
          </div>
          <p>
            <span>1 248,50 ₼</span>
            <span>2 000,00 ₼</span>
          </p>
        </div>
        <div className={styles.phoneTransactions}>
          <div className={styles.phoneTransactionsTitle}>
            <strong>Son əməliyyatlar</strong>
            <span>Hamısına bax</span>
          </div>
          {[
            [ShoppingCart, "Market", "Qida · Bu gün", "−42,80 ₼"],
            [BusFront, "Nəqliyyat", "Nəqliyyat · Bu gün", "−8,00 ₼"],
            [Coffee, "Kafe", "Kafe və restoran · Bu gün", "−12,50 ₼"],
          ].map(([Icon, title, caption, amount]) => {
            const RowIcon = Icon as typeof ShoppingCart;
            return (
              <div key={title as string} className={styles.phoneRow}>
                <span className={styles.phoneRowIcon}>
                  <RowIcon size={18} />
                </span>
                <div>
                  <strong>{title as string}</strong>
                  <span>{caption as string}</span>
                </div>
                <b>{amount as string}</b>
              </div>
            );
          })}
        </div>
        <div className={styles.phoneTabbar}>
          <div className={styles.phoneActive}>
            <House size={18} />
            <span>İcmal</span>
          </div>
          <div>
            <ArrowLeftRight size={18} />
            <span>Əməliyyatlar</span>
          </div>
          <div className={styles.phoneAdd}>
            <Plus size={21} />
          </div>
          <div>
            <ChartNoAxesColumnIncreasing size={18} />
            <span>Hesabat</span>
          </div>
          <div>
            <Wallet size={18} />
            <span>Hesablar</span>
          </div>
        </div>
        <div className={styles.homeIndicator} />
      </div>
    </div>
  );
}
