exports.randomVideo = function(req,res){
	var	Model = [
			{
				url : '/video/advertisements/10.mp4'
			},
			{
				url : '/video/advertisements/11.mp4'
			},
			{
				url : '/video/advertisements/12.mp4'
			},
			{
				url : '/video/advertisements/13.mp4'
			},
			{
				url : '/video/advertisements/14.mp4'
			},
			{
				url : '/video/advertisements/15.mp4'
			},
			{
				url : '/video/advertisements/16.mp4'
			},
			{
				url : '/video/advertisements/17.mp4'
			},
			{
				url : '/video/advertisements/18.mp4'
			},
			{
				url : '/video/advertisements/19.mp4'
			},
			{
				url : '/video/advertisements/20.mp4'
			},
		]
	var result = Math.floor(Math.random() * Model.length)
	res.json(Model[result])
}