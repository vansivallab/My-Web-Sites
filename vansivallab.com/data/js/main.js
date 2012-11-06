//main.js
$(function() {
var globalView = {
	$body: $('body'),
	$navBar: $('#headerBack'),
	homeView: undefined,
	projectView: undefined,
	resumeView: undefined,
	aboutView: undefined,
	currView: this.homeView,
	views: []
};

function initViews() {
	globalView.currView = globalView.homeView = new View(globalView, '#', undefined, '25%');
	globalView.projectsView = new View(globalView, '#projects', $('#projectsView'), '0');
	globalView.resumeView = new View(globalView, '#resume', $('#resumeView'), '0');
	globalView.aboutView = new View(globalView, '#about', $('#aboutView'), '0');
	globalView.views = [globalView.homeView, globalView.projectsView, globalView.resumeView, globalView.aboutView];
};
initViews();

function navigateTo(hash) {
	if(hash ===  '') {
		return globalView.homeView.show();
	}
	
	for(var v = 0; v < globalView.views.length; v++) {
		var view = globalView.views[v];
		if(view.hash === hash) {
			return view.show();
		}
	}
}

if (window.location.hash === '') {
	//window.location.hash = globalView.homeView.hash;
} 
else {
	navigateTo(window.location.hash);
}

window.onhashchange = function() {
	// actually perform the navigation
	navigateTo(window.location.hash);
};

});
