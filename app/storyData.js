
const storyData = [
  {
    "id": 1,
    "name": "Small-time Marijuana bust",
    "location": "Louisiana",
    "charge": {
      "description": "Possession of 2.8 grams of marijuana.",
      "overview": "A 49-year-old man was stopped by police and found with a small amount of marijuana. He was convicted of simple possession in 2011.",
      "priors": "Two prior convictions for possession of small amounts of marijuana and cocaine. No arrest history for violent crimes.",
      "prompt": "What do you think is the appropriate sentence?",
      "min": 5,
      "max": 60,
      "step": 5,
    },
    "sentence": {
      "time": "13.3 years",
      "shortTime": "13.3",
      "story": "In New Orleans, a father of seven and local restaurateur was stopped by police over by police while riding his bicycle in 2011. The officers searched the man and found 2.8 grams of marijuana, the equivalent of two joints.",
      "reasoning": "Because the man had prior non-violent drug offenses -- for small amounts of marijuana -- a New Orleans jury convicted him under a Louisiana state law that doles out harsher punishments for “habitual offenders.” In fact, the sentencing range for the third offense of possession of marijuana is up to 20 years in prison. Currently, the man does not face the possibility of parole."
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "1",
          "visualNumber": "#1",
          "copy": "Louisiana is the world's prison capital. Louisiana's incarceration rate is nearly five times Iran's, 13 times China's and 20 times Germany's."
        },
        {
          "id": 2,
          "number": "700",
          "visuaNumber": "700%",           
          "copy": "The national state prison population has grown seven-fold since 1970."
        },
        {
          "id": 3,
          "number": "300",
          "visuaNumber": "300%",           
          "copy": "State spending on corrections has grown 300 percent in the last 20 years."
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "One crack deal.",
    "location": "Texas",
    "charge": {
      "description": "Facilitating one crack cocaine transaction in 1999.",
      "overview": "A 32-year-old single mother with no previous convictions was found guilty of one count of conspiracy to distribute crack cocaine, and acquitted of six counts of possession of crack cocaine and aiding and abetting",
      "priors": "",
      "prompt": "",
      "min": 0,
      "specialMin": "",
      "max": 100,
      "specialMax": "",
      "step": 1,
    },
    "sentence": {
      "time": "Life without the possibility of parole.",
      "shortTime": "Life",
      "story": "The young woman in question grew up in poverty in the small rural town of Terrell, Texas.  Her mother was paraplegic, and from a young age the woman was forced to take care of her siblings.  In this case, prosecutors claimed the young woman served as a drug courier for a drug supplier in Houston.",
      "reasoning": "In 1999, the woman was arrested as part of a drug task force operation, where all 105 people who were arrested were black.  During trial, no physical evidence was ever presented by investigators. However, because of Texas sentencing laws, the judge increased the punishment because the amount of theoretical crack cocaine (30 kg) being trafficked. The woman is not eligible for sentence reductions."
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "50",
          "visuaNumber": "5%",           
          "copy": "As of 2014, half of all federal inmates are incarcerated on drug-related convictions."
        },
        {
          "id": 2,
          "number": "16",
          "visuaNumber": "1",           
          "copy": "In 1970, just 16 percent of federal inmates were locked up on drug-related convictions."
        },
        {
          "id": 3,
          "number": "31,286",
          "visuaNumber": "$31,286",           
          "copy": "On average, it costs $31,286 to keep one person in prison for one year."
        }
      ]
    }
  },
  {
    "id": 3,
    "name": "LSD posession",
    "location": "Florida",
    "charge": {
      "description": "Conspiracy and possession with intent to distribute LSD.",
      "overview": "A 24-year-old Vegan “Deadhead” is charged with selling LSD Grateful Dead concert.",
      "priors": "Two prior convictions for the possession of small amounts of marijuana and LSD. No arrest history for violent crimes.",
      "prompt": "",
      "min": 0,
      "specialMin": "",
      "max": 100,
      "specialMax": "",
      "step": 1,
    },
    "sentence": {
      "time": "Life without the possibility of parole.",
      "shortTime": "Life",
      "story": "In 1992, a young man touring traveling with the Grateful Dead on a musical tour sold LSD to a friend who had become a confidential informant for police officers. Over the course of 60 days, the man dealt LSD in five transactions, including through the U.S. postal service.",
      "reasoning": "In this case, the judge included the weight of the paper that carried the LSD when factoring the man’s sentence. That brought the total weight of the LSD above 10 grams, triggering a mandatory minimum sentence of life in prison for “third-strike” offenders. Like many other states, Florida has a “habitual offender” law which allows for life without parole sentences, even for nonviolent crimes. The man has now served over 23 years in prison, with much of that time in solitary confinement."
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "1",
          "visuaNumber": "1 in 100",           
          "copy": "One in every 100 Americans is in prison or jail."
        },
        {
          "id": 2,
          "number": "4",
          "visuaNumber": "4 out of 5",           
          "copy": "About 79 percent of the 3,278 prisoners serving life without parole were sentenced to die in prison for nonviolent drug crimes."
        },
        {
          "id": 3,
          "number": "36",
          "visuaNumber": "36x",           
          "copy": "Youth housed in adult jails are 36 times as likely to commit suicide than are youth housed in juvenile detention facilities."
        }
      ]
    }
  },
  {
    "id": 4,
    "name": "Growing marijuana",
    "location": "Alabama",
    "charge": {
      "description": "Growing about three dozen marijuana plants.",
      "overview": "A 75-year-old disabled veteran is convicted with growing three dozen marijuana plants behind his son’s home in Dothan, Alabama. He says he intended to use the plants to alleviate chronic pain, which prosecutors did not dispute.",
      "priors": "Three prior convictions a string of robberies committed two decades ago, for which the man served 10 years in prison.",
      "prompt": "",
      "min": 0,
      "specialMin": "",
      "max": 100,
      "specialMax": "",
      "step": 1,
    },
    "sentence": {
      "time": "",
      "shortTime": "",
      "story": "In this case, an elderly man was charged and convicted for growing a total of 34 marijuana plants. He was growing the plants to alleviate chronic pain (and medicinal marijuana is not legal in Alabama). Because the total weight of the plant, including the unusable stalks and stems weighed 2.85 pounds, the conviction triggered a threshold for a more serious offense on anyone in possession of more than 2.2 pounds of marijuana.",
      "reasoning": "Alabama, too, is one of four states that mandates a life without parole sentence for simple possession of small amounts of marijuana by people with certain prior felony convictions."
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "76.6",
          "visuaNumber":"76.6%",           
          "copy": "The percentage of prisoners who are rearrested within five years."
        },
        {
          "id": 2,
          "number": "1.784",
          "visuaNumber":"$1.784 billion",           
          "copy": "The total cost to taxpayers to keep the 3,278 prisoners currently serving life without parole for nonviolent offenses incarcerated for the rest of their lives."
        },
        {
          "id": 3,
          "number": "27.6",
          "visuaNumber":"2.7%6",           
          "copy": "More than a quarter of drug offenders were incarcerated because of marijuana-related convictions."
        }
      ]
    }
  },
  {
    "id": 5,
    "name": "",
    "location": "Georgia",
    "charge": {
      "description": "Leasing trucks to marijuana smugglers in Georgia.",
      "overview": "A 30-year-old man owned a towing and trucking company in Georgia. In 2002, prosecutors alleged that the man knowingly allowed marijuana smugglers to use his trucks to transport drugs within the state.",
      "priors": "Trespassing for walking into a fast-food restaurant with a beer. (A $150 fine)",
      "prompt": "",
      "min": 0,
      "specialMin": "",
      "max": 100,
      "specialMax": "",
      "step": 1,
    },
    "sentence": {
      "time": "Life without the possibility of parole.",
      "shortTime": "Life",
      "story": "In this case, the man -- a successful business owner and truck mechanic --  allowed  a group of marijuana drug smugglers to use his fleet of trucks to carry drugs within his home state of Georgia.",
      "reasoning": "This was no simple marijuana possession charge: Because federal investigators claimed the man had direct knowledge of the drug enterprise, they charged him with “Conspiracy to Distribute” the total amount of marijuana being trafficked -- which exceeded 1,000 kilograms -- and which amplified the length of the sentence. Meanwhile, the drivers from the trucking company who cooperated with federal agents (and implicated the man) never spent a day in prison."
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "65",
          "visuaNumber": "6",           
          "copy": "More than six out of ten of those convicted of second or third strikes are serving time in prison for nonviolent crimes."
        },
        {
          "id": 2,
          "number": "62000",
          "visuaNumber": "$62,000",         
          "copy": "California is expected to spend more than $62,000 on each prison inmate in 2014-15--almost 7 times the $9,200 it will spend for each K-12 student."
        },
        {
          "id": 3,
          "number": "77",
          "visuaNumber": "77%",           
          "copy": "More than three-fourths of juvenile offenders serving life without parole are Black and Latino."
        }
      ]
    }
  },
  {
    "id": 6,
    "name": "",
    "location": "",
    "charge": {
      "description": "",
      "overview": "",
      "priors": "",
      "prompt": "",
      "min": 0,
      "specialMin": "",
      "max": 100,
      "specialMax": "",
      "step": 1,
    },
    "sentence": {
      "time": "",
      "shortTime": "",
      "story": "",
      "reasoning": ""
    },
    "effects": {
      "title": "?",
      "facts": [
        {
          "id": 1,
          "number": "",
          "visuaNumber": "",           
          "copy": ""
        },
        {
          "id": 2,
          "number": "",
          "visuaNumber": "",           
          "copy": ""
        },
        {
          "id": 3,
          "number": "",
          "visuaNumber": "",           
          "copy": ""
        }
      ]
    }
  },
];

export default storyData;
