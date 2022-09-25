import Head from "next/head";
import Link from "next/link";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-themeBlack min-h-screen text-gray-300 px-5 xs:px-10 md:px-20 xl:px-40">
      <Head>
        <title className="black">Divine Edeh</title>
        <meta
          name="description"
          content="Divine Edeh - Software and Blockchain Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="extrabold text-2xl md:text-3xl text-center py-5">
        Divine Edeh - Summary
      </h1>
      <div className="lg:grid grid-cols-2 gap-12 my-[10vh] lg:my-[17vh]">
        <div>
          <h1 className="text-xl bold text-themeYellow py-4">Hello 👋</h1>
          <h2 className="pb-4 pt-3 extrabold text-3xl tracking-wide">
            My name is Divine Edeh
          </h2>
          <p className="leading-7 bold tracking-wide">
            I am currently a dedicated and efficient full stack developer with
            over three years experience in both Frontend and Backend Web
            technologies. My interest in Web3 has led me to learn blockchain
            development in both Ethereum and Solana. Of course my interests can
            change with time, but I am settling with Web3 for now. In my free
            time, I love to read novels, you can call me a fantasy-fiction lover
            🙃 or binge watch movies on Netflix.
          </p>
          <a href="/images/divine.pdf" download="divine">
            <button className="button my-6">Download Resume</button>
          </a>
        </div>
        <div className="md:grid grid-cols-2 gap-8 py-14 space-y-5 md:space-y-0 lg:p-0">
          <div className="card">
            <div className="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              <Link href="/projects" className="">
                <p className="link">My projects</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <Link href="/about" className="">
                <p className="link">About me</p>
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="center">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                aria-hidden="true"
                class="icon bg-themeBlack"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/divine_edeh1"
                className="link"
              >
                My tweets
              </a>
            </div>
          </div>
          <div className="card">
            <a href="mailto:edehdivine042@gmail.com" className="center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <p className="link">Contact me</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto relative w-80">
        <BottomNav />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
