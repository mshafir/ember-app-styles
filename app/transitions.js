export default function(){
	this.transition(
	  this.hasClass('nav-forward'),
	  this.toValue(true),
	  this.use('toLeft'),
	  this.reverse('toLeft')
	);

	this.transition(
	  this.hasClass('nav-backward'),
	  this.toValue(true),
	  this.use('toRight'),
	  this.reverse('toRight')
	);
}
