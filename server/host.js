const host = {
    server:              { 
      host:         "",
      port:         "",
      userName:     "",
      password:     "",
    },
    
    connection:         require ('ssh2'),

    standardPrompt:     ">$%#",
    passwordPrompt:     ":",
    passphrasePrompt:   ":",
    passPromptText:     "Password",
     
    
    enter:              "\n", //Linux = "\n" | "\x0a\, Mac = "\r" | "x0d"
    
    streamEncoding:     "utf8",
  
    asciiFilter:        "[^\r\n\x20-\x7e]", 
    disableColorFilter:  true, 
    textColorFilter:    "(\[{1}[0-9;]+m{1})", 

    commands:           [],
    
 
    verbose:             false,  
    debug:               false, 
 
    idleTimeOut:         1000,  
    
    dataIdleTimeOut:     500,  
 
    connectedMessage:    "Connected",
    readyMessage:        "Ready",
    closedMessage:       "Closed",
    
    onKeyboardInteractive: function(name, instructions, instructionsLang, prompts, finish){
     
    },
    
    onData: function( data ) {
      
    },
    
    onPipe: function( source ) {
     
    },
   
    onUnpipe: function( source ) {
      
    },
    
    onCommandProcessing: function( command, response, sshObj, stream ) {
     
    },
     
    onCommandComplete:   function( command, response, sshObj ) {
        
    },
   
    onCommandTimeout:    function( command, response, stream, connection ) {
     
    },

    onEnd:               function( sessionText, sshObj ) {
     
    },
      
    onError:            function( err, type, close = false, callback ) {
     
    },
    
    callback:           function( sessionText ){
     
    }  
  };

  module.exports = host