export interface Resource {
  id: number;
  title: string;
  category: string;
  time: string;
  image: string;
  content: string;
  featured: boolean;
  video?: string;
}

export const allResources: Resource[] = [
  {
    id: 1,
    title: "Understanding Different Learning Styles",
    category: "Educational Resources",
    time: "10 min read",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    content: `
        <h2>Understanding Different Learning Styles</h2>
        <p>Every child learns differently, and understanding these diverse learning styles is crucial for effective education. In this article, we'll explore the main types of learning styles and how to support each one.</p>
        
        <h3>Visual Learners</h3>
        <p>Visual learners process information best through images, diagrams, and written content. They benefit from:</p>
        <ul>
          <li>Charts and graphs</li>
          <li>Color-coding</li>
          <li>Written instructions</li>
        </ul>

        <div class="video-container my-6 rounded-lg overflow-hidden">
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/ouZrZa5pLXk" 
            title="Understanding Visual Learning"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          ></iframe>
        </div>

        <h3>Auditory Learners</h3>
        <p>Auditory learners thrive through listening and verbal communication. They excel with:</p>
        <ul>
          <li>Verbal instructions</li>
          <li>Group discussions</li>
          <li>Audio materials</li>
        </ul>
      `,
    featured: true
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
];

export const categories = [
  "All Resources",
  "Educational Resources",
  "Teacher Guides",
  "Parent Resources",
  "Technology",
  "Student Development"
];
