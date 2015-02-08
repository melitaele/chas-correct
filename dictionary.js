var oldTime = new Date().getTime();

var correct={
	logArray:[],
	log:function(param){
		this.logArray.push(param);
	},
	logToConsole:function(){
		console.log(this.logArray.join("\n\r"));
	},
};

var sya="(?=ся|)";

var orphoWordsToCorrect=[
/*
	["",""],
	["",""],
	["",""],
	["",""],
*/
	["скуб","скуп"],
	["[всз]-*зад[еи]","сзади"],
	["на р[ао]вне","наравне"],
	["серебреного","серебряного"],//TODO: просклонять
	["сомной","со мной"],
	["сначало","сначала"],
	["еще","ещё"],
	["ее","её"],
	["кароч","короче"],
	["пороль","пароль"],
	["дрож","дрожь"],
	["извени","извини"],
	["жжот","жжёт"],
	["нехочу","не хочу"],
	["молодёж","молодёжь"],
	["полувер","пуловер"],
	["в расплох","врасплох"],
	["продовца","продавца"],
	["всмысле","в смысле"],
	["штол[еь]","что ли"],
	["н[еи]знаю","не знаю"],
	["это-ж","это ж"],
	["падажди","подожди"],
	["во первых","во-первых"],
	["пожалуста","пожалуйста"],
//	["безплатно","бесплатно"],
	["досвидание","до свидания"],
	["вс[её]таки","всё-таки"],
	["в кратце","вкратце"],
	["ключь","ключ"],
	["староной","стороной"],
	["немогу","не могу"],
	["в[-]*о+бщем","в общем"],
	["тожэ","тоже"],
	["такжэ","также"],
	["в(?:об|а)ще","вообще"],
	["пожалста","пожалуйста"],
	["скока","сколько"],
	["с[её]дня","сегодня"],
	["патаму","потому"],
	["тада","тогда"],
	["жудко","жутко"],
	["поарать","поорать"],
	["сандали","сандалии"],
	["што","что"],
	["скочать","скачать"],
//	["отзов(?=(?:ы||а|у|ом|ам|ами))","отзыв"],
	["троль","тролль"],
	["придти","прийти"],
	["ложить","класть"],
	["я ложу","кладу"],//Подойти к ложу / подойти к кладу
	["ложим","кладём"],
	["ложишь","кладёшь"],
	["ложите","кладёте"],
	["лож[ау]т","кладут"],
	["лож[ие]т","кладёт"],
	["светой","святой"],//TODO: склонять
	["немогу","не могу"],
	["ноч","ночь"],
	["вкантакте","вконтакте"],
	["чтото","что-то"],
	["скем","с кем"],
	["смореть","смотреть"],
	["ихн(?:ий|его|ему|им|ем|ее|яя|ей|юю|ие|их|им)","их"],
	["на тощак","натощак"],
	["чтоли","что ли"],
	["сдесь","здесь"],
	["незачто","не за что"],
	["калеса","колеса"],
	["какойто","какой-то"],
	["тоесть","то есть"],
	["подругому","по-другому"],
	["знач[её]к","значок"],
	["в кратце","вкратце"],
	["на последок","напоследок"],
	["помо[ей]му","по-моему"],
	["покласть","положить"],
	["никаго","никого"],
	["кагда","когда"],
	["п[ао]ч[ие]му","почему"],
	["наконецто","наконец-то"],
	["гдебы","где бы"],
	["вс[её]время","всё время"],
	["чуть-*ли","чуть ли"],
	["вря[дт]-*ли","вряд ли"],
	["ка[кг]бу[дт]то","как будто"],
	["в догонку","вдогонку"],
	["экспрес*о","эспрессо"],
	["всмысле","в смысле"],
	["ваще","вообще"],
	["потому-что","потому что"],
	["что-бы","чтобы"],
	["што-бы","чтобы"],
	["видете","видите"],//TODO: проспрягать
	["в догонку","вдогонку"],
	["сп[оа]сиб[оа]","спасибо"],
	["типо","типа"],
	["граммот","грамот"],
	["конешно","конечно"],
	["ключ[её]м","ключом"],
	["недай","не дай"],
	["нович[ёе]к","новичок"],
	["нада","надо"],
	["вс[её]-*равно","всё равно"],
	["тобишь","то бишь"],
	["забеременяю","забеременею"],
	["незавалялся","не завалялся"],
	["неповеришь","не поверишь"],
	["никчему","ни к чему"],
	["щас*","сейчас"],
	["болкон","балкон"],//TODO: просклонять, не обидев князя Болконского
	["хош","хочешь"],
	["очь*","очень"],
	["н[ие]разу","ниразу"],
	["завтро","завтра"],
	["гаус","Гаусс"],//TODO: просклонять. В префиксы нельзя, ибо c -> сс
	["из за","из-за"],
	["из под","из-под"],
	["металы","металлы"],//TODO: просклонять, помнить про глагол "метал"
	["щелч[её]к","щелчок"],
	["пол[\- ]часа","полчаса"],
	["неначем","не на чем"],
	["весч","вещь"],
	["какиет[ао]","какие-то"],
	["параноя","паранойя"],//TODO: досклонять
	["паранои","паранойи"],
	["неработает","не работает"],
	["несможешь*","не сможешь"],
	["чему-нить","чему-нибудь"],
	["чтоже","что же"],
	["чтонибудь","что-нибудь"],
	["н[ие]люблю","не люблю"],
	["почемуто","почему-то"],
	["по-скорее","поскорее"],
	["накого","на кого"],
	["канеш","конечно"],
	["какую нибудь","какую-нибудь"],//TODO: просклонять
	["редов","рядов"],
	["будеть","будет"],
	["истощенна","истощена"],
	["истощенно","истощено"],
	["истощенны","истощены"],
	["по[ -]*ди[ао]г[ао]нал[еи]","по диагонали"],
	["пребь[ёе]т","прибьёт"],//TODO: проспрягать
	["стери","сотри"],
	["и[зс][- ]*под[- ]*лобья","исподлобья"],
	["по русски","по-русски"],
	["подощло","подошло"],
	["и[зс][ -]*д[ао]л[еи]ка","издалека"],
	["попорядку","по порядку"],
	["молодожённых","молодожён"],//TODO: просклонять
	["неспеша","не спеша"],
];

var orphoPrefixToCorrect=[
/*
	["",""],
	["",""],
	["",""],
*/
	["[сз]драв*ств","здравств"],
	["собутылочник","собутыльник"],
	["обкута","окута"],
	["хлыш","хлыщ"],
	["ево[шн][а-яё]+","его"],
	["каров","коров"],
	["шпоргал","шпаргал"],
	["атракцион","аттракцион"],
	["режис[ёе]р","режиссёр"],
	["соеденин","соединен"],
	["симпотич","симпатич"],
	["девч[её]н","девчон"],
	["мущин","мужчин"],
	["большенств","большинств"],
	["седени","сидени"],
	["електр","электр"],
	["приемуществ","преимуществ"],
	["видил","видел"],
	["оффис","офис"],
	["агенств","агентств"],
	["одн[оа]класник","одноклассник"],
	["однаклассник","одноклассник"],
	["видио","видео"],
	["руск","русск"],
	["сматре","смотре"],
	["расчит","рассчит"],
	["кантакт","контакт"],
	["маструб","мастурб"],
	["серебрянн","серебрян"],
	["правельн","правильн"],
	["балон","баллон"],
	["коментар","комментар"],
	["прийд","прид"],
	["раз*сказ","рассказ"],
	["класн","классн"],
	["аргазм","оргазм"],
	["регестрац","регистрац"],
	["куринн","курин"],
	["востанов","восстанов"],
	["дешов","дешёв"],
	["пр[ие]з[ие]ватив","презерватив"],
	["телифон","телефон"],
	["гдето","где-то"],
	["часн","частн"],
	["расспис","распис"],
	["офицал","официал"],
	["здраств","здравств"],
	["тысеч","тысяч"],
	["жост","жест"],
	["примьер","премьер"],
	["сь[её]м","съём"],
	["правел","правил"],
	["еслиб","если б"],
	["свинн","свин"],
	["разсве","рассве"],
	["росписани","расписани"],
	["гостинниц","гостиниц"],
	["комерч","коммерч"],
	["би[зс]плат","бесплат"],
	["бальш","больш"],
	["помаги","помоги"],
	["что-бы","чтобы"],
	["без(?=[кпстфхцчшщ])","бес"],//TODO: раз/роз
	["бес(?=[бвгджзлмр])","без"],
	["бези","безы"],
//	["безт","бест"],//TODO: доделать
	["не долюбли","недолюбли"],
	["боян","баян"],
	["будующ","будущ"],
	["лутш","лучш"],
	["курсав","курсов"],
	["венчестер","винчестер"],
	["брошур","брошюр"],
	["бе[сз]пелот","беспилот"],
	["вмистим","вместим"],
	["жолуд","жёлуд"],
	["возвро","возвра"],
	["в-*течени[ие]","в течение"],
	["вырощен","выращен"],
	["корект","коррект"],
	["грусн","грустн"],
	["граммот","грамот"],
	["не-*был","не был"],
	["не-*была","не была"],
	["не-*было","не было"],
	["не-были","не были"],
	["неостановлюсь","не остановлюсь"],
	["пол-г","полг"],//TODO!
	["третье классник","третьеклассник"],//TODO!
	["организьм","организм"],
	["галав","голов"],
	["ро[сз]сол","рассол"],
	["мылостын","милостын"],
	["сотон","сатан"],
	["школьнец","школьниц"],
	["както","как-то"],
	["во-первых ","во-первых, "],
	["копрал","капрал"],
	["ленност","леност"],
	["лесничн","лестничн"],
	["опазда","опозда"],
	["сохрон","сохран"],
	["умера","умира"],
	["убера","убира"],
	["собера","собира"],
	["разбера","разбира"],
	["погаловн","поголовн"],
	["пиня","пеня"],
	["иссиня ч[еоё]рн","иссиня-чёрн"],
	["Транс+[еи]льван","Трансильван"],
	["коффе","кофе"],
	["влаз[ие]л","влезал"],
	["свян+","свин"],
	["переборш","переборщ"],
	["бутербот","бутерброд"],
	["ч[ие]хотк","чахотк"],
	["привселюдн","прилюдн"],
	["вздыхн","вздохн"],
	["чательн","тщательн"],
	["малчуган","мальчуган"],
	["немнога","немного"],
	["р[ао][зс]д[оа][ёе]т","раздаёт"],
];

var orphoPostfixToCorrect=[
/*	
	["",""],
	["",""],
*/
	["топчит"+sya,"топчет"],
	["борятся","борются"],
	["сыпится","сыпется"],
	["г[ао]в[ао]риш","говоришь"],
	["ються","ются"],
	["аеться","ается"],
	["оеться","оется"],
	["уеться","уется"],
	["яеться","яется"],
	["ееться","еется"],
	["юеться","юется"],
	["-ли"," ли"],
	["-же"," же"],
	["-бы"," бы"],
//	["-что"," что"],//кое-что
	["можеш","можешь"],
	["аеш","аешь"],
	["шся","шься"],
	["гл[аея]диш","глядишь"],
	["сыпатся","сыпаться"],
	["рвуться","рвутся"],
	["видет","видит"],
	["изьм","изм"],//TODO: просклонять
	["цыя","ция"],//TODO: просклонять
	["кочать","качать"],//TODO: проспрягать
	["рвуться","рвутся"],
	["пользуеться","пользуется"],
	["пожже","позже"],
	["кочает","качает"],
	["кочаеть*ся","качается"],
	["алася","алась"],
	["шол","шёл"],
	["смотр[ие]ш","смотришь"],
	["смотрем","смотрим"],//TODO: допроспрягать. И вообще все глаголы-исключения
	["хоч[еи]м","хотим"],
	["хотишь","хочешь"],
	["хоч[еи]те","хотите"],
	["хотит","хочет"],
	["хочут","хотят"],
	["терад","тирад"],
	["цыми","цами"],
];

var orphoFragmentsToCorrect=[
/*
	["",""],
	["",""],
	["",""],
	["",""],
	["",""],
*/
	["ньч","нч"],
	["ньщ","нщ"],
	["чьн","чн"],
	["щьн","щн"],
	["чьк","чк"],
	["ъи","ы"],
	["ъэ","э"],
	["тендор","тендер"],
	["будующ","будущ"],
	["празн","праздн"],
	["пр[ие]з[ие]дент","президент"],
	["цыкл","цикл"],
	["мед[еи]ц[иы]н","медицин"],
	["интерестн","интересн"],
	["класн","классн"],
	["эксплуот","эксплуоат"],
	["принцып","принцип"],
	["субьект","субъект"],
	["обьект","объект"],
	["мыслем","мыслим"],
	["престег","пристег"],
	["престёг","пристёг"],
	["фармат","формат"],
	["ьед[еи]н","ъедин"],
	["манет","монет"],
	["проблемм","проблем"],
	["пропоган","пропаган"],
	["коблук","каблук"],
	["буит","будет"],
	["хотяб","хотя б"],
	["регестр","регистр"],//Или "реестр", но сочтём это санкциями
	["рецедив","рецидив"],
	["оч[еи]рова","очарова"],
	["ьясн","ъясн"],
	["чорн","чёрн"],
	["авторезир","авторизир"],
	["ил*[еи]м*[еи]нт","элемент"],
	["эл*[еи]м*[еи]нт","элемент"],//TODO: дебажить до "[эи]л*[еи]м*[еи]нт"
	["пробыва","пробова"],
	["бытерброд","бутерброд"],
	["cочельнтик","cочельник"],
	["глядав","глядыв"],
	["брительк","бретельк"],
	["р[еи]к[ао]ш[еи]т","рикошет"],
	["м[ие]н[ие]рал","минерал"],
];

var matyuki=[
];

var yo=[
];
