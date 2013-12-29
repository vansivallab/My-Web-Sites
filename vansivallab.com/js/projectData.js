/*projectData.js*/

function ProjectData(startDate, endDate, timelineHtmlId) {
  this.startDate = startDate.getTime();
  this.endDate = endDate.getTime();
  
  if(endDate < startDate) {
    throw new InvalidParameterException("endDate cannot be before startDate");
  }
  
  this.totalTime = this.endDate - this.startDate;
  this.projects = []
  this.$timeline = $('#' + timelineHtmlId);
  
}

ProjectData.prototype.addProject = function(startDate, endDate, title, description) {

  var fittedStartDate = Math.max(startDate.getTime(), this.startDate);
  var fittedEndDate = Math.min(endDate.getTime(), this.endDate);
  var displayWidth = (fittedEndDate - fittedStartDate)*100/this.totalTime;
  
  var project = new Project(startDate, endDate, title, description, this.projects.length, displayWidth);
  
  this.projects.push(project);
  
  this.$timeline.append(project.constructTimelineHtml());
  
}

