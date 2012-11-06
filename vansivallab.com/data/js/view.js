//view.js
function View(globalView, hash, $view, navBarTop) {
	this.globalView = globalView;
	this.hash = hash;
	this.$view = $view;
	this.navBarTop = navBarTop; //css position in string
}

View.prototype.show = function() {
	if(this.globalView.currView) {this.globalView.currView.hide();}
	if(this.$view) {
		//console.log(this.view$);
		this.$view.css('display', 'block');
	}
	this.globalView.$navBar.css('top', this.navBarTop+'');
	this.globalView.currView = this;
};

View.prototype.hide = function() {
	if(this.$view) {
		this.$view.css('display', 'none');
	}
};