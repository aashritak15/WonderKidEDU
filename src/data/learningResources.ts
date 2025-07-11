export interface Resource {
  id: number;
  title: string;
  category: string;
  time: string;
  image: string;
  content: string;
  featured: boolean;
  video?: string;
  author?: string;
}

export const allResources: Resource[] = [
  {
    id: 1,
    title: "IEP & 504 Plans: A Parent and Teacher Guide (with Fran Boyle)",
    category: "Videos",
    time: "19 min watch",
    image: "https://img.youtube.com/vi/tLPhh-N0Ux4/0.jpg",
    content: `
      <h2>IEP & 504 Plans: A Parent and Teacher Guide</h2>
      <p><strong>Credit:</strong> Fran Boyle</p>
      <p>Join us for an inspiring conversation with Fran Boyle, a special needs educator with over 14 years of experience, and co-founder of IEP Report — a platform designed to make data tracking seamless for educators worldwide.</p>
      <ul>
        <li>00:08 Background Information + Introduction</li>
        <li>02:02 What exactly is the purpose of an IEP, and how does a child qualify for one?</li>
        <li>03:35 What is the purpose of a 504 plan, and how does a child qualify for one?</li>
        <li>04:44 For parents who are about to attend their first IEP meeting, how can they best prepare?</li>
        <li>06:06 Sometimes parents don't agree with the school's evaluation or the proposed IEP -- what should they do in that situation?</li>
        <li>07:30 How often should an IEP be looked at or updated?</li>
        <li>09:19 IDEA offers some important protections - can you talk more about what those are?</li>
        <li>11:24 Tips for Teachers: Balancing the needs of individual students with the demands of the classroom</li>
        <li>13:36 More Information on IEP Report</li>
        <li>17:05 If progress monitoring shows that a child isn't meeting their IEP goals, what steps should be taken to adjust things?</li>
        <li>18:34 Final Remarks + Advice</li>
      </ul>
      <div class="video-container my-6 rounded-lg overflow-hidden">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/tLPhh-N0Ux4" 
          title="IEP & 504 Plans: A Parent and Teacher Guide"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
      <h3>Video Summary</h3>
      <ul>
        <li><strong>Purpose of an IEP (Individualized Education Program):</strong> Legal document outlining individualized education goals, services, and supports for students identified with a disability. Governed by IDEA. Eligibility: Must have a disability affecting educational achievement requiring specialized instruction.</li>
        <li><strong>Goals of IEP:</strong> Ensure specialized instruction, measurable goals, related services (speech/occupational therapy, counseling, summer programming if needed).</li>
        <li><strong>Purpose of a Section 504 Plan:</strong> Provides accommodations for students who do not meet IEP criteria. Governed by Section 504 of the Rehabilitation Act. Eligibility: Any physical or mental impairment that substantially limits major life activities.</li>
        <li><strong>Preparing for an IEP Meeting:</strong> Ensure evaluation, assess strengths/weaknesses, gather documentation, compile concerns and expectations.</li>
        <li><strong>Disagreement with School Evaluations/IEP:</strong> Rights under procedural safeguards. Minor issues resolved with IEP team; severe disagreements may require legal advice.</li>
        <li><strong>IEP Review Frequency:</strong> Must be reviewed/updated at least annually. Assess progress, effectiveness, and necessary modifications.</li>
        <li><strong>IDEA Rights and Protections:</strong> FAPE, parent participation, due process, confidentiality.</li>
        <li><strong>Balancing Classroom Needs:</strong> Inclusion model, co-teaching, clear routines, small group/one-on-one support, differentiated instruction.</li>
        <li><strong>IEP Progress Monitoring Platform:</strong> Website for organizing students, tracking goals, generating reports, saving time for teachers.</li>
        <li><strong>Steps if IEP Goals Are Not Met:</strong> Tiered support systems, flexible meetings, regular review and adjustment.</li>
        <li><strong>Final Advice:</strong> Stay organized, seek community support, ask questions during meetings.</li>
      </ul>
    `,
    featured: true,
    video: "https://www.youtube.com/embed/tLPhh-N0Ux4",
    author: "Aashrita Koyyalamudi & Fran Boyle"
  },
  {
    id: 2,
    title: "Enhancing Communication for Students Who Use AAC (with Allie Cole)",
    category: "Videos",
    time: "13 min watch",
    image: "https://img.youtube.com/vi/iMcQJeosg4Q/0.jpg",
    content: `
      <h2>Enhancing Communication for Students Who Use AAC</h2>
      <p><strong>Credit:</strong> Allie Cole</p>
      <p>Join Allie Cole, a third-year PhD student at Vanderbilt University, for an in-depth video on communication, AAC, and caregiver support. This video covers essential insights into communication rights and tools for supporting individuals with complex communication needs.</p>
      <ul>
        <li>00:05:17 – Background Information & Introduction</li>
        <li>00:37:26 – Communication as a Right</li>
        <li>01:25:00 – What is AAC?</li>
        <li>02:18:17 – Behavior as Communication</li>
        <li>03:40:21 – Debunking AAC Myths</li>
        <li>05:51:25 – Strategies for Caregivers</li>
        <li>12:45:29 – Key Takeaways & Final Advice</li>
      </ul>
      <div class="video-container my-6 rounded-lg overflow-hidden">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/iMcQJeosg4Q" 
          title="Enhancing Communication for Students Who Use AAC"
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
      <h3>Video Summary</h3>
      <ul>
        <li><strong>Communication as a Right:</strong> The Communication Bill of Rights (NJC, 1992) emphasizes communication as a basic human right, guiding assessment, intervention, and advocacy for individuals with severe disabilities.</li>
        <li><strong>Behavior as Communication:</strong> Behaviors may be attempts to communicate needs, wants, or emotions. Teaching AAC use can reduce frustration and enhance communication.</li>
        <li><strong>What Is AAC?</strong> Augmentative and alternative communication includes aided (devices, boards) and unaided (gestures, sign language) methods. AAC does not inhibit speech development; it supports language growth.</li>
        <li><strong>Strategies for Caregivers:</strong> Model AAC use, make it fun, honor all communication, presume competence, and embed AAC in real-world interactions.</li>
        <li><strong>Employment and AAC:</strong> The ICF framework highlights the importance of contextual factors and individualized AAC solutions for employment success.</li>
        <li><strong>Final Thoughts:</strong> Fostering autonomy, honoring all communication, and supporting AAC users with understanding and inclusive practices helps them achieve their full potential.</li>
      </ul>
    `,
    featured: true,
    video: "https://www.youtube.com/embed/iMcQJeosg4Q",
    author: "Aashrita Koyyalamudi & Allie Cole"
  },
  {
    id: 3,
    title: "Assistive Technology & AAC",
    category: "Educational Resources",
    time: "10 min read",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `
  <h2>Understanding Different Communication Styles</h2>
  <p><strong>Credit:</strong> Sushma Rathi</p>
  <p>Augmentative and alternative communication (AAC) includes all forms of communication (other than speech) that are used to express thoughts, needs, wants, and ideas. When we communicate we often use methods to either augment (add to) our message or as an alternative to speaking. Facial expressions, gestures, symbols, pictures, and writing are everyday examples of AAC forms.</p>
  
  <h3>AAC Devices and Interventions</h3>
  <p>The following slideshow was put together by special education teachers from SRVUSD</p>
  <div class="pdf-container my-6 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="/uploads/aac.pdf"  
      width="100%"
      height="600"
      title="PDF Preview: Resource Guide"
      class="w-full h-[600px] border-none"
    ></iframe>
  </div>

  <h3>Low, Mid, High Tech-Assistive Technology</h3>
  <p>The following slideshow was put together by special education teachers from SRVUSD</p>
  <div class="pdf-container my-6 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="/uploads/aac2.pdf"  
      width="100%"
      height="600"
      title="PDF Preview: Resource Guide"
      class="w-full h-[600px] border-none"
    ></iframe>
  </div>
`,

    featured: true
  },

  {
    id: 4,
    title: "Creating an Inclusive Classroom Environment",
    category: "Teacher Guides",
    time: "15 min read",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `
        <h2>Creating an Inclusive Classroom Environment</h2>
        <p>An inclusive classroom welcomes and supports all students, regardless of their abilities or learning styles. Here's how to create one:</p>

        <h3>Physical Arrangement</h3>
        <p>The physical layout of your classroom can significantly impact inclusivity:</p>
        <ul>
          <li>Flexible seating arrangements</li>
          <li>Clear pathways</li>
          <li>Accessible materials</li>
        </ul>

        <div class="video-container my-6 rounded-lg overflow-hidden">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/9XQ9ziUk8bU" 
            title="Creating Inclusive Classrooms"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>
      `,
    featured: false
  },
  {
    id: 5,
    title: "Effective Communication Strategies for Special Needs",
    category: "Educational Resources",
    time: "12 min read",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Effective Communication Strategies for Special Needs</h2>
      <p>Communication is key to understanding and supporting children with special needs. Here are some effective strategies:</p>
      
      <h3>Using Visual Aids</h3>
      <p>Visual aids can help children understand and express themselves more effectively:</p>
      <ul>
          <li>Picture cards</li>
          <li>Visual schedules</li>
          <li>Social stories</li>
      </ul>
      
      <h3>Being Patient and Understanding</h3>
      <p>Patience and understanding are crucial when communicating with children with special needs:</p>
      <ul>
          <li>Allowing extra time for responses</li>
          <li>Repeating and rephrasing as needed</li>
          <li>Validating their feelings</li>
      </ul>`,
    featured: false
  },
  {
    id: 6,
    title: "Assistive Technology Tools and Resources",
    category: "Technology",
    time: "20 min read",
    image: "https://images.unsplash.com/photo-1591267990532-e5bdb1b0ceb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Assistive Technology Tools and Resources</h2>
      <p>Assistive technology can significantly enhance the learning experience for children with special needs. Here are some tools and resources:</p>
      
      <h3>Software and Apps</h3>
      <p>Explore software and apps designed to support various learning needs:</p>
      <ul>
          <li>Text-to-speech software</li>
          <li>Speech-to-text software</li>
          <li>Organization and planning apps</li>
      </ul>
      
      <h3>Hardware</h3>
      <p>Consider hardware solutions that can aid in learning:</p>
      <ul>
          <li>Adaptive keyboards</li>
          <li>Ergonomic mice</li>
          <li>Tablets with accessibility features</li>
      </ul>`,
    featured: true
  },
  {
    id: 7,
    title: "Building Self-Advocacy Skills in Children",
    category: "Student Development",
    time: "15 min read",
    image: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Building Self-Advocacy Skills in Children</h2>
      <p>Self-advocacy is the ability to understand one's own needs and communicate them effectively. Here's how to build these skills in children:</p>
      
      <h3>Understanding Their Needs</h3>
      <p>Help children identify and understand their own needs:</p>
      <ul>
          <li>Encouraging self-reflection</li>
          <li>Providing information about their condition</li>
          <li>Teaching them to recognize their strengths and weaknesses</li>
      </ul>
      
      <h3>Communicating Effectively</h3>
      <p>Teach children how to communicate their needs effectively:</p>
      <ul>
          <li>Role-playing different scenarios</li>
          <li>Practicing assertive communication</li>
          <li>Providing them with the language to express their needs</li>
      </ul>`,
    featured: false
  },
  {
    id: 8,
    title: "Understanding ADHD in the Classroom",
    category: "Educational Resources",
    time: "18 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Understanding ADHD in the Classroom</h2>
      <p>ADHD can present unique challenges in the classroom. Understanding the condition and implementing effective strategies can help students succeed.</p>
      
      <h3>Common Challenges</h3>
      <p>Recognize the common challenges faced by students with ADHD:</p>
      <ul>
          <li>Difficulty focusing</li>
          <li>Impulsivity</li>
          <li>Hyperactivity</li>
      </ul>
      
      <h3>Effective Strategies</h3>
      <p>Implement strategies to support students with ADHD:</p>
      <ul>
          <li>Providing a structured environment</li>
          <li>Breaking tasks into smaller steps</li>
          <li>Using positive reinforcement</li>
      </ul>`,
    featured: true,
    video: "https://www.youtube.com/embed/ouZrZa5pLXk"
  },
  {
    id: 9,
    title: "Social Skills Development for Children with Autism",
    category: "Parent Resources",
    time: "25 min read",
    image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Social Skills Development for Children with Autism</h2>
      <p>Developing social skills is crucial for children with autism. Here are some strategies to help them improve their social interactions:</p>
      
      <h3>Understanding Social Cues</h3>
      <p>Teach children how to recognize and understand social cues:</p>
      <ul>
          <li>Facial expressions</li>
          <li>Body language</li>
          <li>Tone of voice</li>
      </ul>
      
      <h3>Practicing Social Interactions</h3>
      <p>Provide opportunities for children to practice social interactions:</p>
      <ul>
          <li>Role-playing</li>
          <li>Social stories</li>
          <li>Group activities</li>
      </ul>`,
    featured: true,
    video: "https://www.youtube.com/embed/9XQ9ziUk8bU"
  },
  {
    id: 10,
    title: "Dyslexia: Signs, Symptoms and Support Strategies",
    category: "Educational Resources",
    time: "22 min read",
    image: "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<h2>Dyslexia: Signs, Symptoms and Support Strategies</h2>
      <p>Dyslexia is a learning disorder that affects reading and language skills. Understanding the signs and symptoms can help in providing appropriate support.</p>
      
      <h3>Signs and Symptoms</h3>
      <p>Recognize the common signs and symptoms of dyslexia:</p>
      <ul>
          <li>Difficulty reading</li>
          <li>Trouble with spelling</li>
          <li>Challenges with phonological awareness</li>
      </ul>
      
      <h3>Support Strategies</h3>
      <p>Implement strategies to support students with dyslexia:</p>
      <ul>
          <li>Multisensory teaching methods</li>
          <li>Assistive technology</li>
          <li>Individualized education plans</li>
      </ul>`,
    featured: true
  },

  {
    id: 11,
    title: "Assistive Technology & AAC",
    category: "What are Evidence Based Practices",
    time: "20 min read",
    image: "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `<p>Augmentative and alternative communication (AAC) includes all forms of communication (other than speech) that are used to express thoughts, needs, wants, and ideas. When we communicate we often use methods to either augment (add to) our message or as an alternative to speaking. Facial expressions, gestures, symbols, pictures, and writing are everyday examples of AAC forms.</p>`,
    featured: true
  },
];

export const categories = [
  "All Resources",
  "Educational Resources",
  "Teacher Guides",
  "Parent Resources",
  "Technology",
  "Student Development"
];
