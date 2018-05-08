exports.randomVideo = function(req,res){
	var	Model = [
			{
				url : '/advertisements/10.mp4'
			},
			{
				url : '/advertisements/11.mp4'
			},
			{
				url : '/advertisements/12.mp4'
			},
			{
				url : '/advertisements/13.mp4'
			},
			{
				url : '/advertisements/14.mp4'
			},
			{
				url : '/advertisements/15.mp4'
			},
			{
				url : '/advertisements/16.mp4'
			},
			{
				url : '/advertisements/17.mp4'
			},
			{
				url : '/advertisements/18.mp4'
			},
			{
				url : '/advertisements/19.mp4'
			},
			{
				url : '/advertisements/20.mp4'
			},
		]
	var result = Math.floor(Math.random() * Model.length)
	res.json(Model[result])
}