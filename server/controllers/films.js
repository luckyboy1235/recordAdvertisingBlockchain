	var model = [
		{
			id : "1",
			name : "127 gio sinh tu",
			description : "bad",
			url : "/films/1.mp4"
		},
		{
			id : "2",
			name : "bao mau sieu quay",
			description : "badsfad",
			url : "/films/2.mp4"
		},
		{
			id : "3",
			name : "4 nam 2 chang 1 tinh yeu",
			description : "badsfad",
			url : "ththt.com"
		},
		{
			id : "4",
			name : "Lat mat 1",
			description : "badsfad",
			url : "kiki.com"
		},
		{
			id : "5",
			name : "Lat mat 2",
			description : "badsfad",
			url : "awswd.com"
		}
	]
exports.getFilm = function(req,res){
	var flag = 0;
	for(var i = 0; i < model.length; i++)
	{
		if(model[i].id == req.params.id)
		{
			res.json(model[i]);
			flag = 1;
			break;
		}
	}
	if(flag == 0)
	{
		res.send('id khong phu hop')
	}
}
exports.getFilmInfo = function(req,res){
	res.json(model);
}