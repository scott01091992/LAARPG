import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

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

    quests: any = [{
        title: "Partners For Life",
        prologue: "It was at Everest Tea and Coffee that Brandon had first been introduced to Kali. Brandon's friend Evan had just got him a job at Honeywell, and this was the closest cafe to the building. There was an attraction, and there was intrigue, but Brandon was an introvert and wasn't looking to get to know someone new... especially someone who made him so nervous just by looking at him. Kali was her name. He wouldn't remember that for another year. He really did have no idea who the girl on the other side of the counter would one day become. ",
        summary: "Brandon met Kali for the first time in August 2019. He decided to change his life plan and live a life with her as his partner. That was only the beginning of their adventure...",
        borderColor: "#EB9486",
        cards: [
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Move in with Kali",
                    primary: true,
                    description: "After talking to Kali about moving in together, its definitely part of the plan. ",
                    status: 'incomplete', //when status is changed to complete, have an input field to input the date as a moment
                    award: "Sharing a Roof",
                    icon: "moving.svg"
                }
            },
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Marry Kali",
                    primary: true,
                    description: "Being married is important to Kali. Make it happen, and do it right.",
                    status: 'incomplete',
                    award: "Wedding Bells",
                    icon: "married.svg"
                }
            },
            {
                type: "objective",
                completionDate: moment("09-14-2019", "MM-DD-YYYY"), //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Become Kali's Boyfriend",
                    primary: true,
                    description: "After discovering love, the first step is to not let it go.",
                    status: 'complete',
                    award: "It's Official",
                    icon: "couple.svg"
                }
            },
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Help Kali with her Resume",
                    primary: false,
                    description: "Kali has been sending out an old version of her Resume. Write her a new one and help her start a fulfilling career.",
                    status: 'incomplete',
                    award: "Resume Writer",
                    icon: "resume.svg"
                }
            },
            {
                type: "objective",
                completionDate:moment("09-10-2019", "MM-DD-YYYY"), //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Hold Kalis hand for the first time",
                    primary: false,
                    description: "She is not single, but you've wanted to hold her hand for so long... Its time to make a move.",
                    status: 'complete',
                    award: "First Contact",
                    icon: "hold-hands.svg"
                }
            },
            {
                type: "event",
                completionDate:moment("08-30-2019", "MM-DD-YYYY"),
                card: {
                    title: "Pax with Kali",
                    description: "Brandon was offered to come along for a weekend at Pax by Kali. Extremely excited to meet another gamer such as himself, he dove into this new relationship head first.",
                    location: "Convention Center in Seattle",
                    flavorImage: "pax2019.png"
                }
            },
            {
                type: "event",
                completionDate:moment("10-07-2019", "MM-DD-YYYY"),
                card: {
                    title: "Seven Lions & Glitch Mob",
                    description: "After Brandon and Kali discovered the artist Seven Lions and gained an emotional bond to each other through the music, they decided to attend a local show featuring them.",
                    location: "The Gorge, Washington",
                    flavorImage: "seven-lions.jpg"
                }
            },
            {
                type: "event",
                completionDate:moment("10-30-2019", "MM-DD-YYYY"),
                card: {
                    title: "Getting Fired",
                    description: "After his supervisor got a crush on Kali, Brandon was put on 'thin ice', and eventually fired for 'unapproved break time', which was a questionable offense at best. Luckily, getting let go in such a manner allowed him to receive a 7500 dollar travel package.",
                    location: "Honeywell Aerospace",
                    flavorImage: "honeywell-vector-logo.png"
                }
            },
            {
                type: "event",
                completionDate:moment("09-14-2019", "MM-DD-YYYY"),
                card: {
                    title: "Unofficially Officially Together",
                    description: "Unsure if Kali was serious or not about wanting to be with Brandon, they met up for the first time since they started expressing interest in one another. It was only a short while before it was clear that they were meant to be together. And thus, an anniversary date was set, unofficially of course.",
                    location: "Brandon's house in Kent",
                    flavorImage: "together.png"
                }
            },
            {
                type: "moment",
                completionDate:moment("11-14-2019", "MM-DD-YYYY"),
                card: {
                    title: "A Proper Date",
                    description: "Kali took Brandon out for all you can eat Steak at a Brazillian Steakhouse in order to celebrate their 2nd Month Anniversary. After they were done eating, it turned out Kali's card was not activated yet, so Brandon paid for it instead. They were both too full to follow up with a movie and took the party back home to crash for the night.",
                    photo: "2ndAnniversaryDinner.jpg",
                    location: "Brazillian Steakhouse"
                }
            },
            {
                type: "moment",
                completionDate:moment("11-28-2019", "MM-DD-YYYY"),
                card: {
                    title: "The First Thanksgiving",
                    description: "It was a challenging night full of cooking, cleaning and last minute problem solving, but Kali and Brandon pulled through. So much food on the table for dinner, it was definitely a successful mission.",
                    photo: "firstThanksgiving.jpg",
                    location: "Kali's Apartment in Fircrest, WA"
                }
            }
        ]
    },
    {
        title: "Earning a Living",
        prologue: "With his interests being computer software and solving challenging problems, Brandon has always gravitated towards opportunities in the information technology and troubleshooting.",
        summary: "Career history and education aside, the goal remains the same as its been for many years now. Become a software developer.",
        borderColor: "#0C6291",
        cards: [
            {
                type: "objective",
                completionDate: moment("09-14-2019", "MM-DD-YYYY"), //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Move to Kansas with Honeywell",
                    primary: true,
                    description: "The Honeywell site is being relocated in Olathe Kansas. Start a life there and go to school during the 2 year commitment upon moving.",
                    status: 'failed',
                    award: "Put me in Coach",
                    icon: "move.svg"
                }
            },
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Obtain a job that will lead into a software development career",
                    primary: true,
                    description: "Send out applications and try to achieve something great. Bonus points for keeping it in the software space, but hardware is good too.",
                    status: 'incomplete',
                    award: "A New Career",
                    icon: "promotion.svg"
                }
            },
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Find a source of secondary income",
                    primary: false,
                    description: "Search for odd jobs, or contractor opportunities in the coding or troubleshooting space.",
                    status: 'incomplete',
                    award: "Jack of All Trades",
                    icon: "income.svg"
                }
            },
            {
                type: "objective",
                completionDate: null, //if there is no date data, it has not been added to the timeline yet, and is pending completion
                card: {
                    objective: "Make a career plan and education plan",
                    primary: false,
                    description: "Do research and write out a full career plan to follow and review over time",
                    status: 'incomplete',
                    award: "Written in Stone",
                    icon: "stone.svg"
                }
            },
            {
                type: "event",
                completionDate:moment("11-02-2019", "MM-DD-YYYY"),
                card: {
                    title: "Back in Gear",
                    description: "After his supervisor got a crush on Kali, Brandon was put on 'thin ice', and eventually fired for 'unapproved break time', which was a questionable offense at best. Luckily, getting let go in such a manner allowed him to receive a 7500 dollar travel package.",
                    location: "Honeywell Aerospace",
                    flavorImage: "honeywell-vector-logo.png"
                }
            },
            {
                type: "event",
                completionDate:moment("11-15-2019", "MM-DD-YYYY"),
                card: {
                    title: "Buying a Car",
                    description: "After browsing the web for a vehicle for a few days, Brandon decided it was time to go from explore to exploit and pull the trigger on a car",
                    location: "Sunset Auto Sales, Tacoma WA",
                    flavorImage: "toyota-camry-2011.jpg"                }
            }
        ]
    }];

  constructor() {

      let now = moment();
      console.log(now.format())

  }

  ngOnInit() {

  }

}
