export type BlogSection = {
  id: string
  title: string
  paragraphs: string[]
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "interning-at-an-engineering-firm",
    title: "Interning at an Engineering Firm",
    date: "Draft",
    excerpt:
      "A summer of HVAC design, office collaboration, and building software that streamlined real engineering workflows.",
    sections: [
      {
        id: "office-firsts",
        title: "office firsts",
        paragraphs: [
          "This past summer, I had the opportunity to intern at Jain Consultants, an engineering consulting firm where I worked on a combination of mechanical and software engineering projects. It was my first in-person office job, which made the experience even more meaningful. Most of my intern journey post-COVID had been online remote work, so this was my first chance to work in a professional office setting. Getting to experience a real work environment, interact with engineers face-to-face, collaborate on designs in real time, and observe the day-to-day dynamics of a consulting firm was invaluable. I came to appreciate not only the technical challenges of engineering, but also the importance of communication, teamwork, and the small details of office culture that cannot be replicated through remote experiences.",
        ],
      },
      {
        id: "hvac-design",
        title: "hvac design",
        paragraphs: [
          "On the mechanical engineering side, much of my work revolved around HVAC design for high-rise buildings. I spent a significant portion of my time working with HAP 4.9, creating spaces and systems, and using ASHRAE tables to source reference data so my calculations were accurate. A lot of the work came down to precision, consistency, and double or even triple checking my work, particularly when I was calculating and measuring exterior surfaces such as glass and walls for buildings in AutoCAD. These measurements formed the backbone of my heat load calculations, which then informed my decisions about system sizing and energy demands.",
        ],
      },
      {
        id: "ducts-and-airflow",
        title: "ducts and airflow",
        paragraphs: [
          "From there, I moved on to duct design, which I carried out using AutoCAD and DuctSizer. By calculating CFM requirements, I was able to design duct layouts and flex ducts that aligned with the needs of the heat pumps and the overall building. This process taught me just how interconnected mechanical design decisions are, since even small missteps in airflow calculations could have large consequences for the overall system's performance.",
        ],
      },
      {
        id: "fan-unit-layouts",
        title: "fan unit layouts",
        paragraphs: [
          "I was also tasked with designing layouts for fan units. This involved determining the exact kilowatt requirements for different spaces and calculating how many units would be necessary for efficient operation while also adhering to a specific budget. Once I had those numbers, I could select the appropriate heat pumps to meet the building's demand. I also had the chance to design supply duct systems for the ground floor model, which gave me an opportunity to apply theoretical knowledge to a practical, detailed project. These tasks were not only technically demanding, but also helped me understand how detailed and meticulous building services design must be in order to meet both efficiency standards and regulatory requirements. By the end, I had a fully formed mechanical design that could handle all types of air circulating through a large high-rise building.",
        ],
      },
      {
        id: "software-at-the-firm",
        title: "software at the firm",
        paragraphs: [
          "In addition to the mechanical engineering work, I also had the chance to contribute on the software side. One of the more impactful projects I worked on was building a file editing tool designed to streamline workflows for the firm's engineers. This tool allowed multiple engineering principals to merge and clean large-scale specification documents in a fraction of the time it would have taken manually. By automating what used to be a repetitive and error-prone process, the tool helped save hours of work each week and reduced the likelihood of mistakes slipping through into final project documentation. Seeing something I developed get used across the firm was one of the highlights of my internship, as it showed me that software solutions can have just as much impact in engineering as physical design work.",
        ],
      },
      {
        id: "what-i-took-away",
        title: "what i took away",
        paragraphs: [
          "Looking back, interning at Jain Consultants was a rewarding and eye-opening experience. Not only did I gain hands-on exposure to HVAC system design and develop skills in industry-standard tools like HAP, AutoCAD, and DuctSizer, but I also learned what it feels like to be part of a professional office environment after years of remote learning. Getting to walk into the office, sit alongside experienced engineers, ask questions in person, and see how teams collaborate gave me perspective I could never have gotten from a textbook or a Zoom call. More importantly, I came away with a stronger sense of how engineering projects require collaboration, precision, and adaptability. This experience further intensified my passion for the industry, and I am excited to carry forward the skills and lessons I gained this summer into future academic and professional opportunities.",
        ],
      },
    ],
  },
  {
    slug: "what-university-doesnt-teach-you",
    title: "What University Doesn't Teach You About Real World Development",
    date: "Draft",
    excerpt:
      "The gap between school projects and production software is bigger, messier, and more human than I expected.",
    sections: [
      {
        id: "the-cliff-dive",
        title: "the cliff dive",
        paragraphs: [
          "When I first started my Computer Science degree, I thought I was learning everything I needed to know to be a software developer. From using algorithms to designing databases, I was getting ready for the big leagues... right?",
          "Fast forward to my third year of school, balancing classes while battling thousands of people for a single internship, and I have learned that the leap from school projects to production systems is not a hop. It is a cliff dive. University teaches you the theory. The real world teaches you survival.",
          "Here is what I wish someone had told me earlier.",
        ],
      },
      {
        id: "politics-over-logic",
        title: "politics > logic",
        paragraphs: [
          "When you are starting out, development is simple: make the best solution for the problem at hand. You are free to do what you want and how you want it. In a company, nothing could be further from the truth. The best technical solution can lose if it does not fit a deadline, a budget, or if a stakeholder does not see the vision. You have to develop skills of persuasion, compromise, and timing.",
        ],
      },
      {
        id: "code-as-experience",
        title: "code as an experience",
        paragraphs: [
          "At school, as long as your program spits out the correct output, you get the grade. In real life, passing test cases is usually the easiest part. What you create needs to be intuitive and designed from the user's perspective. Functionality without usability is nothing more than a demo, not a product. Going in with an intuitive mindset instead of trying to make everything as minimalist or modern as possible will save you in the long run.",
        ],
      },
      {
        id: "debugging-archaeology",
        title: "debugging is archaeology",
        paragraphs: [
          "University project bugs are fresh. They were born yesterday in the code you wrote. Real-world bugs are fossils, sometimes forcing you to dig so deep you forget what project you started in. Learning to follow data through layers and across different platforms and services will be your liferaft, and logs will become your best friend. This is difficult to pick up in university, though not impossible, mostly because the scope of the projects developed there is ant-sized compared to company production code.",
        ],
      },
      {
        id: "compiled-is-not-finished",
        title: "compiled is not finished",
        paragraphs: [
          "In school, we hit compile on our projects, and if it runs successfully, we quickly breathe a sigh of relief and submit it so we never have to think about it again. For production-level development, it runs on my machine is a big red flag. You have to test your code across different environments, browsers, and devices because it is very possible that your code will break something somewhere. Learn to write unit tests and integration tests early so you can focus on testing different scopes of your code efficiently instead of taking a million years.",
        ],
      },
      {
        id: "embrace-the-chaos",
        title: "embrace the chaos",
        paragraphs: [
          "The truth is the real world is not a neatly packaged semester project. It is deadlines that shift overnight, APIs that break without warning, and codebases with more history than your university. University is a great launching point, but do not fool yourself with a sense of comfort that it is all you need.",
          "It might seem like an impossible jump, but the sooner you get exposed to the chaos, the easier it seems. Do not wait until graduation to experience the messy side of development. Intern, volunteer, contribute to open source, or join a hackathon. The sooner you do, the faster you will start thriving. Everyone starts somewhere.",
        ],
      },
    ],
  },
  {
    slug: "my-first-hackathon",
    title: "My First Hackathon",
    date: "Draft",
    excerpt:
      "How UofTHacks introduced me to the pace, pressure, and community of building ambitious real-time systems.",
    sections: [
      {
        id: "first-impressions",
        title: "first impressions",
        paragraphs: [
          "Walking into UofTHacks for the first time felt overwhelming in the best way possible. The energy in the room was unreal: hundreds of students, laptops open, whiteboards covered in ideas, and conversations about APIs, models, and product pitches happening everywhere. What surprised me most was not just the scale, but how open everyone was. Within the first hour, I had already met students from different universities, backgrounds, and skill levels, all excited to build something ambitious. It did not feel competitive in a negative way. It felt collaborative.",
        ],
      },
      {
        id: "the-community",
        title: "the community",
        paragraphs: [
          "Of course, hackathons are not just about coding. There was great food flowing throughout the weekend, and honestly, those meal breaks became some of the best networking moments. Sitting with people you just met, talking about projects, internships, or random tech debates at midnight made the experience feel bigger than just one build. It felt like joining a community.",
        ],
      },
      {
        id: "sleep-optional",
        title: "sleep optional",
        paragraphs: [
          "That said, sleep was optional. At some point in the night, exhaustion hit. Finding a proper place to sleep was harder than expected. Every couch and quiet corner was taken. Eventually, I gave up and tried to get some rest on a chair. It was not comfortable, and I do not think I slept more than an hour or two, but weirdly, it felt like part of the authentic hackathon experience. Waking up slightly disoriented, grabbing coffee, and jumping straight back into debugging real-time event flows was chaotic, but memorable.",
        ],
      },
      {
        id: "building-amplify",
        title: "building amplify",
        paragraphs: [
          "Our project, Amplify, came out of that environment. We wanted to build an AI-powered behavioral intelligence layer for e-commerce storefronts. Instead of treating every visitor the same, Amplify profiled behavioral traits in real time and adapted the storefront dynamically based on inferred intent. Using Next.js, React, and a TypeScript event bus, we processed live shopper interactions in roughly 200 milliseconds. We built inference logic that triggered UI changes once confidence thresholds were reached, and we prioritized explainability by visualizing behavioral insights so users could see why the interface was adapting.",
        ],
      },
      {
        id: "scope-under-pressure",
        title: "scope under pressure",
        paragraphs: [
          "The hardest part was not writing the code. It was managing scope under pressure. At 2 or 3 a.m., debugging real-time event pipelines while running on almost no sleep forces you to think clearly and architect efficiently. We had to modularize quickly, define clean data flows, and ensure that our system was not just impressive, but defensible.",
        ],
      },
      {
        id: "why-it-stuck",
        title: "why it stuck",
        paragraphs: [
          "By the end of the weekend, I walked away with more than just a project. I met talented, driven people I am still connected with. I experienced the grind of building under pressure. And I realized I wanted to keep doing this: building intelligent, real-time systems that combine machine learning with thoughtful design. UofTHacks was not just my first hackathon. It was the moment I understood how much I enjoy pushing myself outside my comfort zone.",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
