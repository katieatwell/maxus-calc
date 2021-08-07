const ages = ["30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90"];
const comps = ["$80,000","$85,000","$90,000","$95,000","$100,000","$105,000","$110,000","$115,000","$120,000","$125,000","$130,000","$135,000","$140,000","$145,000","$150,000","$155,000","$160,000","$165,000","$170,000","$175,000","$180,000","$185,000","$190,000","$195,000","$200,000","$205,000","$210,000","$215,000","$220,000","$225,000","$230,000","$235,000","$240,000","$245,000","$250,000","$255,000","$260,000","$265,000","$270,000","$275,000","$280,000","$285,000","$290,000"];
const data = [
    [84452,84752,85052,85352,85652,85952,86252,86552,86852,87152,87452,87752,88052,88352,88652,88952,89252,89552,89852,90152,90452,90752,91052,91352,91652,91952,92252,92552,92852,93152,93452,93752,94052,94352,94652,94952,95252,95552,95852,96152,96452,96752,97052],
    [87497,87797,88097,88397,88697,88997,89297,89597,89897,90197,90497,90797,91097,91397,91697,91997,92297,92597,92897,93197,93497,93797,94097,94397,94697,94997,95297,95597,95897,96197,96497,96797,97097,97397,97697,97997,98297,98597,98897,99197,99497,99797,100097],
    [90698,90998,91298,91598,91898,92198,92498,92798,93098,93398,93698,93998,94298,94598,94898,95198,95498,95798,96098,96398,96698,96998,97298,97598,97898,98198,98498,98798,99098,99398,99698,99998,100298,100598,100898,101198,101498,101798,102098,102398,102698,102998,103298],
    [94061,94361,94661,94961,95261,95561,95861,96161,96461,96761,97061,97361,97661,97961,98261,98561,98861,99161,99461,99761,100061,100361,100661,100961,101261,101561,101861,102161,102461,102761,103061,103361,103661,103961,104261,104561,104861,105161,105461,105761,106061,106361,106661],
    [97597,97897,98197,98497,98797,99097,99397,99697,99997,100297,100597,100897,101197,101497,101797,102097,102397,102697,102997,103297,103597,103897,104197,104497,104797,105097,105397,105697,105997,106297,106597,106897,107197,107497,107797,108097,108397,108697,108997,109297,109597,109897,110197],
    [101313,101613,101913,102213,102513,102813,103113,103413,103713,104013,104313,104613,104913,105213,105513,105813,106113,106413,106713,107013,107313,107613,107913,108213,108513,108813,109113,109413,109713,110013,110313,110613,110913,111213,111513,111813,112113,112413,112713,113013,113313,113613,113913],
    [105219,105519,105819,106119,106419,106719,107019,107319,107619,107919,108219,108519,108819,109119,109419,109719,110019,110319,110619,110919,111219,111519,111819,112119,112419,112719,113019,113319,113619,113919,114219,114519,114819,115119,115419,115719,116019,116319,116619,116919,117219,117519,117819],
    [109324,109624,109924,110224,110524,110824,111124,111424,111724,112024,112324,112624,112924,113224,113524,113824,114124,114424,114724,115024,115324,115624,115924,116224,116524,116824,117124,117424,117724,118024,118324,118624,118924,119224,119524,119824,120124,120424,120724,121024,121324,121624,121924],
    [113639,113939,114239,114539,114839,115139,115439,115739,116039,116339,116639,116939,117239,117539,117839,118139,118439,118739,119039,119339,119639,119939,120239,120539,120839,121139,121439,121739,122039,122339,122639,122939,123239,123539,123839,124139,124439,124739,125039,125339,125639,125939,126239],
    [118176,118476,118776,119076,119376,119676,119976,120276,120576,120876,121176,121476,121776,122076,122376,122676,122976,123276,123576,123876,124176,124476,124776,125076,125376,125676,125976,126276,126576,126876,127176,127476,127776,128076,128376,128676,128976,129276,129576,129876,130176,130476,130776],
    [122944,123244,123544,123844,124144,124444,124744,125044,125344,125644,125944,126244,126544,126844,127144,127444,127744,128044,128344,128644,128944,129244,129544,129844,130144,130444,130744,131044,131344,131644,131944,132244,132544,132844,133144,133444,133744,134044,134344,134644,134944,135244,135544],
    [127956,128256,128556,128856,129156,129456,129756,130056,130356,130656,130956,131256,131556,131856,132156,132456,132756,133056,133356,133656,133956,134256,134556,134856,135156,135456,135756,136056,136356,136656,136956,137256,137556,137856,138156,138456,138756,139056,139356,139656,139956,140256,140556],
    [133225,133525,133825,134125,134425,134725,135025,135325,135625,135925,136225,136525,136825,137125,137425,137725,138025,138325,138625,138925,139225,139525,139825,140125,140425,140725,141025,141325,141625,141925,142225,142525,142825,143125,143425,143725,144025,144325,144625,144925,145225,145525,145825],
    [138764,139064,139364,139664,139964,140264,140564,140864,141164,141464,141764,142064,142364,142664,142964,143264,143564,143864,144164,144464,144764,145064,145364,145664,145964,146264,146564,146864,147164,147464,147764,148064,148364,148664,148964,149264,149564,149864,150164,150464,150764,151064,151364],
    [144586,144886,145186,145486,145786,146086,146386,146686,146986,147286,147586,147886,148186,148486,148786,149086,149386,149686,149986,150286,150586,150886,151186,151486,151786,152086,152386,152686,152986,153286,153586,153886,154186,154486,154786,155086,155386,155686,155986,156286,156586,156886,157186],
    [144789,151007,151307,151607,151907,152207,152507,152807,153107,153407,153707,154007,154307,154607,154907,155207,155507,155807,156107,156407,156707,157007,157307,157607,157907,158207,158507,158807,159107,159407,159707,160007,160307,160607,160907,161207,161507,161807,162107,162407,162707,163007,163307],
    [143775,152040,157742,158042,158342,158642,158942,159242,159542,159842,160142,160442,160742,161042,161342,161642,161942,162242,162542,162842,163142,163442,163742,164042,164342,164642,164942,165242,165542,165842,166142,166442,166742,167042,167342,167642,167942,168242,168542,168842,169142,169442,169742],
    [142713,150907,159101,164807,165107,165407,165707,166007,166307,166607,166907,167207,167507,167807,168107,168407,168707,169007,169307,169607,169907,170207,170507,170807,171107,171407,171707,172007,172307,172607,172907,173207,173507,173807,174107,174407,174707,175007,175307,175607,175907,176207,176507],
    [141600,149720,157840,165960,172219,172519,172819,173119,173419,173719,174019,174319,174619,174919,175219,175519,175819,176119,176419,176719,177019,177319,177619,177919,178219,178519,178819,179119,179419,179719,180019,180319,180619,180919,181219,181519,181819,182119,182419,182719,183019,183319,183619],
    [140436,148479,156521,164564,172606,179996,180296,180596,180896,181196,181496,181796,182096,182396,182696,182996,183296,183596,183896,184196,184496,184796,185096,185396,185696,185996,186296,186596,186896,187196,187496,187796,188096,188396,188696,188996,189296,189596,189896,190196,190496,190796,191096],
    [145719,153680,161642,169603,177564,185525,193487,194957,195257,195557,195857,196157,196457,196757,197057,197357,197657,197957,198257,198557,198857,199157,199457,199757,200057,200357,200657,200957,201257,201557,201857,202157,202457,202757,203057,203357,203657,203957,204257,204557,204857,205157,205457],
    [144447,152324,160200,168077,175953,183830,191706,199583,203522,203822,204122,204422,204722,205022,205322,205622,205922,206222,206522,206822,207122,207422,207722,208022,208322,208622,208922,209222,209522,209822,210122,210422,210722,211022,211322,211622,211922,212222,212522,212822,213122,213422,213722],
    [143118,150906,158694,166481,174269,182057,189845,197633,205421,212510,212810,213110,213410,213710,214010,214310,214610,214910,215210,215510,215810,216110,216410,216710,217010,217310,217610,217910,218210,218510,218810,219110,219410,219710,220010,220310,220610,220910,221210,221510,221810,222110,222410],
    [141731,149427,157122,164817,172513,180208,187904,195599,203295,210990,218685,222246,222546,222846,223146,223446,223746,224046,224346,224646,224946,225246,225546,225846,226146,226446,226746,227046,227346,227646,227946,228246,228546,228846,229146,229446,229746,230046,230346,230646,230946,231246,231546],
    [140287,147886,155485,163084,170683,178282,185881,193480,201079,208678,216278,223877,231476,232450,232750,233050,233350,233650,233950,234250,234550,234850,235150,235450,235750,236050,236350,236650,236950,237250,237550,237850,238150,238450,238750,239050,239350,239650,239950,240250,240550,240850,241150],
    [138783,146282,153781,161280,168779,176278,183777,191276,198774,206273,213772,221271,228770,236269,242847,243147,243447,243747,244047,244347,244647,244947,245247,245547,245847,246147,246447,246747,247047,247347,247647,247947,248247,248547,248847,249147,249447,249747,250047,250347,250647,250947,251247],
    [137230,144625,152020,159416,166811,174206,181602,188997,196392,203788,211183,218578,225974,233369,240764,248160,254064,254364,254664,254964,255264,255564,255864,256164,256464,256764,257064,257364,257664,257964,258264,258564,258864,259164,259464,259764,260064,260364,260664,260964,261264,261564,261864],
    [135633,142922,150211,157500,164788,172077,179366,186655,193944,201233,208522,215810,223099,230388,237677,244966,252255,259544,265826,266126,266426,266726,267026,267326,267626,267926,268226,268526,268826,269126,269426,269726,270026,270326,270626,270926,271226,271526,271826,272126,272426,272726,273026],
    [133984,141163,148342,155521,162700,169879,177058,184236,191415,198594,205773,212952,220131,227310,234489,241668,248847,256026,263205,270384,277563,278461,278761,279061,279361,279661,279961,280261,280561,280861,281161,281461,281761,282061,282361,282661,282961,283261,283561,283861,284161,284461,284761],
    [132283,139349,146414,153480,160545,167611,174676,181742,188807,195873,202938,210004,217069,224135,231201,238266,245332,252397,259463,266528,273594,280659,287725,291400,291700,292000,292300,292600,292900,293200,293500,293800,294100,294400,294700,295000,295300,295600,295900,296200,296500,296800,297100],
    [130530,137479,144428,151376,158325,165274,172222,179171,186120,193069,200017,206966,213915,220863,227812,234761,241709,248658,255607,262555,269504,276453,283401,290350,297299,304248,305272,305572,305872,306172,306472,306772,307072,307372,307672,307972,308272,308572,308872,309172,309472,309772,310072],
    [128728,135557,142386,149214,156043,162871,169700,176528,183357,190186,197014,203843,210671,217500,224328,231157,237985,244814,251643,258471,265300,272128,278957,285785,292614,299443,306271,313100,319512,319812,320112,320412,320712,321012,321312,321612,321912,322212,322512,322812,323112,323412,323712],
    [126882,133588,140293,146999,153704,160410,167115,173821,180526,187232,193937,200643,207348,214054,220759,227465,234170,240876,247581,254287,260992,267698,274403,281109,287814,294520,301225,307931,314636,321342,328047,334753,335053,335353,335653,335953,336253,336553,336853,337153,337453,337753,338053],
    [124993,131573,138152,144732,151311,157891,164470,171050,177629,184209,190789,197368,203948,210527,217107,223686,230266,236845,243425,250004,256584,263164,269743,276323,282902,289482,296061,302641,309220,315800,322379,328959,329259,329559,329859,330159,330459,330759,331059,331359,331659,331959,332259],
    [123064,129514,135965,142416,148867,155318,161769,168220,174671,181122,187573,194024,200474,206925,213376,219827,226278,232729,239180,245631,252082,258533,264984,271434,277885,284336,290787,297238,303689,310140,316591,323042,323342,323642,323942,324242,324542,324842,325142,325442,325742,326042,326342],
    [121084,127403,133722,140041,146360,152679,158998,165317,171636,177955,184274,190593,196912,203231,209550,215869,222188,228507,234826,241145,247464,253783,260101,266420,272739,279058,285377,291696,298015,304334,310653,316972,317272,317572,317872,318172,318472,318772,319072,319372,319672,319972,320272],
    [119055,125239,131422,137606,143790,149973,156157,162341,168524,174708,180891,187075,193259,199442,205626,211810,217993,224177,230361,236544,242728,248912,255095,261279,267463,273646,279830,286014,292197,298381,304565,310748,316932,323116,329299,332016,332316,332616,332916,333216,333516,333816,334116],
    [116978,123023,129068,135113,141158,147204,153249,159294,165339,171384,177429,183475,189520,195565,201610,207655,213701,219746,225791,231836,237881,243926,249972,256017,262062,268107,274152,280198,286243,292288,298333,304378,310423,316469,322514,328559,334604,340649,346694,347752,348052,348352,348652],
    [114845,120748,126651,132554,138456,144359,150262,156165,162068,167971,173874,179777,185680,191583,197486,203389,209292,215195,221098,227001,232904,238807,244710,250613,256516,262419,268322,274225,280128,286031,291934,297837,303740,309643,315546,321449,327352,333255,339158,345061,350964,356867,362769],
    [112655,118412,124169,129926,135683,141440,147197,152954,158711,164468,170225,175982,181739,187496,193253,199010,204767,210524,216281,222038,227795,233552,239309,245066,250823,256580,262337,268094,273851,279608,285365,291122,296879,302636,308393,314150,319907,325664,331422,337179,342936,348693,354450],
    [110410,116017,121625,127232,132839,138447,144054,149662,155269,160876,166484,172091,177698,183306,188913,194520,200128,205735,211342,216950,222557,228164,233772,239379,244986,250594,256201,261808,267416,273023,278630,284238,289845,295452,301060,306667,312274,317882,323489,329096,334704,340311,345918],
    [108110,113564,119018,124472,129926,135380,140834,146288,151742,157196,162650,168104,173557,179011,184465,189919,195373,200827,206281,211735,217189,222643,228097,233551,239005,244459,249913,255367,260821,266275,271729,277183,282637,288091,293545,298999,304453,309907,315361,320815,326269,331723,337177],
    [105758,111055,116352,121649,126946,132243,137541,142838,148135,153432,158729,164026,169324,174621,179918,185215,190512,195809,201107,206404,211701,216998,222295,227592,232890,238187,243484,248781,254078,259375,264673,269970,275267,280564,285861,291159,296456,301753,307050,312347,317644,322942,328239],
    [103357,108494,113631,118769,123906,129043,134180,139317,144454,149592,154729,159866,165003,170140,175277,180414,185552,190689,195826,200963,206100,211237,216374,221512,226649,231786,236923,242060,247197,252334,257472,262609,267746,272883,278020,283157,288294,293432,298569,303706,308843,313980,319117],
    [100913,105887,110861,115835,120810,125784,130758,135732,140706,145681,150655,155629,160603,165577,170552,175526,180500,185474,190448,195422,200397,205371,210345,215319,220293,225268,230242,235216,240190,245164,250139,255113,260087,265061,270035,275010,279984,284958,289932,294906,299880,304855,309829],
    [98429,103238,108047,112855,117664,122472,127281,132090,136898,141707,146515,151324,156133,160941,165750,170559,175367,180176,184984,189793,194602,199410,204219,209028,213836,218645,223453,228262,233071,237879,242688,247497,252305,257114,261922,266731,271540,276348,281157,285965,290774,295583,300391],
    [95912,100553,105193,109834,114475,119116,123757,128397,133038,137679,142320,146961,151601,156242,160883,165524,170165,174805,179446,184087,188728,193369,198009,202650,207291,211932,216573,221213,225854,230495,235136,239776,244417,249058,253699,258340,262980,267621,272262,276903,281544,286184,290825],
    [93368,97839,102310,106781,111253,115724,120195,124666,129137,133608,138080,142551,147022,151493,155964,160436,164907,169378,173849,178320,182792,187263,191734,196205,200676,205147,209619,214090,218561,223032,227503,231975,236446,240917,245388,249859,254331,258802,263273,267744,272215,276686,281158],
    [90805,95105,99405,103706,108006,112306,116607,120907,125207,129507,133808,138108,142408,146709,151009,155309,159610,163910,168210,172511,176811,181111,185412,189712,194012,198312,202613,206913,211213,215514,219814,224114,228415,232715,237015,241316,245616,249916,254217,258517,262817,267117,271418],
    [88231,92360,96489,100617,104746,108875,113004,117132,121261,125390,129519,133647,137776,141905,146034,150162,154291,158420,162549,166677,170806,174935,179064,183192,187321,191450,195579,199707,203836,207965,212094,216222,220351,224480,228609,232737,236866,240995,245124,249252,253381,257510,261639],
    [85657,89614,93571,97528,101486,105443,109400,113357,117314,121271,125228,129186,133143,137100,141057,145014,148971,152928,156886,160843,164800,168757,172714,176671,180628,184585,188543,192500,196457,200414,204371,208328,212285,216243,220200,224157,228114,232071,236028,239985,243943,247900,251857],
    [83095,86881,90667,94454,98240,102026,105813,109599,113385,117172,120958,124744,128531,132317,136103,139890,143676,147462,151248,155035,158821,162607,166394,170180,173966,177753,181539,185325,189112,192898,196684,200471,204257,208043,211830,215616,219402,223189,226975,230761,234547,238334,242120],
    [80542,84158,87775,91391,95007,98623,102239,105855,109472,113088,116704,120320,123936,127552,131168,134785,138401,142017,145633,149249,152865,156482,160098,163714,167330,170946,174562,178178,181795,185411,189027,192643,196259,199875,203492,207108,210724,214340,217956,221572,225188,228805,232421],
    [78010,81457,84905,88352,91799,95247,98694,102141,105589,109036,112483,115931,119378,122825,126273,129720,133167,136615,140062,143509,146956,150404,153851,157298,160746,164193,167640,171088,174535,177982,181430,184877,188324,191772,195219,198666,202114,205561,209008,212456,215903,219350,222798],
    [75511,78792,82072,85353,88634,91914,95195,98476,101757,105037,108318,111599,114879,118160,121441,124722,128002,131283,134564,137845,141125,144406,147687,150967,154248,157529,160810,164090,167371,170652,173932,177213,180494,183775,187055,190336,193617,196898,200178,203459,206740,210020,213301],
    [73058,76175,79292,82410,85527,88644,91761,94879,97996,101113,104230,107347,110465,113582,116699,119816,122933,126051,129168,132285,135402,138519,141637,144754,147871,150988,154105,157223,160340,163457,166574,169691,172809,175926,179043,182160,185277,188395,191512,194629,197746,200864,203981],
    [70664,73621,76579,79536,82494,85452,88409,91367,94324,97282,100239,103197,106155,109112,112070,115027,117985,120942,123900,126858,129815,132773,135730,138688,141645,144603,147561,150518,153476,156433,159391,162349,165306,168264,171221,174179,177136,180094,183052,186009,188967,191924,194882],
    [68342,71145,73948,76751,79554,82356,85159,87962,90765,93568,96371,99173,101976,104779,107582,110385,113187,115990,118793,121596,124399,127202,130004,132807,135610,138413,141216,144019,146821,149624,152427,155230,158033,160835,163638,166441,169244,172047,174850,177652,180455,183258,186061],
    [66107,68761,71415,74069,76723,79377,82030,84684,87338,89992,92646,95300,97953,100607,103261,105915,108569,111223,113876,116530,119184,121838,124492,127146,129799,132453,135107,137761,140415,143069,145722,148376,151030,153684,156338,158992,161645,164299,166953,169607,172261,174914,177568],
    [63972,66484,68995,71507,74018,76530,79041,81552,84064,86575,89087,91598,94110,96621,99133,101644,104156,106667,109179,111690,114202,116713,119225,121736,124248,126759,129271,131782,134293,136805,139316,141828,144339,146851,149362,151874,154385,156897,159408,161920,164431,166943,169454],
    [61949,64325,66702,69079,71455,73832,76208,78585,80961,83338,85715,88091,90468,92844,95221,97598,99974,102351,104727,107104,109481,111857,114234,116610,118987,121363,123740,126117,128493,130870,133246,135623,138000,140376,142753,145129,147506,149883,152259,154636,157012,159389,161765]
];