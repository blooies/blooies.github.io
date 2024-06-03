import Head from 'next/head';
import { Barlow } from 'next/font/google';
import IntroBanner from '../components/IntroBanner';
import IntroCard from '../components/IntroCard';
import EmploymentCard from '../components/EmploymentCard';
import ProjectsCard from '../components/ProjectsCard';
import ContactCard from '../components/ContactCard';

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className={barlow.className}>
      <Head>
        <title>Beverly Mah · Front-End Engineer</title>
      </Head>
      <IntroBanner/>
      <div className="row">
        <IntroCard />
        <EmploymentCard />
      </div>
        <ProjectsCard />
        <ContactCard />
    </div>
  );
}
