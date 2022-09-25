import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";
import Head from "next/head";
const About = () => {
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
        Divine Edeh - About her
      </h1>
      <div className="md:flex flex-row-reverse my-10">
        <div className="md:ml-48 text-lg">
          <h6 className="leading-10 medium">
            I&apos;m a software developer based in Enugu, Nigeria. Everyday,
            I&apos;m trying to learn new technologies while trying to find time
            to master the ones I already know. Trying so hard to quit
            multitaksing (I know it is unproductive) but we are getting there.
            I&apos;m very easygoing and cool to hang out with (I believe in
            teamwork). <br />
            <br /> I have been a part of this industry (tech) for over two years
            (almost three years 😉) and within that time I&apos;ve been able to
            not only gather knowledge but master various languages, tools,
            whatever. I believe strongly in my frontend skills (don&apos;t mind
            the boring website, had to make something quick, mature and easy in
            a short time 🥲). Oh yeah, don&apos;t mistake me for a boy please 😂
            I&apos;m a girl with different tastes 🙃. <br />
            <br />
            Even though my encounter with tech was by luck (a very lucky luck
            😂), I&apos;ve come to fall in love with using codes to build out
            software. More especially, I love the power programming gives to me.
            I don&apos;t have good ideas but I&apos;d love to collaborate with
            you on yours. <br /> When I&apos;m not writing code, I&apos;m
            probably on MKBHD&apos;s channel on youtube (that guy knows his
            stuff!), watching movies on Netflix, looking for a new novel to read
            on Wattpad, or grinding up on Mathematics 🙃 I&apos;m open to
            collaborations and part-time roles only (I&apos;m still in school
            🥲)
          </h6>
        </div>
        <div className="space-y-10 mt-8 md:mt-12">
          <div>
            <h1 className="bold text-xl">Frontend Tools</h1>
            <h6 className="text-lg">
              Javascript(ES6+), Typescript, React.js, Next.js, Redux, Redux
              Toolkit, React Testing Library, Mocha, Chai, Contentful/Sanity
              CMS, Git/Gitlab/Github, HTML5.
            </h6>
          </div>
          <div>
            <h1 className="bold text-xl">Backend Tools</h1>
            <h6 className="text-lg">
              Node.js, Express.js, Mongodb, Render, Firebase, Postman, Swagger,
              Heroku, Docker.
            </h6>
          </div>
          <div>
            <h1 className="bold text-xl">Libraries</h1>
            <h6 className="text-lg">
              Tailwindcss, CSS3, Styled components, Materail UI, Chart.js,
              jQuery, React hook form, Anime.js, Animate on scroll (AOS)
            </h6>
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
};

export default About;
