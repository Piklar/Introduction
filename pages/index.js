import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>All About me</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I am Ernz Danielle D. Manalo.<br></br> 
        I am 21 Years old.<br></br>
        I live at Mexico, Pampanga.<br></br>
        I am currently a 3rd year IT Student studying at University of the Assumption. 
        <hr></hr>
        </p>

        <h3>Hobbies</h3>
        <ol> Here are my top 3 Hobbies <br></br> <br></br>

        <img src="https://d2i5t58cb8fkm0.cloudfront.net/wp-content/uploads/2023/08/18032530/How-To-Improve-Reading-Skills.png" alt="Reading" width="200"></img> <br></br>
          <li>Reading</li>
          <p>I do love to read, Reading allows me to learn many different things. It helps me grow and change to a better person. I love reading self-help books as it checks myself and help me learn what I must need to improve.</p> <br></br>

          <img src="https://www.mondaycampaigns.org/wp-content/uploads/2021/05/move-it-monday-feature-intro-to-physical-activity-sm.png" alt="Physical Activity" width="200"></img> <br></br>
          <li>Physical Activity</li>
          <p>
            I do Physical Activities like walking, jogging, and working out every single day. I love the feeling of prespiring and enjoying the process. 
          </p> <br></br>

          <img src="https://cdn.oneesports.gg/cdn-data/2022/06/LeagueOfLegends_2022_LCK_SummerSplit_Week2_T1_Oner.jpg" alt="Playing LoL" width="200"></img> <br></br>
          <li>Playing Online Games</li>
          <p>
            Playing Online Games is my primary gateway to escape reality. It gives me certain boost in my body and keeps me sane in my everyday life.
          </p>
          
        </ol>

        <hr></hr>
        <h3>Favorite Music</h3>
        <p>
          My Favourite music as of now is <strong><a href="https://www.youtube.com/watch?v=omFa4Yk9Fmg" target="_blank">Mundo</a></strong> by IVOS. <br></br>
          This song inspires me way back my Junior Highschool days up to now. <br></br>
          The song is just too perfect for me.
        </p> 
        <hr></hr>
        <br></br>

        <img src="https://drivemehungry.com/wp-content/uploads/2022/11/tonkatsu-japanese-pork-katsu-20.jpg" alt="Pork Tonkatsu" width="300"></img>
        <p>
          My Favourite food as of now is <strong>Pork Tonkatsu.......</strong>
        </p>

        <hr></hr>

        <h3>More things about me:</h3>
        <p>
        I believe that I have leadership as my strong side as well as being able to communicate with other people. I believe that I can still push myself into a better programmer.<br></br> 
        I just need ample amount of motivation to keep me going.
        </p>

        <h4>Why I took IT</h4>
        <p>
        I took IT as I was fascinated with the works of how they move, operate, and function. I also believe that being in the IT industry is a great move due to the progressive world we are living.
        </p>

        <h4>What career I see myself after Graduating</h4>
        <p>
        I can see myself being a Back-end Developer. I do find doing those tasks mind-challenging and exciting. I do think after mastering it, I could go Full-Stack Developer.
        </p>

        <h4>What I expect learning within this subject</h4>
        <p>
        I expect that this subject will teach me the fundamentals of making a proper system. This subject will develop me to be better, faster, and quicker than my previous years in terms of coding.
        </p>

        <h4>What are the topics that I wanted to be discussed in the subject</h4>
        <p>
        I would like to have an in-depth understanding regarding different types of Programming Languages as well as how I can understand and mix them all together. I would like to learn how they connect and function with one another.
        </p>
      </section>
    </Layout>
  );
}