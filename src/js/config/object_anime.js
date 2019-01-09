'use strict';
var anime_map = {
	// ゲームオーバー後のこいし
	"koishi_button_wait":   require('../data/anime/koishi_button/wait_anime_1.json'),
	"koishi_button_reaction_01":   require('../data/anime/koishi_button/reaction_01_anime_1.json'),

	"chapter0-myroom-obj-02-01-obj01": require('../data/anime/chapter0/myroom/obj-02-01/obj01_anime_1'),
	"chapter0-myroom-obj-02-01-obj02": require('../data/anime/chapter0/myroom/obj-02-01/obj02_anime_1'),
	"chapter0-myroom-obj-02-01-obj03": require('../data/anime/chapter0/myroom/obj-02-01/obj03_anime_1'),
	"chapter0-myroom-obj-03-01-obj01": require('../data/anime/chapter0/myroom/obj-03-01/obj01_anime_1'),
	"chapter0-myroom-obj-03-01-obj02": require('../data/anime/chapter0/myroom/obj-03-01/obj02_anime_1'),
	"chapter0-myroom-obj-03-01-obj03": require('../data/anime/chapter0/myroom/obj-03-01/obj03_anime_1'),
	"chapter0-myroom-obj-04-01-obj01": require('../data/anime/chapter0/myroom/obj-04-01/obj01_anime_1'),
	"chapter0-myroom-obj-04-01-obj02": require('../data/anime/chapter0/myroom/obj-04-01/obj02_anime_1'),
	"chapter0-myroom-obj-04-01-obj03": require('../data/anime/chapter0/myroom/obj-04-01/obj03_anime_1'),
	"chapter0-hospital_corridor2-obj-01-01-obj01": require('../data/anime/chapter0/hospital_corridor2/obj-01-01/obj01_anime_1'),
	"chapter0-hospital_corridor2-obj-01-01-obj02": require('../data/anime/chapter0/hospital_corridor2/obj-01-01/obj02_anime_1'),
	"chapter0-hospital_corridor2-obj-01-01-obj03": require('../data/anime/chapter0/hospital_corridor2/obj-01-01/obj03_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj01":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj01_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj02":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj02_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj03":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj03_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj04":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj04_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj05":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj05_anime_1'),
	"chapter0-mansion_corridor1-obj-01-01-obj06":  require('../data/anime/chapter0/mansion_corridor1/obj-01-01/obj06_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj01":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj01_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj02":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj02_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj03":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj03_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj04":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj04_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj05":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj05_anime_1'),
	"chapter0-mansion_corridor1-obj-02-01-obj06":  require('../data/anime/chapter0/mansion_corridor1/obj-02-01/obj06_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj01":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj01_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj02":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj02_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj03":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj03_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj04":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj04_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj05":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj05_anime_1'),
	"chapter0-mansion_corridor1-obj-03-01-obj06":  require('../data/anime/chapter0/mansion_corridor1/obj-03-01/obj06_anime_1'),

	"chapter0-mansion_corridor2-obj-04-01-obj01":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj01_anime_1'),
	"chapter0-mansion_corridor2-obj-04-01-obj02":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj02_anime_1'),
	"chapter0-mansion_corridor2-obj-04-01-obj03":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj03_anime_1'),
	"chapter0-mansion_corridor2-obj-04-01-obj04":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj04_anime_1'),
	"chapter0-mansion_corridor2-obj-04-01-obj05":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj05_anime_1'),
	"chapter0-mansion_corridor2-obj-04-01-obj06":  require('../data/anime/chapter0/mansion_corridor2/obj-04-01/obj06_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj01":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj01_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj02":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj02_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj03":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj03_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj04":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj04_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj05":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj05_anime_1'),
	"chapter0-mansion_corridor2-obj-05-01-obj06":  require('../data/anime/chapter0/mansion_corridor2/obj-05-01/obj06_anime_1'),
	"chapter0-mansion_corridor2-obj-06-01-obj01":  require('../data/anime/chapter0/mansion_corridor2/obj-06-01/obj01_anime_1'),
	"chapter0-mansion_corridor2-obj-06-01-obj02":  require('../data/anime/chapter0/mansion_corridor2/obj-06-01/obj02_anime_1'),
	"chapter0-mansion_corridor2-obj-06-01-obj03":  require('../data/anime/chapter0/mansion_corridor2/obj-06-01/obj03_anime_1'),

	"chapter0-mansion_corridor3-obj-07-01-obj01":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj01_anime_1'),
	"chapter0-mansion_corridor3-obj-07-01-obj02":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj02_anime_1'),
	"chapter0-mansion_corridor3-obj-07-01-obj03":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj03_anime_1'),
	"chapter0-mansion_corridor3-obj-07-01-obj04":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj04_anime_1'),
	"chapter0-mansion_corridor3-obj-07-01-obj05":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj05_anime_1'),
	"chapter0-mansion_corridor3-obj-07-01-obj06":  require('../data/anime/chapter0/mansion_corridor3/obj-07-01/obj06_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj01":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj01_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj02":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj02_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj03":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj03_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj04":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj04_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj05":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj05_anime_1'),
	"chapter0-mansion_corridor3-obj-08-01-obj06":  require('../data/anime/chapter0/mansion_corridor3/obj-08-01/obj06_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj01":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj01_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj02":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj02_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj03":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj03_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj04":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj04_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj05":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj05_anime_1'),
	"chapter0-mansion_corridor3-obj-09-01-obj06":  require('../data/anime/chapter0/mansion_corridor3/obj-09-01/obj06_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj01":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj01_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj02":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj02_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj03":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj03_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj04":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj04_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj05":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj05_anime_1'),
	"chapter0-mansion_corridor3-obj-10-01-obj06":  require('../data/anime/chapter0/mansion_corridor3/obj-10-01/obj06_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj01":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj01_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj02":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj02_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj03":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj03_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj04":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj04_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj05":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj05_anime_1'),
	"chapter0-mansion_corridor3-obj-11-01-obj06":  require('../data/anime/chapter0/mansion_corridor3/obj-11-01/obj06_anime_1'),
	"chapter1-01-obj-01-obj01":  require('../data/anime/chapter1/01/obj-01/obj01_anime_1.json'),
	"chapter1-01-obj-01-obj02":  require('../data/anime/chapter1/01/obj-01/obj02_anime_1.json'),
	"chapter1-01-obj-01-obj03":  require('../data/anime/chapter1/01/obj-01/obj03_anime_1.json'),
	"chapter1-01-obj-01-obj04":  require('../data/anime/chapter1/01/obj-01/obj04_anime_1.json'),
	"chapter1-01-obj-02-obj01":  require('../data/anime/chapter1/01/obj-02/obj01_anime_1.json'),
	"chapter1-01-obj-02-obj02":  require('../data/anime/chapter1/01/obj-02/obj02_anime_1.json'),
	"chapter1-01-obj-02-obj03":  require('../data/anime/chapter1/01/obj-02/obj03_anime_1.json'),
	"chapter1-01-obj-03-obj01":  require('../data/anime/chapter1/01/obj-03/obj01_anime_1.json'),
	"chapter1-01-obj-03-obj02":  require('../data/anime/chapter1/01/obj-03/obj02_anime_1.json'),
	"chapter1-01-obj-03-obj03":  require('../data/anime/chapter1/01/obj-03/obj03_anime_1.json'),
	"chapter1-01-obj-03-obj04":  require('../data/anime/chapter1/01/obj-03/obj04_anime_1.json'),
	"chapter1-01-obj-03-obj05":  require('../data/anime/chapter1/01/obj-03/obj05_anime_1.json'),
	"chapter1-01-obj-03-obj06":  require('../data/anime/chapter1/01/obj-03/obj06_anime_1.json'),
	"chapter1-01-white-mist":    require('../data/anime/chapter1/01/white-mist/eff01_anime_1.json'),

	"chapter1-02-obj-04-obj01":  require('../data/anime/chapter1/02/obj-04/obj01_anime_1.json'),
	"chapter1-02-obj-04-obj02":  require('../data/anime/chapter1/02/obj-04/obj02_anime_1.json'),
	"chapter1-02-obj-04-obj03":  require('../data/anime/chapter1/02/obj-04/obj03_anime_1.json'),
	"chapter1-02-obj-04-obj04":  require('../data/anime/chapter1/02/obj-04/obj04_anime_1.json'),
	"chapter1-02-obj-04-obj05":  require('../data/anime/chapter1/02/obj-04/obj05_anime_1.json'),

	"chapter1-02-obj-06-obj01":  require('../data/anime/chapter1/02/obj-06/obj01_anime_1.json'),
	"chapter1-02-obj-06-obj02":  require('../data/anime/chapter1/02/obj-06/obj02_anime_1.json'),
	"chapter1-02-obj-06-obj03":  require('../data/anime/chapter1/02/obj-06/obj03_anime_1.json'),
	"chapter1-02-obj-06-obj04":  require('../data/anime/chapter1/02/obj-06/obj04_anime_1.json'),

	"chapter1-03-obj-01-obj01":  require('../data/anime/chapter1/03/obj-01/obj01_anime_1.json'),
	"chapter1-03-obj-01-obj02":  require('../data/anime/chapter1/03/obj-01/obj02_anime_1.json'),
	"chapter1-03-obj-01-obj03":  require('../data/anime/chapter1/03/obj-01/obj03_anime_1.json'),
	"chapter1-03-obj-01-obj04":  require('../data/anime/chapter1/03/obj-01/obj04_anime_1.json'),
	"chapter1-03-obj-05-obj01":  require('../data/anime/chapter1/03/obj-05/obj01_anime_1.json'),
	"chapter1-03-obj-05-obj02":  require('../data/anime/chapter1/03/obj-05/obj02_anime_1.json'),

	"chapter3-07-obj-01-obj01":  require('../data/anime/chapter3/07/obj-01/obj01_anime_1.json'),
	"chapter3-07-obj-01-obj02":  require('../data/anime/chapter3/07/obj-01/obj02_anime_1.json'),
	"chapter3-07-obj-01-obj03":  require('../data/anime/chapter3/07/obj-01/obj03_anime_1.json'),
	"chapter3-07-obj-01-obj04":  require('../data/anime/chapter3/07/obj-01/obj04_anime_1.json'),
	"chapter3-07-obj-03-obj01":  require('../data/anime/chapter3/07/obj-03/obj01_anime_1.json'),
	"chapter3-07-obj-03-obj02":  require('../data/anime/chapter3/07/obj-03/obj02_anime_1.json'),
	"chapter3-07-obj-03-obj03":  require('../data/anime/chapter3/07/obj-03/obj03_anime_1.json'),
	"chapter3-07-obj-03-obj04":  require('../data/anime/chapter3/07/obj-03/obj04_anime_1.json'),
	"chapter3-07-obj-05-obj01":  require('../data/anime/chapter3/07/obj-05/obj01_anime_1.json'),
	"chapter3-07-obj-05-obj02":  require('../data/anime/chapter3/07/obj-05/obj02_anime_1.json'),
	"chapter3-07-obj-05-obj03":  require('../data/anime/chapter3/07/obj-05/obj03_anime_1.json'),
	"chapter3-07-obj-05-obj04":  require('../data/anime/chapter3/07/obj-05/obj04_anime_1.json'),
	
	"chapter3-08-obj-01-obj01":  require('../data/anime/chapter3/08/obj-01/obj01_anime_1.json'),
	"chapter3-08-obj-01-obj02":  require('../data/anime/chapter3/08/obj-01/obj02_anime_1.json'),
	"chapter3-08-obj-01-obj03":  require('../data/anime/chapter3/08/obj-01/obj03_anime_1.json'),
	"chapter3-08-obj-01-obj04":  require('../data/anime/chapter3/08/obj-01/obj04_anime_1.json'),
	
	"chapter3-09-obj-01-obj01":  require('../data/anime/chapter3/09/obj-01/obj01_anime_1.json'),
	"chapter3-09-obj-01-obj02":  require('../data/anime/chapter3/09/obj-01/obj02_anime_1.json'),
	"chapter3-09-obj-01-obj03":  require('../data/anime/chapter3/09/obj-01/obj03_anime_1.json'),
	"chapter3-09-obj-01-obj04":  require('../data/anime/chapter3/09/obj-01/obj04_anime_1.json'),
	"chapter3-09-obj-03-obj01":  require('../data/anime/chapter3/09/obj-03/obj01_anime_1.json'),
	"chapter3-09-obj-03-obj02":  require('../data/anime/chapter3/09/obj-03/obj02_anime_1.json'),
	"chapter3-09-obj-03-obj03":  require('../data/anime/chapter3/09/obj-03/obj03_anime_1.json'),
	"chapter3-09-obj-03-obj04":  require('../data/anime/chapter3/09/obj-03/obj04_anime_1.json'),
	"chapter3-09-obj-04-obj01":  require('../data/anime/chapter3/09/obj-04/obj01_anime_1.json'),
	"chapter3-09-obj-04-obj02":  require('../data/anime/chapter3/09/obj-04/obj02_anime_1.json'),
	"chapter3-09-obj-04-obj03":  require('../data/anime/chapter3/09/obj-04/obj03_anime_1.json'),
	"chapter3-09-obj-04-obj04":  require('../data/anime/chapter3/09/obj-04/obj04_anime_1.json'),
	"chapter3-09-obj-05-obj01":  require('../data/anime/chapter3/09/obj-05/obj01_anime_1.json'),
	"chapter3-09-obj-05-obj02":  require('../data/anime/chapter3/09/obj-05/obj02_anime_1.json'),
	"chapter3-09-obj-05-obj03":  require('../data/anime/chapter3/09/obj-05/obj03_anime_1.json'),
	"chapter3-09-obj-05-obj04":  require('../data/anime/chapter3/09/obj-05/obj04_anime_1.json'),
	
	"chapter3-10-obj-01-obj01":  require('../data/anime/chapter3/10/obj-01/obj01_anime_1.json'),
	"chapter3-10-obj-01-obj02":  require('../data/anime/chapter3/10/obj-01/obj02_anime_1.json'),
	"chapter3-10-obj-01-obj03":  require('../data/anime/chapter3/10/obj-01/obj03_anime_1.json'),
	"chapter3-10-obj-01-obj04":  require('../data/anime/chapter3/10/obj-01/obj04_anime_1.json'),
	
	"chapter3-11-obj-01-obj01":  require('../data/anime/chapter3/11/obj-01/obj01_anime_1.json'),
	"chapter3-11-obj-01-obj02":  require('../data/anime/chapter3/11/obj-01/obj02_anime_1.json'),
	"chapter3-11-obj-01-obj03":  require('../data/anime/chapter3/11/obj-01/obj03_anime_1.json'),
	"chapter3-11-obj-01-obj04":  require('../data/anime/chapter3/11/obj-01/obj04_anime_1.json'),
	"chapter3-11-obj-02-obj01":  require('../data/anime/chapter3/11/obj-02/obj01_anime_1.json'),
	"chapter3-11-obj-02-obj02":  require('../data/anime/chapter3/11/obj-02/obj02_anime_1.json'),
	"chapter3-11-obj-02-obj03":  require('../data/anime/chapter3/11/obj-02/obj03_anime_1.json'),
	"chapter3-11-obj-02-obj04":  require('../data/anime/chapter3/11/obj-02/obj04_anime_1.json'),
	"chapter3-11-obj-03-obj01":  require('../data/anime/chapter3/11/obj-03/obj01_anime_1.json'),
	"chapter3-11-obj-03-obj02":  require('../data/anime/chapter3/11/obj-03/obj02_anime_1.json'),
	"chapter3-11-obj-03-obj03":  require('../data/anime/chapter3/11/obj-03/obj03_anime_1.json'),
	"chapter3-11-obj-03-obj04":  require('../data/anime/chapter3/11/obj-03/obj04_anime_1.json'),
	"chapter3-11-obj-04-obj01":  require('../data/anime/chapter3/11/obj-04/obj01_anime_1.json'),
	"chapter3-11-obj-04-obj02":  require('../data/anime/chapter3/11/obj-04/obj02_anime_1.json'),
	"chapter3-11-obj-04-obj03":  require('../data/anime/chapter3/11/obj-04/obj03_anime_1.json'),
	"chapter3-11-obj-04-obj04":  require('../data/anime/chapter3/11/obj-04/obj04_anime_1.json'),
	"chapter3-11-obj-05-obj01":  require('../data/anime/chapter3/11/obj-05/obj01_anime_1.json'),
	"chapter3-11-obj-05-obj02":  require('../data/anime/chapter3/11/obj-05/obj02_anime_1.json'),
	"chapter3-11-obj-05-obj03":  require('../data/anime/chapter3/11/obj-05/obj03_anime_1.json'),
	
	"chapter3-12-obj-01-obj01":  require('../data/anime/chapter3/12/obj-01/obj01_anime_1.json'),
	"chapter3-12-obj-01-obj02":  require('../data/anime/chapter3/12/obj-01/obj02_anime_1.json'),
	"chapter3-12-obj-01-obj03":  require('../data/anime/chapter3/12/obj-01/obj03_anime_1.json'),
	"chapter3-12-obj-01-obj04":  require('../data/anime/chapter3/12/obj-01/obj04_anime_1.json'),
	"chapter3-12-obj-03-obj01":  require('../data/anime/chapter3/12/obj-03/obj01_anime_1.json'),
	"chapter3-12-obj-04-obj01":  require('../data/anime/chapter3/12/obj-04/obj01_anime_1.json'),
	
	"chapter3-13-obj-01-obj01":  require('../data/anime/chapter3/13/obj-01/obj01_anime_1.json'),
	"chapter3-13-obj-01-obj02":  require('../data/anime/chapter3/13/obj-01/obj02_anime_1.json'),
	"chapter3-13-obj-01-obj03":  require('../data/anime/chapter3/13/obj-01/obj03_anime_1.json'),
	"chapter3-13-obj-01-obj04":  require('../data/anime/chapter3/13/obj-01/obj04_anime_1.json'),
    
	"chapter4-01-white-mist":    require('../data/anime/chapter1/01/white-mist/eff01_anime_1.json'),
	"chapter4-20-obj-01_anime_1":  require('../data/anime/chapter4/20/obj-01/obj01_anime_1.json'),
	"chapter4-20-obj-01_anime_2":  require('../data/anime/chapter4/20/obj-01/obj02_anime_1.json'),
	"chapter4-20-obj-01_anime_3":  require('../data/anime/chapter4/20/obj-01/obj03_anime_1.json'),
	"chapter4-20-obj-01_anime_4":  require('../data/anime/chapter4/20/obj-01/obj04_anime_1.json'),
	"chapter4-20-obj-01_anime_5":  require('../data/anime/chapter4/20/obj-01/obj05_anime_1.json'),
    
	"chapter5-03-bg-01_anime_1":  require('../data/anime/chapter5/03/bg-01/bg01_anime_1.json'),
	"chapter5-04-bg-01_anime_1":  require('../data/anime/chapter5/04/bg-01/bg01_anime_1.json'),
	"chapter5-05-bg-01_anime_1":  require('../data/anime/chapter5/05/bg-01/bg01_anime_1.json'),
	"chapter5-06-bg-01_anime_1":  require('../data/anime/chapter5/06/bg-01/bg01_anime_1.json'),
	"chapter5-07-bg-01_anime_1":  require('../data/anime/chapter5/07/bg-01/bg01_anime_1.json'),
	"chapter5-08-bg-01_anime_1":  require('../data/anime/chapter5/08/bg-01/bg01_anime_1.json'),
	"chapter5-10-bg-01_anime_1":  require('../data/anime/chapter5/10/bg-01/bg01_anime_1.json'),
	"chapter5-11-bg-01_anime_1":  require('../data/anime/chapter5/11/bg-01/bg01_anime_1.json'),
	"chapter5-12-obj-01_anime_1":  require('../data/anime/chapter5/12/obj-01/obj01_anime_1.json'),
	"chapter5-12-obj-01_anime_1":  require('../data/anime/chapter5/12/obj-01/obj02_anime_1.json'),
	"chapter5-12-obj-01_anime_1":  require('../data/anime/chapter5/12/obj-01/obj03_anime_1.json'),
	"chapter5-12-obj-01_anime_1":  require('../data/anime/chapter5/12/obj-01/obj04_anime_1.json'),
	"chapter5-13-bg-01_anime_1":  require('../data/anime/chapter5/13/bg-001/bg01_anime_1.json'),

	/* てぃ */
	"tewi-wait":          require('../data/anime/tewi/wait_anime_1'),
	"tewi-reverse_ura":   require('../data/anime/tewi/reverse_ura_anime_1'),
	"tewi-ura_wait":      require('../data/anime/tewi/ura_wait_anime_1'),
	"tewi-reverse_omote": require('../data/anime/tewi/reverse_omote_anime_1'),
	"tewi-reaction_01":   require('../data/anime/tewi/reaction_01_anime_1'),
	"tewi-reaction_02":   require('../data/anime/tewi/reaction_02_anime_1'),
	"tewi-reaction_03":   require('../data/anime/tewi/reaction_03_anime_1'),
	"tewi-reaction_04":   require('../data/anime/tewi/reaction_04_anime_1'),
	"tewi-ura_reaction_01":   require('../data/anime/tewi/ura_reaction_01_anime_1'),
	"tewi-ura_reaction_02":   require('../data/anime/tewi/ura_reaction_02_anime_1'),

	"chapter1-04-obj-01-obj01":  require('../data/anime/chapter1/04/obj-01/obj01_anime_1.json'),
	"chapter1-04-obj-01-obj02":  require('../data/anime/chapter1/04/obj-01/obj02_anime_1.json'),
	"chapter1-04-obj-01-obj03":  require('../data/anime/chapter1/04/obj-01/obj03_anime_1.json'),
	"chapter1-04-obj-01-obj04":  require('../data/anime/chapter1/04/obj-01/obj04_anime_1.json'),

	"chapter1-04-obj-02-obj01":  require('../data/anime/chapter1/04/obj-02/obj01_anime_1.json'),
	"chapter1-04-obj-02-obj02":  require('../data/anime/chapter1/04/obj-02/obj02_anime_1.json'),
	"chapter1-04-obj-02-obj03":  require('../data/anime/chapter1/04/obj-02/obj03_anime_1.json'),
	"chapter1-04-obj-02-obj04":  require('../data/anime/chapter1/04/obj-02/obj04_anime_1.json'),
	"chapter1-04-obj-02-obj05":  require('../data/anime/chapter1/04/obj-02/obj05_anime_1.json'),
	"chapter1-04-obj-02-obj06":  require('../data/anime/chapter1/04/obj-02/obj06_anime_1.json'),

	"chapter1-04-obj-03-obj01":  require('../data/anime/chapter1/04/obj-03/obj01_anime_1.json'),
	"chapter1-04-obj-03-obj02":  require('../data/anime/chapter1/04/obj-03/obj02_anime_1.json'),
	"chapter1-04-obj-03-obj03":  require('../data/anime/chapter1/04/obj-03/obj03_anime_1.json'),
	"chapter1-04-obj-03-obj04":  require('../data/anime/chapter1/04/obj-03/obj04_anime_1.json'),
	"chapter1-04-obj-03-obj05":  require('../data/anime/chapter1/04/obj-03/obj05_anime_1.json'),
	"chapter1-04-obj-03-obj06":  require('../data/anime/chapter1/04/obj-03/obj06_anime_1.json'),

	/* にとり */
	"nitori-wait":          require('../data/anime/nitori/wait_anime_1'),
	"nitori-reverse_ura":   require('../data/anime/nitori/reverse_ura_anime_1'),
	"nitori-ura_wait":      require('../data/anime/nitori/ura_wait_anime_1'),
	"nitori-reverse_omote": require('../data/anime/nitori/reverse_omote_anime_1'),
	"nitori-reaction_01":   require('../data/anime/nitori/reaction_01_anime_1'),
	"nitori-reaction_02":   require('../data/anime/nitori/reaction_02_anime_1'),
	"nitori-reaction_03":   require('../data/anime/nitori/reaction_03_anime_1'),
	"nitori-reaction_04":   require('../data/anime/nitori/reaction_04_anime_1'),
	"nitori-ura_reaction_01":   require('../data/anime/nitori/ura_reaction_01_anime_1'),
	"nitori-ura_reaction_02":   require('../data/anime/nitori/ura_reaction_02_anime_1'),
	"nitori-ura_reaction_03":   require('../data/anime/nitori/ura_reaction_03_anime_1'),

	"chapter1-05-obj-01-obj01":  require('../data/anime/chapter1/05/obj-01/obj01_anime_1.json'),
	"chapter1-05-obj-01-obj02":  require('../data/anime/chapter1/05/obj-01/obj02_anime_1.json'),
	"chapter1-05-obj-01-obj03":  require('../data/anime/chapter1/05/obj-01/obj03_anime_1.json'),
	"chapter1-05-obj-01-obj04":  require('../data/anime/chapter1/05/obj-01/obj04_anime_1.json'),

	"chapter1-06-obj-01-obj01":  require('../data/anime/chapter1/06/obj-01/obj01_anime_1.json'),
	"chapter1-06-obj-01-obj02":  require('../data/anime/chapter1/06/obj-01/obj02_anime_1.json'),
	"chapter1-06-obj-01-obj03":  require('../data/anime/chapter1/06/obj-01/obj03_anime_1.json'),
	"chapter1-06-obj-01-obj04":  require('../data/anime/chapter1/06/obj-01/obj04_anime_1.json'),

	"chapter1-06-obj-04-obj01":  require('../data/anime/chapter1/06/obj-04/obj01_anime_1.json'),

	/* 響子 */
	"kyoko-wait":          require('../data/anime/kyoko/wait_anime_1'),
	"kyoko-reverse_ura":   require('../data/anime/kyoko/reverse_ura_anime_1'),
	"kyoko-ura_wait":      require('../data/anime/kyoko/ura_wait_anime_1'),
	"kyoko-reverse_omote": require('../data/anime/kyoko/reverse_omote_anime_1'),
	"kyoko-reaction_01":   require('../data/anime/kyoko/reaction_01_anime_1'),
	"kyoko-reaction_02":   require('../data/anime/kyoko/reaction_02_anime_1'),
	"kyoko-reaction_03":   require('../data/anime/kyoko/reaction_03_anime_1'),
	"kyoko-reaction_04":   require('../data/anime/kyoko/reaction_04_anime_1'),
	"kyoko-reaction_05":   require('../data/anime/kyoko/reaction_05_anime_1'),
	"kyoko-reaction_06":   require('../data/anime/kyoko/reaction_06_anime_1'),
	"kyoko-reaction_07":   require('../data/anime/kyoko/reaction_07_anime_1'),
	"kyoko-ura_reaction_01":   require('../data/anime/kyoko/ura_reaction_01_anime_1'),
	"kyoko-ura_reaction_02":   require('../data/anime/kyoko/ura_reaction_02_anime_1'),


	"chapter1-08-obj-01-obj00":  require('../data/anime/chapter1/08/obj-01/obj00_anime_1.json'),
	"chapter1-08-obj-01-obj01":  require('../data/anime/chapter1/08/obj-01/obj01_anime_1.json'),
	"chapter1-08-obj-01-obj02":  require('../data/anime/chapter1/08/obj-01/obj02_anime_1.json'),
	"chapter1-08-obj-01-obj03":  require('../data/anime/chapter1/08/obj-01/obj03_anime_1.json'),

	/* 小傘 */
	"kogasa-wait":          require('../data/anime/kogasa/wait_anime_1'),
	"kogasa-reverse_ura":   require('../data/anime/kogasa/reverse_ura_anime_1'),
	"kogasa-ura_wait":      require('../data/anime/kogasa/ura_wait_anime_1'),
	"kogasa-reverse_omote": require('../data/anime/kogasa/reverse_omote_anime_1'),
	"kogasa-reaction_01":   require('../data/anime/kogasa/reaction_01_anime_1'),
	"kogasa-reaction_02":   require('../data/anime/kogasa/reaction_02_anime_1'),
	"kogasa-reaction_03":   require('../data/anime/kogasa/reaction_03_anime_1'),
	"kogasa-reaction_04":   require('../data/anime/kogasa/reaction_04_anime_1'),
	"kogasa-ura_reaction_01":   require('../data/anime/kogasa/ura_reaction_01_anime_1'),
	"kogasa-ura_reaction_02":   require('../data/anime/kogasa/ura_reaction_02_anime_1'),

	"chapter1-09-obj-01-obj01":  require('../data/anime/chapter1/09/obj-01/obj01_anime_1.json'),
	"chapter1-09-obj-01-obj02":  require('../data/anime/chapter1/09/obj-01/obj02_anime_1.json'),
	"chapter1-09-obj-01-obj03":  require('../data/anime/chapter1/09/obj-01/obj03_anime_1.json'),
	"chapter1-09-obj-01-obj04":  require('../data/anime/chapter1/09/obj-01/obj04_anime_1.json'),
	"chapter1-09-obj-01-obj05":  require('../data/anime/chapter1/09/obj-01/obj05_anime_1.json'),
	"chapter1-09-obj-01-obj06":  require('../data/anime/chapter1/09/obj-01/obj06_anime_1.json'),
	"chapter1-09-obj-01-obj07":  require('../data/anime/chapter1/09/obj-01/obj07_anime_1.json'),
	"chapter1-09-obj-01-obj08":  require('../data/anime/chapter1/09/obj-01/obj08_anime_1.json'),

	"chapter1-09-obj-02-obj01":  require('../data/anime/chapter1/09/obj-02/obj01_anime_1.json'),
	"chapter1-09-obj-02-obj02":  require('../data/anime/chapter1/09/obj-02/obj02_anime_1.json'),

	/* 村紗 */
	"murasa-wait":          require('../data/anime/murasa/wait_anime_1'),
	"murasa-reverse_ura":   require('../data/anime/murasa/reverse_ura_anime_1'),
	"murasa-ura_wait":      require('../data/anime/murasa/ura_wait_anime_1'),
	"murasa-reverse_omote": require('../data/anime/murasa/reverse_omote_anime_1'),
	"murasa-reaction_01":   require('../data/anime/murasa/reaction_01_anime_1'),
	"murasa-reaction_02":   require('../data/anime/murasa/reaction_02_anime_1'),
	"murasa-ura_reaction_01":   require('../data/anime/murasa/ura_reaction_01_anime_1'),
	"murasa-ura_reaction_02":   require('../data/anime/murasa/ura_reaction_02_anime_1'),

	"chapter1-10-obj-01-obj01":  require('../data/anime/chapter1/10/obj-01/obj01_anime_1.json'),
	"chapter1-10-obj-01-obj02":  require('../data/anime/chapter1/10/obj-01/obj02_anime_1.json'),
	"chapter1-10-obj-01-obj03":  require('../data/anime/chapter1/10/obj-01/obj03_anime_1.json'),
	"chapter1-10-obj-01-obj04":  require('../data/anime/chapter1/10/obj-01/obj04_anime_1.json'),
	
	/* チルノ */
	"cirno-wait":          require('../data/anime/cirno/wait_anime_1'),
	"cirno-reverse_ura":   require('../data/anime/cirno/reverse_ura_anime_1'),
	"cirno-ura_wait":      require('../data/anime/cirno/ura_wait_anime_1'),
	"cirno-reverse_omote": require('../data/anime/cirno/reverse_omote_anime_1'),
	"cirno-run": require('../data/anime/cirno/run_anime_1'),
	"cirno-reaction_01":   require('../data/anime/cirno/reaction_01_anime_1'),
	"cirno-reaction_02":   require('../data/anime/cirno/reaction_02_anime_1'),
	"cirno-reaction_03":   require('../data/anime/cirno/reaction_03_anime_1'),
	"cirno-reaction_04":   require('../data/anime/cirno/reaction_04_anime_1'),
	"cirno-reaction_05":   require('../data/anime/cirno/reaction_05_anime_1'),
	"cirno-reaction_06":   require('../data/anime/cirno/reaction_06_anime_1'),
	"cirno-reaction_07":   require('../data/anime/cirno/reaction_07_anime_1'),
	"cirno-reaction_08":   require('../data/anime/cirno/reaction_08_anime_1'),
	"cirno-reaction_09":   require('../data/anime/cirno/reaction_09_anime_1'),
	"cirno-ura_reaction_01":   require('../data/anime/cirno/ura_reaction_01_anime_1'),
	"cirno-ura_reaction_02":   require('../data/anime/cirno/ura_reaction_02_anime_1'),
	"cirno-ura_reaction_03":   require('../data/anime/cirno/ura_reaction_03_anime_1'),
	"cirno-ura_reaction_04":   require('../data/anime/cirno/ura_reaction_04_anime_1'),
	"cirno-ura_reaction_05":   require('../data/anime/cirno/ura_reaction_05_anime_1'),
	"cirno-ura_reaction_06":   require('../data/anime/cirno/ura_reaction_06_anime_1'),

	/* フラン */
	"fran-wait":          require('../data/anime/fran/wait_anime_1'),
	"fran-reverse_ura":   require('../data/anime/fran/reverse_ura_anime_1'),
	"fran-ura_wait":      require('../data/anime/fran/ura_wait_anime_1'),
	"fran-reverse_omote": require('../data/anime/fran/reverse_omote_anime_1'),
	"fran-reaction_01":   require('../data/anime/fran/reaction_01_anime_1'),
	"fran-reaction_02":   require('../data/anime/fran/reaction_02_anime_1'),
	"fran-reaction_03":   require('../data/anime/fran/reaction_03_anime_1'),
	"fran-reaction_04":   require('../data/anime/fran/reaction_04_anime_1'),
	"fran-reaction_05":   require('../data/anime/fran/reaction_05_anime_1'),
	"fran-reaction_06":   require('../data/anime/fran/reaction_06_anime_1'),
	"fran-ura_reaction_01":   require('../data/anime/fran/ura_reaction_01_anime_1'),
	"fran-ura_reaction_02":   require('../data/anime/fran/ura_reaction_02_anime_1'),
	"fran-ura_reaction_03":   require('../data/anime/fran/ura_reaction_03_anime_1'),
	"fran-ura_reaction_04":   require('../data/anime/fran/ura_reaction_04_anime_1'),
	"fran-ura_reaction_05":   require('../data/anime/fran/ura_reaction_05_anime_1'),
	"fran-ura_reaction_06":   require('../data/anime/fran/ura_reaction_06_anime_1'),
    
	/* メリー */
	"merry-wait":          require('../data/anime/merry/wait_anime_1'),
	"merry-reaction_01":   require('../data/anime/merry/reaction_01_anime_1'),
	"merry-reaction_02":   require('../data/anime/merry/reaction_02_anime_1'),
	"merry-reaction_03":   require('../data/anime/merry/reaction_03_anime_1'),
	"merry-reaction_04":   require('../data/anime/merry/reaction_04_anime_1'),
	"merry-reaction_05":   require('../data/anime/merry/reaction_05_anime_1'),
	"merry-reaction_06":   require('../data/anime/merry/reaction_06_anime_1'),
	"merry-reaction_07":   require('../data/anime/merry/reaction_07_anime_1'),
	"merry-reaction_08":   require('../data/anime/merry/reaction_08_anime_1'),
	"merry-reaction_09":   require('../data/anime/merry/reaction_09_anime_1'),
	"merry-reaction_10":   require('../data/anime/merry/reaction_10_anime_1'),
	"merry-reaction_11":   require('../data/anime/merry/reaction_11_anime_1'),
	"merry-reaction_12":   require('../data/anime/merry/reaction_12_anime_1'),
	"merry-reaction_13":   require('../data/anime/merry/reaction_13_anime_1'),
    
	/* 蓮子 */
	"renko-wait":          require('../data/anime/renko/wait_anime_1'),
	"renko-reaction_01":   require('../data/anime/renko/reaction_01_anime_1'),
	"renko-reaction_02":   require('../data/anime/renko/reaction_02_anime_1'),
	"renko-reaction_03":   require('../data/anime/renko/reaction_03_anime_1'),
	"renko-reaction_04":   require('../data/anime/renko/reaction_04_anime_1'),
	"renko-reaction_05":   require('../data/anime/renko/reaction_05_anime_1'),
	"renko-reaction_06":   require('../data/anime/renko/reaction_06_anime_1'),
	"renko-reaction_07":   require('../data/anime/renko/reaction_07_anime_1'),
	"renko-reaction_08":   require('../data/anime/renko/reaction_08_anime_1'),
	"renko-reaction_09":   require('../data/anime/renko/reaction_09_anime_1'),
    
	/* 優曇華院 */
	"reisen-wait":          require('../data/anime/reisen/wait_anime_1'),
	"reisen-reaction_01":   require('../data/anime/reisen/reaction_01_anime_1'),
	"reisen-reaction_02":   require('../data/anime/reisen/reaction_02_anime_1'),
	"reisen-reaction_03":   require('../data/anime/reisen/reaction_03_anime_1'),
	"reisen-reaction_04":   require('../data/anime/reisen/reaction_04_anime_1'),
    
	/* てゐリアル */
	"tewireal-wait":          require('../data/anime/tewireal/wait_anime_1'),
	"tewireal-reaction_01":   require('../data/anime/tewireal/reaction_01_anime_1'),
	"tewireal-reaction_02":   require('../data/anime/tewireal/reaction_02_anime_1'),
	"tewireal-reaction_03":   require('../data/anime/tewireal/reaction_03_anime_1'),
	"kanban_wait":                  require('../data/anime/tewireal/kanban_wait_anime_1'),
	"kanban_reaction_01_anime_1":   require('../data/anime/tewireal/kanban_reaction_01_anime_1'),
	"kanban_reaction_02_anime_1":   require('../data/anime/tewireal/kanban_reaction_02_anime_1'),
	"kanban_reaction_03_anime_1":   require('../data/anime/tewireal/kanban_reaction_03_anime_1'),
	"kanban_reaction_04_anime_1":   require('../data/anime/tewireal/kanban_reaction_04_anime_1'),
    
	/* アライグマ */
	"animal_araiguma-wait":          require('../data/anime/animal_araiguma/wait_anime_1'),
	"animal_araiguma-ura_wait":          require('../data/anime/animal_araiguma/ura_wait_anime_1'),
	"animal_araiguma-reverse_omote":          require('../data/anime/animal_araiguma/reverse_omote_anime_1'),
	"animal_araiguma-reverse_ura":          require('../data/anime/animal_araiguma/reverse_ura_anime_1'),
	"animal_araiguma-ura_reaction_01":          require('../data/anime/animal_araiguma/ura_reaction_01_anime_1'),
	"animal_araiguma-ura_reaction_02":          require('../data/anime/animal_araiguma/ura_reaction_02_anime_1'),
    
	/* ハリネズミ */
	"animal_hari-wait":          require('../data/anime/animal_hari/wait_anime_1'),
	"animal_hari-ura_wait":          require('../data/anime/animal_hari/ura_wait_anime_1'),
	"animal_hari-reverse_omote":          require('../data/anime/animal_hari/reverse_omote_anime_1'),
	"animal_hari-reverse_ura":          require('../data/anime/animal_hari/reverse_ura_anime_1'),
	"animal_hari-ura_reaction_01":          require('../data/anime/animal_hari/ura_reaction_01_anime_1'),
    
	/* ハシビロコウ */
	"animal_hashi-wait":          require('../data/anime/animal_hashi/wait_anime_1'),
	"animal_hashi-ura_wait":          require('../data/anime/animal_hashi/ura_wait_anime_1'),
	"animal_hashi-reverse_omote":          require('../data/anime/animal_hashi/reverse_omote_anime_1'),
	"animal_hashi-reverse_ura":          require('../data/anime/animal_hashi/reverse_ura_anime_1'),
	"animal_hashi-ura_reaction_01":          require('../data/anime/animal_hashi/ura_reaction_01_anime_1'),
    
	/* カワウソ */
	"animal_kawa-wait":          require('../data/anime/animal_kawa/wait_anime_1'),
	"animal_kawa-ura_wait":          require('../data/anime/animal_kawa/ura_wait_anime_1'),
	"animal_kawa-reverse_omote":          require('../data/anime/animal_kawa/reverse_omote_anime_1'),
	"animal_kawa-reverse_ura":          require('../data/anime/animal_kawa/reverse_ura_anime_1'),
	"animal_kawa-ura_reaction_01":          require('../data/anime/animal_kawa/ura_reaction_01_anime_1'),
    
	/* コモドオオトカゲ */
	"animal_komodo-wait":          require('../data/anime/animal_komodo/wait_anime_1'),
	"animal_komodo-ura_wait":          require('../data/anime/animal_komodo/ura_wait_anime_1'),
	"animal_komodo-reverse_omote":          require('../data/anime/animal_komodo/reverse_omote_anime_1'),
	"animal_komodo-reverse_ura":          require('../data/anime/animal_komodo/reverse_ura_anime_1'),
	"animal_komodo-ura_reaction_01":          require('../data/anime/animal_komodo/ura_reaction_01_anime_1'),
	"animal_komodo-ura_reaction_02":          require('../data/anime/animal_komodo/ura_reaction_02_anime_1'),

	/* クロヒョウ または パンサー */
	"animal_kuro-wait":          require('../data/anime/animal_kuro/wait_anime_1'),
	"animal_kuro-ura_wait":          require('../data/anime/animal_kuro/ura_wait_anime_1'),
	"animal_kuro-reverse_omote":          require('../data/anime/animal_kuro/reverse_omote_anime_1'),
	"animal_kuro-reverse_ura":          require('../data/anime/animal_kuro/reverse_ura_anime_1'),
	"animal_kuro-ura_reaction_01":          require('../data/anime/animal_kuro/ura_reaction_01_anime_1'),

	/* モグラ */
	"animal_mogura-wait":          require('../data/anime/animal_mogura/wait_anime_1'),
	"animal_mogura-ura_wait":          require('../data/anime/animal_mogura/ura_wait_anime_1'),
	"animal_mogura-reverse_omote":          require('../data/anime/animal_mogura/reverse_omote_anime_1'),
	"animal_mogura-reverse_ura":          require('../data/anime/animal_mogura/reverse_ura_anime_1'),
	"animal_mogura-ura_reaction_01":          require('../data/anime/animal_mogura/ura_reaction_01_anime_1'),
    
	/* シバイヌ */
	"animal_shiba-wait":          require('../data/anime/animal_shiba/wait_anime_1'),
	"animal_shiba-ura_wait":          require('../data/anime/animal_shiba/ura_wait_anime_1'),
	"animal_shiba-reverse_omote":          require('../data/anime/animal_shiba/reverse_omote_anime_1'),
	"animal_shiba-reverse_ura":          require('../data/anime/animal_shiba/reverse_ura_anime_1'),
	"animal_shiba-ura_reaction_01":          require('../data/anime/animal_shiba/ura_reaction_01_anime_1'),
    
	/* ウマ */
	"animal_uma-wait":          require('../data/anime/animal_uma/wait_anime_1'),
	"animal_uma-ura_wait":          require('../data/anime/animal_uma/ura_wait_anime_1'),
	"animal_uma-reverse_omote":          require('../data/anime/animal_uma/reverse_omote_anime_1'),
	"animal_uma-reaction_01":          require('../data/anime/animal_uma/reaction_01_anime_1'),
	"animal_uma-reverse_ura":          require('../data/anime/animal_uma/reverse_ura_anime_1'),
	"animal_uma-ura_reaction_01":          require('../data/anime/animal_uma/ura_reaction_01_anime_1'),

	/* ダークミスト */
	"dark-mist":    require('../data/anime/dark-mist/eff01_anime_1.json'),
};

module.exports = anime_map;

