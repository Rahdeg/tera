import Link from "next/link";
import "./styles/globals.css";
import styles from "./styles/layout.module.css";
import { Inter } from "next/font/google";
import { StateProvider } from "./context/contextProvider";
import reducer from "./context/reducer";
import { initialState } from "./context/initialState";
import Modal from "./components/modals/Modal";
import Moviemodal from "./components/modals/Moviemodal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StateProvider initialState={initialState} reducer={reducer}>
        <body>
          <div className={inter.className}>
            <div className={styles.main}>
              <div className={styles.submain}>
                <p className={styles.paragraph}>
                  <a href="/">Show</a>

                  <span className={styles.span}>Flix</span>
                </p>

                <nav className={styles.nav}>
                  <ul role="list" className={styles.list}>
                    <li className={styles.listitem}>
                      <svg
                        width="7"
                        height="30"
                        viewBox="0 0 7 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" "
                      >
                        <rect width="7" height="30" rx="3.5" fill="#5F2EEA" />
                      </svg>

                      <button type="submit" className={styles.button}>
                        <svg
                          className="w-2 h-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                      <Link href="/" className={styles.link}>
                        Search
                      </Link>
                    </li>
                    <li className={styles.listitem2}>
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.77216 2.77216C0.40928 5.13503 0.409282 8.96602 2.77216 11.3289L11.937 20.4937L12 20.4307L12.0631 20.4938L21.2279 11.329C23.5908 8.96609 23.5908 5.13511 21.2279 2.77223C18.865 0.409358 15.034 0.40936 12.6712 2.77224L12.3536 3.08978C12.1584 3.28505 11.8418 3.28505 11.6465 3.08978L11.3289 2.77216C8.96601 0.409281 5.13503 0.409282 2.77216 2.77216Z"
                          stroke="#BCA4FF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <Link href="/" className=" text-[#BCA4FF]">
                        Watchlist
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <Moviemodal />
              {children}
            </div>
          </div>
        </body>
      </StateProvider>
    </html>
  );
}
