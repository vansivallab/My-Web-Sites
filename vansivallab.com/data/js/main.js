//main.js
$(function() {
var globalView = {
	bodyJSelect: $('body'),
	navJSelect: $('#headerBack'),
	homeNavJSelect: $('#homeNav'),
	projectsNavJSelect: $('#projectsNav'),
	projectsViewJSelect: $('#projectsView'),
	resumeNavJSelect: $('#resumeNav'),
	resumeViewJSelect: $('#resumeView'),
	aboutNavJSelect: $('#aboutNav'),
	aboutViewJSelect: $('#aboutView'),
	homeView: undefined,
	projectView: undefined,
	resumeView: undefined,
	aboutView: undefined,
	currView: this.homeView
};

function initViews() {
	globalView.currView = globalView.homeView = new View(globalView, globalView.homeNavJSelect, undefined, '25%');
	globalView.projectsView = new View(globalView, globalView.projectsNavJSelect, globalView.projectsViewJSelect, '0');
	globalView.resumeView = new View(globalView, globalView.resumeNavJSelect, globalView.resumeViewJSelect, '0');
	globalView.aboutView = new View(globalView, globalView.aboutNavJSelect, globalView.aboutViewJSelect, '0');
};
initViews();

//events

globalView.projectsNavJSelect.click(function() {
	
});

globalView.resumeNavJSelect.click(function() {
	toResumeView();
});

globalView.aboutNavJSelect.click(function() {
	toAboutView();
});

function toHomeView() {
	this.globalView.currView.hide();
	this.globalView.navJSelect.css('top', '25%');
	this.globalView.currView = this;
}

function toProjectsView() {

}

function toResumeView() {

}

function toAboutView() {

}
});
