//view.js
function View(globalView, thisNavJSelect, viewJSelect, navBarTop, navBarPosProp) {
	this.globalView = globalView;
	this.navJSelect = thisNavJSelect;
	this.viewJSelect = viewJSelect;
	this.navBarTop = navBarTop; //css position in string
	this.navBarPosProp = navBarPosProp; //static, absolute, etc in string
	
	this.navJSelect.click(function() {this.show();}.bind(this));
}

View.prototype.show = function() {
	if(this.globalView.currView) {this.globalView.currView.hide();}
	if(this.viewJSelect) {
		console.log(this.viewJSelect);
		this.viewJSelect.css('display', 'block');
	}
	this.globalView.navJSelect.css('top', this.navBarTop+'');
	//this.globalView.navJSelect.css('position', this.navBarPosProp+'');
	this.globalView.currView = this;
};

View.prototype.hide = function() {
	if(this.viewJSelect) {
		this.viewJSelect.css('display', 'none');
	}
};