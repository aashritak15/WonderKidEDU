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
    title: "Picture Exchange Communication System (PECS)",
    category: "Educational Resources",
    time: "7 min read",
    image: "/uploads/pecs2.png",
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/pecs1.png" class="rounded-lg shadow-md w-full md:w-[300px]" />
        <div>
          <p><em>The Picture Exchange Communication System (PECS)</em> was developed at the Delaware Autistic Program (DAP) and was designed to teach young children to communicate in a social context (Bondy & Frost, 1994; Frost & Bondy, 2002). Using PECS, learners are taught to give a picture of a desired item to a communicative partner in exchange for the item. There are six phases of PECS instruction, with each phase building on the last.</p>
          <p><strong>The phases are:</strong> (1) Teaching the physically assisted exchange, (2) Expanding spontaneity, (3) Simultaneous discrimination of pictures, (4) Building sentence structure, (5) Responding to “What do you want?”, and (6) Commenting in response to a question.</p>
        </div>
      </div>
  
      <hr class="my-6" />
      
      <p><em>Five studies were found to meet the evidence-based practice criteria and serve as the evidence base for PECS. Two of the studies were randomized, controlled group designs, and three were single subject studies demonstrating control through a variety of research designs including multiple baseline, alternating treatments, changing criterion, and withdrawal.</em></p>
      <a href="https://nationalautismresources.com/the-picture-exchange-communication-system-pecs/" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-[#4393e3] text-white rounded-md  hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><em>This evidence-based practice overview on Picture Exchange Communication System (PECS) includes the following components:</em></p>
      <a href="https://pecsusa.com/pecs/" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-[#4393e3] text-white rounded-md  hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <h3 class="text-lg font-semibold">What is the Picture Exchange Communication System or PECS?</h3>
      <p class="italic text-gray-700 mt-1">Description of the PECS program as defined by Lori Frost and Andrew Bondy</p>
      <p class="mt-2"><em>The Picture Exchange Communication System or PECS approach is a modified applied behavior analysis program designed for early nonverbal symbolic communication training. It is not a program designed to teach speech, although the latter is encouraged indirectly and some children begin to spontaneously use speech while enrolled in the PECS program.</em></p>
      <a href="https://www.yellowbusaba.com/post/picture-exchange-communication-system" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-[#4393e3] text-white rounded-md  hover:bg-[#3786d2]">Learn More</a>
    `,
    featured: true
  },

  {
    id: 5,
    title: "Naturalistic Intervention Strategies",
    category: "Educational Resources",
    time: "6 min read",
    image: "/uploads/natural1.png",
    content: `
        <div class="flex flex-col md:flex-row gap-6 items-start">
    <div class="w-full md:w-2/3">
      <img src="/uploads/natural2.png" alt="Naturalistic Intervention table example" class="w-full rounded-lg shadow-md" />
      <p class="text-sm text-gray-500 italic mt-2">Source: ASD Toddler Initiative</p>
    </div>
    <div class="md:w-1/3">
      <p><em>Naturalistic intervention</em> is a collection of practices including environmental arrangement, interaction techniques, and strategies based on applied behavior analysis principles. These practices are designed to encourage specific target behaviors based on learners’ interests.</p>
    </div>
  </div>

  <hr class="my-6" />

  <p><em>Naturalistic intervention meets the evidence-base criteria with eight single-subject and two randomized group design studies, demonstrating its effectiveness for promoting communication and social skills for learners at the preschool, elementary school, and middle/high school levels.</em></p>
  <a href="https://asdtoddler.fpg.unc.edu/book/export/html/252.html" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 bg-[#4393e3] text-white rounded-md hover:bg-[#3786d2]">Learn More</a>

  <hr class="my-6" />

  <p><em>Naturalistic Intervention involves a sequence of strategies designed to identify the contexts for intervention, provide training to the early intervention team members including providers and parents, arrange the environment to elicit the target behavior, and then elicit the target behavior to engage the toddler with Autism Spectrum Disorder (ASD) in communication and social interactions. This learning module describes a process for engaging toddlers with ASD in social and communication interactions.</em></p>
    `,
    featured: true
  },

  {
    id: 6,
    title: "Modeling and Functional Communication Training",
    category: "Educational Resources",
    time: "7 min read",
    image: "/uploads/modeling-fct.png", 
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/modeling-fct.png" alt="Child pushing toy lawn mower" class="w-full md:w-1/2 rounded-lg shadow-md" />
        <div class="md:w-1/2">
          <p><em><strong>Modeling</strong> is an instructional strategy in which the teacher demonstrates a new concept or approach to learning and students learn by observing.</em> <br />Haston (2007) states: "Whenever a teacher demonstrates a concept for a student, that teacher is modeling."</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p><em>A quick summary of salient features of the practice, including what it is, who it can be used with, what skills it has been used with, and settings for instruction.</em></p>
      <a href="https://www.advancedautism.com/post/how-to-use-video-modeling-in-autism-therapy" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><em><strong>Functional communication training (FCT)</strong> emerged from the literature on functional behavioral assessment (FBA) as a systematic practice to replace inappropriate behavior or subtle communicative acts with more appropriate and effective communicative behaviors or skills.</em></p>
      <p><em>FCT is always implemented after an FBA has been conducted to identify the function of an interfering behavior. When using FCT, teachers/practitioners analyze the interfering behavior to determine what the learner is trying to communicate. For example, is the learner biting peers when she wants a toy that another child has? Or is the learner yelling out in class so that he will be sent out of the room?</em></p>
      <p><em>After teachers/practitioners have identified the function of the interfering behavior, they then implement FCT to identify and teach a replacement behavior that is easy for the learner to use and serves the same purpose as the interfering behavior, but in a more appropriate way.</em></p>
      <a href="https://raisingchildren.net.au/autism/therapies-guide/fct" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
    `,
    featured: true
  }
  
  
  
  
];

export const categories = [
  "All Resources",
  "Educational Resources",
  "Teacher Guides",
  "Parent Resources",
  "Technology",
  "Student Development"
];
