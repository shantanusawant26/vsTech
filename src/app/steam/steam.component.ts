import { Component } from '@angular/core';


interface Program {
  title: string;
  description: string;
}

interface Level {
  name: string;
  programs: Program[];
}

@Component({
  selector: 'app-steam',
  templateUrl: './steam.component.html',
  styleUrls: ['./steam.component.scss']
})
export class SteamComponent {
  levels: Level[] = [
    {
      name: '1st to 10th Standard',
      programs: [
        {
          title: 'Camps',
          description: 'Engaging and fun-filled summer camps as well as winter camps that introduce young minds to the basics of science, technology, engineering, arts, and mathematics through interactive activities.'
        },
        {
          title: 'Electronics Kits Projects',
          description: 'Hands-on projects using advanced electronics kits to teach the principles of circuits, robotics, and more.'
        },
        {
          title: 'Workshops',
          description: 'Regular workshops focusing on foundational concepts in electronics, programming, and simple project-based learning.'
        }
      ]
    },
    {
      name: 'Diploma Students',
      programs: [
        {
          title: 'Workshops',
          description: 'Regular workshops focusing on foundational concepts in electronics, programming, and simple project-based learning.'
        },
        {
          title: 'Electronics Kits Projects',
          description: 'Hands-on projects using advanced electronics kits to teach the principles of circuits, robotics, and more.'
        },
        {
          title: 'Advanced Microcontroller Projects',
          description: 'In-depth projects utilizing microcontrollers to develop skills in embedded systems, automation, and IoT (Internet of Things).'
        }
      ]
    },
    {
      name: 'Engineering Students',
      programs: [
        {
          title: 'Machine Learning (ML)',
          description: 'Comprehensive workshops and camps focusing on the fundamentals and advanced topics in machine learning, including practical applications and real-world projects.'
        },
        {
          title: 'Cutting-Edge Technologies',
          description: 'Exposure to the latest advancements in technology, including AI, blockchain, data science, and more.'
        }
      ]
    }
  ];

  upcomingTechnologies: string[] = [
    'Artificial Intelligence (AI) and Machine Learning (ML)',
    'Internet of Things (IoT)',
    'Robotics and Automation',
    'Advanced Electronics and Microcontrollers',
    'Data Science and Big Data',
    'Blockchain Technology',
    'Creative Coding and Digital Arts'
  ];

  contactInfo: string = 'Contact Us';
}


