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
    time: "10 min read",
    image: "/uploads/fct1.png",
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/fct2.png" alt="Child pushing toy lawn mower" class="w-full md:w-1/2 rounded-lg shadow-md" />
        <div class="md:w-1/2">
          <p><strong>Modeling</strong> is an instructional strategy in which the teacher demonstrates a new concept or approach to learning and students learn by observing.</p>
          <p class="italic mt-2">Haston (2007): "Whenever a teacher demonstrates a concept for a student, that teacher is modeling."</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p>A quick summary of salient features of the practice, including what it is, who it can be used with, what skills it has been used with, and settings for instruction.</p>
      <a href="https://www.advancedautism.com/post/how-to-use-video-modeling-in-autism-therapy" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><strong>Functional communication training (FCT)</strong> emerged from the literature on functional behavioral assessment (FBA) as a systematic practice to replace inappropriate behavior or subtle communicative acts with more appropriate and effective communicative behaviors or skills.</p>
  
      <p>FCT is always implemented after an FBA has been conducted to identify the function of an interfering behavior. When using FCT, teachers/practitioners analyze the interfering behavior to determine what the learner is trying to communicate. For example, is the learner biting peers when she wants a toy that another child has? Or is the learner yelling out in class so that he will be sent out of the room?</p>
  
      <p>After identifying the function of the interfering behavior, FCT is used to teach a replacement behavior that is easy for the learner to use and serves the same purpose as the interfering behavior, but in a more appropriate way.</p>
  
      <a href="https://raisingchildren.net.au/autism/therapies-guide/fct" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <div class="flex flex-col md:flex-row gap-6 items-start">
       
        <div class="md:w-1/2">
          <p><strong>Functional communication training (FCT)</strong> is a differential reinforcement (DR) procedure in which an individual is taught an alternative response that results in the same class of reinforcement identified as maintaining problem behavior.</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p>FCT interventions progress through three stages. A functional analysis is conducted to identify the environmental events that serve as reinforcers for problem behavior and the conditions that evoke problem behavior (e.g., establishing operations that increase the value of the reinforcer; Michael, 1982).</p>
  
      <p>A socially acceptable communicative response is then strengthened by reassigning the reinforcer that used to maintain the problem behavior to that new response. Finally, the FCT treatment is extended across settings and caregivers.</p>
  
      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2846575/" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
    `,
    featured: true
  }
  ,
  {
    id: 7,
    title: "Task Analysis",
    category: "Educational Resources",
    time: "6 min read",
    image: "/uploads/task1.png", 
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/task2.png" alt="Task analysis picture schedule" class="w-full md:w-1/2 rounded-lg shadow-md" />
        <div class="md:w-1/2">
          <p><strong>Task analysis</strong> is the process of breaking a skill into smaller, more manageable steps in order to teach the skill. Other practices, such as reinforcement, video modeling, or time delay, should be used to facilitate learning of the smaller steps.</p>
          <p class="mt-2">As the smaller steps are mastered, the learner becomes more and more independent in their ability to perform the larger skill. (Image from Child Mind Institute)</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p>Task analysis meets the evidence-based practice criteria with five single-subject design studies, demonstrating its effectiveness for promoting appropriate behavior and communication skills for children at the preschool, elementary, and middle school levels.</p>
  
      <a href="https://autisminternetmodules.org/storage/ocali-ims-sites/ocali-ims-aim/documents/TaskAnalysisOverview.pdf" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><em>Each of the following points is important to address so that you can be sure the selected EBP is likely to address the learning needs of your student.</em></p>
  
      <a href="https://afirm-modules.fpg.unc.edu/Task-Analysis/content/#/" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
    `,
    featured: true
  },

  {
    id: 8,
    title: "Response Interruption and Redirection (RIR)",
    category: "Educational Resources",
    time: "6 min read",
    image: "/uploads/rir1.png", 
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img 
  src="/uploads/rir2.png" 
  alt="RIR behavior flowchart" 
  class="w-full md:w-[75%] mx-auto rounded-lg shadow-md"
/>

        <div class="md:w-1/2">
          <p><strong>Response interruption/redirection (RIR)</strong> is an evidence-based practice used to decrease interfering behaviors, predominantly those that are repetitive, stereotypical, and/or self-injurious.</p>
          <p class="mt-2">RIR is often implemented after a functional behavior assessment (FBA) has been conducted to identify the function of the interfering behavior. (Image from the California Autism Professional Training and Information Network)</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p><em>Response interruption/redirection meets evidence-based criteria with five single-subject design studies across the preschool, elementary, and middle/high school age range. It has been shown to be effective in promoting cognitive and behavioral goals.</em></p>
  
      <a href="https://docs.autismspeaks.org/evidence-based-practices/rird" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><em>Response interruption/redirection is an evidence-based practice that is used to decrease behaviors that are disruptive, repetitive, or self-injurious. It is often used to support behaviors that are sensory-based.</em></p>
      <p><em>The strategy involves stopping a student from engaging in the behavior, often using a verbal or physical prompt, and then redirecting them to engage in an alternative appropriate activity that serves a similar function.</em></p>
      <p><em>This has been an important component of interventions addressing more serious behaviors of concern such as self-injury.</em></p>
    `,
    featured: true
  },

  {
    id: 9,
    title: "Reinforcement",
    category: "Educational Resources",
    time: "6 min read",
    image: "/uploads/rein1.png",
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/rein2.png" alt="Types of Reinforcement: Positive and Negative" class="w-full md:w-[75%] mx-auto rounded-lg shadow-md" />
        <div class="md:w-1/2">
          <p><strong>Reinforcement</strong> is a fundamental practice that is almost always used with other evidence-based practices such as prompting, time delay, functional communication training, and differential reinforcement of other behaviors. As a practice, reinforcement is either positive or negative. (Image from Simply Psychology)</p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p>Reinforcement describes a relationship between learner behavior and a consequence that follows the behavior. This relationship is only considered reinforcement if the consequence increases the probability that a behavior will occur in the future, or at least be maintained. For example, children learn to ask for something politely if they want to receive it in return.</p>
      <p>The ultimate goal of reinforcement is to help learners with ASD learn new skills and maintain their use over time in a variety of settings with many different individuals. As such, teachers and other practitioners must identify the appropriate reinforcers that motivate individual learners with ASD.</p>
  
      <a href="https://goldencaretherapy.com/positive-reinforcement-autism/" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p>This evidence-based practice overview on Reinforcement (R+) includes the following components:</p>
  
      <a href="https://afirm-modules.fpg.unc.edu/Reinforcement/content/#/lessons/2VN2s_vsi2NDD2eW5qM16RxaeISKqxN4" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
    `,
    featured: true
  },

  {
    id: 10,
    title: "Prompting Techniques to Support Skill Acquisition in Children with Autism",
    category: "Educational Resources",
    time: "5 min read",
    image: "/uploads/prompt1.png",
    content: `
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <img src="/uploads/prompt2.png" alt="Prompting types and steps" class="w-full md:w-[70%] mx-auto rounded-lg shadow-md" />
        <div class="md:w-1/2">
          <p><strong>Prompts</strong> are generally given by an adult before or as a toddler attempts to use a skill. With prompting procedures, parents, family members, early interventionists, child care providers, or other team members can use different types of prompts systematically to help toddlers with Autism Spectrum Disorder (ASD) acquire target skills. (Image from Kathy Oehler –Autism Consultant and Mary Roth – Lead Ally, Autism Society of Indiana) </p>
        </div>
      </div>
  
      <hr class="my-6" />
  
      <p><em>The Prompting learning module</em> describes how to develop, implement, and monitor the use of two prompting procedures: least-to-most and graduated guidance.</p>
  
      <a href="https://afirm-modules.fpg.unc.edu/Prompting/content/#/lessons/-SpvFlYVfA6ZgATxDciNQi-9JknTkfoi" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Learn More</a>
  
      <hr class="my-6" />
  
      <p><em>In the instructional session</em>, the task direction or cue (signal to use target skill) and controlling prompt (prompt that ensures learner will do the target skill successfully) are delivered simultaneously. In the probe sessions, the cue or task direction is delivered without the prompts to monitor progress.</p>
  
      <a href="https://afirm-modules.fpg.unc.edu/Prompting/content/#/lessons/oI-yP8Lir9-4bITEu2-0c0bRrSviwVgx" target="_blank" rel="noopener noreferrer" class="inline-block mt-3 px-4 py-2 text-white rounded-md bg-[#4393e3] hover:bg-[#3786d2]">Diagram</a>
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
