//main.js
$(function() {
  var pd = new ProjectData(new Date(2009, 8, 1), new Date(), "timeline");
  pd.addProject(new Date(2006, 8, 1), new Date(2010, 6, 1), "Westwood Robotics", "robots robots robots");
  pd.addProject(new Date(2011, 6, 1), new Date(2011, 8, 1), "Human Centered Research Lab", "spinnie");
  pd.addProject(new Date(2012, 6, 1), new Date(2012, 8, 1), "The Advisory Board Company", "web app");
  pd.addProject(new Date(2013, 1, 1), new Date(2013, 6, 1), "NavPal", "indoor mapping");
  pd.addProject(new Date(2013, 6, 1), new Date(2013, 8, 1), "Amazon", "web services");
});


var util = {};

util.exists = function(obj) {
	return obj !== null && obj !== undefined;
};

function InvalidParameterException(message) {
  this.name = "InvalidParameter";
  this.message = message;
}


