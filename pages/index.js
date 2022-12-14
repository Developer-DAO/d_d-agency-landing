import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/Body';
import OurProjects from '../components/OurProjects';
import SEO from '../components/seo';

export default function Home() {
  return (
    <div className="font-lato dark:bg-black">
      <SEO
        title={'Agency'}
        description={
          'We are a collective venture builder curated from the best talent within Developer DAO. We aim to collectively build products and services for our clients and the web3 space.'
        }
        rrssImg={'./RRSS.png'}
      />

      <Header />

      <main className="flex h-[60vh] items-center justify-center bg-landing-background bg-cover backdrop-saturate-200 md:h-[65vh]">
        <div className="w-full max-w-6xl">
          <div className="flex px-8 text-sm md:text-lg">
            <Body
              headlineText="AGENCY"
              bodyText={
                <div>
                  We are a collective
                  venture builder
                  curated from the best
                  talent within{' '}
                  <a
                    target="_blank"
                    href="https://www.developerdao.com/"
                    className="underline"
                    rel="noreferrer">
                    Developer DAO
                  </a>
                  . We aim to
                  collectively build
                  products and services
                  for our clients and
                  the web3 space.
                </div>
              }
            />
          </div>
        </div>
      </main>
      <OurProjects />
      {/* <Services /> */}
      {/* <HireUs /> */}
      {/*<div className="p-16">*/}
      {/* <OurPartners /> */}
      {/*</div>*/}
      <footer className="max-w-full">
        <Footer />
      </footer>
    </div>
  );
}

Home.theme = 'dark';
