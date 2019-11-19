import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-log',
  templateUrl: './quest-log.component.pug',
  styleUrls: ['./quest-log.component.sass']
})

export class QuestLogComponent implements OnInit {

    getBorderColor = (color) => {
        console.log(color);
        var str = "solid 1em 1em 1em 1em " + color;
        return str;
    }

    quests = [{
        createdAt: "Jan 7th 2019",
        title: "Partners For Life",
        expirationDate: null,
        borderColor: "#e84855",
        summary: "Brandon met Kali for the first time in August 2019. He decided to change his life plan and live a life with her as his partner. That was only the beginning of their adventure...",
        objective: "Live out our lives as the best partners ever. Using teamwork, reason, logic and cooperation to make everything better for each other all the time.",
        awards: [{
            name: "Its Official",
            description: "Reach officially dating status with Kali",
            completed: true,
            dateCompleted: null,
            icon: "Image"
        },{
            name: "Its Legal",
            description: "Married Kali, wedding dress and all",
            completed: false,
            dateCompleted: null,
            icon: "Image"
        },{
            name: "Sharing a Roof",
            description: "Move in with Kali, living under the same roof together",
            completed: false,
            dateCompleted: null,
            icon: "Image"
        },{
            name: "Meeting the Kids",
            description: "Spend a day with Ari and Ava for the first time",
            completed: true,
            dateCompleted: null,
            icon: "Image"
        }],
        events: [
            {
                title: "Pax with Kali",
                description: "Brandon was offered to come along for a weekend at Pax by Kali. Extremely excited to meet another gamer such as himself, he dove into this new relationship head first.",
                location: "Convention Center in Seattle",
                participants: [{
                    name: "Kali",
                    type: "Favorite Person",
                    personality: "Outgoing, Energetic, Scatterbrained, Cute, Optimistic, Logical, Reasonable, Fair, Kind, Smart, Self-Sufficent",
                    met: "July 29th 2019",
                    events: {
                        name: "Pax with Kali",
                        date: "August 30th 2019"
                    }
                },{
                    name: "Jason"
                },{
                    name: "Rich"
                }],
                flavorImage: "pax2019.png",
                dateTime: "August 30th 2019",
                choices: [{
                    option: "Go to Pax with Kali as a friend on Monday",
                    selected: false,
                    icon: "image"
                },
                {
                    option: "Avoid going out in public and spending money, and just play video games",
                    selected: false,
                    icon: "image"
                },
                {
                    option: "Go to Pax with Kali as her date by sneakily getting 2 tickets for Saturday",
                    selected: true,
                    icon: "image"
                }]
            },
            {
                title: "Seven Lions at The Gorge",
                description: "After Brandon and Kali discovered the artist Seven Lions and gained an emotional bond to each other through the music, they decided to attend a local show featuring them.",
                participants: [{
                    name: "Kali",
                    type: "Favorite Person",
                    personality: "Outgoing, Energetic, Scatterbrained, Cute, Optimistic, Logical, Reasonable, Fair, Kind, Smart, Self-Sufficent",
                    met: "July 29th 2019",
                    events: {
                        name: "Pax with Kali",
                        date: "August 30th 2019"
                    }
                }]
                ,
                flavorImage: "seven-lions.jpg",
                dateTime: "Oct 7th 2019",
                choices: [{
                    option: "Find a Hotel and take a 1 hour Uber ride to get there and back",
                    selected: false,
                    icon: "image"
                },
                {
                    option: "Sleep in the car at night.",
                    selected: false,
                    icon: "image"
                },
                {
                    option: "Stay for 3 days and camp out in premier campgrounds",
                    selected: true,
                    icon: "image"
                }]
            },
            {
                title: "Getting Fired from Honeywell",
                description: "After his supervisor got a crush on Kali, Brandon was put on 'thin ice', and eventually fired for 'unapproved break time', which was a questionable offense at best. Luckily, getting let go in such a manner allowed him to receive a 7500 dollar travel package.",
                participants: [{
                    name: "Kali",
                    type: "Favorite Person",
                    personality: "Outgoing, Energetic, Scatterbrained, Cute, Optimistic, Logical, Reasonable, Fair, Kind, Smart, Self-Sufficent",
                    met: "July 29th 2019",
                    events: {
                        name: "Pax with Kali",
                        date: "August 30th 2019"
                    }
                }, {
                    name: "Luke"
                },{
                    name: "Tim"
                }]
                ,
                flavorImage: "honeywell-vector-logo.png",
                dateTime: "Oct 30th 2019",
                choices: null
            },
            {
                title: "Unofficially Officially Together",
                description: "Unsure if Kali was serious or not about wanting to be with Brandon, they met up for the first time since they started expressing interest in one another. It was only a short while before it was clear that they were meant to be together. And thus, an anniversary date was set, unofficially of course.",
                location: "Brandon's house in Kent",
                participants: [{
                    name: "Kali",
                    type: "Favorite Person",
                    personality: "Outgoing, Energetic, Scatterbrained, Cute, Optimistic, Logical, Reasonable, Fair, Kind, Smart, Self-Sufficent",
                    met: "July 29th 2019",
                    events: {
                        name: "Pax with Kali",
                        date: "August 30th 2019"
                    }
                }],
                flavorImage: "together.png",
                dateTime: "September 14th 2019",
                choices: null
            }
        ]
    },{
        createdAt: "October 30th 2019",
        title: "Earning a Living",
        expirationDate: null,
        borderColor: "#9bc53d",
        summary: "After losing his job at Honeywell, it was time to start the unemployment train once again. Unfortunately, there would be many other hurdles to overcome along the way.",
        objective: "Get a new job in the tech industry that can grow into a career.",
        events: [
            {
                title: "Back in Gear",
                description: "Brandon started looking for jobs and found that there were a few more pressing matters to attend to first. Relearning the new web development technologies and getting a mode of transportation.",
                location: "N/a",
                participants: null,
                flavorImage: "getting-organized.jpg",
                dateTime: "November 2nd 2019",
                choices: null
            },
            {
                title: "Buying a Car",
                description: "After browsing the web for a vehicle for a few days, Brandon decided it was time to go from explore to exploit and pull the trigger on a car",
                participants: [{
                    name: "Kali",
                    type: "Favorite Person",
                    personality: "Outgoing, Energetic, Scatterbrained, Cute, Optimistic, Logical, Reasonable, Fair, Kind, Smart, Self-Sufficent",
                    met: "July 29th 2019",
                    events: {
                        name: "Pax with Kali",
                        date: "August 30th 2019"
                    }
                },{
                    name: "Ari"
                },{
                    name: "Ava"
                }]
                ,
                flavorImage: "toyota-camry-2011.jpg",
                dateTime: "November 15th 2019",
                choices: [{
                    option: "Buy a car for less than 4000 from a private seller",
                    selected: false,
                    icon: "image"
                },
                {
                    option: "Buy the newest model car for under 5k possible.",
                    selected: true,
                    icon: "image"
                },
                {
                    option: "Wait for the perfect deal",
                    selected: false,
                    icon: "image"
                }]
            }
        ]
    }];

  constructor() { }

  ngOnInit() {

  }

}
