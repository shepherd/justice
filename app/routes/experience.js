import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        "id": 1,
        "location": "Louisiana",
        "priors": true,
        "charge": {
          "description": "Possession of 2.8 grams of marijuana.",
          "overview": "<p>A 49-year-old man was stopped by police and found with a small amount of marijuana. He was convicted of simple possession in 2011.</p><p>Two prior convictions for possession of small amounts of marijuana and cocaine. No arrest history for violent crimes.</p>",
          "prompt": "What do you think is the appropriate sentence?",
          "min": 5,
          "max": 60,
          "step": 5,
          "selectedValue": 0
        },
        "sentence": {
          "story": "In New Orleans, a father of seven and local restaurateur was stopped by police over by police while riding his bicycle in 2011. The officers searched the man and found 2.8 grams of marijuana, the equivalent of two joints.",
          "reasoning": "Because the man had prior non-violent drug offenses -- for small amounts of marijuana -- a New Orleans jury convicted him under a Louisiana state law that doles out harsher punishments for “habitual offenders.” In fact, the sentencing range for the third offense of possession of marijuana is up to 20 years in prison. Currently, the man does not face the possibility of parole."
        },
        "effects": {
          "title": "?",
          "facts": [
            {
              "id": 1,
              "number": "#1",
              "copy": "Louisiana is the world's prison capital. Louisiana's incarceration rate is nearly five times Iran's, 13 times China's and 20 times Germany's."
            },
            {
              "id": 2,
              "number": "700%",
              "copy": "The national state prison population has grown seven-fold since 1970."
            },
            {
              "id": 3,
              "number": "300%",
              "copy": "State spending on corrections has grown 300 percent in the last 20 years."
            },
          ]
        }
      },
      {
        "id": 2,
        "location": "Louisiana",
        "priors": true,
        "charge": {
          "description": "Possession of 2.8 grams of marijuana.",
          "overview": "<p>A 49-year-old man was stopped by police and found with a small amount of marijuana. He was convicted of simple possession in 2011.</p><p>Two prior convictions for possession of small amounts of marijuana and cocaine. No arrest history for violent crimes.</p>",
          "prompt": "What do you think is the appropriate sentence?",
          "min": 5,
          "max": 60,
          "step": 5,
          "selectedValue": 5
        },
        "sentence": {
          "story": "In New Orleans, a father of seven and local restaurateur was stopped by police over by police while riding his bicycle in 2011. The officers searched the man and found 2.8 grams of marijuana, the equivalent of two joints.",
          "reasoning": "Because the man had prior non-violent drug offenses -- for small amounts of marijuana -- a New Orleans jury convicted him under a Louisiana state law that doles out harsher punishments for “habitual offenders.” In fact, the sentencing range for the third offense of possession of marijuana is up to 20 years in prison. Currently, the man does not face the possibility of parole."
        },
        "effects": {
          "title": "?",
          "facts": [
            {
              "id": 1,
              "number": "#1",
              "copy": "Louisiana is the world's prison capital. Louisiana's incarceration rate is nearly five times Iran's, 13 times China's and 20 times Germany's."
            },
            {
              "id": 2,
              "number": "700%",
              "copy": "The national state prison population has grown seven-fold since 1970."
            },
            {
              "id": 3,
              "number": "300%",
              "copy": "State spending on corrections has grown 300 percent in the last 20 years."
            },
          ]
        }
      }
    ];
  }
});
