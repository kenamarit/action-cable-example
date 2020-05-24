App.messages = App.cable.subscriptions.create('MessagesChannel', {  
  received: function(data) {
  	msgList.push("@" + data.user + ": " + data.message);
  	timeList.push(0.0);
  	xPos.push(Math.floor(Math.random() * (window.innerWidth-(window.innerWidth/2)) + window.innerWidth/4));
  	yPos.push(Math.floor(Math.random() * (window.innerHeight-(window.innerHeight/2)) + window.innerHeight/4));

  	var num = Math.floor(Math.random() * 2);
  	if(num == 0) {
  		dir.push(-1);	
  	} else {
  		dir.push(1);	
  	}
  	
    return $('#messages').append(this.renderMessage(data));
  },
  renderMessage: function(data) {
    return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
  }
});