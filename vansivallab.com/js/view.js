//view.js
function View(globalView, hash, $view, $navButton, navBarTop) {
	this.globalView = globalView;
	this.hash = hash;
	this.$view = $view;
	this.$navButton = $navButton;
	this.navBarTop = navBarTop; //css position in string
}

View.prototype.show = function() {
	//console.log(this.globalView.currView.hash+" "+this.hash);
	if(this.globalView.currView !== this) {
		//console.log("actually navigating");
		
		if(util.exists(this.globalView.currView)) {this.globalView.currView.hide();}
		if(util.exists(this.$view)) {this.$view.css('display', 'block');}
		window.location.href = window.location.pathname+this.hash;
		
		if(this.globalView.currView.navBarTop !== this.navBarTop) {
			this.globalView.$navBar.css('top', this.navBarTop+'');
		}
		
		if(util.exists(this.$navButton)) {
			this.$navButton.addClass('currViewButton');	
		}
		this.globalView.currView = this;
	}
};

View.prototype.hide = function() {
	if(util.exists(this.$view)) {
		this.$view.css('display', 'none');
	}
	if(util.exists(this.$navButton)) {
		this.$navButton.removeClass('currViewButton');		
	}
};

