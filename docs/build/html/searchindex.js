Search.setIndex({docnames:["advanced","api","api/flow","api/mcmc","api/plotting","api/sampler","api/scaler","api/tools","background","examples","faq","index","install","pages/quickstart","tutorials","tutorials/fitting","tutorials/model_comparison"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["advanced.rst","api.rst","api/flow.rst","api/mcmc.rst","api/plotting.rst","api/sampler.rst","api/scaler.rst","api/tools.rst","background.rst","examples.rst","faq.rst","index.rst","install.rst","pages/quickstart.ipynb","tutorials.rst","tutorials/fitting.ipynb","tutorials/model_comparison.ipynb"],objects:{"pocomc.Sampler":[[5,1,1,"","add_samples"],[5,1,1,"","load_state"],[5,2,1,"","results"],[5,1,1,"","run"],[5,1,1,"","save_state"],[5,1,1,"","validate_vectorization_settings"]],"pocomc.flow":[[2,0,1,"","Flow"],[2,3,1,"","compute_loss"],[2,3,1,"","fit"]],"pocomc.flow.Flow":[[2,1,1,"","create"],[2,1,1,"","fit"],[2,1,1,"","forward"],[2,1,1,"","inverse"],[2,1,1,"","logprob"],[2,1,1,"","sample"],[2,1,1,"","validate_config"]],"pocomc.maf":[[2,0,1,"","BatchNorm"],[2,0,1,"","FlowSequential"],[2,0,1,"","LinearMaskedCoupling"],[2,0,1,"","MADE"],[2,0,1,"","MAF"],[2,0,1,"","MaskedLinear"],[2,0,1,"","RealNVP"],[2,3,1,"","create_masks"]],"pocomc.maf.BatchNorm":[[2,1,1,"","forward"],[2,1,1,"","inverse"]],"pocomc.maf.FlowSequential":[[2,1,1,"","forward"],[2,1,1,"","inverse"]],"pocomc.maf.LinearMaskedCoupling":[[2,1,1,"","forward"],[2,1,1,"","inverse"]],"pocomc.maf.MADE":[[2,2,1,"","base_dist"],[2,1,1,"","forward"],[2,1,1,"","inverse"],[2,1,1,"","log_prob"]],"pocomc.maf.MAF":[[2,2,1,"","base_dist"],[2,1,1,"","forward"],[2,1,1,"","inverse"],[2,1,1,"","log_prior"],[2,1,1,"","log_prob"]],"pocomc.maf.MaskedLinear":[[2,1,1,"","extra_repr"],[2,1,1,"","forward"]],"pocomc.maf.RealNVP":[[2,2,1,"","base_dist"],[2,1,1,"","forward"],[2,1,1,"","inverse"],[2,1,1,"","log_prior"],[2,1,1,"","log_prob"]],"pocomc.mcmc":[[3,0,1,"","Pearson"],[3,3,1,"","log_prob"],[3,3,1,"","metropolis"],[3,3,1,"","preconditioned_metropolis"]],"pocomc.mcmc.Pearson":[[3,1,1,"","get"]],"pocomc.plotting":[[4,3,1,"","corner"],[4,3,1,"","run"],[4,3,1,"","trace"]],"pocomc.scaler":[[6,0,1,"","Reparameterise"]],"pocomc.scaler.Reparameterise":[[6,1,1,"","apply_boundary_conditions"],[6,1,1,"","fit"],[6,1,1,"","forward"],[6,1,1,"","inverse"]],"pocomc.tools":[[7,0,1,"","FunctionWrapper"],[7,0,1,"","ProgressBar"],[7,3,1,"","compute_ess"],[7,3,1,"","increment_logz"],[7,3,1,"","resample_equal"]],"pocomc.tools.ProgressBar":[[7,1,1,"","close"],[7,1,1,"","update_iter"],[7,1,1,"","update_stats"]],pocomc:[[5,0,1,"","Sampler"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property","3":"py:function"},terms:{"0":[0,2,4,5,6,7,8,11,13,15,16],"00":[0,13,16],"000237":[],"000244":[],"000256":[],"000496":[],"000515":[],"000759":[],"000763":[],"000786":[],"001":2,"00103":[],"00104":[],"00107":[],"00132":[],"00133":[],"00137":[],"00162":[],"00164":[],"00168":[],"00195":[],"00198":[],"00203":[],"00231":[],"00234":[],"00239":0,"0027":[],"00274":[],"00279":[],"00314":[],"00318":[],"00323":[],"0036":[],"00365":[],"00369":[],"00412":[],"00417":[],"00468":[],"00476":[],"0053":[],"00543":[],"00602":[],"00619":[],"00682":[],"00705":[],"00773":[],"00802":[],"00876":[],"0091":[],"00997":[],"01":16,"0103":[],"0113":[],"0116":[],"012":[],"0127":[],"0132":[],"0144":[],"015":[],"0162":[],"0169":[],"0182":[],"019":[],"02":16,"0205":[],"0214":[],"023":[],"0241":[],"0259":[],"0272":[],"0291":[],"02it":[],"03":16,"0308":[],"0328":[],"035":[],"0368":16,"0371":[],"0396":[],"03it":[],"04":[13,16],"0419":[],"0446":[],"0473":[],"05":[2,7,13],"0533":[],"0561":[],"05652":11,"05660":11,"06":13,"0601":[],"063":[],"0674":[],"07":11,"0709":[],"0753":[],"08":[2,16],"0802":[],"0842":[],"084835":15,"09":16,"0906":[],"0945":[],"0it":[],"0th":0,"1":[0,2,4,5,6,7,8,11,13,15,16],"10":[0,4,5,13,15,16],"100":[0,2,15,16],"1000":[0,2,5,8,13,15,16],"101000":[],"102":[],"102000":[],"103000":[],"104000":[],"105000":[],"106":[],"106000":[],"107000":[],"108000":[],"109000":[],"10d":[9,13],"10it":[],"11":11,"11000":[],"110000":[],"111000":[],"112000":[],"113000":[],"114":[],"114000":[],"115":[],"115000":[],"116000":[],"117000":[],"118":[],"118000":[],"119":[],"119000":[],"11it":[],"12":[11,16],"120":[],"12000":[],"120000":[],"121000":[],"122":[],"122000":[],"123000":[],"124000":[],"125000":[],"126000":[],"127000":[],"128":[],"128000":[],"129000":[],"12it":[],"13":[],"13000":[],"130000":[],"131000":[],"132000":[],"133":[],"133000":[],"134000":[],"135000":16,"136000":[],"137000":[],"1372351":15,"138000":[],"139000":[],"13it":[],"14":[15,16],"14000":[],"140000":16,"141000":[],"142000":[],"143":[],"143000":[],"144000":[],"145000":[],"14550509":15,"146000":[],"147000":[],"148":[],"148000":[],"149000":[],"14it":[],"15":7,"15000":[],"150000":[],"151000":[],"152000":[],"153000":[],"154000":[],"155000":[],"156000":[],"157000":[],"158000":[],"159":[],"159000":[],"15it":[],"16":[15,16],"160":[],"16000":[],"160000":[],"161000":[],"162":[],"162000":[],"163000":[],"164000":[],"165":[],"165000":[],"166":[],"166000":[],"167000":[],"168":[],"168000":[],"169000":[],"16it":[],"17":[0,13],"17000":[],"170000":[],"171000":[],"172000":[],"173":[],"173000":[],"174":[],"174000":[],"175000":[],"176000":[],"177":[],"177000":[],"178":[],"178000":[],"179":[],"179000":[],"17it":[],"18":0,"18000":[],"180000":[],"181000":[],"182":[],"182000":[],"183000":[],"184000":[],"185":[],"185000":[],"186":[],"186000":[],"187":[],"187000":[],"188000":[],"189":[],"189000":[],"18it":[],"19":[],"19000":[],"190000":[],"191000":[],"192":[],"192000":[],"193":[],"193000":[],"194":[],"194000":[],"195000":[],"196":[],"196000":[],"197000":[],"198":[],"198000":[],"199000":[],"19it":16,"1e":[0,2],"1it":13,"2":[0,2,4,5,6,7,8,13,15,16],"20":2,"200":4,"2000":[0,15,16],"2006":7,"201000":[],"202":[],"202000":[],"2022":11,"203000":[],"2037325":15,"204":[],"204000":[],"205":[],"205000":[],"206":[],"206000":[],"207":[],"207000":[],"208":[],"208000":[],"2086":16,"209":[],"209000":[],"20it":[],"21":16,"21000":[],"210000":[],"211":[],"211000":[],"212":[],"212000":[],"213":[],"213000":[],"214":[],"214000":[],"215":[],"215000":[],"216":[],"216000":[],"217":[],"217000":[],"218":13,"218000":[],"219":[],"219000":[],"21it":13,"22":11,"220":[],"22000":[],"220000":[],"2207":11,"221":[],"221000":[],"222":[],"222000":[],"223":[],"223000":[],"224":[],"224000":[],"225":[],"225000":[],"226":16,"226000":[],"227":[],"227000":[],"228":[],"228000":[],"229":[],"229000":[],"22it":[],"23":[],"230":[],"23000":[],"230000":[],"231":[],"231000":[],"232":0,"232000":[],"233":[],"233000":[],"234":[],"234000":[],"235":[],"235000":[],"236":[],"236000":[],"237":[],"237000":[],"238":[],"238000":[],"239":13,"239000":[],"23it":[],"24":[],"24000":[],"240000":[],"241":[],"241000":[],"242":[],"242000":[],"243":16,"243000":[],"244":[],"244000":[],"245":[],"245000":[],"246":[],"246000":[],"247":[],"247000":[],"248":[],"248000":[],"249":[],"249000":[],"24it":[],"25":[],"25000":[],"250000":[],"251":16,"251000":[],"252":[],"252000":[],"253":[],"253000":[],"254":[],"254000":[],"255":[],"255000":[],"256":[],"256000":[],"257":[],"257000":[],"258":[],"258000":[],"259":[],"259000":[],"25it":[],"26":[],"26000":[],"260000":[],"261":16,"261000":[],"262":[],"262000":[],"263":[],"263000":[],"264":[],"264000":[],"265":[],"265000":[],"266":[],"266000":[],"267":[],"267000":[],"268":[],"268000":[],"269":[],"269000":[],"2690071":15,"26it":[],"27":[],"27000":[],"270000":[],"271":[],"271000":[],"272":[],"272000":[],"273":[],"273000":[],"274":[],"274000":[],"275":[],"275000":[],"276":[],"276000":[],"277":[],"277000":[],"278":16,"278000":[],"279":[],"279000":[],"27it":[],"28":[],"28000":[],"280000":[],"281000":[],"282000":[],"283000":[],"284":[],"284000":[],"285000":[],"286000":[],"287000":[],"288000":[],"289000":[],"28it":[],"29":16,"29000":[],"290000":[],"291000":[],"292000":[],"293000":[],"294000":[],"295000":[],"296000":[],"297000":[],"298000":[],"299000":[],"29it":[],"2d":[],"2e":[],"2it":16,"3":[0,2,4,7,11,13,16],"30":[0,2,13],"300":[15,16],"3000":[],"301000":[],"302000":[],"303000":[],"304000":[],"305000":[],"306000":[],"307000":[],"308000":[],"309000":[],"30it":[],"31":16,"31000":[],"310000":[],"311000":[],"312":[],"312000":[],"313000":[],"317000":[],"318":[],"318000":[],"31it":[],"32":[],"32000":[],"323000":[],"325221246":16,"32it":[],"33":[],"33000":[],"33it":[],"34":[],"34000":[],"349":[],"34it":[],"35":[],"35000":0,"356":[],"35it":16,"36":[],"36000":[],"36it":[],"37":[],"37000":[],"374":[],"375":[],"376":[],"377":[],"378":[],"37it":[],"38":[],"38000":[],"38it":[],"39":[],"39000":[],"39it":[],"3e":[],"3it":[],"4":[0,2,7,13,15,16],"40":[],"4000":[],"40it":16,"41":[],"41000":[],"41it":[],"42":16,"42000":[],"42it":[],"43":[],"43000":[],"434":[],"43it":[],"44":[],"44000":[],"449":[],"44it":[],"45":[],"45000":[],"45it":[],"46":[],"46000":[],"46it":[],"47":[],"47000":[],"47it":[],"48":[],"48000":[],"485":[],"48it":16,"49":[],"49000":[],"49it":[],"4e":[],"4it":[],"5":[0,2,13,15,16],"50":[0,15,16],"5000":[],"504":[],"504000":[],"509000":[],"50it":[],"51":[],"51000":[],"51it":[],"52":0,"52000":[],"5217232":15,"52it":[],"53":[],"53000":[],"53it":[],"54":[],"54000":[],"541":[],"54it":[],"55":[],"55000":[],"55it":[],"56":16,"56000":[],"562":[],"56it":[],"57":[],"57000":[],"57it":[],"58":[],"58000":[],"587":[],"58it":[],"59":[],"59000":[],"59it":[],"5e":[],"5it":[],"5th":0,"6":[0,2,7,13,15,16],"60":[],"6000":[],"605":[],"60it":[],"61":[],"61000":[],"611000":13,"616000":13,"61it":[],"62":[],"62000":[],"629":[],"63":[],"63000":[],"64":[],"64000":[],"65":[],"65000":[],"66":[],"66000":[],"665":16,"668":16,"66it":[],"67":[],"67000":[],"6749852":15,"676":[],"67it":13,"68":[],"68000":[],"685":16,"69":[],"69000":[],"691":16,"69it":[],"6e":[],"6it":0,"7":[],"70":[],"7000":[],"703":[],"704":[],"705":[],"709":[],"70it":[],"71":[],"71000":16,"711":[],"712":[],"713":[],"714":[],"715":[],"716":[],"717":[],"718":[],"719":[],"71it":[],"72":[],"72000":[],"721":[],"722":[],"723":[],"724":[],"725":[],"726":[],"727":[],"728":0,"729":[],"73":[],"73000":[],"731":[],"732":[],"733":[],"734":[],"735":[],"736":[],"737":[],"738":13,"739":[],"73it":[],"74":[],"74000":[],"741":[],"742":[],"743":[],"744":16,"745":[],"746":[],"747":13,"748":[],"749":[],"75":[0,5,8,13,15,16],"75000":[],"751":[],"752":[],"753":[],"754":[],"755":[],"756":[],"757":[],"758":[],"759":[],"76":16,"76000":[],"761":[],"762":[],"763":[],"764":[],"765":[],"766":[],"767":[],"769":[],"76it":[],"77":[],"77000":[],"771":[],"772":[],"773":[],"774":[],"775":[],"776":[],"777":[],"778":[],"779":[],"78":[],"78000":[],"781":[],"78184247":15,"782":[],"784":[],"785":[],"786":[],"787":[],"788":[],"789":[],"79":[],"79000":[],"791":[],"792":[],"793":[],"794":[],"795":[],"796":[],"798":[],"799":[],"7e":[],"7it":[],"8":[0,2,15,16],"8000":[],"801":[],"803":[],"805":[],"808":[],"809":[],"81":[],"81000":[],"811":[],"812":[],"813":[],"814":[],"815":[],"816":[],"817":[],"818":[],"819":[],"82":[],"82000":[],"821":[],"822":[],"823":[],"824":[],"825":[],"826":[],"827":[],"828":[],"829":[],"82it":[],"83":[],"83000":16,"831":[],"832":[],"833":[],"835":[],"836":[],"837":[],"838":[],"839":[],"84":[],"84000":[],"841":[],"842":[],"843":[],"844":[],"845":[],"846":[],"847":[],"848":[],"849":[],"85":[],"85000":[],"851":[],"852":[],"853":[],"854":[],"855":[],"856":[],"857":[],"858":[],"859":[],"85it":[],"86":[],"86000":[],"861":[],"862":[],"863":[],"864":[],"865":[],"866":[],"867":[],"868":[],"869":[],"86it":[],"87":[],"87000":16,"871":[],"872":[],"873":[],"874":[],"875":16,"876":[],"877":[],"878":[],"879":[],"87it":[],"88":[],"88000":[],"881":[],"882":[],"883":[],"884":[],"885":[],"886":[],"887":[],"888":[],"889":[],"89":[],"89000":[],"891":[],"892":[],"893":[],"894":[],"895":[],"896":[],"897":[],"898":[],"899":[],"8e":[],"8it":[],"9":[0,2,16],"90":[],"9000":[],"901":[],"902":[],"903":[],"904":[],"905":[],"906":[],"907":[],"908":[],"909":[],"90it":[],"91":[],"91000":[],"911":[],"912":[],"914":[],"915":[],"917":[],"918":[],"919":[],"92":[],"92000":[],"922":[],"923":[],"924":[],"925":[],"926":[],"927":[],"928":[],"929":[],"93":[],"93000":[],"931":[],"932":[],"933":[],"934":[],"935":[],"936":[],"937":[],"938":[],"939":[],"93it":[],"94":[],"94000":[],"941":[],"942":[],"943":[],"944":[],"945":[],"946":[],"947":[],"948":[],"949":[],"95":[0,5,8,13,15,16],"95000":[],"951":16,"952":[],"953":[],"954":[],"955":[],"956":[],"957":[],"958":[],"959":[],"96":[],"96000":[],"961":[],"962":[],"963":[],"964":0,"965":[],"967":[],"968":[],"969":16,"96it":[],"97":15,"97000":[],"971":[],"973":[],"974":[],"975":[],"976":[],"977":[],"978":[],"979":[],"97it":16,"98":[],"98000":[],"985":[],"986":[],"987":[],"988":[],"99":[],"99000":[],"991":16,"992":[],"994":[],"995":[],"996":[],"997":[],"998":13,"999":[],"9e":[],"9it":[],"boolean":0,"case":[0,5,6],"class":[0,2,5,6,7],"default":[0,2,4,5,6,7,8],"do":[0,8,11,16],"final":[0,8,13,15,16],"float":[2,3,4,5,7],"function":[5,8,15,16],"import":[0,8,13,15,16],"int":[2,4,5,6,7,8],"long":[0,8],"new":[7,15],"return":[0,2,3,4,5,6,7,13,15,16],"short":[],"true":[0,2,4,5,6,7,13,15,16],"while":[],A:[0,8,11,15,16],As:[8,15],By:0,For:[0,8,11],If:[0,2,4,5,11],In:[0,8,15,16],It:16,One:0,The:[0,2,3,4,5,6,8,9,11,12,13,15,16],Their:16,Then:[0,8],These:0,To:[0,2,8],_:[5,8,16],_particl:16,_train:[],_umath_linalg:16,ab:2,abl:0,about:[0,5],abov:[0,5],acceler:11,accept:[0,2,5,13,15,16],access:13,accord:[2,5,8],achiev:8,activ:2,actual:[0,7],ad:16,adam:2,adapt:[0,3,5,8],add:[0,13,15,16],add_sampl:[0,5,13,15,16],addiit:[],addit:[0,2,4,5,15,16],address:8,admonit:[],advanc:[9,11],advis:8,affect:[0,8],affin:6,aforement:0,afterward:[],again:0,algorithm:[3,8],all:[0,2,4,5,6,7,16],allow:[0,8],allthough:9,along:15,alpha:15,alreadi:15,also:[0,7,15],altern:[0,12],although:[],among:0,amplitud:[15,16],an:[0,2,5,8,15,16],anaconda3:16,analysi:13,angular:16,ani:[0,4,5,13,15,16],anneal:0,answer:10,anyth:0,anywai:[],apart:0,api:[0,4,11],appear:7,append:15,appli:6,applic:0,apply_boundary_condit:6,approxim:8,ar:[0,2,4,5,6,7,8,9,11,16],arg:[2,7],argsort:[15,16],argument:[0,2,4,5,7,15,16],aris:[0,6],around:[],arrai:[0,3,5,6,7,15,16],articl:11,arxiv:11,ask:15,aspect:9,assess:15,associ:8,assum:15,assumpt:16,astronom:11,astronomi:11,attempt:15,attent:0,auto:[],automat:[4,5],autonotebook:[],autoregress:[],avail:[0,9,11,15,16],avoid:0,axi:[13,15],b:[0,3,6,15,16],back:8,background:[0,11],backward:[],bar:[0,5],base:[0,2,8],base_dist:2,basic:[4,8],batch:0,batch_norm:2,batch_siz:[0,2],batchnorm:2,bay:8,bayesian:[0,11],befor:2,beggin:0,begin:[0,15,16],below:[0,3,5],benefit:0,beta:[0,3,5,8,13,16],beta_:8,better:0,between:[2,3,5,7,8],beutler:11,beyond:4,bf:16,bf_:[8,16],bibtex:11,bimod:9,bin:4,block:[0,2],bool:[2,4,5,6,7],both:[0,2,5,6,8,9,16],bound:[5,6,13],boundari:[0,5,6],bounds_extend:16,bounds_simpl:16,bridge_sampl:[],bug:11,build:2,c0:[],c:0,calcul:[0,5],call:[0,5,8,13,16],callabl:[5,7],can:[0,5,6,8,9,11,12,13,15,16],cannot:16,care:[0,8],carlo:[5,9,11],caveat:16,cc:8,ceil:7,cell:[],centag:7,certain:2,chain:8,challeng:[8,9,11],chanc:16,chang:[0,5,6],check:[5,11],check_shap:[],choic:0,chose:0,ci:15,cinv:0,cite:11,clear:9,clip:[0,2],clip_grad:[],clip_grad_norm:[0,2],clip_grad_norm_:[],clone:12,close:7,closer:0,cluster:0,co:[15,16],code:[0,9,11],coeffici:[3,5,8],collect:[0,2,8,10],color:[4,15],com:12,combin:8,command:0,common:[0,8,9,10,16],commonli:[0,9],compar:[3,14],comparison:[0,11],compat:[],complet:[0,4,16],compon:[0,9],comput:[0,3,4,13,15,16],compute_ess:7,compute_loss:2,cond_i:2,cond_label_s:2,cond_label_si:[],condit:[0,2,5,6],conditioon:[],confid:8,config:2,configur:[0,2,5,13],confiigur:[],connect:[2,8],conserv:8,consist:[1,8,9,16],constant:[8,16],constitut:16,constructor:2,contain:[2,9,10],content:11,context:[2,8],continu:[0,5],contour:4,contribut:[],contributor:11,convent:0,copi:[],copyright:11,corner:[0,4,12,13,15],corner_kwarg:4,corr:[0,13,16],corr_threshold:[],correct:[8,16],correl:[3,5,8,11],correspond:[0,2,5,6,7,15,16],correspondingg:[],cosin:[15,16],cosmolog:11,counter:7,cours:[15,16],covari:[5,6],cpu:[0,2],crash:0,creat:5,create_mask:2,credibl:8,current:[0,3,5,8,15],custom:2,customis:0,d:[0,4,8,13,15],d_:15,data:[2,6,8,14],david:11,decai:[0,2],decorrel:[0,8,9],decreas:0,def:[0,13,15,16],defaullt:5,default_train_config:[],defin:[2,8,13,15],degre:2,demand:11,demonstr:0,denomin:16,densiti:[8,13,15,16],depend:[0,16],describ:7,descript:[],design:11,desir:[0,2],desktop:[],det:[0,2],detach:[],detail:[0,9,11],determin:[0,2,3,5,6,8],determnin:0,dev:16,deviat:[0,6,8,15,16],devic:[0,2],dfm:[],diagnost:4,diagon:[5,6],dict:[0,2,3,4,5,7],dict_kei:13,dictionari:[0,2,3,4,5,7,13,15],diff:[15,16],differ:[5,16],difficult:9,dill:0,dim:[0,4,13],dimens:[2,4,5,15],dimension:[0,2,6,8,13],directori:[0,5,12],disabl:[],disadvantag:0,disastr:0,discuss:0,distribut:[0,2,3,5,8,9,11,15],diversifi:8,divid:7,doc:[],docstr:[],document:11,doe:[0,5],doesn:[0,11],done:[0,2,8],dot:[0,8,15,16],download:12,draw:2,drawn:[0,8],drop:3,due:[0,9],dure:[0,4,5,8],e:[0,3,5,6,8,16],each:[0,2,4,5,7,8,9],earli:[0,2],easiest:[12,15],effect:[5,8,16],effici:[3,8,9,11],either:[7,16],element:2,els:[0,13,15,16],emploi:8,empti:0,en:4,enabl:[5,11],encount:16,encourag:0,end:[0,5,8,13,15,16],enough:0,enter:15,entri:11,env:16,environ:0,ep:2,epoch:[0,2],epsilon:2,equal:[7,16],equal_weight_sampl:7,equilibrium:8,equiv:[8,13],equival:[0,6],error:5,error_if_nonfinit:[],errorbar:[15,16],es:16,especi:[0,16],ess:[0,5,7,8,13,16],estim:[0,11,15,16],etc:[0,8],evalu:2,even:16,everi:[0,5],evid:[0,8,16],evolut:0,evolv:[8,15,16],exact:16,examin:16,exampl:[0,5,7,11,13],excel:11,execut:0,exp:16,expect:[0,8,15],expens:0,explain:0,explor:8,express:[8,16],ext:16,extra:[0,2,5,7,15,16],extra_repr:2,extrem:9,f:[7,8],factor:[0,7,8],fals:[0,5],familiar:[0,11],faq:11,fig:4,figsiz:[15,16],figur:[4,15,16],file:[0,5,11],fill_between:15,find:[0,8,11],finish:0,finit:[],first:[0,2,6,8,11,13,16],fit:[6,14],five:0,flat:0,floor:7,florian:11,flow:[0,1,5,11],flow_config:[0,2,5],flow_typ:[0,2],flowsequenti:2,flowtrain:[],fmt:[15,16],folder:0,follow:[0,1,5,8,11,13],fontsiz:[15,16],form:[0,16],former:0,fortun:0,forward:[2,6],found:[],frac:8,free:11,frequenc:[15,16],from:[0,2,5,7,8,9,11,13,15,16],full:[0,5,11],full_run:4,function_dict:3,functionwrapp:7,further:2,furthermor:[0,13],g:[0,5,6,8],gamma:5,gaussian:[0,2,11,15,16],gaussian_prior_scal:[0,2],gener:[0,5,9,11],geometri:9,get:[3,11,12,15,16],git:12,github:[9,11,12],give:0,given:[0,2,8,15,16],good:[0,11,16],gpl:11,grad:[],gradient:[0,2],grav_wav:0,great:8,greater:0,guid:11,gustafsson:7,ha:[0,2,8],half:0,hamiltonian:9,hand:8,hast:[0,3,8],hat:8,have:[0,5,7,11,15,16],head:11,height:4,help:0,here:[0,4,9,16],hidden:2,hidden_s:[0,2],hide:2,high:[0,8,13,15,16],higher:8,highli:[0,9,11],highlight:9,histori:2,hol:7,hold:5,hood:8,hook:[],how:[0,5,8,9,11,15,16],howev:8,html:4,http:[4,12],huge:0,i:[0,3,5,6,7,8,16],idea:[0,8],ident:[0,16],idx:[15,16],ignor:6,ij:8,illustr:9,implement:[2,7,11],improv:[0,2],incliud:0,includ:[0,4,5,6,7,11,16],inclus:0,increas:0,increment_logz:7,ind_accept:[],ind_threshold:[],indec:0,independ:15,index:[0,5],indic:[5,6],inf:[0,2,13,15,16],infam:[9,13],infer:[5,11],infer_vector:5,info:7,inform:[2,16],initi:[3,5,8,16],initialis:13,input:[2,5,6,7],input_degre:2,input_ord:2,input_s:2,insid:0,instal:[0,9,11],instanc:[0,2,15,16],instead:[0,5],int_:15,intend:0,interest:8,intermedi:[0,8],intern:[0,9],interpol:8,interpret:16,interupt:0,interv:8,inv:0,invalid:[2,16],invers:[2,6,8],invert:8,involv:5,io:4,iprogress:[],ipywidget:[],irrespect:2,isinf:[],isnan:[],issu:[0,11],item:[],iter:[0,3,5,7,8,13,16],its:[0,2,9,16],j:8,jacobian:[2,6],john:11,join:2,journal:11,jupyt:9,just:0,justifi:16,karamani:11,karamanis2022acceler:11,karamanis2022pmc:[],karamanis2022pocomc:11,kde:4,kde_bin:4,keep:16,kei:[2,13],keyboardinterrupt:[],keyword:7,kind:[0,2,6],know:[0,8],known:9,kwarg:[2,7],l1:2,l2:2,l:[0,3,8,13],label:[0,4,5,15,16],lack:3,laplac:[0,2],laplace_prior_scal:[0,2],laplc:[],larg:2,last:0,latent:[2,3,8],later:0,latest:4,latter:[0,6,8],layer:[0,8],lead:16,learn:[0,2,6],least:0,leav:8,left:8,leftarrow:8,legend:[15,16],len:[],less:0,level:[8,15],lib:16,like:0,likelihood:[2,3,5,7,8],limit:0,limitit:0,linalg:[0,16],line:2,linear:[0,3,16],linearli:[15,16],linearmaskedcoupl:2,linspac:[15,16],list:[0,2,4,5,6,7,15],listcomp:[],lnorm:0,load:[5,11],load_stat:5,loc:0,log:[2,3,5,13],log_abs_det_jacobian:2,log_det_j:6,log_lik:[0,15,16],log_likelihood:[0,5,13,15,16],log_likelihood_arg:[0,5,15],log_likelihood_kwarg:[0,5],log_prior:[0,2,5,13,15,16],log_prior_arg:[0,5,15],log_prior_kwarg:[0,5],log_prob:[2,3],logarithm:[0,2,6,13,16],logdet:16,logdetj:[],logical_or:[],logit:[5,6],logl:[0,5,13],loglik:15,loglikelihood:[0,5,13],loglikelihood_arg:[5,16],loglikelihood_kwarg:5,logmathc:[],logp:[0,5,13],logprior:[0,5,13,15],logprior_arg:16,logprior_kwarg:[],logprob:2,logw:[0,5,7,13],logz:[0,5,7,13,16],look:[0,11],loss:0,low:[0,13,15,16],lower:[0,8],lr:[0,2],ls:15,lw:15,m:[0,8,15,16],machin:0,made:[2,11],maf:[0,2],magnitud:8,mai:0,main:0,mainli:1,maintain:[5,8],make:[5,7,9],manag:9,mani:[0,5,9],manual:0,map:8,margin:[0,4,8],marker:15,markov:8,mask:[],maskedlinear:2,math:[],mathbb:8,mathcal:[0,8,13,16],matplotlib:[12,13,15,16],matplotliib:0,matrix:[5,6],max:[],max_norm:[],maximum:[0,5],maxit:[],mcmc:[1,5,8,9],mean:[0,5,6,8,15],measur:3,median:8,mention:16,messag:2,method:[0,2,3,5,7,8,9],metric:0,metropoli:[0,3,8],might:[0,6,8],mina:[11,16],minaskar:12,mind:16,minim:2,minimum:[0,5],mixtur:9,mode:9,model:[0,2,6,11,14],model_extend:16,model_simpl:16,modifi:2,modul:2,momemntum:[],momentum:2,monitor:[0,2],mont:[5,9,11],more:[2,3,8,9,11,13,16],most:[0,9,12,16],motiv:[],mpi4pi:0,mpi:5,mtrand:[],much:16,multi:2,multimod:[0,8,11],multipl:[0,2],multiprocess:[0,5],multivari:0,must:[2,5],mutat:8,n:[0,5,8,13,16],n_block:[0,2],n_cpu:0,n_dim:[0,3,5,6,13,15,16],n_dim_extend:16,n_dim_simpl:16,n_dimens:2,n_hidden:[0,2],n_max:5,n_min:5,n_output:2,n_particl:[0,3,5,13,15,16],n_sampl:2,nabergoj:11,name:[0,4,5],nasti:0,natur:2,navig:12,ncall:[0,5,13],ncpu:[],ndarrai:[2,3,4,5,6,7],ndim:[0,2,3,5,13],ndim_extend:[],ndim_simpl:[],neal:9,necessari:0,need:[0,8],neg:2,neither:5,network:[2,8],neural:[2,8],neuron:[0,2,8],never:2,new_run:0,next:[0,13],nf:[2,8],nfp:5,nmax:0,nmin:0,nn:2,node:0,nois:[15,16],non:11,none:[0,2,4,5,6,7,16],nonneg:2,norm:[],norm_typ:[],normal:[0,2,3,5,8,11,15,16],normalis:[0,5],note:7,notebook:9,notebook_tqdm:[],notic:0,now:[0,16],np:[0,2,3,4,5,6,7,13,15,16],nparticl:[0,2,3,13],nsampl:7,number:[2,3,4,5,7,8,13,15,16],numer:16,numpi:[0,2,4,5,6,7,12,13,15,16],numpy_to_torch:[],o:[15,16],object:0,odd:16,offer:0,often:[0,5,8],omega:[15,16],omp_num_thread:0,onc:[0,3,8,12,13,16],one:[0,2,8,9,11,15,16],ones:0,onli:[0,2,9,15,16],onto:[],oper:0,opt:16,optim:[],optimis:9,option:[0,2,3,4,5,6,7],option_dict:3,orang:15,order:[0,2,8,16],ordereddict:2,origin:[2,8],os:0,oscil:[15,16],other:[0,8,9,13],our:[0,13,15],out:[2,11],output:[2,5,7],output_dir:[0,5],output_label:[0,5],over:[8,11,16],overridden:[],overwrit:5,overwritten:5,own:2,p:[0,3,8,13,15],p_:8,packag:[0,11,16],page:[9,10,11],pair:2,paper:[2,11],parallel:0,parallelis:5,parallelize_prior:[0,5],parallis:0,param:[2,15,16],paramer:0,paramet:[2,3,4,5,6,7,11,15],parameteris:8,params_tru:[15,16],part:1,particl:[3,4,5,8,13,16],particularli:0,pass:[0,2,4,5,7],path:[0,5,8],pathlib:5,patienc:[0,2],pbar:[],pc:[0,13,15,16],peacock:11,pearson:3,peculiar:9,per:[0,2,3,5,7,8],percentag:[0,2],percentil:15,perform:[0,11,15],perhap:[],period:[0,5,6],phase:[0,6,15],phd:[],phi:[15,16],pi:[0,6,8,13,15,16],pickleabl:7,pip:[],place:11,plan:0,pleas:[5,11],plot:[0,1,15,16],plt:[0,13,15,16],pmc:[0,5,8,11,13,16],pmc_1:5,pmc_3:0,pmc_6:0,pmc_:0,pocomc:[1,2,3,4,5,6,7,8,9,10,11,12,13,15,16],point:[0,7],pool:[0,5],popul:8,pose:[],posit:[0,3,5,7,13,16],possibl:0,posterior:[0,3,4,11,16],posterior_logl:[],posterior_logp:[],posterior_sampl:[],potenti:8,power:8,practic:[8,9],precis:13,precondion:[],precondioton:[],precondit:[3,5,11],precondition:5,preconditioned_metropoli:3,preconditionedmetropoli:[],prefer:8,prematur:0,prep:[],preprint:11,presens:8,present:0,preserv:2,previou:0,previous:5,print:[2,5,13,15,16],prior:[2,3,5,7],prior_sampl:[0,5,13,15],prior_samples_extend:16,prior_samples_simpl:16,priori:[0,8,16],probabl:[2,7,8,13,15,16],probil:[],probit:[5,6],problem:[6,9,11,13],proce:8,procedur:[0,8,11],produc:[0,4,13],progress:[0,5,13],progressbar:7,propag:8,properli:16,properti:[2,5],propos:[3,5],provid:[0,2,4,5,8,15,16],proxim:7,purpos:8,put:0,py:16,pyplot:[0,13,15,16],python3:16,python:[0,11],question:10,quickstart:11,r:[15,16],rais:[2,5],rand:[],random:[0,2,3,5,7,13,15,16],random_st:[5,7],randomli:7,randomst:[],rang:[0,6,8,15,16],range_:[],rate:[0,2],rather:[0,16],ratio:[0,6,8],re:[2,11],reach:8,readi:16,readthedoc:4,real:0,realnvp:0,reason:[9,13],recent:12,recip:[],recommend:0,ref:[],refer:[0,11],reflect:[0,5,6,15],regard:10,regist:[],regular:2,regularis:2,relat:[0,2],reli:8,relu:2,render:3,reparameteris:6,repeat:8,repositori:12,represent:2,requir:[0,3,9,13,16],resampl:8,resample_equ:7,rescal:[5,6],research:11,respect:[0,5],rest:0,result:[3,4,5,8,16],results_extend:16,results_simpl:16,resum:[5,11],resume_state_path:[0,5],retrain:5,reweight:8,right:8,rightarrow:8,robust:[0,8],robustli:0,root:12,rosenbrock:13,round:16,rstate:[],run:[4,5,8,11,12,13],runtimeerror:[],runtimewarn:16,s:[9,11,13,16],same:[0,2,15,16],sampl:[2,3,5,6,8,9,11,15,16],sampler:[1,11,13,15,16],sampler_extend:16,sampler_simpl:16,save:[5,11],save_everi:[0,5],save_st:5,saved_posterior_sampl:[],scalar:[2,5],scale:[0,2,5,6,13,16],scaler:1,schedul:[0,8],schon:7,scientif:11,scipi:12,seaborn:9,search:[],second:[2,8],section:0,see:[0,4,15],seed:[5,7,16],select:[0,7,8],self:[],seljak:11,sensibl:5,separ:9,sequenc:8,sequenti:[],serial:0,set:[0,2,3,4,5,7,8],sever:9,sf:[],shape:[2,3,5,7],should:[0,2,4],show:[0,4,5,7,13,15,16],show_titl:[],shown:[0,4,7],shuffl:[0,2],side:8,sidebar:11,sigma:[15,16],sign:16,signatur:16,silent:[],sim:[0,8],sim_data:15,similar:0,simpl:[3,9,13],simpli:8,simplifi:9,simul:[15,16],sinc:0,singl:2,site:16,situat:0,size:[2,5,8,9,13,15,16],slogdet:16,slower:0,small:16,smaller:2,smc:8,smooth1d:[],smooth:[],so:[0,8,16],softwar:11,solv:[0,11],some:[0,2,8,9,11,13,15,16],someth:0,sophist:11,sourc:[],space:[2,3,8],specif:0,specifi:[0,15,16],speed:0,stabl:12,stack:[],standard:[0,3,6,8,15,16],start:[0,13],stat:7,state:[3,5,11],state_dict:3,statist:4,statu:5,std:15,step:[3,5,8,13],stop:[0,2],store:[0,5],str:[2,4,5,6,16],strictli:0,string:2,subclass:[],subject:16,subplot:4,subset:4,suggest:0,sum:[2,8,13],sum_:8,sum_log_abs_det_jacobian:2,supercomput:0,support:0,suppos:0,systemat:7,t:[0,8,11,15,16],t_rang:[15,16],tabl:11,take:8,tanh:2,target:[0,3,8,9,11],task:[8,9],temper:3,tensor:2,term:[0,2,8],termin:[0,2,3],test:[],text:16,than:[0,8,16],thei:[0,7,8],them:[0,9,15],theorem:8,theori:0,theta:[0,8,13,15],theta_:8,thi:[0,2,3,5,8,9,10,11,13,15,16],thin:[],thing:0,those:0,three:8,threshold:[3,5],through:8,thu:[0,2,8,9,16],time:[0,5,7,8,15,16],tinygp:[],tip:11,titl:11,title_quantil:[],todo:[],toler:[],tool:1,torch:[0,2,12],total:[0,5,16],total_norm:[],tqdm:12,tqdmwarn:[],trace:[0,4,13,15],traceback:[],train:[0,2,5,6],train_config:[0,2,5],train_loss:[],trajectori:0,tranform:[],transform:[2,5,6,8],trick:11,troubleshoot:[],tupl:2,turn:0,tutori:[11,15,16],twice:9,two:[3,8,9,14],type:[0,2,3,4,5,6,7],u:[0,2,6,8],unbias:0,unbound:5,uncertainti:16,uncorrel:[3,8],under:[8,11,16],unequ:7,uniform:[0,13,15,16],unimod:8,union:[2,4,5,6],unit:[5,6,8],unless:8,until:[0,2,8],unus:2,up:0,updat:[7,8],update_it:7,update_stat:7,upon:0,upper:0,uro:11,us:[0,2,3,4,5,6,8,9,10,11,13,15,16],use_context:2,use_flow:[],use_independ:[],user:[0,5,8,16],user_instal:[],usual:[0,15],util:15,utilis:[0,8],v:[],val_loss:[0,2],valid:[0,2],validate_config:2,validate_vectorization_set:5,validation_context:2,validation_data:2,validation_split:[0,2],valu:[0,2,3,5,8,15,16],valueerror:2,vari:0,variabl:[2,6],varianc:[5,6,8],varieti:0,variou:[0,4,8],ve:12,vector:[0,5],vectorize_likelihood:[0,5,13],vectorize_logprior:[],vectorize_prior:[0,5],verbos:2,veri:[8,9,13,16],version:[11,12],vert:[0,8,13],visit:0,w:7,w_:8,wa:0,wai:[8,12,15],wait:[0,2],walk:3,walker:[0,5,15],want:[0,11,15],warn:5,warp:9,we:[0,2,9,13,15,16],weight:[0,2,7,8],weight_decai:[0,2],well:[0,5,8,9,13,15,16],were:16,what:[0,8,11,15],when:[0,5,7],where:[0,5,6,8,15],wherea:16,whether:[2,5,7],which:[0,2,4,5,8,9,16],width:4,within:[],word:0,work:[0,8,11,13],wotk:[],would:0,write:[],wrong:16,x0:[],x:[0,2,6,7,13,15,16],x_:[0,16],x_check:5,xlabel:[15,16],xtick:[15,16],y:[2,15],year:11,yerr:[15,16],ylabel:[15,16],you:[0,2,11,12,13,16],your:[0,2,11],ytick:[15,16],z:[0,8,16],zero:[0,5,6,8]},titles:["Advanced Guide","API Reference","Flow","MCMC","Plotting","Sampler","Scaler","Tools","Background","Examples","FAQ","pocoMC documentation","Installation","Quickstart","Tutorials","Fitting a model to data","Comparing two models"],titleterms:{"1":[],"2":[],"2d":9,"class":3,"function":[0,2,3,7,13],The:[],ad:0,advanc:0,api:1,attribut:11,author:11,autoregress:2,background:8,bar:7,batch:2,bay:16,bayesian:8,bound:[0,15,16],bridg:8,carlo:[0,8,13,15,16],changelog:11,check:15,citat:11,coeffici:0,compar:16,comparison:[8,16],comput:[2,7],content:[],correl:0,coupl:2,creat:2,data:[15,16],defin:[0,16],defini:15,densiti:[0,2],depend:12,distribut:13,document:[],doubl:9,effect:[0,7],estim:[2,8],evid:7,exampl:9,extend:16,factor:16,faq:10,fit:[2,15],flow:[2,8,10],from:12,funnel:9,gamma:0,gaussian:9,gener:[2,15,16],get:13,guid:0,helper:[2,3],hyperparamet:8,increment:7,indic:[],infer:[0,8],initi:[0,15],initialis:[0,15,16],instal:12,layer:2,licens:11,likelihood:[0,13,15,16],linear:2,load:0,log:[0,7,15,16],loss:2,made:[],maf:[],margin:9,mask:2,mcmc:[0,3],model:[8,15,16],mont:[0,8,13,15,16],more:0,normal:10,normalis:[2,8],number:0,object:2,parallelis:0,paramet:[0,8,16],particl:[0,7,15],pip:12,plot:[4,9,13],pocomc:0,posit:15,posterior:[8,9,15],precondit:[0,8,13,15,16],predict:15,prior:[0,8,13,15,16],probabl:0,problem:0,progress:7,quickstart:13,realnvp:2,refer:1,resampl:7,result:[0,13,15],resum:0,rosenbrock:9,run:[0,9,15,16],s:[],sampl:[0,7,10,13],sampler:[0,3,5],save:0,scaler:6,sequenti:[2,8],shell:9,simpl:16,size:[0,7],sourc:12,start:11,state:0,step:0,tabl:[],threshold:0,tool:7,trace:9,tutori:14,two:16,us:12,visualis:0,welcom:[],where:11,wrapper:7}})