//view.js
function View(globalView, hash, $view, navBarTop) {
	this.globalView = globalView;
	this.hash = hash;
	this.$view = $view;
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
		this.globalView.currView = this;
	}
};

View.prototype.hide = function() {
	if(this.$view) {
		this.$view.css('display', 'none');
	}
};