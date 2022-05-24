Search.setIndex({docnames:["acknowledgement/index","advanced_usage/guided_policy_learning","advanced_usage/imitation_learning","advanced_usage/index","advanced_usage/reinforcement_learning","advanced_usage/testing_with_augmented_reality","api_documentation/core","api_documentation/entities/agents","api_documentation/entities/index","api_documentation/entities/sensors","api_documentation/index","api_documentation/tasks","api_documentation/utils","faq/index","getting_started/basic_usage","getting_started/data_format","getting_started/index","getting_started/installation","index","interface_to_public_dataset/index","interface_to_public_dataset/kitti","interface_to_public_dataset/nuscene","interface_to_public_dataset/waymo","introduction/index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["acknowledgement/index.rst","advanced_usage/guided_policy_learning.rst","advanced_usage/imitation_learning.rst","advanced_usage/index.rst","advanced_usage/reinforcement_learning.rst","advanced_usage/testing_with_augmented_reality.rst","api_documentation/core.rst","api_documentation/entities/agents.rst","api_documentation/entities/index.rst","api_documentation/entities/sensors.rst","api_documentation/index.rst","api_documentation/tasks.rst","api_documentation/utils.rst","faq/index.rst","getting_started/basic_usage.rst","getting_started/data_format.rst","getting_started/index.rst","getting_started/installation.rst","index.rst","interface_to_public_dataset/index.rst","interface_to_public_dataset/kitti.rst","interface_to_public_dataset/nuscene.rst","interface_to_public_dataset/waymo.rst","introduction/index.rst"],objects:{"vista.core.Display":{Display:[6,0,1,""]},"vista.core.Display.Display":{ref_agent:[6,1,1,""],render:[6,1,1,""],reset:[6,1,1,""]},"vista.core.Trace":{Trace:[6,0,1,""]},"vista.core.Trace.Trace":{f_curvature:[6,1,1,""],f_speed:[6,1,1,""],find_frame_reset:[6,1,1,""],find_segment_reset:[6,1,1,""],get_master_frame_number:[6,1,1,""],get_master_timestamp:[6,1,1,""],good_frames:[6,1,1,""],good_timestamps:[6,1,1,""],multi_sensor:[6,1,1,""],num_of_frames:[6,1,1,""],param_file:[6,1,1,""],reset_mode:[6,1,1,""],road_width:[6,1,1,""],seed:[6,1,1,""],set_seed:[6,1,1,""],trace_path:[6,1,1,""]},"vista.core.World":{World:[6,0,1,""]},"vista.core.World.World":{agents:[6,1,1,""],reset:[6,1,1,""],sample_new_location:[6,1,1,""],sample_new_trace_index:[6,1,1,""],seed:[6,1,1,""],set_seed:[6,1,1,""],spawn_agent:[6,1,1,""],traces:[6,1,1,""]},"vista.core.core_utils":{LabelSearch:[6,0,1,""],MultiSensor:[6,0,1,""],TopicNames:[6,0,1,""]},"vista.core.core_utils.LabelSearch":{find_good_labeled_frames:[6,1,1,""]},"vista.core.core_utils.MultiSensor":{camera_names:[6,1,1,""],get_frames_from_times:[6,1,1,""],get_master_timestamps:[6,1,1,""],get_time_from_frame_num:[6,1,1,""],lidar_names:[6,1,1,""],main_camera:[6,1,1,""],main_event_camera:[6,1,1,""],main_lidar:[6,1,1,""],master_sensor:[6,1,1,""],sensor_names:[6,1,1,""],set_main_sensor:[6,1,1,""]},"vista.entities":{Entity:[8,0,1,""]},"vista.entities.Entity":{id:[8,1,1,""],parent:[8,1,1,""]},"vista.entities.agents.Car":{Car:[7,0,1,""]},"vista.entities.agents.Car.Car":{config:[7,1,1,""],curvature:[7,1,1,""],done:[7,1,1,""],ego_dynamics:[7,1,1,""],frame_index:[7,1,1,""],frame_number:[7,1,1,""],human_curvature:[7,1,1,""],human_dynamics:[7,1,1,""],human_speed:[7,1,1,""],human_steering:[7,1,1,""],human_tire_angle:[7,1,1,""],id:[7,1,1,""],length:[7,1,1,""],observations:[7,1,1,""],parent:[7,1,1,""],relative_state:[7,1,1,""],reset:[7,1,1,""],road:[7,1,1,""],segment_index:[7,1,1,""],sensors:[7,1,1,""],spawn_camera:[7,1,1,""],spawn_event_camera:[7,1,1,""],spawn_lidar:[7,1,1,""],speed:[7,1,1,""],steering:[7,1,1,""],steering_ratio:[7,1,1,""],step_dataset:[7,1,1,""],step_dynamics:[7,1,1,""],step_sensors:[7,1,1,""],timestamp:[7,1,1,""],tire_angle:[7,1,1,""],trace:[7,1,1,""],trace_index:[7,1,1,""],wheel_base:[7,1,1,""],width:[7,1,1,""]},"vista.entities.agents.Dynamics":{StateDynamics:[7,0,1,""],curvature2steering:[7,2,1,""],curvature2tireangle:[7,2,1,""],steering2curvature:[7,2,1,""],tireangle2curvature:[7,2,1,""],update_with_perfect_controller:[7,2,1,""]},"vista.entities.agents.Dynamics.StateDynamics":{copy:[7,1,1,""],numpy:[7,1,1,""],reset:[7,1,1,""],speed:[7,1,1,""],speed_bound:[7,1,1,""],steering:[7,1,1,""],steering_bound:[7,1,1,""],step:[7,1,1,""],update:[7,1,1,""],x:[7,1,1,""],y:[7,1,1,""],yaw:[7,1,1,""]},"vista.entities.sensors.BaseSensor":{BaseSensor:[9,0,1,""]},"vista.entities.sensors.BaseSensor.BaseSensor":{capture:[9,1,1,""],id:[9,1,1,""],name:[9,1,1,""],parent:[9,1,1,""],update_scene_object:[9,1,1,""]},"vista.entities.sensors.Camera":{Camera:[9,0,1,""]},"vista.entities.sensors.Camera.Camera":{camera_param:[9,1,1,""],capture:[9,1,1,""],config:[9,1,1,""],flow_meta:[9,1,1,""],flow_streams:[9,1,1,""],id:[9,1,1,""],name:[9,1,1,""],parent:[9,1,1,""],reset:[9,1,1,""],streams:[9,1,1,""],update_scene_object:[9,1,1,""],view_synthesis:[9,1,1,""]},"vista.entities.sensors.EventCamera":{EventCamera:[9,0,1,""]},"vista.entities.sensors.EventCamera.EventCamera":{base_camera_param:[9,1,1,""],camera_param:[9,1,1,""],capture:[9,1,1,""],config:[9,1,1,""],id:[9,1,1,""],name:[9,1,1,""],parent:[9,1,1,""],prev_frame:[9,1,1,""],prev_timestamp:[9,1,1,""],reset:[9,1,1,""],streams:[9,1,1,""],update_scene_object:[9,1,1,""],view_synthesis:[9,1,1,""]},"vista.entities.sensors.Lidar":{Lidar:[9,0,1,""]},"vista.entities.sensors.Lidar.Lidar":{capture:[9,1,1,""],config:[9,1,1,""],id:[9,1,1,""],name:[9,1,1,""],parent:[9,1,1,""],reset:[9,1,1,""],streams:[9,1,1,""],update_scene_object:[9,1,1,""],view_synthesis:[9,1,1,""]},"vista.entities.sensors.MeshLib":{MeshLib:[9,0,1,""]},"vista.entities.sensors.MeshLib.MeshLib":{agents_meshes:[9,1,1,""],agents_meshes_dim:[9,1,1,""],fpaths:[9,1,1,""],n_tmeshes:[9,1,1,""],reset:[9,1,1,""],tmeshes:[9,1,1,""]},"vista.entities.sensors.camera_utils.CameraParams":{CameraParams:[9,0,1,""]},"vista.entities.sensors.camera_utils.CameraParams.CameraParams":{crop:[9,1,1,""],get_K:[9,1,1,""],get_K_inv:[9,1,1,""],get_distortion:[9,1,1,""],get_ground_plane:[9,1,1,""],get_height:[9,1,1,""],get_position:[9,1,1,""],get_quaternion:[9,1,1,""],get_roi:[9,1,1,""],get_roi_angle:[9,1,1,""],get_roi_dims:[9,1,1,""],get_roi_points:[9,1,1,""],get_width:[9,1,1,""],get_yaw:[9,1,1,""],resize:[9,1,1,""]},"vista.entities.sensors.camera_utils.ViewSynthesis":{ViewSynthesis:[9,0,1,""]},"vista.entities.sensors.camera_utils.ViewSynthesis.ViewSynthesis":{add_bg_mesh:[9,1,1,""],bg_mesh_names:[9,1,1,""],config:[9,1,1,""],object_nodes:[9,1,1,""],synthesize:[9,1,1,""],update_object_node:[9,1,1,""]},"vista.entities.sensors.lidar_utils.LidarSynthesis":{LidarSynthesis:[9,0,1,""]},"vista.entities.sensors.lidar_utils.LidarSynthesis.LidarSynthesis":{synthesize:[9,1,1,""]},"vista.entities.sensors.lidar_utils.Pointcloud":{Point:[9,0,1,""],Pointcloud:[9,0,1,""]},"vista.entities.sensors.lidar_utils.Pointcloud.Pointcloud":{dist:[9,1,1,""],get:[9,1,1,""],intensity:[9,1,1,""],num_points:[9,1,1,""],numpy:[9,1,1,""],pitch:[9,1,1,""],transform:[9,1,1,""],x:[9,1,1,""],xyz:[9,1,1,""],y:[9,1,1,""],yaw:[9,1,1,""],z:[9,1,1,""]},"vista.tasks.lane_following":{LaneFollowing:[11,0,1,""]},"vista.tasks.lane_following.LaneFollowing":{config:[11,1,1,""],reset:[11,1,1,""],seed:[11,1,1,""],set_seed:[11,1,1,""],step:[11,1,1,""],world:[11,1,1,""]},"vista.tasks.multi_agent_base":{MultiAgentBase:[11,0,1,""]},"vista.tasks.multi_agent_base.MultiAgentBase":{config:[11,1,1,""],ego_agent:[11,1,1,""],reset:[11,1,1,""],seed:[11,1,1,""],set_seed:[11,1,1,""],step:[11,1,1,""],world:[11,1,1,""]},"vista.utils":{logging:[12,3,0,"-"],misc:[12,3,0,"-"],transform:[12,3,0,"-"]},"vista.utils.logging":{CustomFormatter:[12,0,1,""],setLevel:[12,2,1,""]},"vista.utils.logging.CustomFormatter":{format:[12,1,1,""]},"vista.utils.misc":{agent2poly:[12,2,1,""],biinterp:[12,2,1,""],fetch_agent_info:[12,2,1,""],flow_backwarp:[12,2,1,""],img2flow:[12,2,1,""],merge_dict:[12,2,1,""]},"vista.utils.transform":{SE3_inv:[12,2,1,""],compute_relative_latlongyaw:[12,2,1,""],euler2quat:[12,2,1,""],latlongyaw2vec:[12,2,1,""],mat2vec:[12,2,1,""],pi2pi:[12,2,1,""],quat2euler:[12,2,1,""],rot2mat:[12,2,1,""],vec2latlongyaw:[12,2,1,""],vec2mat:[12,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:function","3":"py:module"},terms:{"03333333333333333":[7,11],"100":7,"180":14,"200":[6,7,14],"2020":[0,18],"2022":[0,18],"240":[9,14],"320":[9,14],"480":[9,14],"600":[9,14],"640":[9,14],"960":[9,14],"9999":14,"boolean":6,"case":15,"class":[6,7,8,9,11,12,15],"default":[6,7,9,11,12],"final":2,"float":[6,7,9,11,12],"function":[4,6,7,9,11,12,14,15,17,23],"import":[12,14,15,17,19],"int":[6,7,9,11,12],"new":[6,9,23],"public":18,"return":[4,6,7,9,11,12,14,15,23],"super":[9,14],"true":[1,2,7,9,12,14],"try":17,"while":[1,2,6,14],Adding:[9,16],For:[1,2,4,7,11,14,17],GPS:15,IDs:11,ODE:7,ROS:[6,7,15],Rus:[0,18],The:[0,1,2,4,6,7,8,9,10,11,12,14,15,18],Then:[2,14],There:[1,7,14],These:19,With:[3,16],_advanced_usag:[1,4],_agent:[1,2],_append_agent_id:4,_camera:[1,2],_check_exceed_max_rot:4,_check_out_of_lan:4,_get_states_func:15,_getting_start:15,_privileged_control:1,_rng:[1,2],_sampler:[1,2],_snippet_i:[1,2],_trace_path:15,_world:[1,2,4],abil:23,about:[6,9],abov:[1,4,14,17],abs:[4,14,15],acceler:7,access:[1,6,9,14,15],accler:7,accord:15,accur:15,accuraci:15,achiev:[4,7,15],acknowledg:18,across:[0,6,9,14,15],action:[1,2,4,7,11,14,23],action_spac:4,activ:[0,1,4,18,23],actor:9,actual:15,add:[9,14],add_bg_mesh:9,add_to_histori:[1,2],added:9,adding:14,addit:[2,11],adjust:9,ado:[1,11],advanc:[0,18,23],advanced_usag:[1,2],after:[2,4,6,23],agent2poli:12,agent:[1,2,4,6,8,9,11,12,14,18],agent_config:6,agent_id:[4,11],agents_mesh:9,agents_meshes_dim:9,aim:[1,23],alexand:[0,18],algorithm:23,all:[6,7,8,9,11,14,15,18,23],allow:[1,4,6,9,15],alphabet:0,alreadi:[4,9],also:[0,2,6,7,9,11,14,15,18,23],alwai:[1,7],amini2020learn:[0,18],amini2022vista:[0,18],amini:[0,7,18],among:6,anchor:6,angel:7,angl:[7,9,12],ani:[6,7,9,12],annot:[6,23],anoth:[2,15,23],apart:4,api:[14,18,23],append:12,appli:[4,9],applic:23,approxim:9,apt:17,arc_len:14,arctan2:14,argmin:14,around:[1,4,9,15,23],arr_1:6,arr_2:6,arrai:[1,2,4,7,9,12,14],array_1:9,array_2:9,articl:[0,18],artist:23,ask:0,assertionerror:[6,9],associ:[1,2,6,7,11,15],assoic:15,assum:[6,7],astyp:[1,2],asynchron:23,attach:[2,6,7,8,9,14,23],attach_to:9,attribut:[4,12],attributeerror:9,augment:[1,3,23],author:[0,18],auto:9,autom:[0,18],autonom:[0,18,19,23],autonomi:7,autonomousrobot:7,avail:18,avi:15,avoid:2,awai:[1,4],axi:[7,9,14],back:[9,14],background:9,balanc:2,banerje:[0,18],base:[2,4,6,7,8,9,11,12,14,23],base_camera_nam:[9,14],base_camera_param:9,base_s:[9,14],basesensor:9,basic:[2,6,7,9,11,12,15,16,23],becaus:23,been:[0,18],befor:12,behavior:[2,23],being:[0,4,6,11,18],below:[10,23],benchmark:23,beta:23,better:15,between:[6,7,9,11,12,15],bev:6,bg_mesh_nam:9,bgr:12,bicycl:[7,15],bidirect:12,biinterp:12,birdsey:6,birdseye_map_s:6,block:6,bold:12,booktitl:[0,18],bool:[6,7,9,12],bool_a:6,both:11,bottom:9,bound:7,boundari:1,box:[9,12],brought:23,buffer:2,build:[10,11,19,23],built:[0,2,6,9,18,23],cach:[6,7,14],calibr:9,call:[1,2,6,7,9,12],callabl:[6,7],camera:[1,2,6,7,14,15,23],camera_config:[1,2,7,14],camera_front:[6,9,14],camera_nam:6,camera_param:9,camera_util:9,cameraparam:9,can:[1,2,4,6,7,9,12,14,15,18,19,20,21,22,23],cannot:14,captur:[7,9],car1:14,car2:14,car:[1,4,6,7,8,9,11,12,16,23],car_config:[1,2,7,11,14],carpack01:9,carri:12,center:[4,9,14],certain:[6,9,14,19],certifi:23,challeng:23,chang:9,channel:12,check:[1,2,4,6,7,9,11,12,14,17],check_end:6,checkpoint:[9,14],choic:15,ckpt:[9,14],click:10,clip:14,clone:2,close:[1,6,23],closest:[6,9],cloud:9,code:[9,11,18,23],codebas:[0,18],coeffici:9,collect:[4,6,9,23],collis:[4,11,14],color:[9,12],column:9,come:[5,13,17,19],command:[1,2,4,7,14,15],commun:[0,18,23],compat:[19,23],complex:23,compoen:12,compon:[4,9,10,12,23],compound:1,comput:[2,6,9,11,12,14],compute_relative_latlongyaw:[12,14],concept:15,conceptu:[6,9],concret:19,conda:17,condit:[4,6,11],confer:[0,18],config:[4,6,7,9,11,14],configur:[6,7,9,11,23],connect:2,consecut:[6,9],consid:[4,6,15],consist:6,constantli:[0,18],constraint:4,construct:[2,6,23],contain:[2,6,9,10,12,15,23],continu:[1,2,7],contrast:1,contribut:23,control:[0,1,2,4,7,15,16,18,23],converg:1,convers:[6,19,20,21,22,23],convert:[7,9,12,23],coordin:[9,12,14],copi:[7,9],core:[7,10],core_util:6,corner:9,correct:[1,4],correspond:[6,9,15,23],coupl:[1,12],creat:[1,7,17,23],critic:[11,12],crop:[6,9],csv:[6,15],cull:9,culling_r:9,current:[4,6,7,9,14,15,23],curvatur:[1,4,6,7,14,15],curvature2st:7,curvature2tireangl:7,curvature_bound:14,custom:[9,12,14],customformatt:12,customiz:23,cyan:12,dai:6,daniela:[0,18],data:[0,1,2,4,6,7,9,14,16,17,18,20,21,22,23],data_format:15,data_prep:[9,14],dataset:[1,2,4,6,7,9,14,15,17,18,20,21,22,23],datefmt:12,debug:[11,12],deep:9,def:[4,14,15],default_config:[7,9,11],default_reward_fn:[4,11],default_terminal_condit:[4,11],defin:[4,7,11,12,14,23],definit:[4,6],degre:12,delimit:15,demonstr:[1,11],dens:9,densifi:9,depend:[9,15,17,18],depict:6,deploy:23,depth:9,depth_mod:9,descart:17,descent:2,describ:12,design:23,desir:[7,23],desired_st:7,detail:[1,2,4,6,7,9,10,11,14,17,18,19,23],determ:11,determin:[6,11,12],dev:17,develop:[0,18],deviat:[1,4],dict1:12,dict2:12,dict:[6,7,9,11,12],dict_a:11,dict_b:11,dict_c:11,dict_d:11,dictionari:[6,9,11,12,14],differ:[0,1,6,7,9,12,14,15,23],differenti:15,digit:23,dimens:9,dimension:12,direct:6,directional_light_intens:9,directori:[6,9],discuss:4,disk:23,displai:[6,14],display_config:6,dist:[9,14],distanc:[1,9,14],distort:9,distribut:2,divers:2,doc:7,document:[14,23],doing:[2,7,14],done:[1,2,4,7,11,14,23],dont:6,down:6,download:17,drawn:23,drift:1,drive:[0,14,18,20,21,22,23],driven:[0,2,7,9,15,18,19,23],drop:14,due:1,dure:[1,6],dyaw:14,dynam:[4,7,12,14,15,18,23],each:[2,6,9,11,14,15,23],easi:9,easili:[9,19],effect:15,effici:12,ego:[1,2,4,6,11,14],ego_ag:11,ego_dynam:[7,14],ego_pos:14,either:[9,14],elaps:[7,11],elimin:15,els:4,embed:4,embodi:23,emiss:9,enabl:23,encapsul:9,encod:12,encourag:[0,1,4,18,23],end:[0,6,7,11,18],engin:[18,23],enhanc:[0,18],ensur:[2,18,19],entir:[9,15,23],entiti:[6,7,9,10,12,14,23],entri:12,env:17,environ:[4,11,14,17,18],episod:11,equat:9,equival:[12,15],error:[1,11,12],estim:15,etc:[1,4,6,15],euler2quat:12,euler:[9,12],evalu:23,even:23,event:[6,7,12,14,23],event_camera:14,event_camera_config:14,event_camera_front:[9,14],eventcamera:[7,9],everi:[6,9,11,14,15],exact:9,exampl:[1,2,4,6,7,9,11,12,14,19,23],exce:[6,11],exceed:[4,7],exceed_max_rot:4,except:12,excit:23,execut:11,exist:[6,9,19],expand:10,exploit:4,extens:[0,9,18,23],extern:[20,21,22],extract:[2,9,12,15,17],extrapol:15,extrem:4,f_0_1:12,f_1_0:12,f_curvatur:[6,14,15],f_speed:[6,14,15],face:23,faith:23,fals:[2,6,7,9,12],faq:18,far:4,featur:9,feed:15,feedback:15,fetch:[6,7],fetch_agent_info:12,fetch_smal:6,ffio:17,ffmpeg:17,fidel:4,field:[6,9],figur:6,file:[6,9,15,17],fill_valu:15,filter:6,find:[6,14],find_frame_reset:6,find_good_labeled_fram:6,find_segment_reset:6,first:[1,2,7,9,12,14],fit:19,fixed_plan:9,flexibl:23,float32:[1,2],float_a:6,flow:[9,12],flow_backwarp:12,flow_meta:9,flow_siz:12,flow_stream:9,fmt:12,follow:[0,2,4,11,12,14,17,23],follow_human_trajectori:14,form:23,format:[9,12,16,17,19,23],formatexcept:12,formattim:12,forward:7,found:9,foundat:0,four:4,fpath:9,fps:6,frame:[2,6,7,9,12,15],frame_index:[6,7],frame_num:6,frame_numb:[6,7],framework:[1,23],freeglut3:17,friendli:23,from:[0,1,2,4,6,7,9,12,14,15,17,18,19,23],front:11,fund:0,fundament:23,further:4,gap:23,gener:[1,2,4,15,19,20,21,22],genfromtxt:15,geo:12,geometri:[9,12],get:[1,2,4,6,7,9,12,14,17,18],get_control:1,get_distort:9,get_frames_from_tim:6,get_ground_plan:9,get_height:9,get_k:9,get_k_inv:9,get_master_frame_numb:6,get_master_timestamp:6,get_posit:9,get_quaternion:9,get_roi:9,get_roi_angl:9,get_roi_dim:9,get_roi_point:9,get_sampling_prob:[1,2],get_time_from_frame_num:6,get_width:9,get_yaw:9,getmessag:12,gilitschenski:[0,18],github:18,given:[6,7,9,11,12,15],global:6,going:4,good:[4,6],good_curvature_ind:15,good_fram:6,good_timestamp:6,gpl:1,gpl_rgb_dataset:1,grab:9,gradient:2,gradual:1,great:2,grid:6,ground:[1,9],gs_agent_w:6,gs_bev_w:6,gs_h:6,gui_scal:6,guid:[3,4],guidanc:1,guided_policy_learn:1,gym:[4,11,23],h5py:17,han:[0,18],hand:12,handl:[6,7,9,11,15],handler:12,hard:23,has:[0,7,12,15,18,23],have:[1,2,6,11,14,15,18],head:[4,7],height:[6,9],helper:[6,9,12],here:[1,2,4,11,17,23],high:[2,4,9,15,23],higher:[6,12],highli:23,hold:23,home:7,horizont:6,how:[1,2,4,7,9,11,14],howev:4,hsuan:[0,18],hsv:12,http:7,human:[1,2,4,6,7,12,14,15,23],human_curvatur:[2,7],human_dynam:7,human_spe:[4,7,14],human_st:7,human_tire_angl:7,hxwx2:12,hyperparamet:14,icra:[0,7,18],idea:2,identifi:[7,8,9,15],ieee:[0,18],igor:[0,18],il_rgb_dataset:2,illustr:2,imag:[6,9,12],img2flow:12,img:[1,2,9,12],imit:[1,3,7],imperfect:15,implement:[1,2,4,7,9,14],improv:1,imu:15,includ:[0,6,8,9,11,14,18,23],inconsist:6,indefinit:2,independ:[9,23],index:6,indic:15,individu:0,inevit:23,info:[4,11,12,23],info_from_terminal_condit:4,inform:[1,6,9,11,12,15],inherit:12,init_dist_rang:11,init_lat_noise_rang:11,init_with_bg_mesh:9,init_yaw_noise_rang:11,initi:[1,2,4,6,7,9,11,14],initial_dynamics_fn:[1,6,7],inproceed:[0,18],input:[7,9,12,14,23],input_pitch_fov:9,input_yaw_fov:9,insid:9,instal:16,instantan:7,instanti:9,instead:[7,12,15],institut:0,instruct:19,int_a:6,int_b:6,int_c:6,integr:19,intens:9,interact:[0,4,11,18,23],interest:9,interfac:[2,4,11,18,23],intern:[0,9,18],interp1d:15,interpol:[6,9,12,15],intrins:9,introduct:18,invalid:9,invers:[9,12],involv:[7,9,11],issu:[0,18],its:14,itself:[1,4,9],jacob:[0,18],johnson:0,join:15,journal:[0,18],julia:[0,18],karaman:[0,18],keep:14,kei:[6,11,14],kinemat:7,kitti:19,kwarg:[4,9,11],label:[1,2,6],labelsearch:6,lambda_flow:9,lane:[1,4,11,14],lane_follow:[4,11],lanefollow:11,larg:23,larger:6,last:2,later:[7,9,12],latlongyaw2vec:12,latlongyaw:12,latlongyaw_ref:12,lead:[1,4],learn:[0,3,7,11,18,23],led:0,left:9,length:[7,9,14],letter:[0,18],level:[2,7,9,11,12,15,23],leverag:1,libglib2:17,librari:[9,11],lidar:[6,7,14,15,23],lidar_3d:[9,14],lidar_config:14,lidar_nam:6,lidar_util:9,lidarsynthesi:9,like:[4,9,11,15,23],linalg:14,list:[6,7,9,11,12,23],liu:[0,18],live:[6,7,8,23],load:9,load_model:9,local:[1,4,9,15],locat:23,log:[11,12,23],logger:12,logging_level:11,logrecord:12,longitudin:12,lookahead:14,lookahead_dist:14,lookahead_road:[7,14],loop:[1,23],low:[7,15],lower:7,mag_minmax:12,magnitud:12,mai:[4,15],main:[6,9],main_camera:6,main_event_camera:6,main_lidar:6,maintain:9,major:[1,4,14,15],make:[2,7,12,14],maneuv:6,mani:[0,23],manual:23,map:[4,6,7,9,15],mask:[6,9],master:6,master_sensor:[6,7,15],mat2vec:12,mat:12,matplotlib:17,matric:9,matrix:[9,12],max_resample_tri:11,max_sf:9,max_step:7,maxim:[6,7,11],maximal_rot:4,maximum:[2,12,15],mean:23,measur:[6,7,9,11,16],mediocr:23,member:[11,23],memori:23,mention:4,merg:12,merge_dict:12,mesh:[9,11],mesh_dir:11,meshlib:9,messag:12,meta:9,method:9,metric:23,mind:23,minim:15,minmum:12,misc:12,modal:[15,23],mode:6,model:[1,7,9,15,23],modifi:19,modul:[7,9,10,11,12],modular:23,more:[1,2,4,6,7,9,10,11,12,14,15,17,19,20,21,22,23],moseyko:[0,18],most:2,motion:14,mount:9,move:[4,14,23],msg:12,much:[4,17],multi:[4,18,23],multi_agent_bas:[11,14],multi_sensor:6,multiagentbas:11,multimod:[0,18],multipl:[6,9,11,23],multisensor:[6,15],must:[9,19,23],n_agent:[9,11],n_tmesh:9,name:[1,2,4,6,9,14,15,17],namn:15,nation:0,ndarrai:[6,7,9,11,12],necessari:10,necessarili:6,need:[1,4,9,15,23],negat:12,negative_threshold:[9,14],network:[2,9],neural:2,next:[1,2,7],node:9,noisi:23,nomin:[1,9],non:23,none:[6,7,9,11,12],norm:14,normal:[7,12],note:[2,4,6,7,9,11,12,14,15],notimplementederror:[6,7],novel:[9,23],now:14,nsf:0,num_of_fram:6,num_point:9,number:[6,7,9,15],numpi:[6,7,9,12,14],nuscen:19,nvidia:0,obj:9,object:[4,6,7,8,9,11,12,14,18,23],object_nod:9,observ:[1,2,4,7,11,14,23],observation_spac:4,obtain:15,occlud:9,odometri:16,off:4,offlin:23,often:2,one:[6,7,14,23],onli:[1,4,7,9,11,14],open:[0,18,19,23],openai:[4,11,23],opencv:17,opengl:12,oper:[12,20,21,22,23],operand:12,oppos:[7,9],optic:[9,12],optical_flow_root:[9,14],option:[6,7,9,11,12,17],order:[9,12,15,19],organ:[0,18],orient:[9,23],origin:[0,1,4,9],original_s:[9,14],other:[4,6,9,11,14,15,20,21,22,23],other_info:4,otherwis:[6,7,12],our:[0,15,18],out:[6,7,9,11,12,15,23],out_of_lan:4,outlin:18,output:[4,9,12],overal:[1,6,15],overlap_threshold:11,overview:23,own:19,pack:4,packag:18,pair:[1,2],paper:0,param:[7,9],param_fil:6,paramet:[6,7,9,11,12,14],parameter:9,parent:[7,8,9],parti:9,passiv:[1,2,4,23],path:[6,9,11,14,15,23],pattern:9,pcd:9,pdf:7,per:6,percept:[18,23],perfect:7,perform:[4,6,9,19],pertain:9,phillip:[0,18],photor:23,photorealist:23,physic:[9,23],pi2pi:12,pickle5:17,piec:[15,23],pip:[17,18],pitch:9,pitch_fov:9,pitch_r:[9,14],pixel:9,place:[9,23],plane:9,platform:23,pleas:[1,2,4,6,7,11,18],point:[6,7,9,15],pointcloud:[9,23],pointer:[2,6,7,9,15],polici:[0,2,3,4,18,23],polygon:12,popular:19,pose:[1,6,9,12],posit:[7,9,14],positive_threshold:[9,14],potenti:[7,9,14],power:1,pre:[6,9,23],precollect:15,predefin:6,preparatori:12,preprocess:[1,2],present:9,pretrain:9,prev_fram:9,prev_timestamp:9,previou:[4,9],primari:10,prior:23,prioriti:[0,12,18],privileg:[1,4],privileged_control_config:1,probabl:6,process:6,produc:[1,2,14],progress:23,project:[0,7,9,10],properti:[6,7,8,9,11],provid:[1,7,9,15,17,18,19,23],publish:[0,18,20,21,22],pull:[0,18],pure:14,pure_pursuit_control:14,purpos:6,pursuit:14,put:9,pypi:[17,18],pyrend:[9,17],python:[12,17,18,23],pytorch:12,quat2eul:12,quat:[9,12],quaternion:[9,12],rad:9,radian:[9,12],radiu:9,rai:9,rais:[6,7,9],random:[6,9,11],randomli:[2,6,9,11],rang:[6,12],rate:15,ratio:7,raw:9,reach:11,read:[6,9,15],real:[6,9,18,23],realiti:[3,23],rear:7,reason:14,receiv:23,recogn:0,recoloring_factor:9,reconstruct:23,record:12,red:12,redund:2,ref_ag:6,ref_dynam:12,refer:[6,9,12,15],region:9,regular:[11,12],reinforc:[3,11,23],reinforcement_learn:4,reject:[1,2],rejectionsampl:[1,2],rel:[7,9,12],relative_st:[4,7],releas:23,relev:[0,9],rememb:14,remov:23,render:[4,6,7,9,11,14,23],replac:14,repositori:[0,18],repres:[19,23],represent:[9,12,15],reproject:9,reproject_pixel:9,request:[0,18],requir:[2,4,9,15,18],research:[0,18,23],reset:[1,2,4,6,7,9,11,14,23],reset_mod:6,resiz:[6,9,12],resolut:9,respect:[4,9],result:0,retriev:[6,9,15],reward:[4,11,23],reward_fn:[4,11],rgb:[2,6,12,14,15,23],rig:[9,14],rig_path:[9,14],right:[9,12],rigid:9,road:[4,6,7,14],road_buffer_s:[6,7],road_half_width:4,road_in_ego:14,road_typ:6,road_width:[4,6,14],roation:11,robot:[0,18],robust:[0,1,18],rohan:[0,18],roi:9,roll:23,root:9,root_dir:9,rot2mat:12,rot:[9,12],rotat:[4,9,12],roughli:[4,11,23],row:9,run:[1,2,7,9,18],same:[6,7,9],sampl:[1,2,6,9,17],sample_new_loc:6,sample_new_trace_index:6,sampler:[1,2],sampling_prob:[1,2],satisfi:4,scale:[6,9],scenario:[1,4],scene:[6,9,11,14],scene_object:9,scheme:1,schwart:[0,18],schwartig:7,scienc:0,scipi:15,script:[19,20,21,22],se3_inv:12,second:[1,6,11,12],section:[4,19,23],see:[14,23],seed:[6,11],seen:[1,14],segment:[6,7,23],segment_index:[6,7],self:[1,2,4,15],semant:23,sens:[0,18,23],sensor:[1,2,4,6,7,8,11,14,16,18],sensor_data:14,sensor_nam:[1,2,6],sensor_typ:6,sensori:[6,7,11,16],sensors_config:11,separ:6,seq:12,sequenc:12,seri:[2,19],sertac:[0,18],serv:[7,19],set:[1,2,6,7,9,11,12,14,15,23],set_main_sensor:6,set_se:[6,11],setlevel:12,setup:14,sever:[6,14,15,19],shape:[9,12,17],share:15,shift:12,should:[4,6,14,15,23],show:[2,4,14],shown:[1,15],shuffl:2,side:23,sigma_negative_threshold:[9,14],sigma_positive_threshold:[9,14],signatur:11,signific:2,sim:[18,23],similar:1,simpl:[4,7,11,16],simplest:14,simpli:[4,7,14],simul:[0,1,2,6,7,9,12,15,16,18,19],sinc:[2,4,6,14],singl:[9,23],size:[2,6,9,12,14],slippag:15,slomo:[9,14],small:17,smaller:6,snippet:2,snippet_s:[1,2],solv:7,solver:7,some:[1,4,9,15],somewher:7,song:[0,18],soon:[5,13,19],sourc:[6,7,8,9,11,12,19],space:9,spars:9,spatial:12,spawn:[6,7,14,23],spawn_ag:[1,2,6,7,14],spawn_camera:[1,2,7,14],spawn_event_camera:[7,14],spawn_lidar:[7,14],spec:6,specif:[9,15,19,23],specifi:[1,6,9,11,12,15],speed:[1,6,7,14,15],speed_bound:7,split:6,stabl:[14,23],start:[2,14,18],state:[1,4,6,7,11,12,15,16],state_space_control:14,statedynam:[7,12],statu:6,steer:[2,7,14,15],steering2curvatur:7,steering_bound:[7,14],steering_ratio:[7,14],steering_veloc:7,step:[1,2,4,7,11,12,15,23],step_dataset:[2,7],step_dynam:[1,2,4,7,14],step_sensor:[4,7,14],still:[4,14],stochast:2,store:[9,23],str:[6,9,11,12],straightforward:[2,6],stream:[2,9,15,23],stress:23,string:12,style:12,subsampling_ratio:9,successfulli:18,sudo:17,suffici:2,suit:18,superslomo:[9,14],supervis:[1,2],support:[0,14,23],sure:[2,7,12],surround:[9,23],surviv:4,sweep:[9,15],sync:6,synchron:6,synthes:[7,9,11,15,16,23],synthesi:[1,2,4,7,9,15],system:[12,17],t_in:12,tag:6,take:[6,7,9,14,23],target:[1,2,14],task:[4,10,14,18],task_config:11,tensor:9,termin:[2,4,11],terminal_condit:[4,11],test:[1,3,17,19,23],testb:23,text:12,tgt_idx:14,than:6,thei:[9,23],them:[6,9,15],theta:4,thi:[1,4,6,7,8,9,11,12,15,19],thing:15,third:9,three:0,through:[2,6,7,23],throughout:15,thu:[1,4,9,15],time:[1,6,7,11,12],time_of_dai:6,timestamp:[6,7,9,12,14,15],timestampswith:6,timestmap:14,tire:[7,15],tire_angl:7,tireangle2curvatur:[7,14],titl:[0,18],tmesh:9,too:4,top:[6,9],topic:6,topicnam:[6,9,15],torch:[9,17],torchvis:17,toward:1,toyota:0,trace:[4,6,7,9,11,14,15],trace_config:[1,2,6,11,14],trace_dir:6,trace_index:7,trace_path:[1,2,6,11,14],train:[1,2,4,19,23],trajectori:[1,4,7,14,15],tran:[9,12],transfer:23,transform:[7,9,12,14,18,23],transform_rgb:[1,2],translat:[9,12],tri:[0,1],trimesh:9,truth:1,tsun:[0,18],tupl:[6,9,11,12],twin:23,two:[1,4,6,12,14,15],type:[6,7,9,11,12,15,23],typic:23,underlin:12,unifi:6,uniform:[1,2],union:[6,9,12],uniqu:7,univers:15,unrecogn:[6,9],updat:[4,6,7,9,11,17],update_object_nod:9,update_rgb_frame_onli:9,update_road:7,update_scene_object:9,update_with_perfect_control:7,upon:[2,6],upper:7,usag:[6,7,9,12,16,18,23],use:[2,4,6,12,15],use_gpu:9,use_light:9,use_pytorch:12,use_synthes:9,used:[1,6,7,9,12,15,20,21,22,23],useful:[0,2,9],user:[6,23],uses:[9,12],usestim:12,using:[1,2,9,10,12,15,17,18],usual:2,util:[10,14],val:[1,2],valid:[9,12,14],valu:[6,9,11,14,23],valueerror:9,vari:23,variant:2,variou:[11,12],vec2latlongyaw:12,vec2mat:12,vec:12,vec_a:12,vec_b:12,vector:[9,12],vehicl:[0,4,7,11,12,14,15,18,23],veloc:7,veri:[4,9],verif:23,version:[1,23],vertic:6,via:[0,18],video:[6,9],video_label:6,view:[6,9,10],view_synthesi:9,viewpoint:[9,23],viewsynthesi:9,virtual:[9,11,16,18,19,23],vis_full_fram:6,vis_img:14,visibl:6,vista:[1,2,4,6,7,8,9,10,11,12,14,15,17,19,20,21,22],visual:[6,14],wang2022learn:[0,18],wang:[0,18],warn:[11,12],warp:12,waymo:19,weather:6,what:4,wheel:7,wheel_bas:[7,14],when:[4,6,7,9,12],where:[4,6,9,11,12,14],whether:[4,6,7,9,11,12],which:[1,2,4,6,7,11,12,14,15,23],width:[6,7,9,14],wiew:9,wilko:[0,18],wise:4,within:[1,6,12,14,23],without:[2,7,14],won:2,world:[1,2,4,6,7,8,11,14,18,19],would:9,wrap:23,written:[9,23],www:7,xml:[9,14],xyz:[9,12],xzy:12,yaml:17,yaw:[7,9,12,15],yaw_fov:[9,14],yaw_r:[9,14],yaw_rat:15,year:[0,18],yellow:12,yet:9,yield:[1,2,12],you:[0,9,14,18],your:[0,18,19],zero:7,zfar:9,zhijian:[0,18],znear:9},titles:["Acknowledgement","Guided Policy Learning","Imitation Learning","Advanced Usage","Reinforcement Learning","Testing With Augmented Reality","Core","Agents","Entities","Sensors","API Documentation","Tasks","Utils","FAQ","Basic Usage","Data Format","Getting Started","Installation","Welcome to VISTA\u2019s documentation!","Interface to Public Datasets","KITTI","NuScene","Waymo","Introduction"],titleterms:{"public":19,Adding:14,The:23,With:[5,14],acknowledg:0,advanc:3,agent:[0,7,23],api:10,augment:5,basic:14,camera:9,car:14,cite:[0,18],come:[20,21,22],contribut:[0,18],control:14,core:6,custom:19,data:[15,19],dataset:19,document:[10,18],entiti:8,environ:23,event:9,extern:19,faq:13,format:15,get:16,goal:23,guid:1,guidelin:[0,18],imit:2,instal:[17,18],interfac:19,introduct:23,kitti:20,learn:[1,2,4],lidar:9,measur:14,multi:0,nuscen:21,odometri:15,polici:1,real:0,realiti:5,reinforc:4,rgb:9,sensor:[0,9,15,23],sensori:14,sim:0,simpl:14,simul:[14,23],soon:[20,21,22],start:16,state:14,synthes:14,task:[11,23],test:5,trace:23,type:8,usag:[3,14],util:12,virtual:14,vista:[0,18,23],waymo:22,welcom:18,what:23,world:23}})