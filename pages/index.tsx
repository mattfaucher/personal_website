import Head from 'next/head';
import Image from 'next/image';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Experience from '../components/Experience';
import Card from '../components/Card';
import { useState } from 'react';
import FancyListItem from '../components/FancyListItem';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Matt Faucher | Software Engineer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white sm:px-5 md:px-20 pb-10 dark:bg-gray-800 dark:text-white'>
        <nav className='py-10 mb-12 flex justify-between'>
          <a
            className='bg-blue-500 text-gray-300 px-4 py-2 rounded-md dark:text-white'
            href='https://github.com/mattfaucher/mattfaucher.github.io/tree/master/public/Resume.pdf' download='matt_faucher_resume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex items-center space-between mr-5'>
            <button className='bg-blue-500 text-gray-300 p-2 rounded-md dark:text-white'>
              {darkMode ?
                <BsFillMoonStarsFill className='cursor-pointer text-xl' onClick={() => setDarkMode(!darkMode)} />
                :
                <BsSun
                  className='cursor-pointer text-xl' onClick={() =>
                    setDarkMode(!darkMode)} />
              }
            </button>
          </div>
        </nav>
        <section>
          <div className='text-center p-5'>
            <h2 className='text-5xl py-2 text-blue-500 font-medium'>Matt Faucher</h2>
            <h3 className='text-2xl py-2'>Software Engineer</h3>
            <p className='text-lg py-5 px-10 leading-6 text-gray-800 dark:text-white'>
              Hello 😄, my name is Matt and I am currently working as a software engineer at <span className='text-amber-500'>Amazon Web Services</span> for the <span className='text-lime-600'>Elastic File System</span> service.
              My team is building a general purpose all-in-one testing infrastructure to increase development velocity among the engineering cohorts.
              <br />
              <br />
              I am personally ⚡️<span className='font-semibold'>invigorated</span>⚡️by creating products that provide exceptional experiences to users as well as other developers.
            </p>
            <h3 className='text-2xl py-2 mb-2'>My passions include</h3>
            <ul className='table mx-auto text-start whitespace-nowrap'>
              <FancyListItem darkMode={darkMode} text='front end development' />
              <FancyListItem darkMode={darkMode} text='back end development' />
              <FancyListItem darkMode={darkMode} text='product development' />
              <FancyListItem darkMode={darkMode} text='computer science theory' />
              <FancyListItem darkMode={darkMode} text='algorithms' />
            </ul>
          </div>
          <div className='text-5xl flex justify-center gap-16 text-gray-600 p-8 dark:text-white'>
            <a
              href='https://twitter.com/mfauch_dev'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href='https://linkedin.com/in/matthew-faucher/'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillLinkedin />
            </a>
            <a
              href='https://github.com/mattfaucher'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub />
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-t from-white to-blue-500 rounded-full w-80 h-80 m-5 overflow-hidden p-4'>
            <Image src='https://raw.githubusercontent.com/mattfaucher/mattfaucher.github.io/master/img/MLAX_Headshot-removebg.png' alt='headshot image' style={{ position: 'relative', top: '-15px' }} width={320} height={320} />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-4xl mb-5 text-center p-8'>
              Work Experience
            </h3>
            <Experience />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-4xl mb-5 text-center'>
              Projects
            </h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 m-auto p-8 justify-center'>
              <Card
                title='nuHabit: Habit tracking made simple'
                content='Full stack web application written in JavaScript that is used for tracking habits. This app was created for a class project and includes a front-end, back-end, as well as a database via MongoDB.'
                url='https://github.com/mattfaucher/nuHabit/'
              />
              <Card
                title='Mini Shell'
                content='A shell written in C that can handle all standard linux commands as well as other custom created commands.'
                url='https://github.com/mattfaucher/mini-shell'
              />
              <Card
                title='Apex Rank Bot'
                content='Bot written for Discord Server. This bot was used to handle commands that users input and based on those commands automate administrative tasks within the server. Used Python.'
                url='https://github.com/mattfaucher/apex-rank-bot'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
