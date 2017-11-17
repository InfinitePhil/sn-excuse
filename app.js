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
	'minor, but inconvenient,',
	'otherworldly',
	'a metric ton of',
	'too much',
	'6.022x10^23 ms of',
	'the usual amount of',
	'(allthethings) all the'
];

var delay_timeframes = ['delays due to a',
'residual delays due to an earlier'];

//78 Problems
var problems = [
'an unexpected return of a ticket that completed in 2013',
'a visit from Frosty the server-eating ice golem',
'a lack of caring enough :(',
'it being a day ending in a y',
'it being a day... not ending in a y?  That seems odd',
'a case of invasion by the advanced chicken robot army',
'(shrug)',
'the rainbow wheel of death',
'a Windows XP Blue Screen of Death',
'the imminent death of ALL+',
'a group of CDES students who got lost in the Data Center',
'a badger infestation',
'an event involving Goldy Gopher accidentally burrowing through the Data Center',
'a lack of RAM being downloaded', 
'just not caring enough about IT@UMN',
'a case of unforeseen regularly scheduled creating of tickets',
'an instance of a user calling an Internet ID, their X.500', 
'instance of weather of literally any kind',
'a minor Kaler spotting',
'a theoretical underground bus traffic jams using the bandwidth',
'a rogue port switch that has become self aware and doesnt feel like routing data anymore',
'a group of protesters who demand everyone use Papyrus font... for everything',
'a lack of respect for it\'s elders',
'a case of AHC screwing up the H drive again',
'a service desk employee trying to accept a chat',
'a stupidly large amount of ranch dressing',
'a large group of children riding the server fans like a merry go round',
'a double reverse psychology plan that actually worked',
'a ...well its just slow ok. Deal with it',
'a few too many people trying to get an email contact at once',
'a general lack of motivation',
'a colony of tiny, tiny cats that have colonized the heatsink because it is warm',
'a tragic loss. What\'s your excuse?',
'a surprising amount of jellybeans',
'a student who turned the microwave on for the whole day',
'a pigeon that got sucked into the air intake',
'a tour guide who told someone we do hardware repair but they broke everything instead',
'a student from UW Madison emailing us',
'a few sticks of RAM deciding to retire without notice',
'the flux capicitor running out of plutonium',
'a calculation error resulting in only 1.2 Gigawatts',
'a literal ton of Canes napkins burying the servers',
'a series of information services calls',
'a crusty and greasy keyboard',
'a caller asking what an address bar is',
'an AHC call that got sent to Itasca, the weird cousin of ServiceNow',
'a caller hearing that dreadful sigh you make when you hear information services or AHC and have to repeat yourself',
'a series of unfortunate events',
'a password reset call that never ended',
'a lawn chair party that ended in a fight',
'a self aware access point that kicks you when you try to make a ticket about it',
'a plate of spaghetti... without any sauce',
'a lack of parades',
'an infestation of evil nano robots',
'a salt circle surrounding the server being broken',
'a ritual candle going out in the server room',
'a lot of reports of users connecting to wireless via UofM-Guest',
'someone forgetting they are on work',
'UW River Falls IT comming back for Paul',
'the server accidentally drowning itself in a pool',
'Bernie Gulacheck saying hi to Coffman 101 staff',
'a midlife crisis',
'a wave of info services calls',
'a blue screen of death that turned out to be green. We are colorblind',
'a large flock of party parrots (parrot)(parrot)(parrot)(parrot)(parrot)(parrot) nesting in the server'
];

//45 Excuses
var excuses = ['We apologize for the inconvenience.',
'We actually don\'t really feel like apologizing for this one.  Maybe you should apologize to us for once.',
'We could recommend just walking your ticket down to zone yourself.',
'We are happy to provide a rich source of excuses for the working folk of OIT.',
'We felt a bit bad just blaming \"RESS\" again.',
'How was your expirence with IT?!',
'We wish we could provide more details, but the wheel of excuses is also broken.',
'We suggest maybe cleaning your keyboard while you wait.  Spruce the place up a bit for once.',
'We are at least providing consistent levels of non-service.',
'We encourage you to continue enjoying your iced coffee while we try to turn the server on and off again.',
'We swear if this happens 8 or 9 more times we\'ll heavily consider looking into it.',
'We wish to remind you that the struggle is very, very real.',
'We think this explains why we, and, by extension all of us, can\'t have nice things.',
'We will need some time to perform The Ritual.',
'We are going home via jetpack.  Good luck or whatever.',
'We hope you continue to enjoy this piece of living technology history.',
'The reboots will continue until service improves.',
'Insert excuse here.',
'If you will excuse me, I left my oven on I have to go turn it off now.',
'We ran out of excuses but pretend there is one here.',
'Nothing to see here.',
'Please try again, but with a little more motivation this time.',
'Next time you should try talking to the server nicely.',
'We might fix it, but probably not.',
'it will get taken care of right after everyone stops using x500.',
'We will fix it soon. Soon. (ominous hand movements).',
'You break it, you buy it.',
'We have to go BACK TO THE FUTURE to fix it.',
'We would apologize but we are not sorry.',
'We would apologize but the server has not caught up enough to type one.',
'Do some yoga and check back in a few minutes.',
'Have you tried submitting it in binary code?',
'We now only accept tickets written in wingdings.',
'Have you tried turning it off and on again?',
'Have you tried calling technology help?',
'Call T2 CLA, I\'m sure they will answer this time...',
'*soft whirring*',
'Have you tried putting the server in a bag of rice overnight? That usually helps.',
'Go find Larry, he has chocolate.',
'Excuse Transaction processing 45 seconds...',
'We were all watching Game of Thrones.',
'Paul and Anika probably broke it ;)',
'Go to Wallys with Tessa and Phil and wait this out...',
'At least you\'re not in Wisconsin'	       
];


var delaytype = delaytypes[Math.floor(Math.random() * delaytypes.length)];
var problem = problems[Math.floor(Math.random() * problems.length)];
var excuse = excuses[Math.floor(Math.random() * excuses.length)];

var message = "ServiceNow is experiencing" + " " + delaytype + " " + "lag due to " + problem + ". " + excuse;

var excusesLength = excuses.length
var problemsLength = problems.length
var delaytypesLength = delaytypes.length

res.json({
	message: `${message}`,
	message_format: 'text',
	color: 'gray'
});
});

// Giving the app a port number to listen on - use 3000 by default
var port = Number(process.env.PORT || 3000);

// Starts the app
app.listen(port);
