gradle = {...gradle,...{/**
GRADLE - KNOWLEDGE IS POWER
***** PROPRIETARY CODE *****
@author : gradle (gradlecode@outlook.com)
@update: 02/07/2019 12:39:00
@version_name: gradle-logic
@version_code: v6.0.0
copyright @2012-2020
*/
    
	//Ads information
	//===============
	banner             : 'ca-app-pub-3940256099942544/6300978111', //id placement banner
    interstitial       : 'ca-app-pub-3940256099942544/1033173712', //id placement interstitial
	
    isTesting          : true, //Ads mode testing. set to false for a production mode.
    enableBanner       : true, //Ads enable the banner. set to false to disable the banner.
    enableInterstitial : true, //Ads enable the interstitial. set to false to disable all interstitials.

    bannerAtBottom     : true, //if false the banner will be at top
    overlap            : false,

	notifiBackbutton   : true, //for confirmation backbutton
	notifiMessage      : 'Do you want to exit the game ?',

	intervalAds        : 1,     //Ads each interval for example each n times
	
	fullsize		   : true,
	
	// more games
	//===========
						//change the value with your id developer :
	developer_link    : 'https://play.google.com/store/apps/developer?id=Childrens+Games',
	
	
	//Languages :
	//===========
	translate :{
		en :{
			'lang'	 : 'Language',
			'easy'   : 'EASY',
			'normal' : 'NORMAL',
			'expert' : 'EXPERT',
			'time'   : 'Time',
			'cells'  : 'Cells',
			'edit'   : 'EDIT',
		},
		fr :{
			'lang'	 : 'Langue',
			'easy'   : 'FACILE',
			'normal' : 'NORMALE',
			'expert' : 'EXPERT',
			'time'   : 'Temps',
			'cells'  : 'Cells',
			'edit'   : 'EDITER',
		},
		es :{
			'lang'	 : 'Idioma',
			'easy'   : 'FÁCIL',
			'normal' : 'NORMAL',
			'expert' : 'EXPERTO',
			'time'   : 'Tiempo',
			'cells'  : 'Células',
			'edit'   : 'EDITAR',
		},
	},
	


	//Events manager :
	//================
    event: function(ev, msg){ gradle.process(ev,msg);switch(ev){
		
		case 'first_start':
			//gradle.showInter();
			break;
		case 'button_play':   //button play
			gradle.showInter();
			break;
		case 'replay': //event on replay
			//gradle.showInter();
			break;
		case 'congratulations': // end of level - Gameover / Congratulations
			gradle.showInter();
			break;
		case 'sound_yes': //event on button sound
			//gradle.showInter();
			break;
		case 'sound_no': //event on button sound
			//gradle.showInter();
			break;
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;
   		case 'moreGames':
			gradle.more();
			break;
		case 'test':
			//gradle.checkInterval() && gradle.showInter();
			break;		
			
    }}
	
}};

gradle.run();


