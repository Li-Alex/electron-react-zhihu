const path = require('path')
const express = require('express')
const request = require('request')
const fs = require('fs')
const {setImgUrl,changeUrl} = require('./appFunc.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(cors())

var imgUrl = 'http://news-at.zhihu.com/api/4/start-image/1080*1776',
	newsUrl = 'http://news-at.zhihu.com/api/4/news/latest',
	detailUrl = 'http://news-at.zhihu.com/api/4/news/',
	extraDetail = 'http://news-at.zhihu.com/api/4/story-extra/',
	//shortCommentUrl = detailUrl + id + short-comments //长评论则为long-comments
	menuUrl = 'http://news-at.zhihu.com/api/4/themes',
	themeDetail = 'http://news-at.zhihu.com/api/4/theme/'

//获取首屏图像
app.get('/getImage',(req,res) => {
	request.get(imgUrl,(err,responce) => {
		
		var fName = JSON.parse(responce.body).text
		fName = fName.replace(/\s/g,'_')
		fName = fName.replace(/\"/g,'')
		fs.exists('./static/images/' + fName + '.png', exists => {
			if(!exists){ //判断图片是否已经保存过
				request(JSON.parse(responce.body).img)
					.pipe(fs.createWriteStream('./static/images/' + fName + '.png'))
					.on('close',_ => {
						console.log(fName + '.png下载完成')
						res.send(fName)
					})
			} else{
				console.log('file exists')
				res.end(JSON.stringify({'fileName': fName}))
			}

		})
		
	})
})

//获取首页最新文章列表
app.get('/getNews',(req,res) => {
	request.get(newsUrl,(err,responce) => {
		//date: 时间，stories:[{title,id,images:{}}]
		let data = JSON.parse(responce.body)
		for(let i = 0, len = data.stories.length; i < len; i++){
			data.stories[i].images[0] = changeUrl(data.stories[i].images[0])
		}
		res.send(data)
	})
})

//获取文章详情
app.get('/getNewsDetail',(req,res) => {
	let data = {}
	let extra = {}
	let detailId = req.query.id 

	let getDetailData = function(){
		return new Promise((resolve,reject) => {
			request.get(detailUrl + detailId, (err,responce) => {
				if(!err){
					let result = JSON.parse(responce.body)
					data.body = setImgUrl(result.body)
					extra.title = result.title
					extra.image = result.image ? changeUrl(result.image) : ''
					resolve()
				}
			})
		})
	}
	let getCommentData = function(){
		return new Promise((resolve,reject) => {
			request.get(detailUrl + detailId + '/short-comments',(err,responce) => {
				if(!err){
					let result = JSON.parse(responce.body)
					for(let i = 0,len = result.comments.length; i < len; i++){
						result.comments[i].avatar = changeUrl(result.comments[i].avatar)
					}
					extra.comments = result.comments
					resolve()
				}
			})
		})
	}
	let getExtraData = function(){
		return new Promise((resolve,reject) => {
			request.get(extraDetail + detailId,(err,responce) => {
				if(!err){
					let result = JSON.parse(responce.body)
					extra.popularity = result.popularity,
					extra.short_comments = result.short_comments,
					data.extra = extra
					resolve(data)
				}
			})
		})
	}
	getDetailData().then(_ => {
		return getCommentData()
	}).then(_ => {
		return getExtraData()
	}).then(data => {
		res.send(data)
	})
})
 
//获取主题列表
app.get('/getMenu', (req,res) => {
	request.get(menuUrl, (err,responce) => {
		let data = JSON.parse(responce.body)
		for(let i = 0,len = data.others.length; i < len; i++){
			data.others[i].thumbnail = changeUrl(data.others[i].thumbnail)
		}
		res.send(data)
	})
})
//获取主题文章列表
app.get('/getThemeDetail/:id',(req,res) => {
	let themeId = req.params.id
	request.get(themeDetail + themeId,(err,responce) => {
		let data = JSON.parse(responce.body)
		data.background = changeUrl(data.background)
		data.image = changeUrl(data.image)
		for(let i = 0,len = data.editors.length;i < len;i++){
			data.editors[i].avatar = changeUrl(data.editors[i].avatar)
		}
		for(let i = 0,len = data.stories.length;i < len;i++){
			if(data.stories[i].images){
				data.stories[i].images[0] = changeUrl(data.stories[i].images[0])
			}
		}
		res.send(data)
	})
})

app.listen(3333,_ => {
	console.log("node is listening at port 3333")
})
// module.exports = function(){
// 	app.listen(3333,_ => {
// 		console.log("node is listening at port 3333")
// 	})
// }

