/*project.js*/

function Project(startDate, endDate, title, description, projectId, displayWidth) {
  this.startDate = startDate;
  this.endDate = endDate;
  
  if(endDate.getTime() < startDate.getTime()) {
    throw new InvalidParameterException("endDate cannot be before startDate");
  }
  
  this.title = title;
  this.description = description;
  
  this.projectId = projectId;
  this.displayWidth = displayWidth;
}

Project.prototype.constructTimelineHtml = function() {
  return $('<div>', {class: "project", id: "pt" + this.projectId, text: this.title}).css("width", this.displayWidth + "%");
}