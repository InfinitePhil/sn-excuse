// Dependencies
var bodyParser = require('body-parser');
var express = require('express');

// Calling the Express module
var app = express();

// create application/json parser
var jsonParser = bodyParser.json()

// POST /excuse gets JSON bodies
app.post('/excuse', jsonParser, function (req, res) {

	var delaytypes = ['minor',
	'moderate',
	'major',
	'severe',
	'extreme',
	'minor but inconvenient',
	'otherworldly',
	'a metric ton of',
	'too much',
	'6.022x10^23 ms of'
	'the usual amount of'
	'(allthethings) all the'
];

var delay_timeframes = ['delays due to a',
'residual delays due to an earlier'];

//69 Problems
var problems = ['bout of Mutually Assured Influenza',
'unexpected return of a ticket that completed in 2013',
'visit from Frosty the server-eating ice golem',
'kickoff party for OIM',
'lack of caring enough :(',
'day ending in a y',
'day... not ending in a y?  That seems odd',
'case of invasion by the advanced chicken robot army',
'¯\\_(ツ)_/¯',
'problem finding the snow chains',
'pack of Rodents of Unusual Size (ROUS)',
'pack of rodents of mostly average size',
'rainbow wheel of death',
'Windows XP Blue Screen of Death',
'death of ALL+',
'quantum relocation errors',
'total failure of spatial reasoning involving backpacks',
'group of CDES students who got lost in the Data Center',
'badger infestation',
'event involving Goldy Gopher accidentally burrowing through the Data Center',
'lack of RAM being downloaded', 'just not caring enough about IT@UMN',
'case of unforeseen regularly scheduled creating of tickets',
'instance of a user calling an Internet ID, their X.500',
'failed $650m Emoji experiment', 'instance of weather of literally any kind',
'spontaneous particle vibration',
'series of gargantuan phase shift shortages',
'quantum relocation error', 'minor Kaler spotting',
'theoretical underground bus traffic jams using the bandwidth',
'rogue port switch that has become self aware and doesnt feel like routing data anymore',
'group of protesters who demand everyone use Papyrus font... for everything',
'lack of respect for it\'s elders',
'minor inconvenience', 'case of AHC screwing up the H drive again',
'service desk employee trying to accept a chat',
'stupidly large amount of ranch dressing',
'large group of children riding the server fans like a merry go round',
'double reverse psychology plan that actually worked',
'missing semi-colon', 'extra semi-colon', '...well its just slow ok. Deal with it',
'few too many people trying to get an email contact at once',
'general lack of motivation',
'colony of tiny, tiny cats that have colonized the heatsink because it is warm',
'tragic loss. What\'s your excuse?',
'surprising amount of jellybeans',
'student who turned the microwave on for the whole day',
'pigeon that got sucked into the air intake',
'tour guide who told someone we do hardware repair but they broke everything instead',
'student from UW Madison emailing us',
'few sticks of RAM deciding to retire without notice',
'flux capicitor running out of plutonium',
'calculation error resulting in only 1.2 Gigawatts',
'literal ton of Canes napkins burying the servers',
'series of information services calls',
'crusty and greasy keyboard',
'invalid session state on OIM',
'caller asking what an address bar is',
'AHC call that got sent to Itasca, the weird cousin of ServiceNow',
'caller hearing that dreadful sigh you make when you hear information services or AHC and have to repeat yourself',
'series of unfortunate events',
'password reset call that never ended',
'lawn chair party that ended in a fight',
'self aware access point that kicks you when you try to make a ticket about it',
'plate of spaghetti... without any sauce',
'lack of parades',
'infestation of evil nano robots',
'salt circle surrounding the server being broken',
'one of the ritual candles going out in the server room',
'an abundance of reports of users connecting to wireless via UofM-Guest'
];

//41 Excuses
var excuses = ['We apologize for the inconvenience',
'We actually don\'t really feel like apologizing for this one.  Maybe you should apologize to us for once',
'We hope you have snowshoes', 'We could recommend just walking your ticket down to zone yourself',
'We are happy to provide a rich source of excuses for the working folk of OIT',
'We felt a bit bad just blaming \"RESS\" again',
'How was your expirence with IT?!',
'We wish All+ were here to make it all better',
'We wish we could provide more details, but the wheel of excuses is also broken',
'We did not see the sign. It did not open up our eyes, we did not see the sign',
'We suggest maybe cleaning your keyboard while you wait.  Spruce the place up a bit for once',
'We are at least providing consistent levels of non-service',
'We encourage you to continue enjoying your iced coffee while we try to turn the server on and off again',
'We swear if this happens 8 or 9 more times we\'ll heavily consider looking into it',
'We wish to remind you that the struggle is very, very real',
'We think this explains why we, and, by extension all of us, can\'t have nice things',
'We will need some time to perform The Ritual',
'We are going home via jetpack.  Good luck or whatever',
'We hope you continue to enjoy this piece of living technology history',
'The reboots will continue until service improves',
'Insert excuse here',
'If you will excuse me, I left my oven on I have to go turn it off now',
'We ran out of excuses but pretend there is one here',
'Nothing to see here',
'Please try again, but with a little more motivation this time',
'Next time you should try talking to the server nicely',
'We might fix it, but probably not',
'it will get taken care of right after everyone stops using x500',
'We will fix it soon. Soon. (ominous hand movements)',
'You break it, you buy it',
'We have to go BACK TO THE FUTURE to fix it',
'We would apologize but we are not sorry',
'We would apologize but the server has not caught up enough to type one',
'Do some yoga and check back in a few minutes',
'Have you tried submitting it in binary code?',
'We now only accept tickets written in wingdings',
'Have you tried turning it off and on again?',
'Have you tried calling technology help',
'Call T2 CLA, I\'m sure they will answer this time…',
'What\'s that you say? You are on a call and it took 30 seconds to load a new contact? Maybe you would be nicer if you had to remember as many tickets as we do',
'*soft whirring*',
'Contact HR if you feel this is that sort of situation..'
'Have you tried putting the server in a bag of rice overnight? That usually helps'
];


var delaytype = delaytypes[Math.floor(Math.random() * delaytypes.length)];
var problem = problems[Math.floor(Math.random() * problems.length)];
var excuse = excuses[Math.floor(Math.random() * excuses.length)];

var message = "ServiceNow is experiencing" + " " + delaytype + " " + "lag due to a" + " " + problem + ". " + excuse + ".";

var excusesLength = excuses.length
var problemsLength = problems.length
var delaytypesLength = delaytypes.length

res.json({
	message: `${message}`,
	color: 'gray'
});
});

// Giving the app a port number to listen on - use 3000 by default
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
