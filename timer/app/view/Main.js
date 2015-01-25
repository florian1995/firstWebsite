Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.picker.Picker'
    ],
    
    
    
    config: {
    	
        items: [
            {
            	title: 'Timer',
                styleHtmlContent: true,
                scrollable: true,

                initialize: function () {
                	var t;
                    var count;
                    var x;
                    var started = false;
                    
                    var bottomToolbar = {
                    	
                    		xtype: 'toolbar',
                    		docked: 'bottom',
                    		
                    		layout: {
                    		    pack: 'center',
                    		    type: 'hbox'
                    		},
                    		
	                    	items: [{
	                    		
	                    		xtype: 'button',
	                    		itemId: 'startButton',
	                			title: 'Start',
	                   			ui: 'action',
	                   			text: 'Start',
	                   			disabled: true,
	                   			width: '22%',
	                   			handler: function() {
	                   				cdStart();
	                   			}	
	                    	}, {
	                    		xtype: 'button',
	                    		title: 'Pause',
	                   			ui: 'action',
	                   			text: 'Pause',
	                   			width: '22%',
	                   			handler: function() {
	                   				cdPause();
	                   			}
	                   		}, {
	                   			xtype: 'button',
	                   			title: 'Reset',
	                   			ui: 'action',
	                   			text: 'Reset',
	                   			width: '22%',
	                   			handler: function() {
	                   				cdReset();
	                   				
	                   			}
	                   		}]	
                    };
                    
                	var topToolbar = {
                    		
                    		xtype: 'toolbar',
                            docked: 'top',
                            items: [{
                            	centered: true,
                            	width: '85%',
                                text: 'set Timer',
                                handler: function () {
                                    picker.show();
                                    
                                } // handler
                            }] // items
                    };
                    
                   var countdown = function (time,id){
                    	 
                	   	  started = true;
                    	  t = time;
                    	 
                    	  strZeit = parseTime(t);
                    	 
                    	  if(time === 180) {
                    		  
                    		  audio3m.play();
                    		  
                    	  }
                    	  
                    	  if(time === 60) {
                    		  
                    		  audio1m.play();
                    		  
                    	  }
                    	  
                    	  if(time > 0)
                    	  {
                    
                    		  x = setTimeout(function(){countdown(--time, id)}, 1000);
                    	    
                    	  } else {
                    	    
                    	    strZeit = "Set me Baby one<br> more Time!";
                    	    
                    	    audio.play();
                    	    stopButton.show();
                    	   
                    	  }
                    	 
                    	  dataView.getStore().getAt(0).set('time', strZeit);
                    	};
                    	
                    	var cdStart = function() {
                    		
                    		audio.load();
                    		audio3m.load();
                    		audio1m.load();
                    		countdown(t,'ct1');
                    		
                    		var buttonStart = Ext.ComponentQuery.query('#startButton')[0];
                            buttonStart.disable();
                    		
                    	};
                    	
                    	var cdPause = function() {
                    		
                    		clearTimeout(x);
                    		started = false;
                    		
                    		var buttonStart = Ext.ComponentQuery.query('#startButton')[0];
                            buttonStart.enable();
                    	};
                    	
                    	var cdReset = function() {
                    		
                    		cdPause();
                    		t = count;
                    		started = false;
                    		dataView.getStore().getAt(0).set('time', parseTime(t));
                    	};
                    	
                    	var parseTime = function(t) {
                    		
                    	  m = Math.floor(t/60) %60;
                       	 
                      	  // Sekunden berechnen
                      	  s = t %60;
                      	 
                      	  //Zeiten formatieren
                      	  
                      	  m = (m < 10) ? "0"+m : m;
                      	  s = (s < 10) ? "0"+s : s;
                      	 
                      	  // Ausgabestring generieren
                      	  strZeit = m + ":" + s;
                      	  return strZeit;
                    	};
                    	
                    var audio = document.getElementById('alert');
                    var audio3m = document.getElementById('3minutes');
                    var audio1m = document.getElementById('1minute');
                    
                    var stopButton = Ext.create('Ext.Button', {
                    		text: 'Stoppen',
                    		ui: 'decline',
                    		handler: function() {
                    			audio.pause();
                    			audio.currentTime = 0;
                    			stopButton.hide();
                    		}
                    });
                    	
                    var dataView = Ext.create('Ext.DataView', {
                        fullscreen: true,
                        store: {
                            fields: ['time'],
                            data: [
                                   {time: ''}
                               ]
                        },

                        itemTpl: '<div><font size="20px"><center><br><br>{time}</center></font></div>'
                    });
                   
                    var picker = Ext.create('Ext.picker.Picker', {
                        doneButton: 'Set Timer',
                    	slots: [{
                            name: 'time',
                            data: [{
                            	text: '1',
                            	value: 60
                            }, {
                                text: '2',
                                value: 120
                            }, {
                            	text: '3',
                            	value: 180
                            }, {
                                text: '4',
                                value: 240
                            }, {
                            	text: '5',
                            	value: 300
                            }, {
                                text: '6',
                                value: 360
                            }, {
                            	text: '7',
                            	value: 420
                            }, {
                                text: '8',
                                value: 480
                            }, {
                            	text: '9',
                            	value: 540
                            }, {
                                text: '10',
                                value: 600
                            }, {
                            	text: '11',
                            	value: 660
                            }, {
                                text: '12',
                                value: 720
                            }, {
                            	text: '13',
                            	value: 780
                            }, {
                                text: '14',
                                value: 840
                            }, {
                            	text: '15',
                            	value: 900
                            }, {
                                text: '16',
                                value: 960
                            }, {
                            	text: '17',
                            	value: 1020
                            }, {
                                text: '18',
                                value: 1080
                            }, {
                            	text: '19',
                            	value: 1140
                            }, {
                                text: '20',
                                value: 1200
                            }]// data
                        }], // slots
                        
                        listeners: {
                            change: function (picker, value, oldValue) {
                               
                            	var buttonStart = Ext.ComponentQuery.query('#startButton')[0];
                                buttonStart.enable();
                            	
                            	if(started) {
                            		
                            		cdPause();
                            	}
                            	
                            	count = value.time;
                        		cdReset();
                            	
                            } // change
                        } // listeners
                    }); // create()
                    picker.setValue({time: 600}, true);
                   
                   Ext.Viewport.add(stopButton);
                   Ext.Viewport.add(topToolbar);
                   Ext.Viewport.add(dataView);
                   Ext.Viewport.add(bottomToolbar);
                   
                }
            }
  
        ],
        
        
    },
    

    
});
